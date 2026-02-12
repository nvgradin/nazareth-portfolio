'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShowcaseTriptych as ShowcaseTriptychType } from '@/lib/project-layout.types';
import styles from './ShowcaseTriptych.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: ShowcaseTriptychType;
}

export function ShowcaseTriptych({ data }: Props) {
  const { left, centerTop, centerBottom, right } = data;

  const cells = [
    { media: left, alt: 'Showcase left', className: styles.cell1, delay: 0 },
    { media: centerTop, alt: 'Showcase center top', className: styles.cell2, delay: 0.08 },
    { media: centerBottom, alt: 'Showcase center bottom', className: styles.cell3, delay: 0.16 },
    { media: right, alt: 'Showcase right', className: styles.cell4, delay: 0.24 },
  ];

  return (
    <section className={styles.grid}>
      {cells.map((cell, i) => (
        <motion.div
          key={i}
          className={`${styles.cell} ${cell.className}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: cell.delay, ease }}
        >
          <Image
            src={cell.media.src}
            alt={cell.media.alt || cell.alt}
            fill
            className={styles.img}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </section>
  );
}
