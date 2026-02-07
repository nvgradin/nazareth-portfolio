import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { ProjectLayout } from '@/components/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Genera las rutas estáticas para todos los proyectos
 */
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Genera metadata dinámica para SEO
 */
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.seoTitle || `${project.title} | Nazareth`,
    description: project.seoDescription || project.excerpt,
  };
}

/**
 * Página dinámica de proyecto
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#e2ddd5', minHeight: '100vh' }}>
      <ProjectLayout project={project} />
    </main>
  );
}
