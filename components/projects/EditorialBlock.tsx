'use client';

import { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { EditorialContent } from '@/lib/project-layout.types';
import styles from './EditorialBlock.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  title: string;
  subtitle: string;
  content: EditorialContent;
  columns?: string[];
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * EditorialBlock - Bloque reutilizable con layout 2 columnas
 *
 * Uso:
 * - Arquitectura de Información: con ParallaxImage
 * - Branding: con ShowcaseTriptych
 * - Web: con WebPanel/mockups
 * - Audiovisuales: con video/galería
 */
export function EditorialBlock({ title, subtitle, content, columns, children, className, style }: Props) {
  const isRich = typeof content !== 'string';
  const hasColumns = columns && columns.length > 0;

  return (
    <section className={[styles.block, className].filter(Boolean).join(' ')} style={style}>
      <div className={styles.top}>
        {/* Modo columnas: header apilado (título + subtitle en 1 col) */}
        {hasColumns ? (
          <div className={styles.containerStacked}>
            <motion.h2
              className={styles.title}
              style={{ whiteSpace: 'pre-line' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              {title}
            </motion.h2>
            <motion.h3
              className={styles.subtitleStacked}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              {subtitle}
            </motion.h3>
          </div>
        ) : (
          /* Modo legacy: 2 columnas título izq + subtitle/content der */
          <div className={styles.container}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              {title}
            </motion.h2>
            <motion.div
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <h3 className={styles.subtitle}>{subtitle}</h3>
              {isRich ? (
                <>
                  <p className={styles.content}>{content.text}</p>
                  <ul className={styles.bullets}>
                    {content.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className={styles.content}>{content}</p>
              )}
            </motion.div>
          </div>
        )}
      </div>

      {/* Columnas de texto opcionales (modo 3 columnas justificadas) */}
      {columns && columns.length > 0 && (
        <div className={styles.columnsWrapper}>
          <div className={styles.columnsGrid}>
            {columns.map((text, i) => (
              <motion.p
                key={i}
                className={styles.columnText}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      )}

      {/* Contenido adicional (parallax image, triptych, etc.) */}
      {children}
    </section>
  );
}
