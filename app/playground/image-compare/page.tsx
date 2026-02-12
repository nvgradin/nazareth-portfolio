import { ImageCompare } from '@/components/projects';

export default function ImageComparePage() {
  return (
    <main style={{ backgroundColor: '#e2ddd5', minHeight: '100vh', paddingTop: 80 }}>
      <ImageCompare
        before={{ src: '/projects/las-islas-cies/before.jpg', alt: 'Diseño original' }}
        after={{ src: '/projects/las-islas-cies/after.jpg', alt: 'Rediseño' }}
        labels={{ before: 'Antes', after: 'Después' }}
        background="#252851"
      />
    </main>
  );
}
