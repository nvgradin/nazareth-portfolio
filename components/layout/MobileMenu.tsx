'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoMark } from '@/components/ui';
import { useMobileMenu } from './MobileMenuContext';
import { NavCursorImage } from './NavCursorImage';
import styles from './MobileMenu.module.css';

const NAV = [
  {
    name: 'Inicio',
    href: '/',
    images: ['/home/hero_sunset_2560.webp'],
  },
  {
    name: 'Proyectos',
    href: '/projects',
    images: [
      '/projects/trainfy/portada_trainfy.webp',
      '/projects/las-islas-cies/bento-1.jpg',
      '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',
      '/projects/amigo-secreto/amigosecreto.jpg',
    ],
  },
  {
    name: 'Sobre mí',
    href: '/about',
    images: ['/home/hero_about_2560.webp'],
  },
  {
    name: 'Contacto',
    href: '/contact',
    images: ['/home/home-bio-Nazareth-Gradin.jpg'],
  },
];

export function MobileMenu() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) setHoveredIndex(null);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isOpen]);

  const activeImages = hoveredIndex !== null ? NAV[hoveredIndex].images : [];

  return (
    <>
      {/* Imagen magnética — solo cuando el menú está abierto, fuera del overlay para evitar stacking context del transform */}
      {isOpen && (
        <NavCursorImage
          images={activeImages}
          visible={hoveredIndex !== null}
          cursorX={cursor.x}
          cursorY={cursor.y}
        />
      )}

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
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
    </>
  );
}
