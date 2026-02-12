import { BrandingScrollerSection } from '@/components/projects/BrandingScrollerSection';
import { BrandingScroller } from '@/lib/project-layout.types';

const mockData: BrandingScroller = {
  title: 'Identidad visual que conecta',
  description: 'La identidad de Trainfy refleja dinamismo, comunidad y pasión por el deporte. Colores vibrantes que transmiten energía y un sistema visual coherente.',
  bullets: [
    'Logotipo y variantes',
    'Paleta cromática y tipografía',
    'Sistema de iconografía deportiva',
  ],
  background: '#212C3A',
  images: [
    { src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Branding 1' },
    { src: '/projects/trainfy/showcase-right_horizontal.jpg', alt: 'Branding 2' },
    { src: '/projects/trainfy/showcase-left.jpg', alt: 'Branding 3', orientation: 'vertical' },
    { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Branding 4' },
  ],
};

export default function BrandingScrollerPlayground() {
  return (
    <main style={{ paddingTop: 100 }}>
      <BrandingScrollerSection data={mockData} />
    </main>
  );
}
