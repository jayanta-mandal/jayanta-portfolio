import { education } from '../data/education';
import { SectionFrame } from './ui/SectionFrame';
import './EducationSection.scss';

/** Kept deliberately quiet: education supports the story, experience leads it. */
export function EducationSection() {
  return (
    <SectionFrame id="education" nav="experience" label="Education" className="section--compact">
      <div className="education">
        <h2 id="education-title" className="education__title">
          Education
        </h2>

        <ol className="education__list">
          {education.map((entry) => (
            <li key={entry.id} className="education__item">
              <p className="education__period">{entry.period}</p>
              <div className="education__main">
                <h3 className="education__qualification">
                  {entry.qualification}
                  {entry.field ? <span className="education__field"> — {entry.field}</span> : null}
                </h3>
                <p className="education__institution">
                  {entry.institution}
                  {entry.location ? <span className="education__location">, {entry.location}</span> : null}
                </p>
              </div>
              {entry.score ? <p className="education__score">{entry.score}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
