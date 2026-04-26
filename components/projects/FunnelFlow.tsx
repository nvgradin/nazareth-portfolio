'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FunnelFlow as FunnelFlowType } from '@/lib/project-layout.types';
import { EditorialBlock } from './EditorialBlock';
import styles from './FunnelFlow.module.css';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  data: FunnelFlowType;
}

export function FunnelFlow({ data }: Props) {
  const { editorial, steps, background } = data;

  return (
    <EditorialBlock
      title={editorial.title}
      subtitle={editorial.subtitle}
      content={editorial.content}
      className={styles.section}
      style={background ? { background } : undefined}
    >
      <div className={styles.cards}>
        {steps.map((step, i) => (
          <div key={i} className={styles.cardRow}>
            {/* Card */}
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
            >
              {/* Card header: número + label + título */}
              <div className={styles.cardHeader}>
                <span className={styles.stepMeta}>
                  <span className={styles.stepNumber}>{String(step.step).padStart(2, '0')}</span>
                  {step.label && (
                    <>
                      <span className={styles.stepDash}>—</span>
                      <span className={styles.stepLabel}>{step.label}</span>
                    </>
                  )}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>

              {/* Imagen */}
              <div className={styles.imageWrap}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 767px) 90vw, 30vw"
                  quality={90}
                />
              </div>

              {/* Descripción */}
              <p className={styles.stepDesc}>{step.description}</p>

              {/* Badge herramienta — opcional */}
              {step.tool && (
                <span className={styles.toolBadge}>{step.tool}</span>
              )}
            </motion.div>

            {/* Flecha conectora entre cards (no tras la última) */}
            {i < steps.length - 1 && (
              <motion.div
                className={styles.arrow}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.4, ease: EASE }}
                aria-hidden
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </EditorialBlock>
  );
}
