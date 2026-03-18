'use client';

import { motion } from 'framer-motion';
import styles from './AboutManifesto.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.85, delay, ease },
});

export default function AboutManifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow} {...fade(0)}>
          Manifiesto
        </motion.p>
        <motion.h2 className={styles.statement} {...fade(0.12)}>
          Creo sobre el significado.
        </motion.h2>
        <motion.p className={styles.body} {...fade(0.25)}>
          El significante es solo una forma de nombrarlo.
          Lo que me importa es el para qué — de cada proyecto,
          de cada decisión, de cada píxel. Si no llega a la esencia,
          no debe hacerse.
        </motion.p>
      </div>
    </section>
  );
}
