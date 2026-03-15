'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomeBio.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

export function HomeBio() {
  return (
    <section className={styles.section}>
      <Image
        src="/home/home_fondo_bio_2560.webp"
        alt=""
        fill
        sizes="100vw"
        className={styles.bg}
        priority={false}
      />

      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className={styles.photoWrap}>
          <Image
            src="/about/hero_about_2560.webp"
            alt="Nazareth"
            fill
            sizes="444px"
            className={styles.photo}
          />
        </div>

        <p className={styles.role}>Digital Product &amp; Experience Designer</p>
        <h2 className={styles.name}>NAZARETH</h2>
        <p className={styles.tagline}>
          Diseño con estrategia. Construyo con código. Creo desde la esencia.
        </p>
      </motion.div>
    </section>
  );
}
