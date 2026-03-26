import { Footer } from '@/components/layout';
import styles from '../aviso-legal/Legal.module.css';

export const metadata = {
  title: 'Política de Privacidad — Nazareth Gradín',
};

export default function PrivacidadPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Política de Privacidad</h1>

          <section className={styles.section}>
            <h2>Responsable del tratamiento</h2>
            <ul>
              <li><strong>Identidad:</strong> Nazareth Andrea Vaqueiro Gradín</li>
              <li><strong>Email:</strong> hola@nazarethgradin.com</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Datos que recogemos</h2>
            <p>A través del formulario de contacto recogemos los siguientes datos personales:</p>
            <ul>
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>El contenido del mensaje que nos envías voluntariamente</li>
            </ul>
            <p>No recogemos datos sensibles ni datos de menores de 14 años.</p>
          </section>

          <section className={styles.section}>
            <h2>Finalidad y base legal</h2>
            <p>Los datos recogidos se utilizan exclusivamente para responder a tu consulta o solicitud. La base legal del tratamiento es tu consentimiento expreso al enviar el formulario.</p>
            <p>No utilizamos tus datos para envíos comerciales ni los cedemos a terceros salvo obligación legal.</p>
          </section>

          <section className={styles.section}>
            <h2>Conservación de los datos</h2>
            <p>Los datos se conservan durante el tiempo necesario para gestionar tu consulta y, como máximo, durante 1 año desde la última comunicación.</p>
          </section>

          <section className={styles.section}>
            <h2>Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:hola@nazarethgradin.com">hola@nazarethgradin.com</a>.</p>
            <p>Si consideras que el tratamiento de tus datos no es adecuado, puedes presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>Cookies</h2>
            <p>Este sitio web no utiliza cookies propias ni de terceros con fines analíticos o publicitarios. Solo se usan cookies técnicas estrictamente necesarias para el funcionamiento del sitio.</p>
          </section>

          <p className={styles.updated}>Última actualización: marzo 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
