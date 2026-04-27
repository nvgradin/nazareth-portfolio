'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroImage.module.css';

export interface HeroImageData {
  src: string;
  alt: string;
  background: string;
  borderRadius?: number;  // px, default 16
}

interface Props {
  data: HeroImageData;
}

export function HeroImage({ data }: Props) {
  const { src, alt, background, borderRadius = 16 } = data;

  return (
    <section className={styles.section} style={{ background }}>
      <motion.div
        className={styles.imageWrap}
        style={{ borderRadius }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 92vw, 80vw"
          quality={95}
          style={{ borderRadius }}
        />
      </motion.div>
    </section>
  );
}
