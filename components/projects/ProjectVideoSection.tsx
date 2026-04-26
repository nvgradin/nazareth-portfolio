'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EditorialBlock } from './EditorialBlock';
import styles from './ProjectVideoSection.module.css';

export interface VideoSectionData {
  editorial: {
    title: string;
    subtitle: string;
    content: string;
  };
  src: string;
  poster?: string;
  background?: string;
}

interface Props {
  data: VideoSectionData;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProjectVideoSection({ data }: Props) {
  const { editorial, src, poster, background } = data;
  const [lightbox, setLightbox] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openLightbox() {
    setLightbox(true);
  }

  function closeLightbox() {
    videoRef.current?.pause();
    setLightbox(false);
  }

  useEffect(() => {
    if (lightbox) {
      const t = setTimeout(() => videoRef.current?.play(), 150);
      return () => clearTimeout(t);
    }
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <EditorialBlock
        title={editorial.title}
        subtitle={editorial.subtitle}
        content={editorial.content}
        className={styles.section}
      >
        <div
          className={styles.stage}
          style={background ? { background } : undefined}
        >
          <button
            className={styles.previewBtn}
            onClick={openLightbox}
            aria-label="Reproducir vídeo"
          >
            {poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" className={styles.previewPoster} />
            )}
            <span className={styles.playOverlay}>
              <span className={styles.playIcon}>
                <svg viewBox="0 0 28 28" fill="none" width="28" height="28">
                  <polygon points="8,4 24,14 8,24" fill="currentColor" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </EditorialBlock>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <div className={styles.lightboxBackdrop} />

            <motion.div
              className={styles.lightboxVideoWrap}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease }}
              onClick={e => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                className={styles.lightboxVideo}
                src={src}
                poster={poster}
                controls
                playsInline
              />
            </motion.div>

            <button
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Cerrar vídeo"
            >
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
