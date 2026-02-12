'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageCompare.module.css';

interface ImageData {
  src: string;
  alt: string;
}

interface Labels {
  before?: string;
  after?: string;
}

interface Props {
  before: ImageData;
  after: ImageData;
  initial?: number;
  labels?: Labels;
  background?: string;
  className?: string;
}

export function ImageCompare({
  before,
  after,
  initial = 0.5,
  labels = { before: 'Antes', after: 'Después' },
  background,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [position, setPosition] = useState(initial);

  const clamp = (val: number) => Math.min(1, Math.max(0, val));

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition(clamp((clientX - rect.left) / rect.width));
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => clamp(p - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => clamp(p + step));
    }
  }, []);

  // Prevent text selection while dragging
  useEffect(() => {
    const prevent = (e: Event) => {
      if (isDragging.current) e.preventDefault();
    };
    document.addEventListener('selectstart', prevent);
    return () => document.removeEventListener('selectstart', prevent);
  }, []);

  return (
    <section className={`${styles.section} ${className || ''}`}>
      <div
        className={styles.inner}
        style={background ? { backgroundColor: background } : undefined}
      >
        <div
          ref={containerRef}
          className={styles.container}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* After image (full, background) + label "Después" */}
          <div className={styles.imageLayer}>
            <Image
              src={after.src}
              alt={after.alt}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 80vw, 36vw"
            />
            {labels.after && (
              <span className={[styles.label, styles.labelAfter].join(' ')}>
                {labels.after}
              </span>
            )}
          </div>

          {/* Before image (clipped) + label "Antes" */}
          <div
            className={styles.imageLayer}
            style={{ clipPath: `inset(0 ${100 - position * 100}% 0 0)` }}
          >
            <Image
              src={before.src}
              alt={before.alt}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 80vw, 36vw"
            />
            {labels.before && (
              <span className={[styles.label, styles.labelBefore].join(' ')}>
                {labels.before}
              </span>
            )}
          </div>

          {/* Handle: línea + knob */}
          <div
            className={styles.handle}
            style={{ left: `${position * 100}%` }}
            role="slider"
            aria-label="Comparar antes y después"
            aria-valuenow={Math.round(position * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            <div className={styles.line} />
            <div className={styles.knob}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
