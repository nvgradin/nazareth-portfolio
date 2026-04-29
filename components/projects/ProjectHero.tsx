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
  const { title, subtitle, intro, result, logo, roles, year, context, team, heroBg } = data;

  return (
    <>
      {/* Mobile: imagen de fondo con gradiente — solo visible en < 1024px */}
      {heroBg && (
        <div className={styles.mobileBgWrapper}>
          <Image
            src={heroBg}
            alt={`${title} — imagen de portada`}
            fill
            className={styles.mobileBgImage}
            sizes="100vw"
            priority
          />
          <div className={styles.mobileBgGradient} />
          {/* Título anclado abajo sobre el gradiente */}
          <div className={styles.mobileBgContent}>
            <motion.h1
              className={styles.mobileBgTitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {title}
            </motion.h1>
            {roles.length > 0 && (
              <motion.p
                className={styles.mobileBgRoles}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                {roles.join(' · ')}
              </motion.p>
            )}
            {(context || year) && (
              <motion.p
                className={styles.mobileBgMeta}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease }}
              >
                {[context, year].filter(Boolean).join(' — ')}
              </motion.p>
            )}
          </div>
        </div>
      )}

    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda: Logo + Nombre + Roles + Context */}
        <div className={styles.left}>
          {logo && (
            <motion.div
              className={`${styles.logo} ${heroBg ? styles.hiddenMobile : ''}`}
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
            className={`${styles.title} ${heroBg ? styles.hiddenMobile : ''}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            {title}
          </motion.h1>
          {roles.length > 0 && (
            <motion.p
              className={`${styles.roles} ${heroBg ? styles.hiddenMobile : ''}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              {roles.join(' | ')}
            </motion.p>
          )}
          {(context || team) && (
            <div className={styles.contextBlock}>
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
              {team && (
                <motion.p
                  className={styles.team}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38, ease }}
                >
                  {team}
                </motion.p>
              )}
            </div>
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
          {/* Logo en mobile — solo visible cuando hay heroBg */}
          {heroBg && logo && (
            <motion.div
              className={styles.mobileLogoBlock}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <Image
                src={logo}
                alt={`${title} logo`}
                width={120}
                height={120}
                className={styles.mobileLogoImage}
              />
            </motion.div>
          )}
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
          {result && (
            <motion.p
              className={styles.result}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease }}
            >
              <span className={styles.resultArrow}>→</span>
              {result}
            </motion.p>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
