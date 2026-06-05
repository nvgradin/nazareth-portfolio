import { Suspense } from 'react';
import { Metadata } from 'next';
import { ProjectsView } from '@/components/projects-view';

export const metadata: Metadata = {
  title: 'Proyectos | Nazareth',
  description: 'Colección de proyectos de diseño de producto, UX/UI y experiencias digitales.',
};

export default function ProjectsPage() {
  return (
    <Suspense>
      <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        Proyectos de diseño — Nazareth Gradín
      </h1>
      <ProjectsView />
    </Suspense>
  );
}
