import { useMemo, useState, type CSSProperties } from 'react';
import { projectFilters, projects } from '../data/projects';
import type { ProjectFilter } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { FilterChips } from './ui/FilterChips';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import './ProjectsSection.scss';

type FilterId = ProjectFilter['id'];

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterId>('all');

  const options = useMemo(
    () =>
      projectFilters.map((option) => ({
        ...option,
        count: option.id === 'all' ? projects.length : projects.filter((p) => p.category === option.id).length,
      })),
    [],
  );

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  const regularCount = visible.filter((project) => !project.featured).length;

  return (
    <SectionFrame id="projects" nav="projects" label="Projects">
      <SectionHeading
        id="projects-title"
        title="Selected work."
        lead="Six projects across four companies, from government portals to React, Angular and Vue applications. Confidential client details are left out."
      />

      <FilterChips label="Filter projects by technology" options={options} value={filter} onChange={setFilter} className="projects__filters" />
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      <ul key={filter} className="projects">
        {visible.map((project, index) => {
          // Featured work spans the row; so does a card that would otherwise sit alone on the last row.
          const lastAlone = index === visible.length - 1 && regularCount % 2 === 1 && !project.featured;
          const wide = Boolean(project.featured) || lastAlone;
          return (
            <li
              key={project.id}
              className={wide ? 'projects__item projects__item--wide' : 'projects__item'}
              style={{ '--i': index } as CSSProperties}
            >
              <ProjectCard project={project} wide={wide} />
            </li>
          );
        })}
      </ul>
    </SectionFrame>
  );
}
