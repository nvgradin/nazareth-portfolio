'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LogoMark } from '@/components/ui';
import styles from './IntroOverlay.module.css';

const STORAGE_KEY = 'nz_intro_seen';

// ── Tiempos (ms) ──────────────────────────────────────────
const PAUSE_MS        = 1800;  // reposo inicial contemplando el bosque
const ZOOM_MS         = 4000;  // duración del zoom (va a 2.4 — entrar en el cielo)
const DISSOLVE_MS     = 1400;  // duración del cross-dissolve bosque→atardecer
const FADE_OUT_MS     = 700;   // fade final del overlay entero

// El dissolve empieza cuando el zoom lleva un 60%
const DISSOLVE_OFFSET = PAUSE_MS + ZOOM_MS * 0.60;
// onDone se llama 400ms ANTES de que empiece el fade — hero monta mientras overlay cubre
const HERO_MOUNT_MS   = PAUSE_MS + ZOOM_MS - 400;
const TOTAL_MS        = PAUSE_MS + ZOOM_MS + FADE_OUT_MS;
// ──────────────────────────────────────────────────────────

interface Props {
  onDone?: () => void;
}

export function IntroOverlay({ onDone }: Props) {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'fading' | 'done'>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const addTimer = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const skip = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    localStorage.setItem(STORAGE_KEY, '1');
    document.body.style.backgroundColor = '';
    setPhase('fading');
    addTimer(() => { setPhase('done'); onDone?.(); }, FADE_OUT_MS);
  };

  useEffect(() => {
    // DEV: comentar el bloque de abajo para ver la intro siempre
    // const seen = localStorage.getItem(STORAGE_KEY);
    // if (seen) { setPhase('done'); onDone?.(); return; }

    document.body.style.backgroundColor = '#0a0a0a';
    setPhase('playing');

    // Montar el hero 400ms antes del fade — ya estará pintado cuando el overlay desaparezca
    addTimer(() => {
      localStorage.setItem(STORAGE_KEY, '1');
      document.body.style.backgroundColor = '';
      onDone?.();
    }, HERO_MOUNT_MS);

    // Cuando el zoom termina → fade out del overlay entero
    addTimer(() => setPhase('fading'), PAUSE_MS + ZOOM_MS);

    // Desmontar el overlay cuando el fade termina
    addTimer(() => setPhase('done'), TOTAL_MS);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;
  if (phase === 'idle') return <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: '#0a0a0a' }} />;

  const zoomDur  = (PAUSE_MS + ZOOM_MS) / 1000;
  const pauseFrac = PAUSE_MS / (PAUSE_MS + ZOOM_MS);
  const dissolveDur = DISSOLVE_MS / 1000;
  const dissolveDelay = DISSOLVE_OFFSET / 1000;

  return (
    <motion.div
      className={styles.overlay}
      // Fade out final del overlay entero cuando phase === 'fading'
      animate={{ opacity: phase === 'fading' ? 0 : 1 }}
      transition={{ duration: FADE_OUT_MS / 1000, ease: 'easeInOut' }}
    >
      {/* Atardecer — fuera del zoom, tamaño natural, aparece durante el dissolve */}
      <motion.div
        className={styles.sunsetLayer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: dissolveDelay,
          duration: dissolveDur,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Image
          src="/home/hero_sunset_2560.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>

      {/* Bosque con zoom — se acerca al cielo y se disuelve */}
      <motion.div
        className={styles.zoomLayer}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1, 2.4] }}
        transition={{
          duration: zoomDur,
          times: [0, pauseFrac, 1],
          ease: ['linear', [0.08, 0.0, 0.14, 1.0]],
        }}
      >
        <motion.div
          className={styles.forestLayer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: dissolveDelay,
            duration: dissolveDur,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Image
            src="/home/hero_intro_2560.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
        </motion.div>
      </motion.div>

      {/* Skip — aparece tras 1s, esquina inferior derecha */}
      <motion.button
        className={styles.skip}
        onClick={skip}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeIn' }}
      >
        Skip
      </motion.button>

      {/* Logo + nombre — sobre el zoom, aparece y se va antes del dissolve */}
      <motion.div
        className={styles.logoWrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          delay: 0.6,
          duration: (DISSOLVE_OFFSET - 600) / 1000,
          times: [0, 0.18, 0.65, 1],
          ease: ['easeIn', 'linear', 'easeOut'],
        }}
      >
        <LogoMark className={styles.logo} />
        <p className={styles.name}>Nazareth Gradín</p>
      </motion.div>
    </motion.div>
  );
}
