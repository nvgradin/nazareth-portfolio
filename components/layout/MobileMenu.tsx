'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobileMenu } from './MobileMenuContext';
import styles from './MobileMenu.module.css';

const NAV = [
  { name: 'Inicio',     href: '/' },
  { name: 'Proyectos',  href: '/projects' },
  { name: 'Sobre mí',   href: '/about' },
  { name: 'Contacto',   href: '/contact' },
];

export function MobileMenu() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();

  // Cerrar al navegar
  useEffect(() => { close(); }, [pathname, close]);

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Botón cerrar */}
          <button className={styles.close} onClick={close} aria-label="Cerrar menú">
            <span className={styles.closeBar} />
            <span className={styles.closeBar} />
          </button>

          {/* Links */}
          <nav className={styles.nav}>
            {NAV.map((item, i) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link
                    href={item.href}
                    className={[styles.link, isActive ? styles.linkActive : ''].join(' ')}
                    onClick={close}
                  >
                    <span className={styles.linkNum}>0{i + 1}</span>
                    <span className={styles.linkName}>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
