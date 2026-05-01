'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SistemScaled as SistemScaledType } from '@/lib/project-layout.types';
import { EditorialBlock } from './EditorialBlock';
import styles from './SistemScaled.module.css';

const DEFAULT_FLOW_BG = '#252851';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  data: SistemScaledType;
}

export function SistemScaled({ data }: Props) {
  const { editorial, steps, logos, background } = data;

  return (
    <EditorialBlock
      title={editorial.title}
      subtitle={editorial.subtitle}
      content={editorial.content}
      className={styles.section}
    >
      {/* Logos — sobre fondo crema, debajo del content editorial */}
      {logos && logos.length > 0 && (
        <div className={styles.editorialLogos}>
          {logos.map((logo, i) => (
            <div
              key={i}
              className={styles.editorialLogoWrap}
              style={logo.scale ? { width: `${180 * logo.scale}px`, height: `${64 * logo.scale}px` } : undefined}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className={styles.editorialLogo}
                sizes="240px"
              />
            </div>
          ))}
        </div>
      )}

      {/* Pasos — fondo azul Cíes */}
      <div
        className={styles.flow}
        style={{
          '--funnel-cols': steps.length,
          '--funnel-bg': background ?? DEFAULT_FLOW_BG,
        } as React.CSSProperties}
      >

        {/* MÓVIL: imagen + texto por paso */}
        <div className={styles.mobileSteps}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.mobileStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className={styles.image}
                  sizes="100vw"
                  quality={90}
                />
              </div>
              <div className={styles.stepText}>
                <span className={styles.stepNumber}>{String(step.step).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP: fila imágenes full bleed + fila textos */}
        <div className={styles.desktopImages}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.imageWrap}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className={styles.image}
                sizes="25vw"
                quality={90}
              />
            </motion.div>
          ))}
        </div>

        <div className={styles.texts}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.stepText}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            >
              <span className={styles.stepNumber}>{String(step.step).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </EditorialBlock>
  );
}
