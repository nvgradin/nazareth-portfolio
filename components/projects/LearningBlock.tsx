'use client';

import { motion } from 'framer-motion';
import { LearningBlock as LearningBlockType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './LearningBlock.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: LearningBlockType;
}

export function LearningBlock({ data }: Props) {
  const { title, intro, columns } = data;

  return (
    <section className={styles.block}>
      <TextContainer>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            {title}
          </motion.h2>
          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {intro}
          </motion.p>
        </div>

        <div className={styles.columns}>
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className={styles.column}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease }}
            >
              <h3 className={styles.subtitle}>{column.subtitle}</h3>
              <p className={styles.text}>{column.text}</p>
            </motion.div>
          ))}
        </div>
      </TextContainer>
    </section>
  );
}
