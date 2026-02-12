'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { EditorialContent } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './EditorialBlock.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  title: string;
  subtitle: string;
  content: EditorialContent;
  children?: ReactNode;
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
export function EditorialBlock({ title, subtitle, content, children }: Props) {
  const isRich = typeof content !== 'string';

  return (
    <section className={styles.block}>
      {/* Layout 2 columnas: título izquierda, subtítulo + texto derecha */}
      <div className={styles.top}>
        <TextContainer className={styles.container}>
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
        </TextContainer>
      </div>

      {/* Contenido adicional (parallax image, triptych, etc.) */}
      {children}
    </section>
  );
}
