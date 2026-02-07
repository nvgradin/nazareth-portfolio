'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { EditorialBlock as EditorialBlockType } from '@/lib/project-layout.types';
import styles from './EditorialBlock.module.css';

interface Props {
  data: EditorialBlockType;
}

export function EditorialBlock({ data }: Props) {
  const { label, title, content, image } = data;
  const imageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !imgRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate parallax when image is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (scrollProgress - 0.5) * 60; // -30 to +30 px movement
        imgRef.current.style.transform = `scale(1.2) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.block}>
      {/* Parte superior: Label + Texto */}
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.label}>{label}</div>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
          </div>
        </div>
      </div>

      {/* Imagen full-width con parallax */}
      <div ref={imageRef} className={styles.image}>
        <Image
          ref={imgRef}
          src={image.src}
          alt={image.alt || title}
          fill
          className={styles.img}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
