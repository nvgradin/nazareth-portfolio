"use client";

import { LinkedinLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h4>Nazareth</h4>
            <p>Product & Experience Designer. Estrategia, UX/UI y visión de negocio.</p>
          </div>

          <div className={styles.connect}>
            <h5>Conectar</h5>
            <ul>
              <li><a href="mailto:hola@nazarethgradin.com">hola@nazarethgradin.com</a></li>
            </ul>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="regular" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Nazareth. Todos los derechos reservados.</p>
          <p>Diseñado con intención.</p>
        </div>
      </div>
    </footer>
  );
}
