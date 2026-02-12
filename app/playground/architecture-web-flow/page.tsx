import { ArchitectureWebFlow } from '@/components/projects/ArchitectureWebFlow';
import { ArchitectureWebFlow as ArchitectureWebFlowType } from '@/lib/project-layout.types';

const mockData: ArchitectureWebFlowType = {
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
    {
      layout: 'full-image',
      image: { type: 'image', src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Web Mockup Desktop' },
    },
    {
      layout: 'image-text',
      title: 'Diseño responsive mobile-first',
      content: 'La plataforma garantiza una experiencia óptima en todos los dispositivos, con cada componente adaptándose fluidamente.',
      image: { type: 'image', src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Web Mockup Mobile' },
    },
    {
      layout: 'full-image',
      image: { type: 'image', src: '/projects/trainfy/web-mockup-4.jpg', alt: 'Web Mockup Trainfy' },
    },
  ],
};

export default function ArchitectureWebFlowPlayground() {
  return (
    <main style={{ paddingTop: 100 }}>
      <ArchitectureWebFlow data={mockData} />
    </main>
  );
}
