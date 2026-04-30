'use client';

import { motion } from 'framer-motion';
import styles from './StatementBlock.module.css';

interface Props {
  setup: string;
  statement: string;
  accentColor?: string;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function StatementBlock({ setup, statement, accentColor = '#1E3A5F' }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.setup}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          {setup}
        </motion.p>
        <motion.p
          className={styles.statement}
          style={{ color: accentColor }}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
        >
          {statement}
        </motion.p>
      </div>
    </section>
  );
}
