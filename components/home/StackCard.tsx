'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { HomeProject } from '@/data/home';
import { usePortal } from './PortalContext';
import styles from './StackCard.module.css';

interface Props {
  project: HomeProject;
}

export function StackCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { trigger } = usePortal();

  const handleClick = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    trigger(rect, project.image, project.slug);
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver proyecto ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <Image
        src={project.image}
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
          <p className={styles.category}>{project.category}</p>
          <p className={styles.claim}>{project.claim}</p>
        </div>
      </div>
    </div>
  );
}
