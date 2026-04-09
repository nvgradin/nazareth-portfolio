'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './AboutCTA.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.75, delay, ease },
});

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow} {...fade(0)}>
          ¿Trabajamos juntos?
        </motion.p>
        <motion.h2 className={styles.title} {...fade(0.12)}>
          Si te resuena cómo pienso y trabajo, estaré encantada de escuchar tu idea.
        </motion.h2>
        <motion.div {...fade(0.28)}>
          <Link href="/contact" className={styles.cta}>
            Hablemos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
