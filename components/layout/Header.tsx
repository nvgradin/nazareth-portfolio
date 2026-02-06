'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/ui';
import styles from './Header.module.css';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Contacto', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const isDarkBackground = pathname === '/contact';

  const headerClasses = [
    styles.header,
    isDarkBackground ? styles.headerLight : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Ir al inicio">
          <LogoMark className={styles.logoMark} />
        </Link>

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

        {/* Mobile Menu Button — Placeholder for future implementation */}
        <button
          className={styles.mobileToggle}
          aria-label="Abrir menú"
          aria-expanded="false"
          type="button"
        >
          <span className={styles.mobileToggleBar} />
          <span className={styles.mobileToggleBar} />
        </button>
      </div>
    </header>
  );
}
