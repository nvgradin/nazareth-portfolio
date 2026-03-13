'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectCategory } from '@/lib/types';
import { ExploreCard } from './ExploreCard';
import styles from './ExploreGrid.module.css';

type FilterKey = 'all' | 'product' | 'ux-ui' | 'branding' | 'web' | 'estrategia' | 'marketing';

interface FilterDef {
  key: FilterKey;
  label: string;
  categories: ProjectCategory[];
}

const FILTERS: FilterDef[] = [
  { key: 'all',        label: 'Todo',       categories: [] },
  { key: 'product',    label: 'Producto',   categories: ['product-design'] },
  { key: 'ux-ui',      label: 'UX/UI',      categories: ['ux-ui'] },
  { key: 'branding',   label: 'Branding',   categories: ['branding'] },
  { key: 'web',        label: 'Web',        categories: ['web-design', 'digital-experience'] },
  { key: 'estrategia', label: 'Estrategia', categories: ['strategy'] },
  { key: 'marketing',  label: 'Marketing',  categories: ['marketing'] },
];

interface Props {
  projects: ProjectWithLayout[];
  invisible?: boolean;
  cardRefsMap?: React.MutableRefObject<Map<string, HTMLElement | null>>;
  onVisibleSlugs?: (slugs: string[]) => void;
}

export function ExploreGrid({ projects, invisible, cardRefsMap, onVisibleSlugs }: Props) {
  const [active, setActive] = useState<FilterKey>('all');

  // Reset filter to "all" whenever the grid becomes visible again
  const prevInvisible = React.useRef(invisible);
  useEffect(() => {
    if (prevInvisible.current === true && invisible === false) {
      setActive('all');
    }
    prevInvisible.current = invisible;
  }, [invisible]);

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    const cats = FILTERS.find(f => f.key === active)?.categories ?? [];
    return projects.filter(p => p.categories.some(c => cats.includes(c)));
  }, [active, projects]);

  // Notify parent of currently visible slugs whenever filter changes
  useEffect(() => {
    onVisibleSlugs?.(filtered.map(p => p.slug));
  }, [filtered, onVisibleSlugs]);

  const sectionStyle = invisible
    ? { opacity: 0, pointerEvents: 'none' as const, position: 'absolute' as const, top: 0, left: 0, width: '100%', zIndex: -1 }
    : undefined;

  return (
    <section className={styles.section} style={sectionStyle}>
      {/* Cabecera */}
      <header className={styles.header}>
        <h2 className={styles.heading}>Proyectos</h2>
        <p className={styles.subtitle}>Diseño de producto, experiencias digitales y marca.</p>
      </header>

      {/* Filtros */}
      <div className={styles.filters} role="tablist" aria-label="Filtrar proyectos">
        {FILTERS.map(f => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            className={[styles.filter, active === f.key ? styles.filterActive : ''].join(' ')}
            onClick={() => setActive(f.key)}
          >
            {f.label}
            {active === f.key && (
              <motion.span
                className={styles.filterUnderline}
                layoutId="filter-underline"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No hay proyectos en esta categoría aún.
            </motion.p>
          ) : (
            filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                className={styles.item}
                ref={(el) => { cardRefsMap?.current.set(project.slug, el); }}
                initial={{ opacity: invisible ? 1 : 0, y: invisible ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.42,
                  delay: invisible ? 0 : index * 0.07,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <ExploreCard project={project} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
