import { ProjectWithLayout } from '@/lib/project-layout.types';

// Importar proyectos individuales
import { trainfy } from './trainfy';

// Registry: map de slug -> proyecto
export const projectRegistry: Record<string, ProjectWithLayout> = {
  trainfy,
};

// Array con todos los proyectos
export const projects: ProjectWithLayout[] = Object.values(projectRegistry);

// Re-exportar proyectos individuales
export { trainfy };

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Obtener todos los proyectos publicados
 */
export function getPublishedProjects(): ProjectWithLayout[] {
  return projects
    .filter((p) => p.status === 'published')
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

/**
 * Obtener proyecto por slug
 */
export function getProjectBySlug(slug: string): ProjectWithLayout | undefined {
  const project = projectRegistry[slug];
  if (project && project.status === 'published') {
    return project;
  }
  return undefined;
}

/**
 * Obtener todos los slugs (para generateStaticParams)
 */
export function getAllProjectSlugs(): string[] {
  return getPublishedProjects().map((p) => p.slug);
}

/**
 * Obtener proyectos relacionados (excluyendo el actual)
 */
export function getRelatedProjects(currentSlug: string, limit = 2): ProjectWithLayout[] {
  return getPublishedProjects()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
