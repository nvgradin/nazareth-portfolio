'use client';

import { motion } from 'framer-motion';
import { TextBlock as TextBlockType } from '@/lib/project-layout.types';
import { TextContainer, parseInline } from '@/components/ui';
import styles from './TextBlock.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: TextBlockType;
}

export function TextBlock({ data }: Props) {
  const { variant, label, title, intro, columns, background } = data;

  if (variant === 'editorial') {
    return (
      <section className={styles.block} style={background ? { background } : undefined}>
        <div className={styles.editorialWrapper}>
          <div className={styles.editorialLeft}>
            {label && (
              <motion.span
                className={styles.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease }}
              >
                {label}
              </motion.span>
            )}
            <motion.h2
              className={styles.editorialTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              {title}
            </motion.h2>
          </div>
          <div className={styles.paragraphs}>
            {columns.map((column, index) => (
              <motion.p
                key={index}
                className={styles.paragraphText}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
              >
                {parseInline(column.text)}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'grid') {
    return (
      <section className={styles.block}>
        <div className={styles.gridWrapper}>
          <div className={styles.gridHeader}>
            {label && (
              <motion.span
                className={styles.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease }}
              >
                {label}
              </motion.span>
            )}
            <motion.h2
              className={styles.editorialTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              {title}
            </motion.h2>
          </div>
          <div
            className={styles.gridColumns}
            style={{ '--col-count': columns.length } as React.CSSProperties}
          >
            {columns.map((column, index) => (
              <motion.p
                key={index}
                className={styles.gridText}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
              >
                {parseInline(column.text)}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // variant === 'legacy'
  return (
    <section className={styles.block}>
      <TextContainer>
        <div className={styles.legacyHeader}>
          <motion.h2
            className={styles.legacyTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            {title}
          </motion.h2>
          {intro && (
            <motion.p
              className={styles.intro}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              {intro}
            </motion.p>
          )}
        </div>
        <div className={styles.legacyColumns}>
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className={styles.legacyColumn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease }}
            >
              {column.subtitle && <h3 className={styles.subtitle}>{column.subtitle}</h3>}
              <p className={styles.paragraphText}>{parseInline(column.text)}</p>
            </motion.div>
          ))}
        </div>
      </TextContainer>
    </section>
  );
}
