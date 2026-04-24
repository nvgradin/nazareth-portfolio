'use client';

import { useState, useEffect, useRef, startTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ReelCarousel.module.css';

export interface ReelItem {
  type: 'video' | 'image';
  src: string;
  alt?: string;
  duration?: number; // ms, solo para imágenes (default 5000)
}

interface Props {
  reels: ReelItem[];
  background?: string;
  title?: string;
  autoPlaySpeed?: number; // ms para imágenes
  pauseOnHover?: boolean;
}

const animation = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const };

export function ReelCarousel({
  reels,
  background = 'var(--brand-primary-900)',
  title,
  autoPlaySpeed = 5000,
  pauseOnHover = true,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDurationRef = useRef<number>(autoPlaySpeed);

  const stopProgress = () => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  };

  const startProgress = (speed: number) => {
    stopProgress();
    progressRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextReel();
          return 0;
        }
        return prev + 100 / (speed / 16);
      });
    }, 16);
  };

  const nextReel = () => {
    startTransition(() => {
      setCurrent(prev => (prev + 1) % reels.length);
      setProgress(0);
    });
  };

  const prevReel = () => {
    startTransition(() => {
      setCurrent(prev => (prev - 1 + reels.length) % reels.length);
      setProgress(0);
    });
  };

  const jumpToReel = (index: number) => {
    startTransition(() => {
      setCurrent(index);
      setProgress(0);
    });
  };

  const togglePlayPause = () => {
    startTransition(() => {
      setIsPlaying(p => !p);
      setIsPaused(p => !p);
    });
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) video.muted = !video.muted;
    setMuted(m => !m);
  };

  // Cuando cambia el reel o el estado de pausa, arranca/para el progreso
  useEffect(() => {
    const currentReel = reels[current];
    if (!currentReel) return;

    if (isPlaying && !isPaused) {
      if (currentReel.type === 'video') {
        // Para vídeos esperamos a que cargue (ver onLoadedMetadata)
        // Si ya tenemos la duración, arrancamos
        if (videoDurationRef.current > 0) {
          startProgress(videoDurationRef.current);
          videoRef.current?.play().catch(() => {});
        }
      } else {
        const speed = currentReel.duration ?? autoPlaySpeed;
        startProgress(speed);
      }
    } else {
      stopProgress();
      if (currentReel.type === 'video') {
        videoRef.current?.pause();
      }
    }

    return stopProgress;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, isPlaying, isPaused]);

  // Cuando cambia el reel, reset duración de vídeo
  useEffect(() => {
    videoDurationRef.current = 0;
  }, [current]);

  const handleVideoLoaded = () => {
    const video = videoRef.current;
    if (!video) return;
    // Aplicar estado de mute actual al nuevo vídeo
    video.muted = muted;
    const ms = video.duration * 1000;
    videoDurationRef.current = ms;
    if (isPlaying && !isPaused) {
      startProgress(ms);
      video.play().catch(() => {});
    }
  };

  const handleMouseEnter = () => { if (pauseOnHover) setIsPaused(true); };
  const handleMouseLeave = () => { if (pauseOnHover) setIsPaused(false); };

  // Swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? nextReel() : prevReel();
  };

  const currentReel = reels[current];

  return (
    <section className={styles.section} style={{ backgroundColor: background }}>
      {title && <p className={styles.eyebrow}>{title}</p>}

      <div
        className={styles.stage}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Barras de progreso + botón pausa */}
        <div className={styles.topBar}>
          <div className={styles.bars}>
            {reels.map((_, i) => (
              <div
                key={i}
                className={styles.bar}
                onClick={() => jumpToReel(i)}
              >
                <div
                  className={styles.barFill}
                  style={{
                    width:
                      i < current ? '100%'
                      : i === current ? `${progress}%`
                      : '0%',
                  }}
                />
              </div>
            ))}
          </div>
          <button className={styles.pauseBtn} onClick={togglePlayPause} aria-label={isPaused ? 'Reproducir' : 'Pausar'}>
            {isPlaying && !isPaused ? (
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>
        </div>

        {/* Media */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.mediaWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={animation}
          >
            {currentReel.type === 'video' ? (
              <video
                ref={videoRef}
                src={currentReel.src}
                className={styles.media}
                playsInline
                muted
                loop={false}
                onLoadedMetadata={handleVideoLoaded}
                onEnded={nextReel}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentReel.src}
                alt={currentReel.alt ?? ''}
                className={styles.media}
              />
            )}
            {/* Gradiente inferior */}
            <div className={styles.gradient} />
          </motion.div>
        </AnimatePresence>

        {/* Botón mute — solo en vídeos */}
        {currentReel.type === 'video' && (
          <button className={styles.muteBtn} onClick={toggleMute} aria-label={muted ? 'Activar audio' : 'Silenciar'}>
            {muted ? (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.17 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"/>
              </svg>
            ) : (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.17 19 8.83 19 12C19 15.17 16.89 17.83 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z"/>
              </svg>
            )}
          </button>
        )}

        {/* Flechas */}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevReel} aria-label="Anterior">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextReel} aria-label="Siguiente">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
