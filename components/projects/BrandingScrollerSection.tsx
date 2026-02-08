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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  // Medir el overflow real: ancho total del track menos el ancho visible de la columna
  useEffect(() => {
    const track = trackRef.current;
    const column = columnRef.current;
    if (!track || !column) return;

    const measure = () => {
      // Con width: max-content, el track tiene su ancho intrínseco total
      const totalTrackWidth = track.getBoundingClientRect().width;
      // Ancho visible de la columna contenedora
      const visibleWidth = column.getBoundingClientRect().width;
      const diff = totalTrackWidth - visibleWidth;
      setOverflow(Math.max(0, diff));
    };

    // Esperar a que las imágenes y el layout se estabilicen
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [images.length]);

  // Mapear scroll vertical a translate horizontal
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track || overflow <= 0) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportH = window.innerHeight;

      // Distancia scrollable = altura del wrapper menos un viewport
      const scrollableDistance = wrapperHeight - viewportH;
      if (scrollableDistance <= 0) return;

      // Progreso: 0 cuando top del wrapper está en top del viewport,
      // 1 cuando bottom del wrapper llega al bottom del viewport
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
          {/* Columna izquierda: texto */}
          <div className={styles.textColumn}>
            <p className={styles.label}>Branding</p>
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

          {/* Columna derecha: scroller horizontal via translateX */}
          <div ref={columnRef} className={styles.scrollerColumn}>
            <div ref={trackRef} className={styles.track}>
              {images.map((img, i) => (
                <div key={i} className={styles.card}>
                  <Image
                    src={img.src}
                    alt={img.alt || `Branding ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 55vw"
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
