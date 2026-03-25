'use client';

import { motion } from 'framer-motion';
import styles from './ProjectsToBioTransition.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ProjectsToBioTransition() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>

        <motion.p
          className={styles.line1}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0, ease: EASE_OUT }}
        >
          Detrás de cada proyecto, hay una forma de pensar.
        </motion.p>

        <motion.p
          className={styles.line2}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.28, ease: EASE_OUT }}
        >
          Esta es la mía.
        </motion.p>

      </div>
    </div>
  );
}
