'use client';

import * as React from 'react';
import { motion, useAnimationFrame, useInView, motionValue, useReducedMotion, animate } from 'framer-motion';

export interface DeckItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title?: string;
}

interface Props {
  items: DeckItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // ms
  showTitle?: boolean;
  cardRadius?: number;
  cardWidth?: number;
  cardHeight?: number;
  yOffset?: number;
  xOffset?: number;
  scaleStep?: number;
  stackDepth?: number;
  centerScale?: number;
  dimOpacity?: number;
  dimBlur?: number;
  depthShadow?: boolean;
  background?: React.ReactNode;
  className?: string;
}

export function InfiniteVideoDeck({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  showTitle = false,
  cardRadius = 24,
  cardWidth = 260,
  cardHeight = 420,
  yOffset = 48,
  xOffset = 0,
  scaleStep = 0.5,
  stackDepth = 5,
  centerScale = 1.04,
  dimOpacity = 0.85,
  dimBlur = 3,
  depthShadow = true,
  background,
  className = '',
}: Props) {
  const n = items.length;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const videoRefs = React.useRef<Map<string, HTMLVideoElement>>(new Map());

  const progress = React.useMemo(() => motionValue(0), []);

  const clamp = React.useCallback((v: number, a: number, b: number) => Math.min(b, Math.max(a, v)), []);

  const wrapSigned = React.useCallback((d: number) => {
    if (n <= 1) return 0;
    const half = n / 2;
    let x = ((d % n) + n) % n;
    if (x > half) x -= n;
    return x;
  }, [n]);

  const effectiveDepth = React.useMemo(() =>
    clamp(Math.floor(stackDepth), 1, Math.max(1, n)),
    [n, stackDepth, clamp]
  );

  const visibleRange = React.useMemo(() => {
    if (effectiveDepth <= 0) return { min: 0, max: -1 };
    const behind = effectiveDepth - 1;
    const half = Math.floor(behind / 2);
    return { min: -half - 0.5, max: behind - half + 0.5 };
  }, [effectiveDepth]);

  // motionValues per card
  const animatedValues = React.useMemo(() =>
    items.map(() => ({
      transform: motionValue('translate3d(0px, 0px, 0px) scale(1)'),
      opacity: motionValue(1),
      filter: motionValue('none'),
      zIndex: motionValue(1),
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length]
  );

  // Autoplay
  React.useEffect(() => {
    if (!autoPlay || !inView || isHovered || n <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => prev + 1);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, inView, isHovered, n]);

  // Spring animate progress → activeIndex
  React.useEffect(() => {
    const controls = animate(progress, activeIndex, {
      type: 'spring',
      stiffness: 200,
      damping: 25,
    });
    return controls.stop;
  }, [activeIndex, progress]);

  // Sync video play/pause/mute based on which card is front
  React.useEffect(() => {
    const currentFront = ((activeIndex % n) + n) % n;
    items.forEach((item, i) => {
      if (item.type !== 'video') return;
      const video = videoRefs.current.get(item.id);
      if (!video) return;
      video.muted = muted;
      if (i === currentFront) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, muted, items, n]);

  // Per-frame layout update
  useAnimationFrame(() => {
    if (reduceMotion || !inView || n <= 1) return;
    const p = progress.get();
    for (let i = 0; i < n; i++) {
      const v = animatedValues[i];
      if (!v) continue;
      const d = wrapSigned(i - p);
      const within = d >= visibleRange.min && d <= visibleRange.max;
      if (!within) {
        v.transform.set('translate3d(0px, 99999px, 0px) scale(0.98)');
        v.opacity.set(0);
        v.filter.set(dimBlur > 0 ? `blur(${dimBlur}px)` : 'none');
        v.zIndex.set(0);
        continue;
      }
      const absD = Math.abs(d);
      const tt = effectiveDepth <= 1 ? 0 : clamp(absD / (effectiveDepth - 1), 0, 1);
      const right = xOffset * absD;
      const sign = d < 0 ? -1 : 1;
      const y = sign * yOffset * Math.pow(absD, 0.75);
      const baseScale = Math.pow(1 - scaleStep, absD);
      const bump = Math.max(0, 1 - Math.min(1, Math.abs(d) / 0.6));
      const s = baseScale + (centerScale - 1) * bump;
      v.transform.set(`translate3d(${right}px, ${y}px, 0px) scale(${s})`);
      const distToEdge = Math.min(Math.abs(d - visibleRange.min), Math.abs(visibleRange.max - d));
      const edgeFade = clamp(distToEdge / 0.5, 0, 1);
      const baseOp = dimOpacity + (1 - dimOpacity) * (1 - tt);
      v.opacity.set(clamp(baseOp * edgeFade, 0, 1));
      const centerClear = Math.max(0, 1 - Math.min(1, Math.abs(d) / 0.6));
      const b = dimBlur * tt * (1 - centerClear);
      v.filter.set(b > 0.01 ? `blur(${b}px)` : 'none');
      v.zIndex.set(2000 - absD * 10);
    }
  });

  const setVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
    if (el) videoRefs.current.set(id, el);
    else videoRefs.current.delete(id);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(m => {
      const next = !m;
      videoRefs.current.forEach(v => { v.muted = next; });
      return next;
    });
  };

  const handlePanEnd = (_: unknown, info: { offset: { y: number } }) => {
    if (info.offset.y < -50) setActiveIndex(p => p + 1);
    else if (info.offset.y > 50) setActiveIndex(p => p - 1);
  };

  const currentFront = ((activeIndex % n) + n) % n;

  const cardBase: React.CSSProperties = {
    position: 'absolute',
    width: cardWidth,
    height: cardHeight,
    borderRadius: cardRadius,
    overflow: 'hidden',
    willChange: 'transform, filter, opacity',
    background: '#000',
    boxShadow: depthShadow ? '0 8px 32px rgba(0,0,0,0.25)' : undefined,
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {background && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          {background}
        </div>
      )}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: 900,
          cursor: 'grab',
        }}
        onPanEnd={handlePanEnd}
      >
        {items.map((item, i) => {
          const v = animatedValues[i];
          const isFront = i === currentFront;

          return (
            <motion.div
              key={item.id}
              style={{
                ...cardBase,
                transform: v?.transform,
                opacity: v?.opacity,
                filter: v?.filter,
                zIndex: v?.zIndex,
              }}
              onClick={() => setActiveIndex(p => p + 1)}
            >
              {/* Media */}
              {item.type === 'video' ? (
                <video
                  ref={setVideoRef(item.id)}
                  src={item.src}
                  poster={item.poster}
                  muted={muted}
                  playsInline
                  loop
                  autoPlay={isFront}
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.title ?? ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Title */}
              {showTitle && item.title && isFront && (
                <div style={{
                  position: 'absolute', bottom: 52, left: 16, right: 16,
                  color: '#fff', fontSize: '0.9375rem', fontWeight: 500,
                  lineHeight: 1.4, pointerEvents: 'none',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}>
                  {item.title}
                </div>
              )}

              {/* Mute button — front only, video only */}
              {isFront && item.type === 'video' && (
                <button
                  onClick={toggleMute}
                  aria-label={muted ? 'Activar audio' : 'Silenciar'}
                  style={{
                    position: 'absolute', bottom: 14, left: 14, zIndex: 10,
                    background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
                    border: 'none', borderRadius: '50%', width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', cursor: 'pointer',
                  }}
                >
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
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
