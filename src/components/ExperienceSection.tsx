import type { CSSProperties } from 'react';
import { performanceMetric } from '../data/content';
import { currentRole } from '../data/experience';
import { person } from '../data/site';
import { useCounter } from '../hooks/useCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cx } from '../utils/cx';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import './ExperienceSection.scss';

function CurrentRoleCard() {
  const details = [
    { term: 'Company', value: currentRole.company },
    ...(currentRole.payroll ? [{ term: 'Payroll', value: currentRole.payroll }] : []),
    { term: 'Since', value: currentRole.start },
  ];

  return (
    <article className="role-card" aria-labelledby="current-role-title">
      <p className="role-card__badge">
        <span className="status-dot" aria-hidden="true" />
        Current role
      </p>
      <h3 id="current-role-title" className="role-card__title">
        {currentRole.role}
      </h3>

      <dl className="role-card__details">
        {details.map((item) => (
          <div key={item.term} className="role-card__detail">
            <dt>{item.term}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <h4 className="role-card__subtitle">Current focus</h4>
      <ul className="diamond-list role-card__focus">
        {currentRole.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function PerformanceMetric() {
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.45 });
  const { value, done } = useCounter(performanceMetric.value, { start: visible, duration: 1600 });
  const months = Array.from({ length: performanceMetric.months }, (_, index) => index + 1);

  return (
    <article ref={ref} className={cx('metric', visible && 'is-visible')} aria-labelledby="metric-label">
      <p className="metric__eyebrow">Performance</p>

      <p className="metric__value">
        <span aria-hidden="true">
          <span className="metric__approx">~</span>
          <span className="metric__number">{done ? performanceMetric.value : value.toFixed(1)}</span>
          <span className="metric__unit">{performanceMetric.unit}</span>
        </span>
        <span className="visually-hidden">About {performanceMetric.value} seconds</span>
      </p>
      <h3 id="metric-label" className="metric__label">
        {performanceMetric.label}
      </h3>

      <div className="metric__window" aria-hidden="true">
        <span className="metric__bar">
          <span className="metric__fill" />
        </span>
        <ol className="metric__months">
          {months.map((month) => (
            <li key={month} style={{ '--m': month } as CSSProperties}>
              Month {month}
            </li>
          ))}
        </ol>
      </div>

      <p className="metric__detail">{performanceMetric.detail}</p>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <SectionFrame id="experience" nav="experience" label="Experience">
      <SectionHeading
        id="experience-title"
        title="What I’m building now."
        lead={`${person.current.role} at ${person.current.shortCompany} since ${person.current.since}, turning Figma and Zeplin designs into production Vue.js interfaces.`}
      />

      <div className="experience">
        <CurrentRoleCard />
        <PerformanceMetric />
      </div>
    </SectionFrame>
  );
}
