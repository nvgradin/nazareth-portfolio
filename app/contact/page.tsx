"use client";

import { InstagramLogo, WhatsappLogo, LinkedinLogo } from '@phosphor-icons/react';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h1>HOLA</h1>
          <p>
            ¿Tienes un proyecto en mente o simplemente quieres saludar?
            Me encantaría escucharte. Estoy disponible para colaboraciones,
            consultoría y nuevas oportunidades.
          </p>
          <a href="mailto:hola@nazarethgradin.com" className={styles.email}>
            hola@nazarethgradin.com
          </a>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/nazarethgradin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={24} weight="regular" />
            </a>
            <a
              href="https://wa.me/34630156301"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={24} weight="regular" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} weight="regular" />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          {/* Columna vacía 1/3 */}
        </div>
      </div>
    </main>
  );
}
