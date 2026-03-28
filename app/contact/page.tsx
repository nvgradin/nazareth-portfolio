"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Footer } from '@/components/layout';
import { ContactForm, ease } from './ContactForm';
import { type ContactType } from './actions';
import styles from './Contact.module.css';

const TYPES: { id: ContactType; label: string; sub: string }[] = [
  { id: 'proyecto',     label: 'Proyecto',     sub: 'Tienes algo en mente y buscas quien lo haga realidad' },
  { id: 'colaboracion', label: 'Colaboración', sub: 'Quieres explorar si podemos trabajar juntos' },
  { id: 'consultoria',  label: 'Consulta',     sub: 'Necesitas orientación estratégica o una segunda opinión experta' },
  { id: 'otros',        label: 'Otros',        sub: 'Quieres explorar si podemos trabajar juntos de otra manera' },
];

const item = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function ContactPage() {
  const [type, setType] = useState<ContactType>('proyecto');

  return (
    <>
    <main className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.leftTop}>
            <motion.h1 {...item(0)}>HOLA</motion.h1>
            <motion.p {...item(0.18)}>
              ¿Tienes un proyecto, una idea o algo que explorar juntos? Cuéntame.
              Estoy disponible para proyectos, colaboraciones y nuevas oportunidades.
            </motion.p>
          </div>
          <div className={styles.leftBottom}>
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
        </div>

        <div className={styles.right}>
          {/* Selector fuera del fondo crema, sobre la tarjeta */}
          <div className={styles.typeBlock}>
            <p className={styles.typeTitle}>¿En qué puedo ayudarte?</p>
            <div className={styles.typeSelector}>
              {TYPES.map(t => (
                <button
                  key={t.id}
                  type="button"
                  className={[styles.typeBtn, type === t.id ? styles.typeBtnActive : ''].join(' ')}
                  onClick={() => setType(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={type}
                className={styles.typeSub}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease }}
              >
                {TYPES.find(t => t.id === type)?.sub}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Tarjeta crema — solo campos */}
          <div className={styles.formCard}>
            <ContactForm type={type} />
          </div>
        </div>

      </div>
    </main>
    <Footer style={{ backgroundColor: 'var(--support-green-600)' }} />
    </>
  );
}
