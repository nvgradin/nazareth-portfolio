'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getPublishedProjects } from '@/data/projects';
import { PortalProvider } from './PortalContext';
import { HomeStack } from './HomeStack';
import { PortalTransition } from './PortalTransition';
import { ExploreGrid } from './ExploreGrid';
import { ViewTransition, CardSnapshot } from './ViewTransition';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './ProjectsView.module.css';

type Phase =
  | 'stack'
  | 'measuring-to-grid'
  | 'transitioning-to-grid'
  | 'grid'
  | 'measuring-to-stack'
  | 'transitioning-to-stack';

const allProjects      = getPublishedProjects();
const featuredProjects = allProjects.filter(p => p.featured);
const GRID_BG = '#F5F0E8';

function makeSnapshot(
  project: (typeof allProjects)[0],
  fromRect: DOMRect,
  toRect: DOMRect,
  fromRadius: number,
  toRadius: number,
): CardSnapshot {
  return {
    slug: project.slug,
    imageSrc: project.cover ?? project.thumbnail.src,
    fromRect,
    toRect,
    fromRadius,
    toRadius,
    title: project.title,
    tagline: project.tagline ?? '',
    tags: project.tags,
    ambientColor: project.ambientColor ?? '#000000',
  };
}

// Inline styles for a fixed full-screen layer
function layerStyle(active: boolean, scrollable = false): React.CSSProperties {
  return {
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: active ? 1 : -1,
    opacity: active ? 1 : 0,
    pointerEvents: active ? 'auto' : 'none',
    overflowY: scrollable ? 'auto' : 'hidden',
  };
}

export function ProjectsView() {
  const [phase, setPhase] = useState<Phase>('stack');
  const [exitSnapshots, setExitSnapshots] = useState<CardSnapshot[]>([]);
  const [enterSnapshots, setEnterSnapshots] = useState<CardSnapshot[]>([]);
  const [bgColor, setBgColor] = useState(featuredProjects[0]?.ambientColor ?? '#1a1a1a');
  const { setDark } = useHeaderTheme();

  const stackCardEls        = useRef<Map<string, HTMLElement | null>>(new Map());
  const gridCardEls         = useRef<Map<string, HTMLElement | null>>(new Map());
  const stackOrderRef       = useRef<number[]>(featuredProjects.map((_, i) => i));
  const visibleGridSlugsRef = useRef<string[]>(allProjects.map(p => p.slug));

  const [textEnter, setTextEnter] = useState<'grid' | 'stack' | null>(null);
  const [gridScrolled, setGridScrolled] = useState(false);
  const gridLayerRef = useRef<HTMLDivElement>(null);

  const stackActive = phase === 'stack';
  const gridActive  = phase === 'grid';

  // Derived: are we in a grid-ish state (for header theme + toggle style)
  const isGrid  = phase === 'grid' || phase === 'measuring-to-stack'
               || phase === 'transitioning-to-grid' || phase === 'transitioning-to-stack';
  const isStack = !isGrid;

  useEffect(() => {
    setDark(!isGrid);
  }, [isGrid, setDark]);

  // Reset scroll state when leaving grid
  useEffect(() => {
    if (!isGrid) setGridScrolled(false);
  }, [isGrid]);

  useEffect(() => {
    const el = gridLayerRef.current;
    if (!el) return;
    const onScroll = () => setGridScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Background color:
  // stack phases          → bgColor (ambient from front card)
  // grid phases           → GRID_BG
  // transitioning-to-stack → animate from GRID_BG to bgColor (Framer Motion handles the ease)
  // Start animating bg toward stack color as soon as the transition begins
  const currentBg = (phase === 'grid' || phase === 'measuring-to-stack') ? GRID_BG : bgColor;

  // ── measuring-to-grid ─────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'measuring-to-grid') return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const orderedProjects = stackOrderRef.current.map(i => featuredProjects[i]);
        const shots: CardSnapshot[] = orderedProjects
          .map((project) => {
            const stackEl = stackCardEls.current.get(project.slug);
            const gridEl  = gridCardEls.current.get(project.slug);
            if (!stackEl || !gridEl) return null;
            const fromRect = stackEl.getBoundingClientRect();
            const toRect   = gridEl.getBoundingClientRect();
            if (fromRect.width === 0 || toRect.width === 0 || toRect.height === 0) return null;
            return makeSnapshot(project, fromRect, toRect, 54, 36);
          })
          .filter(Boolean) as CardSnapshot[];

        if (shots.length === 0) { setPhase('grid'); return; }
        setExitSnapshots(shots);
        setEnterSnapshots(shots);
        setPhase('transitioning-to-grid');
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [phase]);

  // ── measuring-to-stack ────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'measuring-to-stack') return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const visibleSlugs = visibleGridSlugsRef.current;
        // Solo animamos los featured (los que tienen stackEl). Los no-featured quedan en grid sin transición.
        const visibleProjects = visibleSlugs
          .map(slug => featuredProjects.find(p => p.slug === slug))
          .filter(Boolean) as typeof featuredProjects;

        const exits: CardSnapshot[] = visibleProjects
          .map((project) => {
            const gridEl = gridCardEls.current.get(project.slug);
            if (!gridEl) return null;
            const fromRect = gridEl.getBoundingClientRect();
            if (fromRect.width === 0 || fromRect.height === 0) return null;
            const stackEl = stackCardEls.current.get(project.slug);
            const toRect  = stackEl ? stackEl.getBoundingClientRect() : fromRect;
            return makeSnapshot(project, fromRect, toRect, 36, 54);
          })
          .filter(Boolean) as CardSnapshot[];

        if (exits.length === 0) { setPhase('stack'); return; }

        const orderedProjects = stackOrderRef.current.map(i => featuredProjects[i]);
        const enters: CardSnapshot[] = orderedProjects
          .map((project) => {
            const stackEl = stackCardEls.current.get(project.slug);
            if (!stackEl) return null;
            const toRect = stackEl.getBoundingClientRect();
            if (toRect.width === 0 || toRect.height === 0) return null;
            return makeSnapshot(project, toRect, toRect, 8, 54);
          })
          .filter(Boolean) as CardSnapshot[];

        setExitSnapshots(exits);
        setEnterSnapshots(enters.length > 0 ? enters : exits);
        setPhase('transitioning-to-stack');
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [phase]);

  const handleToggle = (target: 'stack' | 'grid') => {
    if (target === 'grid'  && phase === 'stack') setPhase('measuring-to-grid');
    if (target === 'stack' && phase === 'grid')  setPhase('measuring-to-stack');
  };

  const onTransitionComplete = useCallback(() => {
    setPhase(prev => {
      const next = prev === 'transitioning-to-grid' ? 'grid' : 'stack';
      if (next === 'stack') visibleGridSlugsRef.current = allProjects.map(p => p.slug); // todos, no solo featured
      setTextEnter(next);
      return next;
    });
    requestAnimationFrame(() => {
      setExitSnapshots([]);
      setEnterSnapshots([]);
      setTimeout(() => setTextEnter(null), 600);
    });
  }, []);

  const isTransitioning = phase === 'transitioning-to-grid' || phase === 'transitioning-to-stack';
  const hasOverlay      = exitSnapshots.length > 0 || enterSnapshots.length > 0;

  return (
    <div style={{ position: 'relative' }}>
      {/* Fondo animado */}
      <motion.div
        style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        animate={{ backgroundColor: currentBg }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Toggle — oculto al hacer scroll en grid para no superponerse con contenido */}
      <nav
        className={[styles.toggleH, isGrid ? styles.toggleDark : ''].join(' ')}
        style={{
          opacity: gridScrolled ? 0 : 1,
          pointerEvents: gridScrolled ? 'none' : 'auto',
          transition: 'opacity 0.25s ease',
        }}
      >
        <button
          className={[styles.label, isStack ? styles.active : ''].join(' ')}
          onClick={() => handleToggle('stack')}
          disabled={isTransitioning}
        >
          Destacados
        </button>
        <span className={styles.sep} aria-hidden="true" />
        <button
          className={[styles.label, isGrid ? styles.active : ''].join(' ')}
          onClick={() => handleToggle('grid')}
          disabled={isTransitioning}
        >
          Explorar
        </button>
      </nav>

      {/* Vista Stack — always in DOM as fixed layer, visibility controlled by opacity */}
      <div style={layerStyle(stackActive)}>
        <PortalProvider>
          <HomeStack
            projects={featuredProjects}
            disabled={phase !== 'stack'}
            onCardRefs={(map) => { stackCardEls.current = map; }}
            onFrontColor={(c) => setBgColor(c)}
            onOrder={(order) => { stackOrderRef.current = order; }}
            exitingToGrid={phase === 'transitioning-to-grid'}
            enteringFromGrid={textEnter === 'stack'}
          />
          <PortalTransition />
        </PortalProvider>
      </div>

      {/* Vista Grid — always in DOM as fixed layer, visibility controlled by opacity */}
      <div ref={gridLayerRef} style={layerStyle(gridActive, true)}>
        <ExploreGrid
          projects={allProjects}
          exitingToStack={phase === 'transitioning-to-stack'}
          enteringFromStack={textEnter === 'grid'}
          cardRefsMap={gridCardEls}
          onVisibleSlugs={(slugs) => { visibleGridSlugsRef.current = slugs; }}
        />
      </div>

      {/* Overlay de cards */}
      {hasOverlay && (
        <ViewTransition
          exitCards={exitSnapshots}
          enterCards={enterSnapshots}
          direction={phase === 'transitioning-to-grid' || phase === 'grid' ? 'toGrid' : 'toStack'}
          onComplete={onTransitionComplete}
        />
      )}
    </div>
  );
}
