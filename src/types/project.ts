export type ProjectCategory = 'vue' | 'react' | 'angular' | 'web';

export type ProjectCoverVariant = 'app' | 'listing' | 'health' | 'dashboard' | 'portal' | 'article';

export type ProjectAccent = 'blue' | 'violet' | 'teal' | 'rose' | 'indigo' | 'green';

export interface Project {
  id: string;
  title: string;
  company: string;
  category: ProjectCategory;
  summary: string;
  tech: string[];
  highlights: string[];
  cover: ProjectCoverVariant;
  accent: ProjectAccent;
  featured?: boolean;
  note?: string;
}

export interface ProjectFilter {
  id: ProjectCategory | 'all';
  label: string;
}
