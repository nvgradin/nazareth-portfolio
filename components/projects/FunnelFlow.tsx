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
              {/* Imagen horizontal */}
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
          </div>
        ))}
      </div>
    </EditorialBlock>
  );
}
