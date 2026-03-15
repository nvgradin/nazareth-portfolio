"use client";

import { motion } from 'framer-motion';
import { LinkedinLogo } from '@phosphor-icons/react';
import styles from './Contact.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const item = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.left}>
          <motion.h1 {...item(0)}>HOLA</motion.h1>
          <motion.p {...item(0.18)}>
            ¿Tienes un proyecto en mente o simplemente quieres saludar?
            Me encantaría escucharte. Estoy disponible para colaboraciones,
            consultoría y nuevas oportunidades.
          </motion.p>
          <motion.a {...item(0.32)} href="mailto:hola@nazarethgradin.com" className={styles.email}>
            hola@nazarethgradin.com
          </motion.a>
          <motion.div {...item(0.44)} className={styles.social}>
            <a
              href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} weight="regular" />
            </a>
          </motion.div>
        </div>
        <div className={styles.right}>
          {/* Columna vacía 1/3 */}
        </div>
      </div>
    </main>
  );
}
