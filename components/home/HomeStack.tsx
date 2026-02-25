'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HomeProject } from '@/data/home';
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
  projects: HomeProject[];
}

export function HomeStack({ projects }: Props) {
  const n = projects.length; // 4

  // order[slot] = índice de proyecto en ese slot
  const [order, setOrder] = useState<number[]>(() => projects.map((_, i) => i));
  const [bgColor, setBgColor] = useState(projects[0]?.ambientColor ?? '#000');

  // Tracking de qué card acaba de entrar (para darle zIndex alto y animarlo desde abajo/arriba)
  const [entering, setEntering] = useState<{ idx: number; from: 'bottom' | 'top' } | null>(null);
  const [enterKey, setEnterKey] = useState(0);

  const cooldown = useRef(false);

  const rotate = useCallback((dir: 1 | -1) => {
    if (cooldown.current) return;
    cooldown.current = true;

    setOrder(prev => {
      let newOrder: number[];
      let enteringIdx: number;

      if (dir === 1) {
        // Scroll down: 0→1, 1→2, 2→3, 3 sale (fade), nuevo frontal = prev[3]
        // El card en slot 3 desaparece y reaparece como slot 0
        newOrder = [prev[3], prev[0], prev[1], prev[2]];
        enteringIdx = prev[3];
        setEntering({ idx: enteringIdx, from: 'bottom' });
      } else {
        // Scroll up: 3→2, 2→1, 1→0, 0 sale (baja), nuevo slot 3 = prev[0]
        newOrder = [prev[1], prev[2], prev[3], prev[0]];
        enteringIdx = prev[0];
        setEntering({ idx: enteringIdx, from: 'top' });
      }

      setBgColor(projects[newOrder[0]].ambientColor);
      setEnterKey(k => k + 1);
      return newOrder;
    });

    setTimeout(() => {
      cooldown.current = false;
      setEntering(null);
    }, 750);
  }, [projects]);

  useEffect(() => {
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
  }, [rotate]);

  return (
    <div
      className={styles.stage}
      style={{ backgroundColor: bgColor, transition: 'background-color 0.6s ease' }}
    >
      <div className={styles.grain} />

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
            <StackCard project={project} />
          </motion.div>
        );
      })}
    </div>
  );
}
