import { principles } from '../data/content';
import { cx } from '../utils/cx';
import { Icon } from './ui/Icon';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import './PrinciplesSection.scss';

const RULER_TICKS = 25;

export function PrinciplesSection() {
  return (
    <SectionFrame id="principles" nav="experience" label="Principles">
      <SectionHeading
        id="principles-title"
        title="What I care about."
        lead="The standards I hold every interface to, whether it’s a single component or a full application."
      />

      <ul className="principles">
        {principles.map((principle, index) => {
          const lead = index === 0;

          return (
            <SpotlightCard as="li" key={principle.id} className={cx('principle', lead && 'principle--lead')}>
              <span className="principle__icon" aria-hidden="true">
                <Icon name={principle.icon} />
              </span>
              <h3 className="principle__title">{principle.title}</h3>
              <p className="principle__text">{principle.description}</p>

              {lead ? (
                <span className="principle__ruler" aria-hidden="true">
                  {Array.from({ length: RULER_TICKS }, (_, tick) => (
                    <span key={tick} className={cx(tick % 4 === 0 && 'is-major')} />
                  ))}
                </span>
              ) : null}
            </SpotlightCard>
          );
        })}
      </ul>
    </SectionFrame>
  );
}
