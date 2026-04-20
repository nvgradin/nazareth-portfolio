'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './BackToProjectsPill.module.css';

const FILTER_LABELS: Record<string, string> = {
  product:    'Producto',
  'ux-ui':    'UX/UI',
  branding:   'Branding',
  web:        'Web',
  estrategia: 'Estrategia',
  marketing:  'Marketing',
};

export function BackToProjectsPill() {
  const searchParams = useSearchParams();
  const from   = searchParams.get('from') ?? 'destacados';
  const filter = searchParams.get('filter') ?? '';

  const backHref =
    from === 'explorar'
      ? `/projects?view=explorar${filter ? `&filter=${filter}` : ''}`
      : '/projects?view=destacados';

  const label =
    from === 'explorar' && filter
      ? `← Explorar · ${FILTER_LABELS[filter] ?? filter}`
      : from === 'explorar'
        ? '← Explorar'
        : '← Destacados';

  return (
    <Link href={backHref} className={styles.pill} aria-label={label}>
      {label}
    </Link>
  );
}
