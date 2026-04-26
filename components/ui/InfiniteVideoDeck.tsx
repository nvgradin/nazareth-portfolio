'use client';

import * as React from 'react';
import { motion, AnimatePresence, useAnimationFrame, useInView, motionValue, useReducedMotion, animate } from 'framer-motion';

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
  deckStyle?: React.CSSProperties;
}

type DeckState = 'browse' | 'watch';

export function InfiniteVideoDeck({
  items,
  autoPlay = true,
  autoPlayInterval = 3500,
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
  deckStyle,
}: Props) {
  const n = items.length;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [deckState, setDeckState] = React.useState<DeckState>('browse');
  const [muted, setMuted] = React.useState(true);
  const [videoProgress, setVideoProgress] = React.useState(0);
  const [showHint, setShowHint] = React.useState(true);
  const [controlsVisible, setControlsVisible] = React.useState(false);
  const controlsTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRefs = React.useRef<Map<string, HTMLVideoElement>>(new Map());
  const rafRef = React.useRef<number | null>(null);

  const springProgress = React.useMemo(() => motionValue(0), []);

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

  const currentFront = ((activeIndex % n) + n) % n;

  const advanceTo = React.useCallback((next: number) => {
    setActiveIndex(next);
  }, []);

  // Hide drag hint after 4s o al primer drag
  React.useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // Hide controls timer cleanup
  React.useEffect(() => {
    return () => { if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current); };
  }, []);

  const showControlsBriefly = React.useCallback(() => {
    setControlsVisible(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setControlsVisible(false), 2500);
  }, []);

  // Browse autoplay timer
  React.useEffect(() => {
    if (!autoPlay || !inView || deckState !== 'browse' || n <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => prev + 1);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, inView, deckState, n]);

  // Spring animate springProgress → activeIndex
  React.useEffect(() => {
    const controls = animate(springProgress, activeIndex, {
      type: 'spring',
      stiffness: 200,
      damping: 25,
    });
    return controls.stop;
  }, [activeIndex, springProgress]);

  // Video progress RAF (watch state only)
  React.useEffect(() => {
    if (deckState !== 'watch') {
      setVideoProgress(0);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = () => {
      const frontItem = items[currentFront];
      if (frontItem?.type === 'video') {
        const video = videoRefs.current.get(frontItem.id);
        if (video && video.duration > 0) {
          setVideoProgress(video.currentTime / video.duration);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [deckState, currentFront, items]);

  // Sync video play/pause/mute/loop based on state and front card
  React.useEffect(() => {
    items.forEach((item, i) => {
      if (item.type !== 'video') return;
      const video = videoRefs.current.get(item.id);
      if (!video) return;

      if (i === currentFront) {
        video.muted = muted;
        video.loop = deckState === 'browse';
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
        video.loop = true;
      }
    });
  }, [activeIndex, deckState, muted, items]);

  // Per-frame layout update
  useAnimationFrame(() => {
    if (reduceMotion || !inView || n <= 1) return;
    const p = springProgress.get();
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
    if (el) {
      el.muted = muted; // set initial muted state; effect owns it from here
      videoRefs.current.set(id, el);
    } else {
      videoRefs.current.delete(id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(m => !m);
  };

  const handleFrontClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (deckState === 'browse') {
      setDeckState('watch');
      setMuted(m => m ? false : m); // unmute only if currently muted
      showControlsBriefly();
      const frontItem = items[currentFront];
      if (frontItem?.type === 'video') {
        const video = videoRefs.current.get(frontItem.id);
        if (video) {
          video.currentTime = 0;
        }
      }
    } else {
      setDeckState('browse');
      setMuted(true);
      setControlsVisible(false);
    }
  };

  const handleVideoEnded = () => {
    if (deckState !== 'watch') return;
    // Advance and stay in watch state
    setActiveIndex(prev => prev + 1);
    // Next video will be unmuted/no-loop via the sync effect
  };

  const handlePanEnd = (_: unknown, info: { offset: { y: number } }) => {
    const threshold = 50;
    if (info.offset.y < -threshold || info.offset.y > threshold) {
      setShowHint(false);
      if (deckState === 'watch') setDeckState('browse');
      if (info.offset.y < -threshold) advanceTo(activeIndex + 1);
      else advanceTo(activeIndex - 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 30) return;
    if (deckState === 'watch') setDeckState('browse');
    if (e.deltaY > 0) advanceTo(activeIndex + 1);
    else advanceTo(activeIndex - 1);
  };

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

  const MuteIcon = () => muted ? (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.17 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"/>
    </svg>
  ) : (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.17 19 8.83 19 12C19 15.17 16.89 17.83 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z"/>
    </svg>
  );

  return (
      <div
        ref={containerRef}
        className={className}
        style={{ position: 'relative', width: '100%', height: '100%', ...deckStyle }}
      >
        <style>{`
          @keyframes deckHintFade {
            0%   { opacity: 0; transform: translateY(4px); }
            20%  { opacity: 1; transform: translateY(0); }
            70%  { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes deckHintBounce {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-4px); }
          }
          .deck-ctrl { transition: opacity 0.3s; }
        `}</style>
        {/* Drag hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: 'easeIn' }}
              style={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                pointerEvents: 'none',
                color: 'var(--neutral-50)',
                opacity: 0.6,
                fontFamily: 'var(--font-accent)',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                zIndex: 10,
              }}
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: 16, lineHeight: 1 }}
              >
                ↕
              </motion.span>
              <span>arrastra</span>
            </motion.div>
          )}
        </AnimatePresence>
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
          onWheel={handleWheel}
        >
          {items.map((item, i) => {
            const v = animatedValues[i];
            const isFront = i === currentFront;
            const isWatch = deckState === 'watch';

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
                onHoverStart={() => { if (isFront && isWatch) showControlsBriefly(); }}
                onTouchStart={() => { if (isFront && isWatch) showControlsBriefly(); }}
              >
                {/* Media */}
                {item.type === 'video' ? (
                  <video
                    ref={setVideoRef(item.id)}
                    src={item.src}
                    poster={item.poster}
                    playsInline
                    preload="metadata"
                    onEnded={isFront ? handleVideoEnded : undefined}
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

                {/* Gradient overlay — deeper in watch to help controls visibility */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: isWatch && isFront
                    ? 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
                  pointerEvents: 'none',
                  transition: 'background 0.3s',
                }} />

                {/* Browse: big centered play button */}
                {isFront && !isWatch && (
                  <button
                    onClick={handleFrontClick}
                    aria-label="Ver completo"
                    style={{
                      position: 'absolute', inset: 0, zIndex: 9,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'none', border: 'none', cursor: 'pointer',
                      opacity: 0.4,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}
                  >
                    <svg width={52} height={52} viewBox="0 0 24 24" fill="rgba(255,255,255,0.95)" style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.6))' }}>
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </button>
                )}

                {/* Title */}
                {showTitle && item.title && isFront && (
                  <div style={{
                    position: 'absolute', left: 16, right: 64,
                    bottom: isWatch ? 52 : 52,
                    color: '#fff', fontSize: '0.9375rem', fontWeight: 500,
                    lineHeight: 1.4, pointerEvents: 'none',
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    zIndex: 11,
                  }}>
                    {item.title}
                  </div>
                )}

                {/* Controls bar — always visible on front card */}
                {isFront && (
                  <div
                    className="deck-ctrl"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      zIndex: 12,
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '0 12px 12px',
                      opacity: isWatch ? (controlsVisible ? 1 : 0) : 1,
                      pointerEvents: isWatch ? (controlsVisible ? 'auto' : 'none') : 'auto',
                    }}
                  >
                    {/* Pause (watch) or invisible spacer (browse keeps layout stable) */}
                    {isWatch && (
                      <button
                        onClick={handleFrontClick}
                        aria-label="Volver a browse"
                        style={{
                          flexShrink: 0,
                          background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
                          border: 'none', borderRadius: '50%', width: 30, height: 30,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', cursor: 'pointer',
                        }}
                      >
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1"/>
                          <rect x="14" y="4" width="4" height="16" rx="1"/>
                        </svg>
                      </button>
                    )}

                    {/* Progress track — only in watch */}
                    {isWatch && (
                      <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${videoProgress * 100}%`, background: '#E28B00', borderRadius: 2, transition: 'none' }} />
                      </div>
                    )}

                    {/* Spacer so mute stays right when no progress bar (browse) */}
                    {!isWatch && <div style={{ flex: 1 }} />}

                    {/* Mute — always visible, right side */}
                    {item.type === 'video' && (
                      <button
                        onClick={toggleMute}
                        aria-label={muted ? 'Activar audio' : 'Silenciar'}
                        style={{
                          flexShrink: 0,
                          background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
                          border: 'none', borderRadius: '50%', width: 30, height: 30,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', cursor: 'pointer',
                        }}
                      >
                        <MuteIcon />
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
  );
}
