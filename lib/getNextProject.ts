import { getPublishedProjects } from '@/data/projects';
import { ProjectWithLayout } from '@/lib/project-layout.types';

export type ProjectOrigin = 'destacados' | 'explorar';

export interface NextProjectResult {
  project: ProjectWithLayout;
  href: string;
}

/**
 * Devuelve los siguientes `count` proyectos en loop, nunca repitiendo el actual.
 * Orden: [next, next+1, next+2, ...] — el índice 0 es el proyecto real siguiente.
 * Si la lista tiene menos proyectos que `count`, hace wrap excluyendo siempre currentSlug.
 */
export function getNextProjects(
  currentSlug: string,
  from: ProjectOrigin,
  filter?: string,
  count: number = 3,
): NextProjectResult[] {
  const all = getPublishedProjects();

  const list =
    from === 'destacados'
      ? all.filter((p) => p.featured)
      : filter && filter !== 'todo'
        ? all.filter((p) => p.categories.includes(filter as never))
        : all;

  const safeList = list.length > 0 ? list : all;

  // Candidatos: todos excepto el proyecto actual
  const candidates = safeList.filter((p) => p.slug !== currentSlug);
  // Si no hay candidatos suficientes usamos safeList completa (edge case extremo)
  const pool = candidates.length > 0 ? candidates : safeList;

  const filterParam = from === 'explorar' && filter && filter !== 'todo'
    ? `&filter=${filter}`
    : '';

  // Punto de inicio: el siguiente al actual en la lista original
  const currentIdx = safeList.findIndex((p) => p.slug === currentSlug);
  const startInPool = pool.findIndex(
    (p) => p.slug === safeList[(currentIdx + 1) % safeList.length]?.slug
  );
  const safeStart = startInPool >= 0 ? startInPool : 0;

  const results: NextProjectResult[] = [];
  const usedSlugs = new Set<string>();
  for (let i = 0; results.length < count; i++) {
    const p = pool[(safeStart + i) % pool.length];
    if (!usedSlugs.has(p.slug)) {
      usedSlugs.add(p.slug);
      results.push({ project: p, href: `/projects/${p.slug}?from=${from}${filterParam}` });
    }
    if (i >= pool.length) break; // pool exhausted
  }
  return results;
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
