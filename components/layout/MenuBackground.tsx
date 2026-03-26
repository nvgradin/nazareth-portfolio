'use client';

import { motion } from 'framer-motion';
import styles from './MenuBackground.module.css';

export type MenuTheme = 'inicio' | 'proyectos' | 'sobre' | 'contacto';

interface ThemeConfig {
  base: string;
  halo1: { color: string; x: string; y: string };
  halo2: { color: string; x: string; y: string };
  halo3: { color: string; x: string; y: string };
}

export const MENU_THEMES: Record<MenuTheme, ThemeConfig> = {
  // Inicio — base oscura del propio morado, no negro
  inicio: {
    base: '#241E33',
    halo1: { color: 'rgba(100, 85, 130, 0.75)',  x: '20%',  y: '30%' },
    halo2: { color: 'rgba(64, 57, 78, 0.90)',    x: '80%',  y: '70%' },
    halo3: { color: 'rgba(130, 110, 160, 0.45)', x: '52%',  y: '52%' },
  },
  // Proyectos — ámbar oscuro, no negro
  proyectos: {
    base: '#3A2200',
    halo1: { color: 'rgba(226, 139, 0, 0.60)',   x: '18%',  y: '28%' },
    halo2: { color: 'rgba(180, 100, 10, 0.55)',  x: '78%',  y: '65%' },
    halo3: { color: 'rgba(226, 160, 40, 0.35)',  x: '50%',  y: '80%' },
  },
  // Sobre mí — terracota oscura, no negro
  sobre: {
    base: '#2E1208',
    halo1: { color: 'rgba(133, 64, 45, 0.75)',   x: '22%',  y: '25%' },
    halo2: { color: 'rgba(180, 100, 70, 0.55)',  x: '74%',  y: '68%' },
    halo3: { color: 'rgba(200, 120, 80, 0.35)',  x: '50%',  y: '50%' },
  },
  // Contacto — salvia oscura, no negro
  contacto: {
    base: '#1A2420',
    halo1: { color: 'rgba(96, 110, 103, 0.75)',  x: '20%',  y: '30%' },
    halo2: { color: 'rgba(120, 145, 130, 0.55)', x: '76%',  y: '62%' },
    halo3: { color: 'rgba(150, 175, 160, 0.35)', x: '48%',  y: '75%' },
  },
};

export function themeFromPathname(pathname: string): MenuTheme {
  if (pathname.startsWith('/projects')) return 'proyectos';
  if (pathname.startsWith('/about'))    return 'sobre';
  if (pathname.startsWith('/contact'))  return 'contacto';
  return 'inicio';
}

interface Props {
  theme: MenuTheme;
}

export function MenuBackground({ theme }: Props) {
  const t = MENU_THEMES[theme];

  return (
    <div className={styles.root} aria-hidden>
      {/* Capa 1: base de color */}
      <motion.div
        className={styles.base}
        animate={{ backgroundColor: t.base }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Capa 2: halos atmosféricos */}
      <motion.div
        className={`${styles.halo} ${styles.halo1}`}
        animate={{ background: `radial-gradient(ellipse 70% 50% at ${t.halo1.x} ${t.halo1.y}, ${t.halo1.color}, transparent 70%)` }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className={`${styles.halo} ${styles.halo2}`}
        animate={{ background: `radial-gradient(ellipse 60% 55% at ${t.halo2.x} ${t.halo2.y}, ${t.halo2.color}, transparent 70%)` }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className={`${styles.halo} ${styles.halo3}`}
        animate={{ background: `radial-gradient(ellipse 80% 60% at ${t.halo3.x} ${t.halo3.y}, ${t.halo3.color}, transparent 70%)` }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Capa 3: noise */}
      <div className={styles.noise} />

      {/* Capa 4: prueba imágenes — TEMPORAL (comentado)
      {theme === 'inicio'    && <div className={styles.testImg1} />}
      {theme === 'proyectos' && <div className={styles.testImg2} />}
      {(theme === 'sobre' || theme === 'contacto') && <div className={styles.testImg3} />}
      */}
    </div>
  );
}
