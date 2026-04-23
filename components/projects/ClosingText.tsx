'use client';

import { motion } from 'framer-motion';
import { ClosingText as ClosingTextType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './ClosingText.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: ClosingTextType;
}

export function ClosingText({ data }: Props) {
  const { title, content, background } = data;
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <section className={styles.section} style={background ? { backgroundColor: background } : undefined}>
      <div className={styles.container}>
        <TextContainer>
          {title && (
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              {title}
            </motion.h2>
          )}
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={styles.content}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (title ? 0.1 : 0) + i * 0.08, ease }}
            >
              {p}
            </motion.p>
          ))}
        </TextContainer>
      </div>
    </section>
  );
}
