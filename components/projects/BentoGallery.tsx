'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BentoGallery as BentoGalleryType,
  BentoColumn,
  BentoCell,
  BentoFreeItem,
} from '@/lib/project-layout.types';
import styles from './BentoGallery.module.css';

// ============================================
// CONSTANTES
// ============================================

const GAP = 24;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

// ============================================
// TIPOS INTERNOS
// ============================================

interface FlatImage {
  src: string;
  alt: string;
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

interface Props {
  data: BentoGalleryType;
}

export function BentoGallery({ data }: Props) {
  const { mode = 'fixed', background } = data;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Aplanar todas las imágenes en una lista ordenada
  const allImages: FlatImage[] = [];
  if (mode === 'fixed' && data.columns) {
    for (const column of data.columns) {
      for (const cell of column.cells) {
        allImages.push({ src: cell.src, alt: cell.alt });
      }
    }
  } else if (data.items) {
    for (const item of data.items) {
      allImages.push({ src: item.src, alt: item.alt });
    }
  }

  const handleOpen = useCallback((src: string) => {
    const idx = allImages.findIndex((img) => img.src === src);
    setLightboxIndex(idx >= 0 ? idx : null);
  }, [allImages]);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null,
    );
  }, [allImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null,
    );
  }, [allImages.length]);

  return (
    <section
      className={styles.bento}
      style={{ backgroundColor: background || '#1E3A5F' }}
    >
      {mode === 'fixed' ? (
        <>
          <FixedLayout columns={data.columns || []} onImageClick={handleOpen} />
          <MobileList columns={data.columns || []} onImageClick={handleOpen} />
        </>
      ) : (
        <FreeGrid items={data.items || []} onImageClick={handleOpen} />
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={allImages[lightboxIndex]}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// ============================================
// LIGHTBOX
// ============================================

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: FlatImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
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
      onClick={onClose}
    >
      <div className={styles.lightboxBackdrop} />

      {/* Prev */}
      <button
        className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={image.src}
          className={styles.lightboxImageWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className={styles.lightboxImage}
            sizes="90vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
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

// ============================================
// FIXED LAYOUT (COLUMNAS CON RATIOS)
// ============================================

function FixedLayout({ columns, onImageClick }: { columns: BentoColumn[]; onImageClick: (src: string) => void }) {
  const totalWidth = columns.reduce((sum, col) => sum + col.width, 0);

  return (
    <div className={styles.fixedLayout}>
      {columns.map((column, colIndex) => (
        <Column key={colIndex} column={column} totalWidth={totalWidth} colIndex={colIndex} onImageClick={onImageClick} />
      ))}
    </div>
  );
}

function Column({ column, totalWidth, colIndex, onImageClick }: { column: BentoColumn; totalWidth: number; colIndex: number; onImageClick: (src: string) => void }) {
  const widthPercent = (column.width / totalWidth) * 100;
  const totalGaps = (totalWidth - 1) * GAP;
  const gapDeduction = (column.width / totalWidth) * totalGaps;

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${GAP}px`,
    flex: `0 0 calc(${widthPercent}% - ${gapDeduction}px)`,
  };

  return (
    <div style={columnStyle}>
      {column.cells.map((cell, cellIndex) => (
        <CellComponent
          key={cellIndex}
          cell={cell}
          totalCells={column.cells.length}
          delay={colIndex * 0.1 + cellIndex * 0.08}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}

function CellComponent({ cell, totalCells, delay, onImageClick }: { cell: BentoCell; totalCells: number; delay: number; onImageClick: (src: string) => void }) {
  const totalGaps = (totalCells - 1) * GAP;
  const gapDeduction = cell.ratio * totalGaps;

  const cellStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    flex: `0 0 calc(${cell.ratio * 100}% - ${gapDeduction}px)`,
    cursor: 'pointer',
  };

  return (
    <motion.div
      className={styles.cell}
      style={cellStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease }}
      onClick={() => onImageClick(cell.src)}
    >
      <Image
        src={cell.src}
        alt={cell.alt}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </motion.div>
  );
}

// ============================================
// MOBILE LIST
// ============================================

function MobileList({ columns, onImageClick }: { columns: BentoColumn[]; onImageClick: (src: string) => void }) {
  const allCells: BentoCell[] = [];
  for (const column of columns) {
    for (const cell of column.cells) {
      allCells.push(cell);
    }
  }

  const mobileCells = allCells.slice(0, 6);

  return (
    <div className={styles.mobileList}>
      {mobileCells.map((cell, index) => (
        <motion.div
          key={index}
          className={styles.mobileCell}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.08, ease }}
          onClick={() => onImageClick(cell.src)}
          style={{ cursor: 'pointer' }}
        >
          <Image
            src={cell.src}
            alt={cell.alt}
            fill
            className={styles.image}
            sizes="100vw"
          />
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// FREE GRID
// ============================================

function FreeGrid({ items, onImageClick }: { items: BentoFreeItem[]; onImageClick: (src: string) => void }) {
  return (
    <div className={styles.freeGrid}>
      {items.map((item, index) => {
        const colSpan = item.colSpan || 1;
        const rowSpan = item.rowSpan || 1;

        const cellStyle: React.CSSProperties = {
          gridColumn: `span ${colSpan}`,
          gridRow: `span ${rowSpan}`,
          cursor: 'pointer',
        };

        return (
          <motion.div
            key={index}
            className={styles.freeCell}
            style={cellStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            onClick={() => onImageClick(item.src)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={styles.image}
              sizes={`${colSpan >= 2 ? '50vw' : '25vw'}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
