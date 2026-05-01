'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ScalableModel as ScalableModelType } from '@/lib/project-layout.types';
import styles from './ScalableModel.module.css';

interface Props {
  data: ScalableModelType;
}

export function ScalableModel({ data }: Props) {
  const { label, title, subtitle, body, items, background, accentColor = '#252851' } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={background ? { background } : undefined}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {label && <span className={styles.label}>{label}</span>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.body}>{body}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {/* Connector line */}
        <motion.div
          className={styles.connector}
          style={{ transformOrigin: 'left center' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />

        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.15 }}
          >
            {/* Dot on connector */}
            <div className={styles.dot} style={{ background: accentColor }} />

            {/* Web screenshot */}
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 80vw, 25vw"
              />
            </div>

            {/* Card footer */}
            <div className={styles.cardFooter}>
              {item.logo ? (
                <div className={styles.logoWrapper}>
                  <Image
                    src={item.logo}
                    alt={item.logoAlt ?? item.name}
                    fill
                    className={styles.logo}
                    sizes="120px"
                  />
                </div>
              ) : (
                <span className={styles.logoPlaceholder}>{item.name}</span>
              )}
              <span className={styles.date}>{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
