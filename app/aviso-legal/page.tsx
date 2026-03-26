import { Footer } from '@/components/layout';
import styles from './Legal.module.css';

export const metadata = {
  title: 'Aviso Legal — Nazareth Gradín',
};

export default function AvisoLegalPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Aviso Legal</h1>

          <section className={styles.section}>
            <h2>Titular del sitio web</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:</p>
            <ul>
              <li><strong>Titular:</strong> Nazareth Andrea Vaqueiro Gradín</li>
              <li><strong>Actividad:</strong> Diseño UX/UI y consultoría digital</li>
              <li><strong>Email:</strong> hola@nazarethgradin.com</li>
              <li><strong>Web:</strong> nazarethgradin.com</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Condiciones de uso</h2>
            <p>El acceso y uso de este sitio web implica la aceptación plena de las presentes condiciones. El contenido de esta web — textos, imágenes, diseños y código — es propiedad de Nazareth Andrea Vaqueiro Gradín y está protegido por la legislación vigente en materia de propiedad intelectual.</p>
            <p>Queda prohibida la reproducción, distribución o comunicación pública de cualquier contenido sin autorización expresa por escrito.</p>
          </section>

          <section className={styles.section}>
            <h2>Exclusión de responsabilidad</h2>
            <p>La titular no garantiza la disponibilidad continua del sitio ni se responsabiliza de los daños que pudieran derivarse de su uso. Los enlaces a sitios externos son responsabilidad exclusiva de sus propietarios.</p>
          </section>

          <section className={styles.section}>
            <h2>Legislación aplicable</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales correspondientes.</p>
          </section>

          <p className={styles.updated}>Última actualización: marzo 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
