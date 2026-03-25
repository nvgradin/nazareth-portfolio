'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { LogoMark } from '@/components/ui';
import { useMobileMenu } from './MobileMenuContext';
import styles from './MobileMenu.module.css';

const NAV = [
  { name: 'Inicio',    href: '/' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Sobre mí',  href: '/about' },
  { name: 'Contacto',  href: '/contact' },
];

export function MobileMenu() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top bar */}
          <div className={styles.topBar}>
            <LogoMark className={styles.logo} />
            <button className={styles.close} onClick={close} aria-label="Cerrar menú">
              <span className={styles.closeBar} />
              <span className={styles.closeBar} />
            </button>
          </div>

          {/* Contenido del menú */}
          <div className={styles.content}>
            <nav className={styles.nav}>
              {NAV.map((item, i) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 + i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={[styles.link, isActive ? styles.linkActive : ''].join(' ')}
                      onClick={close}
                    >
                      <span className={styles.linkName}>{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Info de contacto */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42 }}
            >
              <div className={styles.contactCol}>
                <a href="mailto:hola@nazarethgradin.com" className={styles.contactLink}>
                  hola@nazarethgradin.com
                </a>
                <a href="tel:+34630156301" className={styles.contactLink}>
                  +34 630 156 301
                </a>
              </div>
              <div className={styles.contactCol}>
                <a href="https://www.instagram.com/nazarethgradin" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Nombre grande */}
          <motion.div
            className={styles.bigName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-hidden
          >
            NAZARETH<span className={styles.bigNameGradin}> GRADÍN</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
