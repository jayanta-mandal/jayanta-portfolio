import { useMemo, useState, type CSSProperties } from 'react';
import { skillGroups } from '../data/skills';
import { cx } from '../utils/cx';
import { FilterChips, type FilterOption } from './ui/FilterChips';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import './SkillsSection.scss';

const ALL = 'all';

export function SkillsSection() {
  const [focus, setFocus] = useState<string>(ALL);

  const options = useMemo<FilterOption<string>[]>(
    () => [
      { id: ALL, label: 'Everything' },
      ...skillGroups.map((group) => ({ id: group.id, label: group.name, count: group.skills.length })),
    ],
    [],
  );

  const focusedName = skillGroups.find((group) => group.id === focus)?.name;

  return (
    <SectionFrame id="skills" nav="skills" label="Skills">
      <SectionHeading
        id="skills-title"
        title="The tools behind the work."
        lead="Grouped by the part of the job they serve. No proficiency bars, just the stack I use to take an interface from design file to production."
      />

      <FilterChips label="Highlight a skill group" options={options} value={focus} onChange={setFocus} className="skills__filters" />
      <p className="visually-hidden" aria-live="polite">
        {focusedName ? `Highlighting ${focusedName}` : 'Showing every skill group'}
      </p>

      <div className={cx('skills', focus !== ALL && 'has-focus')}>
        {skillGroups.map((group) => (
          <SpotlightCard
            key={group.id}
            className={cx('skill-card', focus === group.id && 'is-focused')}
            style={{ '--span': group.span } as CSSProperties}
            aria-labelledby={`skill-${group.id}`}
          >
            <header className="skill-card__header">
              <h3 id={`skill-${group.id}`} className="skill-card__name">
                {group.name}
              </h3>
              <span className="skill-card__count">
                {group.skills.length}
                <span className="visually-hidden"> items</span>
              </span>
            </header>
            <p className="skill-card__summary">{group.summary}</p>
            <ul className="skill-card__list">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </SectionFrame>
  );
}
