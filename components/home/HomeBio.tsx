'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './HomeBio.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay, ease },
});

export function HomeBio() {
  const { setDark } = useHeaderTheme();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const { top, bottom } = el.getBoundingClientRect();
      setDark(!(top <= 80 && bottom > 80));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setDark]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>

          {/* Columna izquierda — texto + CTA */}
          <div className={styles.topLeft}>
            <motion.p className={styles.eyebrow} {...fade(0)}>
              Sobre mí
            </motion.p>
            <motion.h2 className={styles.title} {...fade(0.1)}>
              Llegué al producto digital desde las marcas, la comunicación y el código.
            </motion.h2>
            <motion.div className={styles.bodyWrap} {...fade(0.22)}>
              <p className={styles.intro}>
                Empecé en publicidad — construyendo narrativas para marcas como Reebok,
                Schweppes o Movistar. Con el tiempo entendí que comunicar no era suficiente:
                quería diseñar la experiencia completa y construir lo que imaginaba.
              </p>
              <p className={styles.intro}>
                Hoy trabajo en la intersección entre estrategia de negocio, diseño de producto
                y desarrollo — con la mirada de quien ha estado en todos los lados de la mesa.
              </p>
            </motion.div>
            <motion.div {...fade(0.35)}>
              <Link href="/about" className={styles.cta}>
                Conoce mi recorrido →
              </Link>
            </motion.div>
          </div>

          {/* Columna derecha — imagen */}
          <motion.div className={styles.topRight} {...fade(0.18)}>
            <div className={styles.imageWrap}>
              <Image
                src="/about/hero_about_2560.webp"
                alt="Nazareth Gradín"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
