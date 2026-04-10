'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './AboutHero.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { setDark } = useHeaderTheme();

  // En todos los dispositivos: about empieza con header morado
  useEffect(() => {
    setDark(false);
  }, [setDark]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax suave — la imagen se mueve el 30% de lo que hace el scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className={styles.hero}>

      {/* Imagen con zoom-out de entrada + parallax de scroll */}
      <motion.div
        className={styles.imageWrap}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE_OUT }}
        style={{ y: imageY }}
      >
        <Image
          src="/about/hero_about_2560.webp"
          alt="Nazareth — Digital Product & Experience Designer"
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
      </motion.div>

      {/* Contenido */}
      <div className={styles.content}>
        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE_OUT }}
        >
          Digital Product &amp; Experience Designer
        </motion.p>

        <motion.p
          className={styles.claim}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: EASE_OUT }}
        >
          Entiendo el negocio, comunico marca y desarrollo experiencias digitales.
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.75, ease: EASE_OUT }}
        >
          Nazareth
        </motion.h1>
      </div>

    </section>
  );
}
