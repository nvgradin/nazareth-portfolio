'use client';

import { motion } from 'framer-motion';
import styles from './ProjectLogos.module.css';

interface Logo {
  src: string;
  alt: string;
}

interface Props {
  logos: Logo[];
  label?: string;
  staticOnDesktop?: boolean;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ProjectLogos({ logos, label = 'Con el apoyo de', staticOnDesktop = false }: Props) {
  const doubled = [...logos, ...logos];

  return (
    <section className={styles.section}>
      {label && (
        <div className={styles.header}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {label}
          </motion.p>
        </div>
      )}

      {/* Desktop estático */}
      {staticOnDesktop && (
        <div className={styles.staticRow}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      )}

      {/* Marquee — siempre en móvil/tablet, solo cuando !staticOnDesktop en desktop */}
      <div className={[styles.track, staticOnDesktop ? styles.trackMobileOnly : ''].join(' ')}>
        <div className={styles.strip}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
