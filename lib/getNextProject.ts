import { getPublishedProjects } from '@/data/projects';
import { ProjectWithLayout } from '@/lib/project-layout.types';

export type ProjectOrigin = 'destacados' | 'explorar';

export interface NextProjectResult {
  project: ProjectWithLayout;
  href: string;
}

/**
 * Devuelve el siguiente proyecto en la lista correcta según el origen del usuario.
 * - 'destacados': solo proyectos featured, ordenados por order
 * - 'explorar': todos los proyectos visibles, filtrados por categoría si se especifica
 *
 * Hace wrap: el siguiente al último es el primero.
 * Si el slug actual no se encuentra, devuelve el primero de la lista.
 */
export function getNextProject(
  currentSlug: string,
  from: ProjectOrigin,
  filter?: string,
): NextProjectResult {
  const all = getPublishedProjects();

  const list =
    from === 'destacados'
      ? all.filter((p) => p.featured)
      : filter && filter !== 'todo'
        ? all.filter((p) => p.categories.includes(filter as never))
        : all;

  const safeList = list.length > 0 ? list : all;

  const idx = safeList.findIndex((p) => p.slug === currentSlug);
  const next = safeList[(idx + 1) % safeList.length] ?? safeList[0];

  const filterParam = from === 'explorar' && filter && filter !== 'todo'
    ? `&filter=${filter}`
    : '';

  return {
    project: next,
    href: `/projects/${next.slug}?from=${from}${filterParam}`,
  };
}
