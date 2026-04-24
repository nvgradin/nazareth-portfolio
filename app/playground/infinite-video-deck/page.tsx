'use client';

import { InfiniteVideoDeck, DeckItem } from '@/components/ui/InfiniteVideoDeck';

const items: DeckItem[] = [
  {
    id: 'reel-1',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/reel-comunidad-mujer-raiz-marzo.mp4',
    title: 'Comunidad Mujer Raíz',
  },
  {
    id: 'reel-2',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/reel-maestria-ra-programa.mp4',
    title: 'Maestría RA Programa',
  },
  {
    id: 'reel-3',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/sfdl-cmr-roles-violencia.mp4',
    title: 'CMR Roles Violencia',
  },
  {
    id: 'reel-4',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/sfdl-eventum-nov-dic.mp4',
    title: 'Eventum Nov–Dic',
  },
  {
    id: 'reel-5',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/sfdl-reel-camminus.mp4',
    title: 'Reel Camminus',
  },
  {
    id: 'reel-6',
    type: 'video',
    src: '/projects/silvia-fernandez-de-luna/reels/sfdl-story-calendario-eventum-abril15.mp4',
    title: 'Story Calendario Eventum',
  },
];

export default function InfiniteVideoDeckPlayground() {
  return (
    <>
      <style>{`
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .deck-page {
          background: linear-gradient(135deg, #1a0e00, #895900, #4f3a17, #87776a, #2d1f0a, #895900);
          background-size: 400% 400%;
          animation: gradShift 8s ease infinite;
        }
      `}</style>
      <main
        className="deck-page"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: '48px 24px',
        }}
      >
        <p
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Infinite Video Deck
        </p>

        <div style={{ width: 360, height: 700 }}>
          <InfiniteVideoDeck
            items={items}
            autoPlay
            autoPlayInterval={5000}
            showTitle
            cardWidth={300}
            cardHeight={490}
            cardRadius={0}
            yOffset={68}
            scaleStep={0.08}
            stackDepth={5}
            centerScale={1.12}
            dimOpacity={1}
            dimBlur={0}
            depthShadow
          />
        </div>
      </main>
    </>
  );
}
