import type { CSSProperties } from 'react';
import type { Project } from '../types/project';
import { cx } from '../utils/cx';
import { ProjectCover } from './ProjectCover';

interface ProjectCardProps {
  project: Project;
  /** Lay the card out horizontally across the full row. */
  wide?: boolean;
}

export function ProjectCard({ project, wide = false }: ProjectCardProps) {
  const titleId = `project-${project.id}`;

  return (
    <article
      className={cx('project', wide && 'project--wide')}
      style={{ '--accent': `var(--p-${project.accent})` } as CSSProperties}
      aria-labelledby={titleId}
    >
      <ProjectCover variant={project.cover} />

      <div className="project__body">
        <p className="project__company">{project.company}</p>
        <h3 id={titleId} className="project__title">
          {project.title}
        </h3>
        <p className="project__summary">{project.summary}</p>

        <div className="project__group">
          <p className="project__label" id={`${titleId}-tech`}>
            Built with
          </p>
          <ul className="tag-list" aria-labelledby={`${titleId}-tech`}>
            {project.tech.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="project__group">
          <p className="project__label" id={`${titleId}-work`}>
            What I worked on
          </p>
          <ul className="diamond-list project__highlights" aria-labelledby={`${titleId}-work`}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {project.note ? <p className="project__note">{project.note}</p> : null}
      </div>
    </article>
  );
}
