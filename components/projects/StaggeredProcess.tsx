'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StaggeredProcessData } from '@/lib/project-layout.types';
import styles from './StaggeredProcess.module.css';

interface Props {
  data: StaggeredProcessData;
}

export function StaggeredProcess({ data }: Props) {
  const { label = 'Proceso', steps } = data;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Columna izquierda: baja con el scroll (empieza arriba, termina abajo)
  const leftY = useTransform(scrollYProgress, [0, 0.5, 1], ['-18%', '0%', '12%']);
  // Columna derecha: sube con el scroll (empieza abajo, termina arriba)
  const rightY = useTransform(scrollYProgress, [0, 0.5, 1], ['18%', '0%', '-12%']);
  // Opacidad global para fadeout al salir
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0, 1, 1, 0]);

  const [step1, step2, step3] = steps;

  return (
    <section className={styles.section} ref={ref}>
      {/* Label con línea */}
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.line} aria-hidden />
      </div>

      <motion.div className={styles.grid} style={{ opacity }}>
        {/* Columna izquierda — arriba */}
        <motion.div className={`${styles.col} ${styles.colLeft}`} style={{ y: leftY }}>
          <StepBlock step={step1} />
        </motion.div>

        {/* Columna central — centrada, sin movimiento */}
        <div className={`${styles.col} ${styles.colCenter}`}>
          <StepBlock step={step2} />
        </div>

        {/* Columna derecha — abajo */}
        <motion.div className={`${styles.col} ${styles.colRight}`} style={{ y: rightY }}>
          <StepBlock step={step3} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StepBlock({ step }: { step: StaggeredProcessData['steps'][number] }) {
  return (
    <div className={styles.step}>
      <span className={styles.number}>{String(step.number).padStart(2, '0')}</span>
      <h3 className={styles.title}>{step.title}</h3>
      <div className={styles.body}>
        {Array.isArray(step.description) ? (
          step.description.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{step.description}</p>
        )}
      </div>
    </div>
  );
}
