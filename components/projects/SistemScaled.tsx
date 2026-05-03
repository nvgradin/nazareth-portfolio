'use client';

import Image from 'next/image';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SistemScaled as SistemScaledType } from '@/lib/project-layout.types';
import { EditorialBlock } from './EditorialBlock';
import { Lightbox } from '@/components/ui/Lightbox';
import styles from './SistemScaled.module.css';

const STATS = [
  { value: 4, label: 'portales' },
  { value: 8, label: 'meses' },
  { value: 1, label: 'arquitectura' },
];

function AnimatedStat({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <div className={styles.stat}>
      <span ref={ref} className={styles.statValue}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

const DEFAULT_FLOW_BG = '#252851';
const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  data: SistemScaledType;
}

export function SistemScaled({ data }: Props) {
  const { editorial, steps, logos, background, replicaNote } = data;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = steps.map(s => ({ src: s.image, alt: s.imageAlt }));

  return (
    <>
      <EditorialBlock
        label={editorial.label}
        title={editorial.title}
        subtitle={editorial.subtitle}
        content={editorial.content}
        className={styles.section}
      >
        {/* Fila stats + nota (izq) / logos (der) */}
        <div className={styles.metaRow}>
          <div className={styles.metaLeft}>
            <div className={styles.stats}>
              {STATS.map((s, i) => (
                <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.15} />
              ))}
            </div>
            {replicaNote && (
              <div className={styles.replicaNote}>
                <p className={styles.replicaHighlight}>
                  <span className={styles.replicaArrow}>→</span>{replicaNote.highlight}
                </p>
                <p className={styles.replicaIslands}>{replicaNote.islands}</p>
                <p className={styles.replicaBody}>{replicaNote.body}</p>
              </div>
            )}
          </div>

          {logos && logos.length > 0 && (
            <div className={styles.metaRight}>
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
        </div>

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
                <button
                  className={styles.imageWrap}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Ver ${step.title}`}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className={styles.image}
                    sizes="100vw"
                    quality={90}
                  />
                </button>
                <div className={styles.stepText}>
                  <span className={styles.stepNumber}>{String(step.step).padStart(2, '0')}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                  {step.detail && <p className={styles.stepDetail}>{step.detail}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP: fila imágenes full bleed + fila textos */}
          <div className={styles.desktopImages}>
            {steps.map((step, i) => (
              <motion.button
                key={i}
                className={styles.imageWrap}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ver ${step.title}`}
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
                <span className={styles.zoomHint}>＋</span>
              </motion.button>
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
                {step.detail && <p className={styles.stepDetail}>{step.detail}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </EditorialBlock>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={images[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
            onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
