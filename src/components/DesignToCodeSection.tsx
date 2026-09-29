import { useId, useState, type CSSProperties } from 'react';
import { compareNotes, pipelineSteps } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cx } from '../utils/cx';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import './DesignToCodeSection.scss';

type SpecLayer = 'design' | 'build';

/**
 * One sample component drawn twice: as an annotated wireframe (design) and as the
 * finished UI (build). Both layers share the exact same box model so they line up.
 */
function SpecCard({ layer }: { layer: SpecLayer }) {
  const design = layer === 'design';

  return (
    <div className={cx('spec', `spec--${layer}`)}>
      <div className="spec__card">
        <div className="spec__media">
          {design ? (
            <>
              <span className="spec__cross" />
              <span className="spec__note spec__note--media">Image · 16:9</span>
            </>
          ) : (
            <>
              <span className="spec__shape spec__shape--a" />
              <span className="spec__shape spec__shape--b" />
              <span className="spec__shape spec__shape--c" />
            </>
          )}
        </div>

        <div className="spec__body">
          {design ? <span className="spec__measure spec__measure--pad" data-value="24" /> : null}

          <div className="spec__chips">
            {design ? <span className="spec__measure spec__measure--gap" data-value="16" /> : null}
            <span className="spec__chip">
              <span>{design ? 'Chip' : 'Component'}</span>
            </span>
            <span className="spec__chip spec__chip--muted">
              <span>{design ? 'Chip' : 'Responsive'}</span>
            </span>
          </div>

          <p className="spec__title">
            <span>{design ? 'Title · Display 600' : 'Reusable card'}</span>
          </p>
          <p className="spec__text">
            <span>{design ? 'Body · 15 / 1.5 · max two lines' : 'Built once from the spec, reused across every screen.'}</span>
          </p>

          <div className="spec__footer">
            <span className="spec__avatar" />
            <span className="spec__meta">{design ? 'Meta · 13' : 'Design system'}</span>
            <span className="spec__button">
              <span>{design ? 'Button' : 'View details'}</span>
              {design ? <span className="spec__measure spec__measure--height" data-value="40" /> : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareSlider() {
  const [position, setPosition] = useState(50);
  const descriptionId = useId();

  return (
    <figure className="compare" style={{ '--pos': `${position}%` } as CSSProperties}>
      <div className="compare__stage">
        <div className="compare__layer compare__layer--build" aria-hidden="true">
          <SpecCard layer="build" />
        </div>
        <div className="compare__layer compare__layer--design" aria-hidden="true">
          <SpecCard layer="design" />
        </div>

        <span className="compare__tag compare__tag--design" aria-hidden="true">
          Design
        </span>
        <span className="compare__tag compare__tag--build" aria-hidden="true">
          Implementation
        </span>

        <span className="compare__divider" aria-hidden="true">
          <span className="compare__handle" />
        </span>

        <input
          type="range"
          className="compare__input"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Reveal design or implementation"
          aria-valuetext={`${position}% design, ${100 - position}% implementation`}
          aria-describedby={descriptionId}
        />
      </div>

      <figcaption id={descriptionId} className="compare__caption">
        The same card as an annotated design file and as the finished component. Drag the handle or use the arrow keys to
        compare them.
      </figcaption>
    </figure>
  );
}

export function DesignToCodeSection() {
  const { ref, visible } = useScrollReveal<HTMLOListElement>({ threshold: 0.3 });

  return (
    <SectionFrame id="design-to-code" nav="projects" label="Design to code">
      <SectionHeading
        id="design-to-code-title"
        title="From design file to production UI."
        lead="I convert design mockups, wireframes and UI/UX designs into pixel-perfect responsive interfaces, built from reusable components."
      />

      <ol ref={ref} className={cx('pipeline', visible && 'is-visible')} aria-label="How a design becomes a product">
        {pipelineSteps.map((step, index) => (
          <li key={step.id} className="pipeline__step" style={{ '--i': index } as CSSProperties}>
            <span className="pipeline__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="pipeline__title">{step.title}</h3>
            <p className="pipeline__text">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="d2c">
        <CompareSlider />

        <div className="d2c__notes">
          <h3 className="d2c__notes-title">What stays true in the build</h3>
          <ul className="diamond-list">
            {compareNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionFrame>
  );
}
