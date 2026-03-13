'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export interface CardSnapshot {
  slug: string;
  imageSrc: string;
  fromRect: DOMRect;
  toRect: DOMRect;
  fromRadius: number;
  toRadius: number;
  title: string;
  tagline: string;
  tags: string[];
  ambientColor: string;
}

interface Props {
  // toGrid: exitCards === enterCards (same cards morph from stack to grid positions)
  // toStack: exitCards = filtered grid cards leaving, enterCards = 4 stack featured cards entering
  exitCards: CardSnapshot[];
  enterCards: CardSnapshot[];
  direction: 'toGrid' | 'toStack';
  onComplete: () => void;
}

const EXIT_DURATION  = 500;
const ENTER_DURATION = 620;
const EXIT_STAGGER   = 90;
const ENTER_STAGGER  = 90;

function easeInExpo(t: number) {
  return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function tweenEl(
  el: HTMLElement,
  from: { x: number; y: number; w: number; h: number; r: number; o: number },
  to:   { x: number; y: number; w: number; h: number; r: number; o: number },
  duration: number,
  delay: number,
  easeFn: (t: number) => number,
): Promise<void> {
  return new Promise(resolve => {
    el.style.transform    = `translate(${from.x}px, ${from.y}px)`;
    el.style.width        = `${from.w}px`;
    el.style.height       = `${from.h}px`;
    el.style.borderRadius = `${from.r}px`;
    el.style.opacity      = `${from.o}`;

    let startTime: number | null = null;
    let rafId: number;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - delay;

      if (elapsed < 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const t = Math.min(elapsed / duration, 1);
      const e = easeFn(t);

      el.style.transform    = `translate(${from.x + (to.x - from.x) * e}px, ${from.y + (to.y - from.y) * e}px)`;
      el.style.width        = `${from.w + (to.w - from.w) * e}px`;
      el.style.height       = `${from.h + (to.h - from.h) * e}px`;
      el.style.borderRadius = `${from.r + (to.r - from.r) * e}px`;
      el.style.opacity      = `${from.o + (to.o - from.o) * e}`;

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        resolve();
      }
    };

    rafId = requestAnimationFrame(tick);
    void rafId;
  });
}

export function ViewTransition({ exitCards, enterCards, direction, onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const toGrid = direction === 'toGrid';

  const vw = typeof window !== 'undefined' ? window.innerWidth  : 1440;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 900;

  useEffect(() => {
    doneRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    const exitEls  = Array.from(container.querySelectorAll<HTMLElement>('[data-exit]'));
    const enterEls = Array.from(container.querySelectorAll<HTMLElement>('[data-enter]'));
    if (exitEls.length === 0 && enterEls.length === 0) return;

    const exitLastIdx  = exitEls.length - 1;
    const enterLastIdx = enterEls.length - 1;

    // ── PHASE 1: EXIT ─────────────────────────────────────────────
    // toGrid  → exit toward top-left corner
    // toStack → exit toward bottom-right corner

    const exitPromises = exitCards.map((card, i) => {
      const el = exitEls[i];
      if (!el) return Promise.resolve();

      const fw = card.fromRect.width;
      const fh = card.fromRect.height;
      const tw = card.toRect.width;
      const th = card.toRect.height;

      const exitAspect = tw / th;
      const exitSize   = Math.min(fw, fh) * 0.09;
      const exitW = exitSize * exitAspect;
      const exitH = exitSize;

      const cornerX = toGrid ? -(exitW / 2) : vw - (exitW / 2);
      const cornerY = toGrid ? -(exitH / 2) : vh - (exitH / 2);

      const delay = toGrid ? i * EXIT_STAGGER : (exitLastIdx - i) * EXIT_STAGGER;

      return tweenEl(
        el,
        { x: card.fromRect.left, y: card.fromRect.top, w: fw,    h: fh,    r: card.fromRadius, o: 1 },
        { x: cornerX,            y: cornerY,           w: exitW, h: exitH, r: 8,               o: 0 },
        EXIT_DURATION,
        delay,
        easeInExpo,
      );
    });

    // ── PHASE 2: ENTER ────────────────────────────────────────────
    // toGrid  → enter from bottom-right corner
    // toStack → enter from top-left corner

    Promise.all(exitPromises).then(() => {
      // Teleport enter cards to corner (invisible)
      enterCards.forEach((card, i) => {
        const el = enterEls[i];
        if (!el) return;
        const tw = card.toRect.width;
        const th = card.toRect.height;
        const entrW = tw * 0.09;
        const entrH = th * 0.09;
        const cornerX = toGrid ? vw - (entrW / 2) : -(entrW / 2);
        const cornerY = toGrid ? vh - (entrH / 2) : -(entrH / 2);

        el.style.transform    = `translate(${cornerX}px, ${cornerY}px)`;
        el.style.width        = `${entrW}px`;
        el.style.height       = `${entrH}px`;
        el.style.borderRadius = '8px';
        el.style.opacity      = '0';
      });

      const enterPromises = enterCards.map((card, i) => {
        const el = enterEls[i];
        if (!el) return Promise.resolve();

        const tw = card.toRect.width;
        const th = card.toRect.height;
        const entrW = tw * 0.09;
        const entrH = th * 0.09;
        const cornerX = toGrid ? vw - (entrW / 2) : -(entrW / 2);
        const cornerY = toGrid ? vh - (entrH / 2) : -(entrH / 2);

        const delay = toGrid ? i * ENTER_STAGGER : (enterLastIdx - i) * ENTER_STAGGER;

        return tweenEl(
          el,
          { x: cornerX,          y: cornerY,         w: entrW,             h: entrH,              r: 8,             o: 0 },
          { x: card.toRect.left, y: card.toRect.top, w: card.toRect.width, h: card.toRect.height, r: card.toRadius, o: 1 },
          ENTER_DURATION,
          delay,
          easeOutExpo,
        );
      });

      // Wait for the last enter card to finish
      const lastEnterIdx = toGrid ? enterLastIdx : 0;
      enterPromises[lastEnterIdx]?.then(() => {
        if (!doneRef.current) {
          doneRef.current = true;
          onComplete();
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allExitLastIdx = exitCards.length - 1;
  const allEnterLastIdx = enterCards.length - 1;

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 200, pointerEvents: 'none' }}>
      {/* Exit cards — animate out */}
      {exitCards.map((card, i) => (
        <div
          key={`exit-${card.slug}`}
          data-exit
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'hidden',
            zIndex: allExitLastIdx - i + 1,
            opacity: 0,
            willChange: 'transform, width, height, opacity',
          }}
        >
          <Image src={card.imageSrc} alt="" fill sizes="90vw" style={{ objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 'clamp(14px, 2.5vw, 36px)',
            left: 'clamp(14px, 2.5vw, 36px)',
            pointerEvents: 'none',
            zIndex: 2,
          }}>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(16px, 3vw, 48px)',
              fontWeight: 600,
              color: 'var(--neutral-50)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>{card.title}</p>
            {card.tagline && (
              <p style={{
                margin: '3px 0 0',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(10px, 1vw, 13px)',
                fontWeight: 400,
                color: 'var(--neutral-50)',
                opacity: 0.65,
                whiteSpace: 'nowrap',
              }}>{card.tagline}</p>
            )}
          </div>
        </div>
      ))}

      {/* Enter cards — animate in (may differ from exit cards in toStack direction) */}
      {enterCards.map((card, i) => (
        <div
          key={`enter-${card.slug}`}
          data-enter
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'hidden',
            zIndex: allEnterLastIdx - i + 1,
            opacity: 0,
            willChange: 'transform, width, height, opacity',
          }}
        >
          <Image src={card.imageSrc} alt="" fill sizes="90vw" style={{ objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 'clamp(14px, 2.5vw, 36px)',
            left: 'clamp(14px, 2.5vw, 36px)',
            pointerEvents: 'none',
            zIndex: 2,
          }}>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(16px, 3vw, 48px)',
              fontWeight: 600,
              color: 'var(--neutral-50)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>{card.title}</p>
            {card.tagline && (
              <p style={{
                margin: '3px 0 0',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(10px, 1vw, 13px)',
                fontWeight: 400,
                color: 'var(--neutral-50)',
                opacity: 0.65,
                whiteSpace: 'nowrap',
              }}>{card.tagline}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
