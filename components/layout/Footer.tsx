"use client";

import React from 'react';
import Link from 'next/link';
import { LinkedinLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export function Footer({ style }: { style?: React.CSSProperties }) {
  return (
    <footer className={styles.footer} style={style}>
      <div className={styles.left}>
        <nav className={styles.legal}>
          <Link href="/aviso-legal" className={styles.legalLink}>Aviso legal</Link>
          <span className={styles.legalDot}>·</span>
          <Link href="/privacidad" className={styles.legalLink}>Privacidad</Link>
        </nav>
        <p className={styles.copy}>© 2026 · A digital product designed and developed by Nazareth Gradín.
Built with Next.js.</p>
      </div>
      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={18} weight="regular" />
        </a>
        <a
          href="/Nazareth-Gradin-Product-Designer-CV.pdf"
          download
          aria-label="Descargar CV"
          className={styles.cvBtn}
        >
          CV
        </a>
      </div>
    </footer>
  );
}
