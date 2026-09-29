import { useRef } from 'react';
import { experience } from '../data/experience';
import { person } from '../data/site';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ExperienceEntry } from '../types/experience';
import { cx } from '../utils/cx';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import './JourneySection.scss';

function TimelineItem({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>({ threshold: 0.4, rootMargin: '0px 0px -30% 0px' });

  return (
    <li ref={ref} className={cx('tl-item', entry.current && 'tl-item--current', visible && 'is-reached')}>
      <div className="tl-item__when">
        <span className="tl-item__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="tl-item__years">{entry.yearRange}</span>
      </div>

      <span className="tl-item__node" aria-hidden="true" />

      <article className="tl-card" aria-labelledby={`${entry.id}-role`}>
        {entry.current ? (
          <p className="tl-card__badge">
            <span className="status-dot" aria-hidden="true" />
            Current role
          </p>
        ) : null}
        <h3 id={`${entry.id}-role`} className="tl-card__role">
          {entry.role}
        </h3>
        <p className="tl-card__company">{entry.company}</p>
        <p className="tl-card__dates">
          {entry.start} – {entry.end}
        </p>
        {entry.payroll ? <p className="tl-card__payroll">Payroll: {entry.payroll}</p> : null}
        <ul className="tag-list tl-card__focus" aria-label={`Focus at ${entry.company}`}>
          {entry.focus.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export function JourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  useScrollProgress(timelineRef, 0.6);

  return (
    <SectionFrame id="journey" nav="journey" label="Journey">
      <SectionHeading
        id="journey-title"
        title={person.story}
        lead="9+ years across five companies, growing from web developer to UI/UX and front-end developer."
      />

      <div ref={timelineRef} className="timeline">
        <div className="timeline__track" aria-hidden="true">
          <span className="timeline__fill" />
        </div>
        <ol className="timeline__list">
          {experience.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
