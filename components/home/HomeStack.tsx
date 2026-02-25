'use client';

import { HomeProject } from '@/data/home';
import { StackCard } from './StackCard';
import styles from './HomeStack.module.css';

// Posiciones absolutas por índice: [translateY, scaleX, scaleY]
const CARD_POSITIONS: [number, number, number][] = [
  [0,    1.00, 1.00],  // card 0: tamaño completo
  [-160, 0.84, 0.86],  // card 1
  [-300, 0.70, 0.70],  // card 2
  [-420, 0.55, 0.55],  // card 3
];

interface Props {
  projects: HomeProject[];
}

export function HomeStack({ projects }: Props) {

  return (
    <div
      className={styles.stage}
      style={{ backgroundColor: projects[0]?.ambientColor }}
    >
      {/* Grano */}
      <div className={styles.grain} />

      {projects.map((project, i) => {
        const [translateY, scaleX, scaleY] = CARD_POSITIONS[i] ?? CARD_POSITIONS[CARD_POSITIONS.length - 1];
        const zIndex = projects.length - i;

        return (
          <div
            key={project.slug}
            className={styles.card}
            style={{
              transform: `translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`,
              zIndex,
            }}
          >
            <StackCard project={project} />
          </div>
        );
      })}
    </div>
  );
}
