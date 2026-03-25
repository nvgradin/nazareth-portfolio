'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NavCursorImage.module.css';

interface Props {
  images: string[];   // 1 imagen = estática, >1 = slideshow
  visible: boolean;
  cursorX: number;
  cursorY: number;
}

const SLIDE_INTERVAL = 900; // ms entre slides

export function NavCursorImage({ images, visible, cursorX, cursorY }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Slideshow automático cuando hay varias imágenes
  useEffect(() => {
    if (!visible || images.length <= 1) {
      setSlideIndex(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSlideIndex(i => (i + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible, images]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: cursorX,
            y: cursorY,
          }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{
            opacity: { duration: 0.25, ease: 'easeOut' },
            scale:   { duration: 0.25, ease: 'easeOut' },
            x: { type: 'spring', stiffness: 120, damping: 20, mass: 0.6 },
            y: { type: 'spring', stiffness: 120, damping: 20, mass: 0.6 },
          }}
          style={{ pointerEvents: 'none' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[slideIndex]}
              className={styles.imgWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Image
                src={images[slideIndex]}
                alt=""
                fill
                sizes="280px"
                className={styles.img}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
