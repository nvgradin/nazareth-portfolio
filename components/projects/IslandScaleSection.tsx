'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { IslandScaleSection as IslandScaleSectionType } from '@/lib/project-layout.types';
import styles from './IslandScaleSection.module.css';

interface Props {
  data: IslandScaleSectionType;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

function AnimatedStat({ target, label, delay }: { target: number; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, delay]);

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statNumber}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function IslandScaleSection({ data }: Props) {
  const { label, title, subtitle, body, items, stats, background } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={background ? { background } : undefined}
    >
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.body}>{body}</p>
      </motion.div>

      {/* Logos en fila — debajo del body */}
      <div className={styles.logos}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.logoWrap}
            style={item.logo.scale ? { width: `${180 * item.logo.scale}px`, height: `${64 * item.logo.scale}px` } : undefined}
          >
            <Image
              src={item.logo.src}
              alt={item.logo.alt}
              fill
              className={styles.logoImg}
              sizes="240px"
            />
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {/* Línea punteada conectora */}
        <div className={styles.connector} aria-hidden="true" />

        {items.map((item, i) => (
          <motion.div
            key={item.number}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={styles.card}
          >
            {/* Mockup */}
            <div className={styles.mockupWrap}>
              <div className={styles.badge}>{item.number}</div>
              <div className={styles.mockupInner}>
                <Image
                  src={item.mockup}
                  alt={`Mockup ${item.name}`}
                  fill
                  className={styles.mockupImg}
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className={styles.content}>
              <p className={styles.islandName}>{item.name}</p>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        {stats.map((stat, i) => (
          <div key={stat.id} className={styles.statWrapper}>
            <AnimatedStat target={stat.target} label={stat.label} delay={i * 0.15} />
            {i < stats.length - 1 && <div className={styles.statDivider} aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
