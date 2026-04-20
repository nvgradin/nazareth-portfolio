'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, Transition, Variants } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectOrigin } from '@/lib/getNextProject';
import styles from './NextProjectSection.module.css';

interface Props {
  nextProject: ProjectWithLayout;
  href: string;
  from: ProjectOrigin;
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

const imageTransition: Transition = { duration: 0.9, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

const arrowTransition: Transition = { type: 'spring', stiffness: 300, damping: 24 };

export function NextProjectSection({ nextProject, href }: Props) {
  const prefersReduced = useReducedMotion();
  const cover = nextProject.cover ?? nextProject.thumbnail.src;

  return (
    <section className={styles.section}>
      <Link href={href} className={styles.link} aria-label={`Siguiente proyecto: ${nextProject.title}`}>
        {/* Imagen de fondo */}
        <motion.div
          className={styles.imageWrap}
          variants={prefersReduced ? undefined : imageVariants}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          transition={prefersReduced ? undefined : imageTransition}
        >
          <Image
            src={cover}
            alt={nextProject.title}
            fill
            sizes="100vw"
            className={styles.image}
            priority={false}
          />
        </motion.div>

        {/* Overlay degradado */}
        <div className={styles.overlay} />

        {/* Contenido */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Siguiente proyecto</p>
          <h2 className={styles.title}>{nextProject.title}</h2>
          {nextProject.tagline && (
            <p className={styles.tagline}>{nextProject.tagline}</p>
          )}
          <p className={styles.categories}>
            {nextProject.tags.join(' · ')}
          </p>
          <motion.span
            className={styles.arrow}
            whileHover={prefersReduced ? undefined : { x: 8 }}
            transition={prefersReduced ? undefined : arrowTransition}
            aria-hidden="true"
          >
            →
          </motion.span>
        </div>
      </Link>
    </section>
  );
}
