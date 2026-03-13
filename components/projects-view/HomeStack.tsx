'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { StackCard } from './StackCard';
import styles from './HomeStack.module.css';

// 4 slots visibles: [translateY, scaleX, scaleY]
// slot 0 = frontal (grande, abajo), slot 3 = más al fondo (pequeña, arriba)
const SLOTS: [number, number, number][] = [
  [0,    1.00, 1.00],
  [-160, 0.84, 0.86],
  [-300, 0.70, 0.70],
  [-420, 0.55, 0.55],
];

const SPRING = { type: 'spring', stiffness: 300, damping: 36, mass: 1 } as const;

interface Props {
  projects: ProjectWithLayout[];
  disabled?: boolean;
  exitingToGrid?: boolean;    // true mientras la transición stack→grid está activa
  enteringFromGrid?: boolean; // true al llegar al stack desde grid
  onCardRefs?: (refsBySlug: Map<string, HTMLElement | null>) => void;
  onFrontColor?: (color: string) => void;
  onOrder?: (order: number[]) => void;
}

export function HomeStack({ projects, disabled, exitingToGrid, enteringFromGrid, onCardRefs, onFrontColor, onOrder }: Props) {
  const n = projects.length; // 4
  // order[slot] = índice de proyecto en ese slot
  const [order, setOrder] = useState<number[]>(() => projects.map((_, i) => i));
  const [bgColor, setBgColor] = useState(projects[0]?.ambientColor ?? '#000');
  const [bgGradient, setBgGradient] = useState<string | null>(projects[0]?.ambientGradient ?? null);

  // Refs to the StackCard DOM elements, keyed by slug
  const cardEls = useRef<Map<string, HTMLElement | null>>(new Map());

  // Tracking de qué card acaba de entrar (para darle zIndex alto y animarlo desde abajo/arriba)
  const [entering, setEntering] = useState<{ idx: number; from: 'bottom' | 'top' } | null>(null);
  const [enterKey, setEnterKey] = useState(0);

  const cooldown = useRef(false);
  const [showHint, setShowHint] = useState(true);

  // Notify parent of front color on mount and when it changes
  useEffect(() => {
    onFrontColor?.(bgColor);
  }, [bgColor, onFrontColor]);

  // Notify parent of current order whenever it changes
  useEffect(() => {
    onOrder?.(order);
  }, [order, onOrder]);

  // Notify parent of card refs after first render
  useEffect(() => {
    if (onCardRefs) {
      onCardRefs(new Map(cardEls.current));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCardRefs]);

  const rotate = useCallback((dir: 1 | -1) => {
    if (cooldown.current) return;
    cooldown.current = true;
    setShowHint(false);

    setOrder(prev => {
      let newOrder: number[];
      let enteringIdx: number;

      if (dir === 1) {
        newOrder = [prev[3], prev[0], prev[1], prev[2]];
        enteringIdx = prev[3];
        setEntering({ idx: enteringIdx, from: 'bottom' });
      } else {
        newOrder = [prev[1], prev[2], prev[3], prev[0]];
        enteringIdx = prev[0];
        setEntering({ idx: enteringIdx, from: 'top' });
      }

      const front = projects[newOrder[0]];
      setBgColor(front.ambientColor ?? '#000');
      setBgGradient(front.ambientGradient ?? null);
      setEnterKey(k => k + 1);
      return newOrder;
    });

    setTimeout(() => {
      cooldown.current = false;
      setEntering(null);
    }, 750);
  }, [projects]);

  useEffect(() => {
    if (disabled) return;

    let touchStartY = 0;
    let wheelAccum = 0;
    let wheelTimer: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelAccum += e.deltaY;

      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => { wheelAccum = 0; }, 200);

      if (Math.abs(wheelAccum) >= 60) {
        const dir = wheelAccum > 0 ? 1 : -1;
        wheelAccum = 0;
        rotate(dir as 1 | -1);
      }
    };

    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 40) rotate(delta > 0 ? 1 : -1);
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
      if (wheelTimer) clearTimeout(wheelTimer);
    };
  }, [rotate, disabled]);

  return (
    <div
      className={styles.stage}
      style={{ backgroundColor: bgColor, transition: 'background-color 0.6s ease' }}
    >
      {/* Título de sección — animado al entrar/salir */}
      <motion.header
        key={enteringFromGrid ? 'entering' : 'idle'}
        className={styles.header}
        initial={enteringFromGrid ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        animate={exitingToGrid ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className={styles.heading}>Proyectos</h2>
        <p className={styles.subtitle}>Diseño de producto, experiencias digitales y marca.</p>
      </motion.header>

      {/* Capa de gradiente ambient — fade in/out encima del color sólido */}
      <div
        className={styles.bgLayer}
        style={{
          background: bgGradient ?? 'none',
          opacity: bgGradient ? 1 : 0,
        }}
      />

      <div className={styles.grain} />

      {/* Hint de scroll — desaparece al primer scroll */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeIn' }}
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↕
            </motion.span>
            <span>scroll</span>
          </motion.div>
        )}
      </AnimatePresence>

      {order.map((projectIndex, slot) => {
        const project  = projects[projectIndex];
        const isNew    = entering?.idx === projectIndex;
        const fromBottom = entering?.from === 'bottom';
        const [ty, sx, sy] = SLOTS[slot];

        // El card que acaba de entrar: key único para forzar remount + initial desde fuera
        const key = isNew ? `new-${enterKey}` : project.slug;
        const initial = isNew
          ? { translateY: fromBottom ? 340 : -600, scaleX: fromBottom ? 1.0 : 0.4, scaleY: fromBottom ? 1.0 : 0.4, opacity: fromBottom ? 1 : 0 }
          : false;

        // zIndex: el card entrante por delante de todos
        const zIndex = isNew && fromBottom ? n + 2 : n - slot;

        return (
          <motion.div
            key={key}
            className={styles.card}
            initial={initial}
            animate={{ translateY: ty, scaleX: sx, scaleY: sy, opacity: 1 }}
            transition={SPRING}
            style={{ zIndex }}
          >
            <StackCard
              project={project}
              onRef={(el) => { cardEls.current.set(project.slug, el); }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
