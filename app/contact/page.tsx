"use client";

import { motion } from 'framer-motion';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Footer } from '@/components/layout';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const item = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function ContactPage() {
  return (
    <>
    <main className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.left}>
          <motion.h1 {...item(0)}>HOLA</motion.h1>
          <motion.p {...item(0.18)}>
            ¿Tienes un proyecto, una idea o algo que explorar juntos? Cuéntame.
            Estoy disponible para proyectos, colaboraciones y nuevas oportunidades.
          </motion.p>
          <motion.a {...item(0.32)} href="mailto:hola@nazarethgradin.com" className={styles.emailBtn}>
            hola@nazarethgradin.com
          </motion.a>
          <motion.div {...item(0.44)} className={styles.social}>
            <a href="https://wa.me/34630156301" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.iconBtn}>
              <WhatsappLogo size={20} weight="regular" />
            </a>
            <a href="https://www.instagram.com/nazarethgradin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.iconBtn}>
              <InstagramLogo size={20} weight="regular" />
            </a>
            <a href="https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconBtn}>
              <LinkedinLogo size={20} weight="regular" />
            </a>
          </motion.div>
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </main>
    <Footer style={{ backgroundColor: 'var(--support-green-600)' }} />
    </>
  );
}
