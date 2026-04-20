'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './HeaderBreadcrumb.module.css';

const FILTER_LABELS: Record<string, string> = {
  product:    'Producto',
  'ux-ui':    'UX/UI',
  branding:   'Branding',
  web:        'Web',
  estrategia: 'Estrategia',
  marketing:  'Marketing',
};

export function HeaderBreadcrumb() {
  const searchParams = useSearchParams();
  const from   = searchParams.get('from') ?? 'destacados';
  const filter = searchParams.get('filter') ?? '';

  const backHref =
    from === 'explorar'
      ? `/projects?view=explorar${filter ? `&filter=${filter}` : ''}`
      : '/projects?view=destacados';

  const text =
    from === 'explorar' && filter
      ? `Explorar · ${FILTER_LABELS[filter] ?? filter}`
      : from === 'explorar'
        ? 'Explorar'
        : 'Destacados';

  return (
    <Link href={backHref} className={styles.breadcrumb} aria-label={`Volver a ${text}`}>
      <span aria-hidden="true">←</span>
      {text}
    </Link>
  );
}
