'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectHero as ProjectHeroType } from '@/lib/project-layout.types';
import styles from './ProjectHero.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: ProjectHeroType;
}

export function ProjectHero({ data }: Props) {
  const { title, subtitle, intro, logo, roles, year, context } = data;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda: Logo + Nombre + Roles + Context */}
        <div className={styles.left}>
          {logo && (
            <motion.div
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <Image
                src={logo}
                alt={`${title} logo`}
                width={160}
                height={160}
                className={styles.logoImage}
              />
            </motion.div>
          )}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            {title}
          </motion.h1>
          {roles.length > 0 && (
            <motion.p
              className={styles.roles}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              {roles.join(' | ')}
            </motion.p>
          )}
          {context && (
            <motion.p
              className={styles.context}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33, ease }}
            >
              {context}
            </motion.p>
          )}
          {year && (
            <motion.p
              className={styles.year}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              {year}
            </motion.p>
          )}
        </div>

        {/* Columna derecha: Subtítulo + Intro */}
        <div className={styles.right}>
          {subtitle && (
            <motion.h2
              className={styles.subtitle}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              {subtitle}
            </motion.h2>
          )}
          {Array.isArray(intro) ? (
            intro.map((paragraph, i) => (
              <motion.p
                key={i}
                className={styles.intro}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease }}
              >
                {paragraph}
              </motion.p>
            ))
          ) : (
            <motion.p
              className={styles.intro}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
