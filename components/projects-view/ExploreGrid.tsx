'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  exitingToStack?: boolean;    // true mientras transición grid→stack activa
  enteringFromStack?: boolean; // true al llegar al grid desde stack
  cardRefsMap?: React.MutableRefObject<Map<string, HTMLElement | null>>;
  onVisibleSlugs?: (slugs: string[]) => void;
}

export function ExploreGrid({ projects, exitingToStack, enteringFromStack, cardRefsMap, onVisibleSlugs }: Props) {
  const [active, setActive] = useState<FilterKey>('all');

  // Reset filter to "all" whenever the grid becomes active again (entering from stack)
  const prevEntering = useRef(enteringFromStack);
  useEffect(() => {
    if (!prevEntering.current && enteringFromStack) {
      setActive('all');
    }
    prevEntering.current = enteringFromStack;
  }, [enteringFromStack]);

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    const cats = FILTERS.find(f => f.key === active)?.categories ?? [];
    return projects.filter(p => p.categories.some(c => cats.includes(c)));
  }, [active, projects]);

  // Notify parent of currently visible slugs whenever filter changes
  useEffect(() => {
    onVisibleSlugs?.(filtered.map(p => p.slug));
  }, [filtered, onVisibleSlugs]);

  return (
    <section className={styles.section}>
      {/* Cabecera — h2 izquierda, filtros derecha, misma fila */}
      <header className={styles.header}>
        <motion.div
          key={enteringFromStack ? 'entering' : 'idle'}
          className={styles.headerContent}
          initial={enteringFromStack ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
          animate={exitingToStack ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className={styles.heading}>Proyectos</h2>
          <p className={styles.subtitle}>Diseño de producto, experiencias digitales y marca.</p>
        </motion.div>
        <div className={styles.filtersWrapper}>
        <motion.div
          key={enteringFromStack ? 'filters-entering' : 'filters-idle'}
          className={styles.filtersInner}
          role="tablist"
          aria-label="Filtrar proyectos"
          initial={enteringFromStack ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
          animate={exitingToStack ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: enteringFromStack ? 0.1 : 0, ease: [0.4, 0, 0.2, 1] }}
        >
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
                  layoutId={enteringFromStack ? undefined : 'filter-underline'}
                  initial={enteringFromStack ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  transition={enteringFromStack
                    ? { duration: 0.3, delay: 0.45 }
                    : { type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </motion.div>
        </div>
      </header>

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
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.07,
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
