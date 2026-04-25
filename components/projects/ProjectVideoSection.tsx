'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
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

export function ProjectVideoSection({ data }: Props) {
  const { editorial, src, poster, background } = data;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  }

  function handleVideoClick() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function handleEnded() {
    setPlaying(false);
  }

  return (
    <section>
      <EditorialBlock
        title={editorial.title}
        subtitle={editorial.subtitle}
        content={editorial.content}
      />
      <div
        className={styles.stage}
        style={background ? { background } : undefined}
      >
        <div className={styles.videoWrapper} onClick={handleVideoClick}>
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            poster={poster}
            playsInline
            onEnded={handleEnded}
          />

          <AnimatePresence>
            {!playing && (
              <motion.button
                className={styles.playBtn}
                onClick={e => { e.stopPropagation(); handlePlay(); }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                aria-label="Reproducir vídeo"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polygon points="8,4 24,14 8,24" fill="currentColor" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
