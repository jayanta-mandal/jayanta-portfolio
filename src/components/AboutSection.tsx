import { aboutHighlights, aboutParagraphs, designSources } from '../data/content';
import { roleEvolution } from '../data/experience';
import { person } from '../data/site';
import { coreStack } from '../data/skills';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import { SelectionFrame } from './ui/SelectionFrame';
import './AboutSection.scss';

export function AboutSection() {
  return (
    <SectionFrame id="about" nav="about" label="About">
      <SectionHeading id="about-title" title="Where design meets development." lead={person.supporting} />

      <div className="about">
        <div className="about__story">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="about__evolution">
          <h3 className="about__subhead">How the role has grown</h3>
          <ol className="evolution">
            {roleEvolution.map((role, index) => (
              <li key={role} className={index === roleEvolution.length - 1 ? 'is-current' : undefined}>
                {role}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="convert">
        <h3 className="about__subhead">What I convert</h3>
        <div className="convert__flow">
          <ul className="convert__inputs">
            {designSources.map((source) => (
              <li key={source} className="convert__input">
                {source}
              </li>
            ))}
          </ul>
          <svg className="convert__lines" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 20 C 110 20, 90 60, 200 60" />
            <path d="M0 60 L 200 60" />
            <path d="M0 100 C 110 100, 90 60, 200 60" />
          </svg>
          <span className="convert__into" aria-hidden="true" />
          <SelectionFrame label="Output" showSize={false} className="convert__output-frame">
            <p className="convert__output">
              <span className="visually-hidden">into </span>Pixel-perfect responsive interfaces
            </p>
          </SelectionFrame>
        </div>
      </div>

      <div className="about__grid">
        <div>
          <h3 className="about__subhead">Languages and frameworks</h3>
          <ul className="tag-list">
            {coreStack.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="about__subhead">Built in by default</h3>
          <ul className="diamond-list about__highlights">
            {aboutHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionFrame>
  );
}
