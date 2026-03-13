'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { usePortal } from './PortalContext';
import styles from './StackCard.module.css';

interface Props {
  project: ProjectWithLayout;
  onRef?: (el: HTMLElement | null) => void;
}

export function StackCard({ project, onRef }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { trigger } = usePortal();

  const cover = project.cover ?? project.thumbnail.src;

  const handleClick = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    trigger(rect, cover, project.slug);
  };

  return (
    <div
      ref={(el) => { cardRef.current = el; onRef?.(el); }}
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver proyecto ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <Image
        src={cover}
        alt={project.title}
        fill
        className={styles.image}
        sizes="85vw"
        priority
      />

      <div className={styles.gradient} />

      <div className={styles.text}>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.meta}>
          <p className={styles.category}>{project.tags.join(' · ')}</p>
          <p className={styles.claim}>{project.tagline}</p>
        </div>
      </div>
    </div>
  );
}
