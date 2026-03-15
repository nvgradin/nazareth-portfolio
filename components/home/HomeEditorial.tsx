'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomeEditorial.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

export function HomeProjects() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.cardWrap}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className={styles.card}>
          <Image
            src="/projects/trainfy/portada_trainfy.webp"
            alt="Trainfy"
            fill
            sizes="50vw"
            className={styles.cardImg}
          />
        </div>
      </motion.div>
    </section>
  );
}
