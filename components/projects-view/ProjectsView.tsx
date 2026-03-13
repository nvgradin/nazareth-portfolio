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

const allProjects = getPublishedProjects();
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

export function ProjectsView() {
  const [phase, setPhase] = useState<Phase>('stack');
  // exitSnapshots: cards that leave the current view
  // enterSnapshots: cards that arrive at the destination view
  // For toGrid: both are the same (stack cards morphing to grid positions)
  // For toStack: exit = filtered grid cards, enter = 4 stack featured cards
  const [exitSnapshots, setExitSnapshots] = useState<CardSnapshot[]>([]);
  const [enterSnapshots, setEnterSnapshots] = useState<CardSnapshot[]>([]);
  const [bgColor, setBgColor] = useState(allProjects[0]?.ambientColor ?? '#1a1a1a');
  const { setDark } = useHeaderTheme();

  const stackCardEls  = useRef<Map<string, HTMLElement | null>>(new Map());
  const gridCardEls   = useRef<Map<string, HTMLElement | null>>(new Map());
  const stackOrderRef = useRef<number[]>(allProjects.map((_, i) => i));
  const visibleGridSlugsRef = useRef<string[]>(allProjects.map(p => p.slug));

  const isStack = phase === 'stack' || phase === 'measuring-to-grid' || phase === 'transitioning-to-stack';
  const isGrid  = phase === 'grid'  || phase === 'measuring-to-stack' || phase === 'transitioning-to-grid';

  useEffect(() => {
    setDark(!isGrid);
  }, [isGrid, setDark]);

  // ── measuring-to-grid: stack → grid ──────────────────────────────
  useEffect(() => {
    if (phase !== 'measuring-to-grid') return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const orderedProjects = stackOrderRef.current.map(i => allProjects[i]);
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

        if (shots.length === 0) {
          setPhase('grid');
          return;
        }

        // toGrid: exit and enter are the same cards
        setExitSnapshots(shots);
        setEnterSnapshots(shots);
        setPhase('transitioning-to-grid');
      });
      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [phase]);

  // ── measuring-to-stack: grid → stack ──────────────────────────────
  useEffect(() => {
    if (phase !== 'measuring-to-stack') return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        // EXIT: only the cards currently visible in the grid (respects filter)
        const visibleSlugs = visibleGridSlugsRef.current;
        const visibleProjects = visibleSlugs
          .map(slug => allProjects.find(p => p.slug === slug))
          .filter(Boolean) as typeof allProjects;

        const exits: CardSnapshot[] = visibleProjects
          .map((project) => {
            const gridEl = gridCardEls.current.get(project.slug);
            if (!gridEl) return null;

            const fromRect = gridEl.getBoundingClientRect();
            if (fromRect.width === 0 || fromRect.height === 0) return null;

            // toRect for exit cards: we don't use it for size calculation in exit phase,
            // but ViewTransition uses it to compute exit aspect ratio — use stack rect if available
            const stackEl = stackCardEls.current.get(project.slug);
            const toRect = stackEl
              ? stackEl.getBoundingClientRect()
              : fromRect; // fallback: same rect (square-ish exit)

            return makeSnapshot(project, fromRect, toRect, 36, 54);
          })
          .filter(Boolean) as CardSnapshot[];

        if (exits.length === 0) {
          setPhase('stack');
          return;
        }

        // ENTER: always the 4 stack featured cards, in visual order (front first)
        const orderedProjects = stackOrderRef.current.map(i => allProjects[i]);
        const enters: CardSnapshot[] = orderedProjects
          .map((project) => {
            const stackEl = stackCardEls.current.get(project.slug);
            if (!stackEl) return null;

            const toRect = stackEl.getBoundingClientRect();
            if (toRect.width === 0 || toRect.height === 0) return null;

            // fromRect for enter phase: enter cards fly in from corner, so fromRect isn't
            // used as start position — it's only needed for the image/metadata.
            // We reuse toRect as placeholder (ViewTransition teleports to corner anyway).
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
      // Reset visible slugs to all projects when landing on stack,
      // so the next measuring-to-grid has correct refs to work with
      if (next === 'stack') {
        visibleGridSlugsRef.current = allProjects.map(p => p.slug);
      }
      return next;
    });
    requestAnimationFrame(() => {
      setExitSnapshots([]);
      setEnterSnapshots([]);
    });
  }, []);

  const currentBg = isGrid ? GRID_BG : bgColor;
  const isTransitioning = phase === 'transitioning-to-grid' || phase === 'transitioning-to-stack';
  const hasOverlay = exitSnapshots.length > 0 || enterSnapshots.length > 0;

  return (
    <div style={{ position: 'relative' }}>
      {/* Fondo animado */}
      <motion.div
        style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        animate={{ backgroundColor: currentBg }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Toggle */}
      <nav
        className={[
          styles.toggleH,
          isGrid ? styles.toggleDark : '',
          isGrid ? styles.toggleStatic : '',
        ].join(' ')}
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

      {/* Vista Stack */}
      <div style={
        (phase === 'stack' || phase === 'measuring-to-grid' || phase === 'measuring-to-stack')
          ? undefined
          : { opacity: 0, pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%' }
      }>
        <PortalProvider>
          <HomeStack
            projects={allProjects}
            disabled={phase !== 'stack'}
            onCardRefs={(map) => { stackCardEls.current = map; }}
            onFrontColor={(c) => setBgColor(c)}
            onOrder={(order) => { stackOrderRef.current = order; }}
          />
          <PortalTransition />
        </PortalProvider>
      </div>

      {/* Vista Grid */}
      <div style={
        (phase === 'grid' || phase === 'measuring-to-grid' || phase === 'measuring-to-stack')
          ? undefined
          : { opacity: 0, pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%' }
      }>
        <ExploreGrid
          projects={allProjects}
          invisible={phase !== 'grid'}
          cardRefsMap={gridCardEls}
          onVisibleSlugs={(slugs) => { visibleGridSlugsRef.current = slugs; }}
        />
      </div>

      {/* Overlay de transición */}
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
