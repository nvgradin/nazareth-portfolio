'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { BrandingScroller } from '@/lib/project-layout.types';
import { parseInline } from '@/components/ui';
import styles from './BrandingScrollerSection.module.css';

interface Props {
  data: BrandingScroller;
}

export function BrandingScrollerSection({ data }: Props) {
  const [isNarrow, setIsNarrow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => {
      setIsNarrow(window.innerWidth < 1024);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!mounted) return null;

  return isNarrow
    ? <NarrowLayout data={data} />
    : <DesktopLayout data={data} />;
}

/* ── DESKTOP ≥ 1024px: scroll hijack vertical → horizontal ── */
function DesktopLayout({ data }: { data: BrandingScroller }) {
  const { title, description, bullets, paragraphs, background, images } = data;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const column = columnRef.current;
    if (!track || !column) return;
    const measure = () => {
      const cards = track.children;
      const trackStyle = getComputedStyle(track);
      const gap = parseFloat(trackStyle.columnGap) || 0;
      const paddingLeft = parseFloat(trackStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(trackStyle.paddingRight) || 0;
      let totalCardsWidth = 0;
      for (let i = 0; i < cards.length; i++) {
        totalCardsWidth += (cards[i] as HTMLElement).getBoundingClientRect().width;
      }
      const totalTrackWidth = paddingLeft + totalCardsWidth + gap * Math.max(0, cards.length - 1) + paddingRight;
      const visibleWidth = column.getBoundingClientRect().width;
      setOverflow(Math.max(0, totalTrackWidth - visibleWidth));
    };
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [images.length]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track || overflow <= 0) return;
    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      track.style.transform = `translateX(${-progress * overflow}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [overflow]);

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: overflow > 0 ? `calc(100vh + ${overflow}px)` : '100vh' }}
    >
      <div className={styles.sticky} data-header-theme="dark" style={{ backgroundColor: background }}>
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{parseInline(description)}</p>
            {bullets && bullets.length > 0 && (
              <ul className={styles.bullets}>
                {bullets.map((item, i) => (
                  <li key={i}>{parseInline(item)}</li>
                ))}
              </ul>
            )}
            {paragraphs && paragraphs.length > 0 && (
              <div className={styles.paragraphsBlock}>
                {paragraphs.map((p, i) => (
                  <p key={i} className={styles.paragraph}>{parseInline(p)}</p>
                ))}
              </div>
            )}
          </div>
          <div ref={columnRef} className={styles.scrollerColumn}>
            <div ref={trackRef} className={styles.track}>
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.card}${img.orientation === 'vertical' ? ` ${styles.cardVertical}` : ''}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Branding ${i + 1}`}
                    fill
                    sizes="55vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── NARROW < 1024px: texto arriba + carrusel auto-scroll abajo ── */
function NarrowLayout({ data }: { data: BrandingScroller }) {
  const { title, description, bullets, paragraphs, background, images } = data;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;
    const speed = 0.5;

    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };

    const onTouchStart = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const onTouchEnd = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 2000);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Texto: fondo crema, flujo normal */}
      <div className={styles.narrowText} data-header-theme="dark">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{parseInline(description)}</p>
        {bullets && bullets.length > 0 && (
          <ul className={styles.bullets}>
            {bullets.map((item, i) => (
              <li key={i}>{parseInline(item)}</li>
            ))}
          </ul>
        )}
        {paragraphs && paragraphs.length > 0 && (
          <div className={styles.paragraphsBlock}>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{parseInline(p)}</p>
            ))}
          </div>
        )}
      </div>

      {/* Carrusel: fondo del proyecto, scroll horizontal con auto-scroll */}
      <div className={styles.narrowCarousel} data-header-theme="light" style={{ backgroundColor: background }}>
        <div ref={scrollRef} className={styles.narrowTrack}>
          {images.map((img, i) => (
            <div
              key={i}
              className={data.imageMode === 'wide'
                ? styles.narrowCardWide
                : `${styles.narrowCard}${img.orientation === 'vertical' ? ` ${styles.narrowCardVertical}` : ''}`
              }
            >
              <Image
                src={img.src}
                alt={img.alt || `Branding ${i + 1}`}
                fill
                sizes="(max-width: 768px) 82vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
