'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Lightbox.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  image: LightboxImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function useImageFit(src: string) {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const maxW = window.innerWidth * 0.85;
    const maxH = window.innerHeight * 0.80;
    const ratio = img.naturalWidth / img.naturalHeight;
    let w = maxW;
    let h = maxW / ratio;
    if (h > maxH) { h = maxH; w = maxH * ratio; }
    setSize({ width: w, height: h });
  }, []);

  useEffect(() => { setSize(null); }, [src]);

  return { size, onLoad };
}

export function Lightbox({ image, onClose, onPrev, onNext }: Props) {
  const { size, onLoad } = useImageFit(image.src);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className={styles.lightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.lightboxBackdrop} onClick={onClose} />

      <button
        className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={image.src}
          className={styles.lightboxImageWrap}
          style={size ? { width: size.width, height: size.height } : undefined}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.lightboxClose}
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Cerrar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className={styles.lightboxImage}
            sizes="90vw"
            onLoad={onLoad}
          />
        </motion.div>
      </AnimatePresence>

      <button
        className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </motion.div>
  );
}
