'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendContactForm, type ContactType } from './actions';
import styles from './ContactForm.module.css';

// Edita estas opciones para cambiar el selector "¿Qué necesitas?"
const PROJECT_TYPES = ['Web / Producto digital (UX/UI)', 'Branding e identidad', 'Estrategia digital / Producto', 'Optimización / Rediseño (UX o negocio)', 'Automatización e IA', 'Mentoría / Consultoría', 'Otro'];

// Edita estas opciones para el selector "¿En qué punto estás?"
const STAGES = ['Idea / empezando', 'Proyecto en marcha', 'Negocio validado / creciendo', 'Rediseño / optimización'];

// Edita estas opciones para el presupuesto estimado (proyecto)
const BUDGETS = ['< 1.000 €', '1.000 – 3.000 €', '3.000 – 8.000 €', '+ 8.000 €', 'Por definir'];

// Edita estas opciones para el plazo deseado (proyecto)
const TIMELINES = ['Lo antes posible', 'En 1–2 meses', 'Sin fecha definida', 'Solo explorando'];

export const ease = [0.4, 0, 0.2, 1] as const;

/* ── Select custom ── */
function Select({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  return (
    <div className={styles.customSelect} ref={ref}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className={[styles.customSelectTrigger, open ? styles.customSelectOpen : ''].join(' ')}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={value ? styles.customSelectValue : styles.customSelectPlaceholder}>
          {value || placeholder}
        </span>
        <span className={[styles.customSelectChevron, open ? styles.customSelectChevronUp : ''].join(' ')}>
          ↓
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.customSelectDropdown}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease }}
            role="listbox"
          >
            {options.map(opt => (
              <li
                key={opt}
                role="option"
                aria-selected={value === opt}
                className={[styles.customSelectOption, value === opt ? styles.customSelectOptionActive : ''].join(' ')}
                onClick={() => { setValue(opt); setOpen(false); }}
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Campo con validación inline ── */
function FieldError({ msg }: { msg: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.span
          className={styles.fieldError}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18, ease }}
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

/* ── Formulario principal ── */
export function ContactForm({ type }: { type: ContactType }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; consent?: string }>({});
  const [consentTouched, setConsentTouched] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  function validateName(v: string) { return v.trim() ? '' : 'El nombre es obligatorio'; }
  function validateEmail(v: string) {
    if (!v.trim()) return 'El email es obligatorio';
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Introduce un email válido';
  }
  function validateMessage(v: string) { return v.trim() ? '' : 'El mensaje no puede estar vacío'; }

  function handleBlur(field: 'name' | 'email' | 'message', value: string) {
    const msg = field === 'name' ? validateName(value) : field === 'email' ? validateEmail(value) : validateMessage(value);
    setErrors(prev => ({ ...prev, [field]: msg }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    if (fd.get('website')) { setStatus('ok'); return; }

    const nameErr    = validateName(fd.get('name') as string);
    const emailErr   = validateEmail(fd.get('email') as string);
    const messageErr = validateMessage(fd.get('message') as string);
    setErrors({ name: nameErr, email: emailErr, message: messageErr });
    setConsentTouched(true);

    if (nameErr || emailErr || messageErr || !consentChecked) return;

    setStatus('sending');

    const result = await sendContactForm({
      type,
      name:        fd.get('name') as string,
      email:       fd.get('email') as string,
      message:     fd.get('message') as string,
      projectType: fd.get('projectType') as string | undefined,
      company:     fd.get('company') as string | undefined,
      role:        fd.get('role') as string | undefined,
      projectUrl:  fd.get('projectUrl') as string | undefined,
      stage:       fd.get('stage') as string | undefined,
      budget:      fd.get('budget') as string | undefined,
      timeline:    fd.get('timeline') as string | undefined,
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
        <p>Mensaje enviado. Te respondo en 24-48h.</p>
      </motion.div>
    );
  }

  return (
    <form key={type} className={styles.form} onSubmit={handleSubmit} noValidate>

      <div className={styles.fields}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Nombre</span>
            <input
              name="name"
              type="text"
              className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
              placeholder="Tu nombre"
              onBlur={e => handleBlur('name', e.target.value)}
              onChange={e => errors.name && handleBlur('name', e.target.value)}
            />
            <FieldError msg={errors.name ?? ''} />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              name="email"
              type="email"
              className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
              placeholder="tu@email.com"
              onBlur={e => handleBlur('email', e.target.value)}
              onChange={e => errors.email && handleBlur('email', e.target.value)}
            />
            <FieldError msg={errors.email ?? ''} />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>
            {type === 'consultoria' ? '¿En qué necesitas ayuda?' : 'Mensaje'}
          </span>
          <textarea
            name="message"
            rows={4}
            className={[styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
            placeholder={
              type === 'proyecto'     ? '¿Qué quieres crear? (objetivo, contexto, punto actual…)' :
              type === 'colaboracion' ? '¿Qué tipo de colaboración tienes en mente?' :
                                       '¿Qué estás trabajando ahora? ¿Qué te gustaría mejorar?'
            }
            onBlur={e => handleBlur('message', e.target.value)}
            onChange={e => errors.message && handleBlur('message', e.target.value)}
          />
          <FieldError msg={errors.message ?? ''} />
        </label>

        {/* Campos dinámicos según tipo */}
        <AnimatePresence mode="wait">

          {type === 'proyecto' && (
            <motion.div
              key="proyecto-extra"
              className={styles.fieldsGroup}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <label className={styles.field}>
                <span className={styles.label}>Tipo de proyecto</span>
                <Select name="projectType" placeholder="Web, Estrategia, Branding..." options={PROJECT_TYPES} />
              </label>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Proyecto / Marca / Empresa <span className={styles.optional}>(opcional)</span></span>
                  <input name="company" type="text" className={styles.input} placeholder="Nombre" />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>URL del proyecto <span className={styles.optional}>(opcional)</span></span>
                  <input name="projectUrl" type="url" className={styles.input} placeholder="ejemplo.com" />
                </label>
              </div>
            </motion.div>
          )}

          {type === 'consultoria' && (
            <motion.div
              key="consultoria-extra"
              className={styles.fieldsGroup}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>¿En qué punto está el proyecto? <span className={styles.optional}>(opcional)</span></span>
                  <Select name="stage" placeholder="Selecciona una opción" options={STAGES} />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>URL de proyecto o referencia <span className={styles.optional}>(opcional)</span></span>
                  <input name="projectUrl" type="url" className={styles.input} placeholder="ejemplo.com" />
                </label>
              </div>
            </motion.div>
          )}

          {type === 'colaboracion' && (
            <motion.div
              key="colaboracion-extra"
              className={styles.row}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <label className={styles.field}>
                <span className={styles.label}>Proyecto / Marca / Empresa <span className={styles.optional}>(opcional)</span></span>
                <input name="company" type="text" className={styles.input} placeholder="Nombre" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Rol <span className={styles.optional}>(opcional)</span></span>
                <input name="role" type="text" className={styles.input} placeholder="Tu rol o contexto" />
              </label>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Detalles opcionales — solo para proyecto */}
        {type === 'proyecto' && (
          <details className={styles.optionalDetails}>
            <summary className={styles.optionalSummary}>
              Más detalles <span className={styles.optional}>(opcional)</span>
            </summary>
            <div className={styles.optionalContent}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Presupuesto estimado</span>
                  <Select name="budget" placeholder="Selecciona un rango" options={BUDGETS} />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>¿Cuándo te gustaría lanzarlo?</span>
                  <Select name="timeline" placeholder="Selecciona una opción" options={TIMELINES} />
                </label>
              </div>
            </div>
          </details>
        )}

        {/* Honeypot */}
        <label className={styles.honeypot} aria-hidden="true">
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <label className={styles.consent}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={consentChecked}
            onChange={e => { setConsentChecked(e.target.checked); setConsentTouched(true); }}
          />
          <span>
            He leído y acepto la{' '}
            <a href="/privacidad" className={styles.consentLink}>política de privacidad</a>
          </span>
        </label>
        <FieldError msg={consentTouched && !consentChecked ? 'Debes aceptar la política de privacidad' : ''} />
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
