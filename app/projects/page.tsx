import { Suspense } from 'react';
import { Metadata } from 'next';
import { ProjectsView } from '@/components/projects-view';
import { breadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Proyectos | Nazareth',
  description: 'Colección de proyectos de diseño de producto, UX/UI y experiencias digitales.',
};

const BREADCRUMB = breadcrumbSchema([
  { name: 'Inicio', url: 'https://nazarethgradin.com' },
  { name: 'Proyectos', url: 'https://nazarethgradin.com/projects' },
]);

export default function ProjectsPage() {
  return (
    <Suspense>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        Proyectos de diseño — Nazareth Gradín
      </h1>
      <ProjectsView />
    </Suspense>
  );
}
