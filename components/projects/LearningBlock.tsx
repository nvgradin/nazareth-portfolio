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
  const { label, title, intro, columns } = data;
  const isParagraphMode = columns.every(c => !c.subtitle);
  const isMultiColumn = isParagraphMode && columns.length > 1;

  return (
    <section className={styles.block}>
      {isParagraphMode ? (
        isMultiColumn ? (
          /* Modo multi-columna: label + título arriba, columnas debajo */
          <div className={styles.multiColumnWrapper}>
            <div className={styles.multiColumnHeader}>
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
            <div className={styles.multiColumnGrid}>
              {columns.map((column, index) => (
                <motion.p
                  key={index}
                  className={styles.columnText}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
                >
                  {column.text}
                </motion.p>
              ))}
            </div>
          </div>
        ) : (
        /* Modo editorial: título izq + 1 párrafo der */
        <div className={styles.editorialWrapper}>
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
          <div className={styles.paragraphs}>
            {columns.map((column, index) => (
              <motion.div
                key={index}
                className={styles.paragraph}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
              >
                <p className={styles.text}>{column.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        )
      ) : (
        /* Modo columnas legacy */
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
                {column.subtitle && <h3 className={styles.subtitle}>{column.subtitle}</h3>}
                <p className={styles.text}>{column.text}</p>
              </motion.div>
            ))}
          </div>
        </TextContainer>
      )}
    </section>
  );
}
