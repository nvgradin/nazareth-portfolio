'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ParallaxImage.module.css';

interface Props {
  src: string;
  alt: string;
  intensity?: number; // Parallax intensity (default: 150)
}

export function ParallaxImage({ src, alt, intensity = 150 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate parallax when image is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (scrollProgress - 0.5) * intensity;
        imgRef.current.style.transform = `scale(1.2) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className={styles.image}
        sizes="100vw"
      />
    </div>
  );
}
