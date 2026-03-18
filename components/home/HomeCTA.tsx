'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function HomeCTA() {
  return (
    <section style={{
      width: '100%',
      height: 'calc(100vh - 52px)',
      backgroundColor: 'var(--brand-primary-900)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 24px 40px',
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          fontWeight: 300,
          color: 'var(--neutral-50)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 18,
        }}
      >
        ¿Y si creamos algo juntos?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(36px, 5vw, 48px)',
          fontWeight: 400,
          color: 'var(--neutral-50)',
          lineHeight: 1.1,
          letterSpacing: '0.04em',
          maxWidth: 700,
          margin: '0 0 20px',
        }}
      >
        Cada proyecto empieza<br />con una conversación.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.28, ease }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(14px, 1.2vw, 16px)',
          fontWeight: 300,
          color: 'var(--neutral-50)',
          letterSpacing: '0.02em',
          marginBottom: 32,
        }}
      >
        La tuya puede empezar aquí.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4, ease }}
      >
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(12px, 1vw, 14px)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--brand-primary-900)',
            backgroundColor: 'var(--neutral-50)',
            padding: '16px 40px',
            borderRadius: 999,
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--neutral-200)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--neutral-50)';
          }}
        >
          Hablemos →
        </Link>
      </motion.div>
    </section>
  );
}
