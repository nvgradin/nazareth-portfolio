import { Metadata } from 'next';
import { ProjectsView } from '@/components/projects-view';

export const metadata: Metadata = {
  title: 'Proyectos | Nazareth',
  description: 'Colección de proyectos de diseño de producto, UX/UI y experiencias digitales.',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
