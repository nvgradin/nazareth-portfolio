'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPublishedProjects } from '@/data/projects';
import { PortalProvider } from './PortalContext';
import { HomeStack } from './HomeStack';
import { PortalTransition } from './PortalTransition';
import { ExploreGrid } from './ExploreGrid';
import styles from './ProjectsView.module.css';

type View = 'stack' | 'grid';

const allProjects = getPublishedProjects();

export function ProjectsView() {
  const [view, setView] = useState<View>('stack');

  return (
    <>
      {/* Toggle vertical — una sola línea rotada */}
      <nav
        className={[styles.toggle, view === 'grid' ? styles.toggleDark : ''].join(' ')}
      >
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
          Explorar
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
              <HomeStack projects={allProjects} />
              <PortalTransition />
            </PortalProvider>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExploreGrid projects={allProjects} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
