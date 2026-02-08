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
  background: '#354251',
  images: [
    { src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Branding 1' },
    { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Branding 2' },
    { src: '/projects/trainfy/bento-2.png', alt: 'Branding 3' },
    { src: '/projects/trainfy/bento-7.jpg', alt: 'Branding 4' },
    { src: '/projects/trainfy/editorial-full.jpg', alt: 'Branding 5' },
    { src: '/projects/trainfy/bento-3.jpg', alt: 'Branding 6' },
  ],
};

export default function BrandingScrollerPlayground() {
  return (
    <main style={{ paddingTop: 100 }}>
      <BrandingScrollerSection data={mockData} />
    </main>
  );
}
