import { WebStrip } from '@/components/projects/WebStrip';
import { ArchitectureWebFlow } from '@/components/projects/ArchitectureWebFlow';
import { ArchitectureWebFlow as ArchitectureWebFlowType } from '@/lib/project-layout.types';

// Solo el módulo editorial — texto + parallax imagen
const editorialData: ArchitectureWebFlowType = {
  sectionTitle: 'Arquitectura & Web',
  intro: 'Desde wireframes hasta código, una plataforma pensada para la comunidad deportiva con enfoque mobile-first.',
  background: '#354251',
  modules: [
    {
      layout: 'text-image',
      title: 'Diseño UI/UX centrado en el usuario',
      content: 'Dada mi formación como Creativa, aporté un enfoque integral estructurando el proyecto desde sus bases visuales y funcionales.',
      bullets: [
        'Wireframes detallados en Adobe XD',
        'Prototipos interactivos para validar flujos',
        'Arquitectura de información intuitiva',
        'Guía de estilo completa para integración',
      ],
      image: { type: 'image', src: '/projects/trainfy/editorial-full.jpg', alt: 'Arquitectura de información Trainfy' },
    },
  ],
};

const stripImages = [
  { src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Vista desktop principal' },
  { src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Vista mobile' },
  { src: '/projects/trainfy/web-mockup-3.jpg', alt: 'Vista mobile alternativa' },
  { src: '/projects/trainfy/web-mockup-4.jpg', alt: 'Vista desktop detalle' },
];

export default function WebStripPlayground() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Parte 1: editorial con solo el módulo texto + imagen */}
      <ArchitectureWebFlow data={editorialData} />

      {/* Parte 2: strip de mockups con parallax */}
      <WebStrip
        images={stripImages}
        background="#212C3A"
        label="Web & Responsive"
      />
    </main>
  );
}
