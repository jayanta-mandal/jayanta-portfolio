import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { workflowSteps } from '../data/content';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Icon } from './ui/Icon';
import { SectionFrame } from './ui/SectionFrame';
import { SectionHeading } from './ui/SectionHeading';
import './WorkflowSection.scss';

const LAST = workflowSteps.length - 1;

export function WorkflowSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const vertical = useMediaQuery('(min-width: 1024px)');
  const step = workflowSteps[active];

  const focusTab = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  // A button that becomes disabled would drop keyboard focus, so hand it to its sibling.
  const stepBy = (delta: number) => {
    const next = Math.min(LAST, Math.max(0, active + delta));
    setActive(next);
    if (next === 0) nextRef.current?.focus();
    if (next === LAST) prevRef.current?.focus();
  };

  // Roving focus across the tabs, following the WAI-ARIA tabs pattern.
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyMap: Record<string, number> = {
      ArrowDown: index === LAST ? 0 : index + 1,
      ArrowRight: index === LAST ? 0 : index + 1,
      ArrowUp: index === 0 ? LAST : index - 1,
      ArrowLeft: index === 0 ? LAST : index - 1,
      Home: 0,
      End: LAST,
    };
    const next = keyMap[event.key];
    if (next === undefined) return;
    event.preventDefault();
    focusTab(next);
  };

  return (
    <SectionFrame id="workflow" nav="experience" label="Workflow">
      <SectionHeading
        id="workflow-title"
        title="How a feature gets built."
        lead="Six steps from the first read of a requirement to a feature running in production."
      />

      <div className="workflow">
        <div
          role="tablist"
          aria-label="Workflow steps"
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
          className="workflow__tabs"
        >
          {workflowSteps.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`workflow-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="workflow-panel"
                tabIndex={selected ? 0 : -1}
                className="workflow__tab"
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className="workflow__tab-number" aria-hidden="true">
                  {item.number}
                </span>
                <span className="workflow__tab-title">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="workflow-panel"
          aria-labelledby={`workflow-tab-${step.id}`}
          tabIndex={0}
          className="workflow__panel"
        >
          <div key={step.id} className="workflow__content">
            <div className="workflow__panel-head">
              <span className="workflow__number" aria-hidden="true">
                {step.number}
              </span>
              <span className="workflow__icon" aria-hidden="true">
                <Icon name={step.icon} />
              </span>
            </div>
            <h3 className="workflow__title">{step.title}</h3>
            <p className="workflow__text">{step.description}</p>
          </div>

          <div className="workflow__footer">
            <div className="workflow__progress">
              <span className="workflow__progress-label" aria-live="polite">
                Step {active + 1} of {workflowSteps.length}
                <span className="visually-hidden">: {step.title}</span>
              </span>
              <span
                className="workflow__progress-bar"
                style={{ '--step': (active + 1) / workflowSteps.length } as CSSProperties}
                aria-hidden="true"
              />
            </div>
            <div className="workflow__nav">
              <button
                type="button"
                ref={prevRef}
                className="workflow__arrow"
                onClick={() => stepBy(-1)}
                disabled={active === 0}
              >
                <Icon name="chevron-left" />
                <span className="visually-hidden">Previous step</span>
              </button>
              <button
                type="button"
                ref={nextRef}
                className="workflow__arrow"
                onClick={() => stepBy(1)}
                disabled={active === LAST}
              >
                <Icon name="chevron-right" />
                <span className="visually-hidden">Next step</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
