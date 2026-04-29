import { StaggeredProcess } from '@/components/projects/StaggeredProcess';

const DEMO_DATA = {
  label: 'Proceso',
  steps: [
    {
      number: 1,
      title: 'Replantear el modelo: de compraventa a comunidad',
      description: 'El enfoque pasó de centrarse en productos a centrarse en la experiencia de las personas, facilitando la conexión entre usuarios junto a la transacción.',
    },
    {
      number: 2,
      title: 'Crear un sistema de diseño y branding para acelerar el desarrollo',
      description: 'Para dar coherencia y acelerar el desarrollo, definí un sistema visual reutilizable que estructuraba componentes, estilos y patrones, con hincapié en la experiencia del usuario.',
    },
    {
      number: 3,
      title: 'Estructurar base de datos y desarrollo',
      description: 'La estructura de base de datos se planteó en paralelo al diseño de la experiencia, asegurando consistencia entre producto y tecnología.',
    },
  ],
} as const;

export default function StaggeredProcessPlayground() {
  return (
    <main style={{ minHeight: '200vh', background: 'var(--neutral-100)' }}>
      <div style={{ padding: '80px var(--space-16) 40px', maxWidth: 640 }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>
          Playground — StaggeredProcess
        </p>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, opacity: 0.5, marginTop: 8 }}>
          Datos de Trainfy guardados aquí para afinar cuando toque.
        </p>
      </div>
      <StaggeredProcess data={DEMO_DATA} />
    </main>
  );
}
