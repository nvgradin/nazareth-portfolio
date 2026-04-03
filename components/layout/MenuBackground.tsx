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

// Los colores se usan como overlay sobre la imagen — deben oscurecer sin tapar
export const MENU_THEMES: Record<MenuTheme, ThemeConfig> = {
  inicio: {
    base: '#241E33',
    halo1: { color: 'rgba(36, 30, 51, 0.52)',   x: '0%',   y: '0%' },
    halo2: { color: 'rgba(64, 57, 78, 0.38)',   x: '100%', y: '100%' },
    halo3: { color: 'rgba(36, 30, 51, 0.15)',   x: '50%',  y: '50%' },
  },
  proyectos: {
    base: '#2C2640',
    halo1: { color: 'rgba(44, 38, 64, 0.55)',   x: '0%',   y: '0%' },
    halo2: { color: 'rgba(64, 57, 78, 0.30)',   x: '100%', y: '100%' },
    halo3: { color: 'rgba(44, 38, 64, 0.15)',   x: '50%',  y: '50%' },
  },
  sobre: {
    base: '#2E1208',
    halo1: { color: 'rgba(46, 18, 8, 0.50)',    x: '0%',   y: '0%' },
    halo2: { color: 'rgba(133, 64, 45, 0.28)',  x: '100%', y: '100%' },
    halo3: { color: 'rgba(46, 18, 8, 0.15)',    x: '50%',  y: '50%' },
  },
  contacto: {
    base: '#1A2420',
    halo1: { color: 'rgba(26, 36, 32, 0.52)',   x: '0%',   y: '0%' },
    halo2: { color: 'rgba(96, 110, 103, 0.28)', x: '100%', y: '100%' },
    halo3: { color: 'rgba(26, 36, 32, 0.15)',   x: '50%',  y: '50%' },
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

      {/* Capa 2: imagen hero_intro — misma para todas las secciones */}
      <div className={styles.bgImage} />

      {/* Capa 3: overlay de color por sección para legibilidad */}
      <motion.div
        className={styles.colorOverlay}
        animate={{ background: `linear-gradient(160deg, ${t.halo1.color} 0%, ${t.halo2.color} 60%, ${t.halo3.color} 100%)` }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Capa 4: noise */}
      <div className={styles.noise} />

      {/* Halos atmosféricos — comentados
      <motion.div className={`${styles.halo} ${styles.halo1}`} ... />
      */}
    </div>
  );
}
