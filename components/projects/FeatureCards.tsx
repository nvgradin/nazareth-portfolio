'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/lib/project-layout.types';
import styles from './FeatureCards.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: FeatureCard[];
}

export function FeatureCards({ data }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map((card, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={card.image.src}
                  alt={card.image.alt || card.title}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
