"use client";

import React from 'react';
import Link from 'next/link';
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export function Footer({ style }: { style?: React.CSSProperties }) {
  return (
    <footer className={styles.footer} style={style}>
      <p className={styles.copy}>
        © 2026 Nazareth Gradín
      </p>
      <nav className={styles.legal}>
        <Link href="/aviso-legal" className={styles.legalLink}>Aviso legal</Link>
        <span className={styles.legalDot}>·</span>
        <Link href="/privacidad" className={styles.legalLink}>Privacidad</Link>
      </nav>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/nazarethgradin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramLogo size={18} weight="regular" />
        </a>
        <a
          href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={18} weight="regular" />
        </a>
      </div>
    </footer>
  );
}
