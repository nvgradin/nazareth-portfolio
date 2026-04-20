'use client';

import { useRef } from 'react';
import { useReducedMotion, motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutPersonal.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function AboutPersonal() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['-12%', '12%']);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 as const },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div className={styles.bg} style={{ y: bgY }} />
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <motion.div className={styles.text} {...fadeUp(0)}>
          <p className={styles.prose}>
            Fuera de los proyectos, me muevo entre la música, la escritura y la meditación.
            Creo que diseñar bien y vivir conscientemente no son cosas separadas — las dos
            requieren preguntarte qué importa de verdad, y tener el valor de eliminar lo que no.
          </p>
          <p className={styles.prose}>
            Llevo años siendo aprendiz. No como virtud, sino como forma de estar en el mundo.
          </p>
        </motion.div>

        <motion.div className={styles.embed} {...fadeUp(0.2)}>
          <p className={styles.label}>Lo que suena mientras escribo esto</p>
          <iframe
            title="Mahal de Glass Beams en Spotify"
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/track/0iiB9CYptXO5Fz728LHHsQ?utm_source=generator"
            width="100%"
            height="152"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

