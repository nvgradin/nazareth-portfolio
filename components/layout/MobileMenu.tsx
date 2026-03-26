'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { LogoMark } from '@/components/ui';
import { useMobileMenu } from './MobileMenuContext';
import { MenuBackground, themeFromPathname } from './MenuBackground';
import { NavCursorImage } from './NavCursorImage';
import styles from './MobileMenu.module.css';

const NAV = [
  {
    name: 'Inicio',
    sub: 'Volver al origen',
    href: '/',
    images: ['/home/hero_sunset_2560.webp'],
  },
  {
    name: 'Proyectos',
    sub: 'Una inmersión a creaciones destacados y más',
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
    sub: 'Visión, proceso y recorrido',
    href: '/about',
    images: ['/home/hero_about_2560.webp'],
  },
  {
    name: 'Contacto',
    sub: '¿Hablamos?',
    href: '/contact',
    images: ['/home/home-bio-Nazareth-Gradin.jpg'],
  },
];

export function MobileMenu() {
  const { isOpen, close } = useMobileMenu();
  const pathname = usePathname();
  const theme = themeFromPathname(pathname);

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
    const onMouseMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isOpen]);

  const activeImages = hoveredIndex !== null ? NAV[hoveredIndex].images : [];

  return (
    <>
      {/* Imagen magnética — fuera del overlay para evitar stacking context del transform */}
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
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Fondo vivo por theme */}
            <MenuBackground theme={theme} />

            {/* Top bar */}
            <div className={styles.topBar}>
              <LogoMark className={styles.logo} />
              <button className={styles.close} onClick={close} aria-label="Cerrar menú">
                <span className={styles.closeBar} />
                <span className={styles.closeBar} />
              </button>
            </div>

            {/* Nav — ocupa el espacio central */}
            <div className={styles.content}>
              <nav className={styles.nav}>
                {NAV.map((item, i) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      className={styles.navItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link
                        href={item.href}
                        className={[styles.link, isActive ? styles.linkActive : ''].join(' ')}
                        onClick={close}
                      >
                        <span className={styles.linkName}>{item.name}</span>
                        <span className={styles.linkSub}>{item.sub}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Contacto — anclado al fondo, encima del bigName */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className={styles.contactLeft}>
                <a href="mailto:hola@nazarethgradin.com" className={styles.emailBtn}>
                  hola@nazarethgradin.com
                </a>
              </div>
              <div className={styles.socialIcons}>
                <a href="https://wa.me/34630156301" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.iconBtn}>
                  <WhatsappLogo size={20} weight="regular" />
                </a>
                <a href="https://www.instagram.com/nazarethgradin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.iconBtn}>
                  <InstagramLogo size={20} weight="regular" />
                </a>
                <a href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconBtn}>
                  <LinkedinLogo size={20} weight="regular" />
                </a>
              </div>
            </motion.div>

            {/* Nombre grande — decorativo */}
            <motion.div
              className={styles.bigName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
