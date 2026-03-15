'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ExpandingPhoto.module.css';

interface Props {
  src: string;
  alt: string;
  onExpand?: (expanded: boolean) => void;
  onClick: (rect: DOMRect) => void;
}

const hoverEase = [0.25, 0.46, 0.45, 0.94] as const;

const EXPAND_W = 0.88;
const EXPAND_H = 0.82;

function getExpandedTarget() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    left: vw * (1 - EXPAND_W) / 2,
    top: vh * (1 - EXPAND_H) / 2,
    width: vw * EXPAND_W,
    height: vh * EXPAND_H,
  };
}

export function ExpandingPhoto({ src, alt, onExpand, onClick }: Props) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [enterRect, setEnterRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const exitRectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  function enter() {
    if (!thumbRef.current) return;
    const r = thumbRef.current.getBoundingClientRect();
    exitRectRef.current = { left: r.left, top: r.top, width: r.width, height: r.height };
    setEnterRect({ left: r.left, top: r.top, width: r.width, height: r.height });
    onExpand?.(true);
  }

  function leave() {
    if (thumbRef.current) {
      const r = thumbRef.current.getBoundingClientRect();
      exitRectRef.current = { left: r.left, top: r.top, width: r.width, height: r.height };
    }
    setEnterRect(null);
    onExpand?.(false);
  }

  function handleExpandedClick() {
    const rect = expandedRef.current?.getBoundingClientRect();
    if (rect) onClick(rect);
  }

  const isExpanded = enterRect !== null;
  const target = isExpanded ? getExpandedTarget() : null;
  const exitRect = exitRectRef.current ?? enterRect ?? { left: 0, top: 0, width: 444, height: 444 };

  const panel = (
    <AnimatePresence>
      {enterRect && target && (
        <motion.div
          ref={expandedRef}
          className={styles.expanded}
          initial={{ left: enterRect.left, top: enterRect.top, width: enterRect.width, height: enterRect.height }}
          animate={{ left: target.left, top: target.top, width: target.width, height: target.height }}
          exit={{ left: exitRect.left, top: exitRect.top, width: exitRect.width, height: exitRect.height }}
          transition={{ duration: 0.45, ease: hoverEase }}
          onMouseLeave={leave}
          onClick={handleExpandedClick}
        >
          <Image src={src} alt={alt} fill className={styles.expandedImg} />
          <div className={styles.overlay}>
            <span className={styles.label}>Sobre mí</span>
            <span className={styles.sub}>Conóceme →</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Thumb — se oculta mientras el panel expandido está visible */}
      <div
        ref={thumbRef}
        className={styles.thumb}
        onMouseEnter={enter}
        style={{ visibility: isExpanded ? 'hidden' : 'visible' }}
      >
        <Image src={src} alt={alt} fill className={styles.thumbImg} />
      </div>

      {/* Panel expandido — portaled al body para escapar de cualquier transform/overflow ancestro */}
      {typeof document !== 'undefined' && createPortal(panel, document.body)}
    </>
  );
}
