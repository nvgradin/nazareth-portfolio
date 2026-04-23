'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './ProjectNav.module.css';

export function ProjectNav() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') ?? 'destacados';

  return (
    <nav className={styles.bar} aria-label="Navegación de proyectos">
      <Link
        href="/projects?view=destacados"
        className={[styles.btn, from === 'destacados' ? styles.active : ''].join(' ')}
      >
        Proyectos Destacados
      </Link>
      <Link
        href="/projects?view=explorar"
        className={[styles.btn, from === 'explorar' ? styles.active : ''].join(' ')}
      >
        Explorar Todos
      </Link>
    </nav>
  );
}
