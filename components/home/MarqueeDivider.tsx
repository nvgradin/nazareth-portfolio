'use client';

import { useRef, useEffect } from 'react';
import {
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import styles from './MarqueeDivider.module.css';

const ITEMS = [
  { text: 'PRODUCT DESIGN', accent: false },
  { text: 'UX / UI', accent: false },
  { text: 'WEB', accent: false },
  { text: 'ESTRATEGIA DIGITAL', accent: false },
  { text: 'BRANDING', accent: false },
  { text: 'DESARROLLO', accent: false },
];

const SEP = '◆';
const BASE_SPEED = 44; // px/s — lento y elegante

export function MarqueeDivider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Velocidad reactiva al scroll
  const { scrollY } = useScroll();
  const scrollSpeed = useTransform(scrollY, [0, 300], [0, 1]);

  useAnimationFrame((_, delta) => {
    const boost = 1 + scrollSpeed.get() * 1.8; // scroll acelera hasta ~3x
    const next = x.get() - BASE_SPEED * boost * (delta / 1000);
    const half = trackRef.current ? trackRef.current.offsetWidth / 2 : 0;

    // reset imperceptible cuando llega a -50%
    x.set(half > 0 && next < -half ? 0 : next);
  });

  return (
    <div className={styles.wrapper}>
      {/* línea sutil superior */}
      <div className={styles.rule} />

      <div className={styles.viewport}>
        <motion.div
          ref={trackRef}
          className={styles.track}
          style={{ x }}
        >
          {/* track A + B idénticos para loop infinito */}
          {[0, 1].map((copy) => (
            <span key={copy} className={styles.set}>
              {ITEMS.map((item, i) => (
                <span key={i} className={styles.item}>
                  <span className={item.accent ? styles.textAccent : styles.text}>
                    {item.text}
                  </span>
                  <span className={styles.sep}>{SEP}</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* línea sutil inferior */}
      <div className={styles.rule} />
    </div>
  );
}
