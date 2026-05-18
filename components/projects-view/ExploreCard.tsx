'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { FilterKey } from './ProjectsView';
import styles from './ExploreCard.module.css';

interface Props {
  project: ProjectWithLayout;
  activeFilter?: FilterKey;
  priority?: boolean;
}

export function ExploreCard({ project, activeFilter, priority = false }: Props) {
  const [hovered, setHovered] = useState(false);
  const isNew = project.status === 'new';
  const cover = project.cover ?? project.thumbnail.src;

  const hoverBg = project.ambientGradient ?? project.ambientColor ?? 'rgba(0,0,0,0.4)';
  const params = new URLSearchParams({ from: 'explorar' });
  if (activeFilter && activeFilter !== 'all') params.set('filter', activeFilter);
  const href = `/projects/${project.slug}?${params.toString()}`;

  return (
    <Link
      href={href}
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen de fondo */}
      <Image
        src={cover}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={styles.image}
        priority={priority}
      />

      {/* Overlay ambient en hover */}
      <motion.div
        className={styles.hoverBg}
        style={{ background: hoverBg }}
        animate={{ opacity: hovered ? 0.65 : 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Gradiente de texto */}
      <div
        className={styles.textGradient}
        style={project.thumbnailOverlay !== undefined ? {
          background: project.thumbnailOverlayColor
            ? `linear-gradient(to top, ${project.thumbnailOverlayColor}e6 0%, ${project.thumbnailOverlayColor}80 40%, ${project.thumbnailOverlayColor}00 100%)`
            : `linear-gradient(to top, rgba(0,0,0,${project.thumbnailOverlay}) 0%, rgba(0,0,0,${project.thumbnailOverlay * 0.6}) 40%, rgba(0,0,0,0) 100%)`
        } : undefined}
      />

      {isNew && <span className={styles.badge}>Nuevo</span>}

      {/* Info superpuesta */}
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
