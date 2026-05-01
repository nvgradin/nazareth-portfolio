import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { Suspense } from 'react';
import { ProjectLayout } from '@/components/projects';
import { ProjectEnd } from '@/components/projects/ProjectEnd';
import { ProjectNav } from '@/components/layout/ProjectNav';
import { getNextProjects, ProjectOrigin } from '@/lib/getNextProject';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string; filter?: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  const ogImage = project.cover || project.thumbnail.src;

  return {
    title: project.seoTitle || `${project.title} | Nazareth`,
    description: project.seoDescription || project.excerpt,
    openGraph: {
      title: project.seoTitle || `${project.title} | Nazareth`,
      description: project.seoDescription || project.excerpt,
      type: 'article',
      locale: 'es_ES',
      images: [{ url: ogImage, alt: project.thumbnail.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle || `${project.title} | Nazareth`,
      description: project.seoDescription || project.excerpt,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { slug } = await params;
  const { from: rawFrom, filter } = await searchParams;

  const from: ProjectOrigin =
    rawFrom === 'explorar' ? 'explorar' : 'destacados';

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const stackProjects = getNextProjects(slug, from, filter, 3);

  return (
    <main style={{ backgroundColor: '#e2ddd5', overscrollBehavior: 'none', display: 'flex', flexDirection: 'column' }}>
      <ProjectLayout project={project} />
      <ProjectEnd stackProjects={stackProjects} from={from} />
      <Suspense>
        <ProjectNav />
      </Suspense>
    </main>
  );
}
