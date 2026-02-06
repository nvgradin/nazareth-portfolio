import { ProjectHero as ProjectHeroType } from '@/lib/project-layout.types';
import styles from './ProjectHero.module.css';

interface Props {
  data: ProjectHeroType;
  tags?: string[];
}

export function ProjectHero({ data, tags }: Props) {
  const { title, subtitle, intro, meta } = data;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda: Metadata */}
        <div className={styles.meta}>
          {meta.client && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Cliente</span>
              <span className={styles.metaValue}>{meta.client}</span>
            </div>
          )}
          {meta.year && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Año</span>
              <span className={styles.metaValue}>{meta.year}</span>
            </div>
          )}
          {meta.role && meta.role.length > 0 && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rol</span>
              <span className={styles.metaValue}>{meta.role.join(', ')}</span>
            </div>
          )}
          {meta.tools && meta.tools.length > 0 && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Herramientas</span>
              <span className={styles.metaValue}>{meta.tools.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Columna derecha: Título + Intro */}
        <div className={styles.content}>
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <p className={styles.intro}>{intro}</p>
        </div>
      </div>
    </section>
  );
}
