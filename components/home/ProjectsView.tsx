'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeProjects } from '@/data/home';
import { PortalProvider, HomeStack, PortalTransition } from '@/components/home';
import styles from './ProjectsView.module.css';

type View = 'stack' | 'grid';

export function ProjectsView() {
  const [view, setView] = useState<View>('stack');

  return (
    <>
      {/* Toggle vertical — una sola línea rotada */}
      <nav className={styles.toggle}>
        <button
          className={[styles.label, view === 'stack' ? styles.active : ''].join(' ')}
          onClick={() => setView('stack')}
        >
          Destacados
        </button>
        <span className={styles.sep} aria-hidden="true" />
        <button
          className={[styles.label, view === 'grid' ? styles.active : ''].join(' ')}
          onClick={() => setView('grid')}
        >
          Explorar proyectos
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'stack' ? (
          <motion.div
            key="stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortalProvider>
              <HomeStack projects={homeProjects} />
              <PortalTransition />
            </PortalProvider>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {homeProjects.map(p => (
              <div key={p.slug} className={styles.gridCard}>
                <span className={styles.gridTitle}>{p.title}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
