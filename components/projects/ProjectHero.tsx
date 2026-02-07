import Link from 'next/link';
import Image from 'next/image';
import { ProjectHero as ProjectHeroType } from '@/lib/project-layout.types';
import styles from './ProjectHero.module.css';

interface Props {
  data: ProjectHeroType;
}

export function ProjectHero({ data }: Props) {
  const { title, subtitle, intro, logo, roles } = data;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda: Logo + Proyectos + Nombre + Roles */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt={`${title} logo`}
              width={90}
              height={90}
              className={styles.logoImage}
            />
          </div>
          <Link href="/projects" className={styles.backLink}>
            Proyectos
          </Link>
          <h1 className={styles.title}>{title}</h1>
          {roles.length > 0 && (
            <p className={styles.roles}>
              {roles.join(' | ')}
            </p>
          )}
        </div>

        {/* Columna derecha: Subtítulo + Intro */}
        <div className={styles.right}>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {Array.isArray(intro) ? (
            intro.map((paragraph, i) => (
              <p key={i} className={styles.intro}>{paragraph}</p>
            ))
          ) : (
            <p className={styles.intro}>{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}
