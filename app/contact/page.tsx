"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Footer } from '@/components/layout';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import { ContactForm, ease } from './ContactForm';
import { type ContactType } from './actions';
import styles from './Contact.module.css';

const TYPES: { id: ContactType; label: string; sub: string; desc: string }[] = [
  {
    id: 'proyecto',
    label: 'Proyecto',
    sub: 'Cuéntame tu proyecto',
    desc: '¿Qué tienes en mente? Veamos cómo hacerlo realidad.',
  },
  {
    id: 'colaboracion',
    label: 'Colaboración',
    sub: 'Exploramos cómo trabajar juntos',
    desc: 'Cuéntame tu idea o propuesta de colaboración.',
  },
  {
    id: 'consultoria',
    label: 'Mentoría / Consulta',
    sub: '¿En qué necesitas ayuda?',
    desc: 'Si buscas claridad, estrategia o una segunda opinión, cuéntame.',
  },
];

const item = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function ContactPage() {
  const [type, setType] = useState<ContactType>('proyecto');
  const { setDark } = useHeaderTheme();
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = formCardRef.current;
    if (!el) return;

    // Inicia con header claro (texto blanco) sobre el fondo verde
    setDark(true);

    // rootMargin: recorta el viewport para que solo la franja del header (52px) sea la zona de detección
    // top: -52px (empieza justo donde acaba el header), bottom: -(vh - 52px) (solo esa franja)
    const headerH = 52;
    const bottomMargin = -(window.innerHeight - headerH);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando la tarjeta crema intersecta la franja del header → texto oscuro
        setDark(!entry.isIntersecting);
      },
      {
        rootMargin: `-${headerH}px 0px ${bottomMargin}px 0px`,
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [setDark]);

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
              <motion.div
                key={type}
                className={styles.typeTexts}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease }}
              >
                <p className={styles.typeSub}>{TYPES.find(t => t.id === type)?.sub}</p>
                <p className={styles.typeDesc}>{TYPES.find(t => t.id === type)?.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tarjeta crema — solo campos */}
          <div className={styles.formCard} ref={formCardRef}>
            <ContactForm type={type} />
          </div>
        </div>

      </div>
    </main>
    <Footer style={{ backgroundColor: 'var(--support-green-600)' }} />
    </>
  );
}
