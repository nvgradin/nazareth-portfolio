import { CenteredHeading as CenteredHeadingType } from '@/lib/project-layout.types';
import styles from './CenteredHeading.module.css';

interface Props {
  data: CenteredHeadingType;
}

export function CenteredHeading({ data }: Props) {
  const { title, subtitle } = data;

  return (
    <section className={styles.heading}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
