'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/ui';
import { useHeaderTheme } from './HeaderThemeContext';
import { useMobileMenu } from './MobileMenuContext';
import { HeaderBreadcrumb } from './HeaderBreadcrumb';
import styles from './Header.module.css';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Contacto', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { isDark } = useHeaderTheme();
  const { open } = useMobileMenu();
  const isProjectPage = /^\/projects\/[^/]+/.test(pathname);
  const isLightPage = isProjectPage;
  const isDarkBackground = !isLightPage && isDark;

  const headerClasses = [
    styles.header,
    isDarkBackground ? styles.headerLight : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        {/* Logo + breadcrumb block */}
        <div className={styles.logoBlock}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Ir al inicio"
            style={{ color: isDarkBackground ? 'var(--neutral-100)' : 'var(--brand-primary-900)' }}
          >
            <LogoMark className={styles.logoMark} />
          </Link>
          {isProjectPage && (
            <Suspense>
              <HeaderBreadcrumb />
            </Suspense>
          )}
        </div>

        {/* Desktop Navigation — Pill style */}
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href + '/');

              const linkClasses = [
                styles.navLink,
                isActive ? styles.navLinkActive : '',
              ].filter(Boolean).join(' ');

              return (
                <li key={item.name}>
                  <Link href={item.href} className={linkClasses}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileToggle}
          aria-label="Abrir menú"
          type="button"
          onClick={open}
        >
          <span className={styles.mobileToggleBar} />
          <span className={styles.mobileToggleBar} />
        </button>
      </div>
    </header>
  );
}
