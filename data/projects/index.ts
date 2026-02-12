import { ProjectWithLayout } from '@/lib/project-layout.types';

// Importar proyectos individuales
import { trainfy } from './trainfy';
import { lasIslasCies } from './las-islas-cies';
import { silviaFernandezDeLuna } from './silvia-fernandez-de-luna';

// Registry: map de slug -> proyecto
export const projectRegistry: Record<string, ProjectWithLayout> = {
  trainfy,
  'las-islas-cies': lasIslasCies,
  'silvia-fernandez-de-luna': silviaFernandezDeLuna,
};

// Array con todos los proyectos
export const projects: ProjectWithLayout[] = Object.values(projectRegistry);

// Re-exportar proyectos individuales
export { trainfy, lasIslasCies, silviaFernandezDeLuna };

// En desarrollo se muestran todos los proyectos (incluidos drafts)
const isDev = process.env.NODE_ENV === 'development';

function isVisible(p: ProjectWithLayout): boolean {
  return isDev || p.status === 'published';
}

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Obtener todos los proyectos visibles (published + drafts en dev)
 */
export function getPublishedProjects(): ProjectWithLayout[] {
  return projects
    .filter(isVisible)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

/**
 * Obtener proyecto por slug
 */
export function getProjectBySlug(slug: string): ProjectWithLayout | undefined {
  const project = projectRegistry[slug];
  if (project && isVisible(project)) {
    return project;
  }
  return undefined;
}

/**
 * Obtener todos los slugs (para generateStaticParams)
 */
export function getAllProjectSlugs(): string[] {
  return projects.filter(isVisible).map((p) => p.slug);
}

/**
 * Obtener proyectos relacionados (excluyendo el actual)
 */
export function getRelatedProjects(currentSlug: string, limit = 2): ProjectWithLayout[] {
  return getPublishedProjects()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
