import { ReelCarousel, ReelItem } from '@/components/projects/ReelCarousel';

const reels: ReelItem[] = [
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/reel-comunidad-mujer-raiz-marzo.mp4', alt: 'Comunidad Mujer Raíz' },
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/reel-maestria-ra-programa.mp4', alt: 'Maestría RA Programa' },
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-cmr-roles-violencia.mp4', alt: 'CMR Roles Violencia' },
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-eventum-nov-dic.mp4', alt: 'Eventum Nov–Dic' },
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-reel-camminus.mp4', alt: 'Reel Camminus' },
  { type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-story-calendario-eventum-abril15.mp4', alt: 'Story Calendario Eventum' },
];

export default function ReelCarouselPlayground() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <ReelCarousel
        reels={reels}
        title="Reels"
        background="var(--brand-primary-900)"
      />
    </main>
  );
}
