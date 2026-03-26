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
  // Morado profundo → lila cálido, como el brand primary
  inicio: {
    base: '#2D2440',
    halo1: { color: 'rgba(97, 42, 116, 0.60)',  x: '25%',  y: '30%' },
    halo2: { color: 'rgba(64, 57, 78, 0.70)',   x: '80%',  y: '70%' },
    halo3: { color: 'rgba(180, 130, 220, 0.22)', x: '55%', y: '55%' },
  },
  // Ámbar dorado → naranja cálido
  proyectos: {
    base: '#2A1A08',
    halo1: { color: 'rgba(226, 139, 0, 0.55)',  x: '20%',  y: '25%' },
    halo2: { color: 'rgba(180, 90, 20, 0.40)',  x: '75%',  y: '65%' },
    halo3: { color: 'rgba(226, 160, 60, 0.22)', x: '50%',  y: '80%' },
  },
  // Terracota → melocotón, inspirado en amigo-secreto #E8A089
  sobre: {
    base: '#2A1510',
    halo1: { color: 'rgba(133, 64, 45, 0.65)',  x: '25%',  y: '20%' },
    halo2: { color: 'rgba(232, 160, 137, 0.30)', x: '72%', y: '68%' },
    halo3: { color: 'rgba(180, 80, 50, 0.35)',  x: '50%',  y: '50%' },
  },
  // Verde salvia → azul gris, más saturado
  contacto: {
    base: '#111E18',
    halo1: { color: 'rgba(96, 110, 103, 0.65)', x: '22%',  y: '30%' },
    halo2: { color: 'rgba(60, 90, 75, 0.50)',   x: '78%',  y: '60%' },
    halo3: { color: 'rgba(140, 180, 155, 0.22)', x: '48%', y: '75%' },
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
