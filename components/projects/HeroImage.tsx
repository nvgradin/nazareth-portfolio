'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroImage.module.css';

export interface HeroImageData {
  src: string;
  alt: string;
  background: string;
  borderRadius?: number;
  caption?: string;
}

interface Props {
  data: HeroImageData;
}

export function HeroImage({ data }: Props) {
  const { src, alt, background, borderRadius = 16, caption } = data;

  return (
    <section className={styles.section} style={{ background }}>
      <motion.figure
        className={styles.figure}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.imageWrap} style={{ borderRadius }}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 92vw, 80vw"
            quality={95}
            style={{ borderRadius }}
          />
        </div>
        {caption && (
          <figcaption className={styles.caption}>{caption}</figcaption>
        )}
      </motion.figure>
    </section>
  );
}
