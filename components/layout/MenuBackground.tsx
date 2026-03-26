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
  // Inicio — morado #241E33 / #40394E
  inicio: {
    base: '#241E33',
    halo1: { color: 'rgba(64, 57, 78, 0.90)',   x: '20%',  y: '30%' },
    halo2: { color: 'rgba(36, 30, 51, 0.95)',   x: '80%',  y: '70%' },
    halo3: { color: 'rgba(80, 68, 100, 0.55)',  x: '52%',  y: '52%' },
  },
  // Proyectos — ámbar #E28B00
  proyectos: {
    base: '#1E1506',
    halo1: { color: 'rgba(226, 139, 0, 0.65)',  x: '18%',  y: '28%' },
    halo2: { color: 'rgba(226, 139, 0, 0.45)',  x: '78%',  y: '65%' },
    halo3: { color: 'rgba(200, 120, 0, 0.35)',  x: '50%',  y: '80%' },
  },
  // Sobre mí — terracota #85402D
  sobre: {
    base: '#1C0E09',
    halo1: { color: 'rgba(133, 64, 45, 0.75)',  x: '22%',  y: '25%' },
    halo2: { color: 'rgba(133, 64, 45, 0.55)',  x: '74%',  y: '68%' },
    halo3: { color: 'rgba(160, 80, 50, 0.40)',  x: '50%',  y: '50%' },
  },
  // Contacto — verde salvia #606E67
  contacto: {
    base: '#0E1512',
    halo1: { color: 'rgba(96, 110, 103, 0.75)', x: '20%',  y: '30%' },
    halo2: { color: 'rgba(96, 110, 103, 0.55)', x: '76%',  y: '62%' },
    halo3: { color: 'rgba(120, 140, 130, 0.35)', x: '48%', y: '75%' },
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
    </div>
  );
}
