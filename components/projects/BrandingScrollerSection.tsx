'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { BrandingScroller } from '@/lib/project-layout.types';
import styles from './BrandingScrollerSection.module.css';

interface Props {
  data: BrandingScroller;
}

export function BrandingScrollerSection({ data }: Props) {
  const { title, description, bullets, background, images } = data;
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => {
      const isPortraitMobile = window.innerWidth < 768;
      const isLandscapeMobile = window.innerHeight <= 500 && window.innerWidth < 1024;
      setIsMobile(isPortraitMobile || isLandscapeMobile);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!mounted) return null;

  return isMobile
    ? <MobileLayout data={data} />
    : <DesktopLayout data={data} />;
}

/* ── DESKTOP: lógica original intacta ─────────────────────── */
function DesktopLayout({ data }: { data: BrandingScroller }) {
  const { title, description, bullets, background, images } = data;
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
      const wrapperHeight = wrapper.offsetHeight;
      const viewportH = window.innerHeight;
      const scrollableDistance = wrapperHeight - viewportH;
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
      <div className={styles.sticky} style={{ backgroundColor: background }}>
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {bullets && bullets.length > 0 && (
              <ul className={styles.bullets}>
                {bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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

/* ── MOBILE: scroll hijack solo sobre el bloque de imágenes ── */
function MobileLayout({ data }: { data: BrandingScroller }) {
  const { title, description, bullets, background, images } = data;
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const trackStyle = getComputedStyle(track);
      const gap = parseFloat(trackStyle.columnGap) || 0;
      const pl = parseFloat(trackStyle.paddingLeft) || 0;
      const pr = parseFloat(trackStyle.paddingRight) || 0;
      const totalW = pl + cards.reduce((acc, c) => acc + c.getBoundingClientRect().width, 0) + gap * Math.max(0, cards.length - 1) + pr;
      setOverflow(Math.max(0, totalW - window.innerWidth));
    };
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [images.length]);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track || overflow <= 0) return;
    const handleScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      track.style.transform = `translateX(${-progress * overflow}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [overflow]);

  return (
    <>
      {/* Bloque 1: texto sobre fondo crema */}
      <div className={styles.mobileTextBlock}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className={styles.bullets}>
            {bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Bloque 2: mismo patrón que desktop — outer da recorrido, sticky se fija */}
      <div
        ref={outerRef}
        className={styles.mobileScrollOuter}
        style={{
          backgroundColor: background,
          height: overflow > 0 ? `calc(100vh + ${overflow}px)` : '100vh',
        }}
      >
        <div
          className={styles.mobileScrollSticky}
          style={{ backgroundColor: background }}
        >
          <div ref={trackRef} className={styles.mobileTrack}>
            {images.map((img, i) => (
              <div
                key={i}
                className={`${styles.mobileCard}${img.orientation === 'vertical' ? ` ${styles.mobileCardVertical}` : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Branding ${i + 1}`}
                  fill
                  sizes="70vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
