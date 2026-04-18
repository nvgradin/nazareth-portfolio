import AnimatedBackgroundStory from '@/components/about/AnimatedBackgroundStory';

export default function AnimatedBgPlayground() {
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatedBackgroundStory style={{ position: 'absolute', inset: 0 }} />

      {/* Sample text overlay — como quedaría en el acto II */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8vw',
        pointerEvents: 'none',
      }}>
        <div style={{ maxWidth: 520 }}>
          <p style={{
            fontFamily: 'serif',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E8956D',
            opacity: 0.6,
            marginBottom: 16,
          }}>
            II — La pregunta
          </p>
          <h2 style={{
            fontFamily: 'serif',
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#F5EFE6',
            marginBottom: 24,
          }}>
            Con el tiempo, empecé a mirar más allá del mensaje.
          </h2>
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.85,
            color: '#E8956D',
            opacity: 0.75,
          }}>
            En e-learning vi una carencia clara: plataformas funcionales, sí, pero frías, rígidas y poco pensadas para la experiencia real de quienes las usaban.
          </p>
        </div>
      </div>
    </main>
  );
}
