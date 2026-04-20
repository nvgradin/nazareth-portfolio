import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { ProjectLayout } from '@/components/projects';
import { BackToProjectsPill } from '@/components/projects/BackToProjectsPill';
import { NextProjectSection } from '@/components/projects/NextProjectSection';
import { getNextProject, ProjectOrigin } from '@/lib/getNextProject';

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

  return {
    title: project.seoTitle || `${project.title} | Nazareth`,
    description: project.seoDescription || project.excerpt,
  };
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { slug } = await params;
  const { from: rawFrom, filter } = await searchParams;

  const from: ProjectOrigin =
    rawFrom === 'explorar' ? 'explorar' : 'destacados';

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { project: nextProject, href: nextHref } = getNextProject(slug, from, filter);

  return (
    <main style={{ backgroundColor: '#e2ddd5', minHeight: '100vh' }}>
      <Suspense>
        <BackToProjectsPill />
      </Suspense>
      <ProjectLayout project={project} />
      <NextProjectSection
        nextProject={nextProject}
        href={nextHref}
        from={from}
      />
    </main>
  );
}
