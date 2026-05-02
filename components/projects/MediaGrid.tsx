'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MediaGrid as MediaGridType, MediaGridImage } from '@/lib/project-layout.types';
import { Lightbox } from '@/components/ui/Lightbox';
import { parseInline } from '@/components/ui';
import styles from './MediaGrid.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: MediaGridType;
}

export function MediaGrid({ data }: Props) {
  const { title, subtitle, body, row1, row2, background } = data;
  const allImages: MediaGridImage[] = [...row1, ...row2];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + allImages.length) % allImages.length : 0), [allImages.length]);
  const next = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % allImages.length : 0), [allImages.length]);

  return (
    <section className={styles.section} style={background ? { backgroundColor: background } : undefined}>
      {/* Header 2 columnas — mismo patrón que EditorialBlock */}
      <div className={styles.header}>
        <motion.h2
          className={styles.headerTitle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          {title}
        </motion.h2>
        <motion.div
          className={styles.headerText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <h3 className={styles.headerSubtitle}>{subtitle}</h3>
          <p className={styles.headerBody}>{parseInline(body)}</p>
        </motion.div>
      </div>

      {/* Grid full-bleed */}
      <div className={styles.grid}>
        <div className={styles.row2}>
          {row1.map((img, i) => (
            <GridCell key={img.src} image={img} index={i} onClick={openLightbox} />
          ))}
        </div>
        <div className={styles.row3}>
          {row2.map((img, i) => (
            <GridCell key={img.src} image={img} index={row1.length + i} onClick={openLightbox} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={allImages[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function GridCell({ image, index, onClick }: { image: MediaGridImage; index: number; onClick: (i: number) => void }) {
  return (
    <button
      className={styles.cell}
      onClick={() => onClick(index)}
      aria-label={`Ver imagen: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        className={styles.cellImage}
      />
      <div className={styles.cellOverlay} />
    </button>
  );
}
