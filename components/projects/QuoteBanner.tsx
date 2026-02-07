'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { QuoteBanner as QuoteBannerType } from '@/lib/project-layout.types';
import styles from './QuoteBanner.module.css';

interface Props {
  data: QuoteBannerType;
}

export function QuoteBanner({ data }: Props) {
  const { quote, author, role, backgroundImage } = data;
  const bannerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !imgRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate parallax when banner is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (scrollProgress - 0.5) * 80; // -40 to +40 px movement
        imgRef.current.style.transform = `scale(1.2) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={bannerRef} className={styles.banner}>
      {/* Background image with parallax */}
      <div className={styles.bg}>
        <Image
          ref={imgRef}
          src={backgroundImage.src}
          alt={backgroundImage.alt || 'Quote background'}
          fill
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.container}>
        <blockquote className={styles.quote}>{quote}</blockquote>
        {(author || role) && (
          <div className={styles.attribution}>
            {author && <span className={styles.author}>{author}</span>}
            {author && role && <span className={styles.separator}>—</span>}
            {role && <span className={styles.role}>{role}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
