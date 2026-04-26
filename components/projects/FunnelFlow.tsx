'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FunnelFlow as FunnelFlowType } from '@/lib/project-layout.types';
import styles from './FunnelFlow.module.css';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  data: FunnelFlowType;
}

export function FunnelFlow({ data }: Props) {
  const { editorial, steps, background } = data;

  return (
    <section
      className={styles.section}
      style={background ? { background } : undefined}
    >
      {/* Editorial header — mismo patrón que EditorialBlock */}
      <div className={styles.editorial}>
        <motion.h2
          className={styles.editorialTitle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {editorial.title}
        </motion.h2>
        <div className={styles.editorialRight}>
          <motion.p
            className={styles.editorialSubtitle}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {editorial.subtitle}
          </motion.p>
          <motion.p
            className={styles.editorialContent}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            {editorial.content}
          </motion.p>
        </div>
      </div>

      {/* Steps */}
      <div className={styles.flow}>
        {steps.map((step, i) => (
          <div key={i} className={styles.stepWrapper}>
            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
            >
              {/* Imagen vertical */}
              <div className={styles.imageWrap}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 28vw"
                  quality={90}
                />
              </div>

              {/* Texto */}
              <div className={styles.stepText}>
                <span className={styles.stepNumber}>{String(step.step).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>

            {/* Conector → entre pasos (solo en desktop, no tras el último) */}
            {i < steps.length - 1 && (
              <motion.div
                className={styles.connector}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.3, ease: EASE }}
                aria-hidden
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className={styles.connectorArrow}
                >
                  →
                </motion.span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
