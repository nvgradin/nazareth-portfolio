'use client';

import { NextProjectStack } from './NextProjectStack';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectOrigin } from '@/lib/getNextProject';

interface StackItem {
  project: ProjectWithLayout;
  href: string;
}

interface Props {
  stackProjects: StackItem[];
  from: ProjectOrigin;
}

export function ProjectEnd({ stackProjects, from }: Props) {
  return <NextProjectStack stackProjects={stackProjects} from={from} />;
}
