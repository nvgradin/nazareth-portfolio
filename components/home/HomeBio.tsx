'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './HomeBio.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const LINES = [
  'Pienso en el negocio.',
  'Diseño la experiencia.',
  'Construyo el producto.',
];

export function HomeBio() {
  const { setDark } = useHeaderTheme();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const { top, bottom } = el.getBoundingClientRect();
      // dentro de HomeBio (fondo crema) → logo oscuro
      const insideBio = top <= 80 && bottom > 80;
      setDark(!insideBio);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // estado inicial
    return () => window.removeEventListener('scroll', onScroll);
  }, [setDark]);

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={styles.headline}>
        {LINES.map((line, i) => (
          <motion.span
            key={i}
            className={styles.headlineLine}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease }}
          >
            {line}
          </motion.span>
        ))}
      </h2>
    </section>
  );
}
