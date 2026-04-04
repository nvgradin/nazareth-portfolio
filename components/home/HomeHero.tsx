'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './HomeHero.module.css';

// Easing cinematográfico: arranca lento, frena suave
const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  animate?: boolean;
  hidden?: boolean;
}

export function HomeHero({ animate = false, hidden = false }: Props) {
  const { setDark } = useHeaderTheme();

  useEffect(() => {
    setDark(true);
    return () => setDark(false);
  }, [setDark]);

  return (
    <section className={styles.hero} style={hidden ? { visibility: 'hidden' } : undefined}>
      {/* Fondo imagen */}
      <div className={styles.bg}>
        <Image
          src="/home/hero_sunset_2560.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Contenido centrado */}
      <div className={styles.content}>

        {/* 1. Rol */}
        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 18 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
        >
          Digital Product &amp; Experience Designer
        </motion.p>

        {/* 2. Nombre — reveal desde abajo de su línea base */}
        <div className={styles.nameClip}>
          <motion.h1
            className={styles.name}
            initial={{ y: '105%' }}
            animate={animate ? { y: '0%' } : {}}
            transition={{ delay: 0.3, duration: 1.1, ease: EASE }}
          >
            Nazareth Gradín
          </motion.h1>
        </div>

        {/* 3. Propuesta de valor */}
        <motion.p
          className={styles.value}
          initial={{ opacity: 0, y: 18 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
        >
          Conecto estrategia, diseño y desarrollo para crear productos digitales con sentido.
        </motion.p>

        {/* 4. Subheadline */}
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 18 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 0.9, ease: EASE }}
        >
          Creo universos digitales desde la estrategia hasta la esencia.
        </motion.p>

        {/* 5. CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.15, duration: 0.9, ease: EASE }}
        >
          <Link href="/projects" className={styles.cta}>
            Explorar proyectos
          </Link>
        </motion.div>

        {/* 6. Microinfo */}
        <motion.p
          className={styles.micro}
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1.0, ease: EASE }}
        >
          Vigo, Galicia&nbsp;·&nbsp;Remote-friendly&nbsp;·&nbsp;Colaborando con agencias, marcas y proyectos digitales
        </motion.p>

      </div>
    </section>
  );
}
