'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import styles from './ExploreCard.module.css';

interface Props {
  project: ProjectWithLayout;
}

export function ExploreCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const isNew = project.status === 'new';
  const cover = project.cover ?? project.thumbnail.src;

  const hoverBg = project.ambientGradient ?? project.ambientColor ?? 'rgba(0,0,0,0.4)';

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen de fondo — cubre todo el card */}
      <Image
        src={cover}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.image}
      />

      {/* Overlay ambient en hover */}
      <motion.div
        className={styles.hoverBg}
        style={{ background: hoverBg }}
        animate={{ opacity: hovered ? 0.72 : 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Gradiente de texto — garantiza legibilidad siempre */}
      <div className={styles.textGradient} />

      {isNew && <span className={styles.badge}>Nuevo</span>}

      {/* Info superpuesta al fondo */}
      <div className={styles.info}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.tagline && (
          <p className={styles.tagline}>{project.tagline}</p>
        )}
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={tag} className={styles.tag}>
              {i > 0 && <span className={styles.dot} aria-hidden="true">·</span>}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
