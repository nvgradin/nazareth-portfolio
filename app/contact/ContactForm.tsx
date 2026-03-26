'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendContactForm, type ContactType } from './actions';
import styles from './ContactForm.module.css';

const TYPES: { id: ContactType; label: string; sub: string }[] = [
  { id: 'proyecto',     label: 'Proyecto',     sub: 'Tienes algo en mente y buscas quien lo haga realidad' },
  { id: 'colaboracion', label: 'Colaboración',  sub: 'Quieres explorar si podemos trabajar juntos' },
  { id: 'conversacion', label: 'Oportunidad',   sub: 'Tienes una oportunidad que podría interesarme' },
];

const BUDGETS = ['< 1.000 €', '1.000 – 3.000 €', '3.000 – 8.000 €', '+ 8.000 €', 'Por definir'];

const ease = [0.4, 0, 0.2, 1] as const;

export function ContactForm() {
  const [type, setType] = useState<ContactType>('proyecto');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const fd = new FormData(e.currentTarget);

    const result = await sendContactForm({
      type,
      name:    fd.get('name') as string,
      email:   fd.get('email') as string,
      message: fd.get('message') as string,
      budget:  fd.get('budget') as string | undefined,
      company: fd.get('company') as string | undefined,
      role:    fd.get('role') as string | undefined,
    });

    if (result.ok) {
      setStatus('ok');
    } else {
      setErrorMsg(result.error ?? 'Error desconocido');
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className={styles.successIcon}>✦</span>
        <p>Mensaje enviado. Te respondo pronto.</p>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      {/* Selector de tipo */}
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

      {/* Subtítulo descriptivo del tipo seleccionado */}
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

      {/* Campos base */}
      <div className={styles.fields}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Nombre</span>
            <input name="name" type="text" required className={styles.input} placeholder="Tu nombre" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input name="email" type="email" required className={styles.input} placeholder="tu@email.com" />
          </label>
        </div>

        {/* Campos extra según tipo */}
        <AnimatePresence mode="wait">
          {type === 'proyecto' && (
            <motion.label
              key="budget"
              className={styles.field}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <span className={styles.label}>Presupuesto estimado</span>
              <select name="budget" className={styles.select}>
                <option value="">Selecciona un rango</option>
                {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </motion.label>
          )}

          {type === 'conversacion' && (
            <motion.div
              key="recruiter"
              className={styles.row}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <label className={styles.field}>
                <span className={styles.label}>Empresa</span>
                <input name="company" type="text" className={styles.input} placeholder="Nombre de la empresa" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Rol</span>
                <input name="role" type="text" className={styles.input} placeholder="Posición o área" />
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        <label className={styles.field}>
          <span className={styles.label}>Mensaje</span>
          <textarea name="message" required rows={4} className={styles.textarea} placeholder="Cuéntame..." />
        </label>

        {/* Consentimiento RGPD */}
        <label className={styles.consent}>
          <input type="checkbox" required className={styles.checkbox} />
          <span>
            He leído y acepto la{' '}
            <a href="/privacidad" className={styles.consentLink}>política de privacidad</a>
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={styles.submit}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

    </form>
  );
}
