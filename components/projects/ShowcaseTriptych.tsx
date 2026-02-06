import Image from 'next/image';
import { ShowcaseTriptych as ShowcaseTriptychType } from '@/lib/project-layout.types';
import styles from './ShowcaseTriptych.module.css';

interface Props {
  data: ShowcaseTriptychType;
}

export function ShowcaseTriptych({ data }: Props) {
  const { left, centerTop, centerBottom, right } = data;

  return (
    <section className={styles.grid}>
      {/* Imagen 1 - izquierda en desktop */}
      <div className={`${styles.cell} ${styles.cell1}`}>
        <Image
          src={left.src}
          alt={left.alt || 'Showcase left'}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Imagen 2 - centro arriba en desktop */}
      <div className={`${styles.cell} ${styles.cell2}`}>
        <Image
          src={centerTop.src}
          alt={centerTop.alt || 'Showcase center top'}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Imagen 3 - centro abajo en desktop */}
      <div className={`${styles.cell} ${styles.cell3}`}>
        <Image
          src={centerBottom.src}
          alt={centerBottom.alt || 'Showcase center bottom'}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Imagen 4 - derecha en desktop */}
      <div className={`${styles.cell} ${styles.cell4}`}>
        <Image
          src={right.src}
          alt={right.alt || 'Showcase right'}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
