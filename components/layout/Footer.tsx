"use client";

import React from 'react';
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export function Footer({ style }: { style?: React.CSSProperties }) {
  return (
    <footer className={styles.footer} style={style}>
      <p className={styles.copy}>
        Diseñado y construido con intención · Nazareth Gradín · 2026
      </p>
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
