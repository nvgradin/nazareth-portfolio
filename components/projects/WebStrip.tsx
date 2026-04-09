'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './WebStrip.module.css';

export interface WebStripImage {
  src: string;
  alt: string;
}

interface Props {
  images: WebStripImage[];
  background?: string;
  label?: string;
}

// Cada imagen tiene un offset vertical distinto basado en su índice
// para crear el efecto de cascada/tira cinematográfica
const OFFSETS = [0, -60, -30, -90]; // px de translateY base por imagen

function StripItem({ img, index, total }: { img: WebStripImage; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Cada imagen se mueve a velocidad ligeramente distinta → efecto parallax
  const speed = 0.06 + index * 0.03;
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed * 10, -60 * speed * 10]);

  // La imagen interior se mueve más lento que el contenedor → parallax interno
  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  const baseOffset = OFFSETS[index % OFFSETS.length];

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      style={{ y, marginTop: baseOffset }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.imageClip}>
        <motion.div className={styles.imageInner} style={{ y: imageY }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 38vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function WebStrip({ images, background = '#1a1a2e', label }: Props) {
  return (
    <section className={styles.section} style={{ backgroundColor: background }}>
      {label && (
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {label}
        </motion.p>
      )}

      <div className={styles.strip}>
        {images.map((img, i) => (
          <StripItem key={i} img={img} index={i} total={images.length} />
        ))}
      </div>
    </section>
  );
}
