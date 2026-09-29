import { useRef, useState, type AnimationEvent, type CSSProperties, type FocusEvent } from 'react';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { cx } from '../utils/cx';
import { Icon } from './ui/Icon';
import './HeroVisual.scss';

const STAGES = [
  { id: 'design', label: 'Design', caption: 'Spacing, type and states are read straight from the design file.' },
  { id: 'develop', label: 'Develop', caption: 'The card is rebuilt as a typed, reusable component.' },
  { id: 'experience', label: 'Experience', caption: 'It ships as a responsive, accessible interface.' },
] as const;

const STAGE_DURATION_MS = 3800;

type Token = [text: string, kind?: 'tag' | 'attr' | 'str' | 'num' | 'prop' | 'com' | 'punc'];

const CODE_LINES: Token[][] = [
  [['<', 'punc'], ['Card', 'tag'], [' elevation', 'attr'], ['=', 'punc'], ['{1}', 'num'], ['>', 'punc']],
  [['  <', 'punc'], ['Avatar', 'tag'], [' initials', 'attr'], ['=', 'punc'], ['"JM"', 'str'], [' />', 'punc']],
  [['  <', 'punc'], ['Title', 'tag'], ['>', 'punc'], ['Jayanta Mandal'], ['</', 'punc'], ['Title', 'tag'], ['>', 'punc']],
  [['  <', 'punc'], ['Text', 'tag'], ['>', 'punc'], ['UI/UX Developer'], ['</', 'punc'], ['Text', 'tag'], ['>', 'punc']],
  [['  <', 'punc'], ['Tags', 'tag'], [' items', 'attr'], ['=', 'punc'], ['{stack}', 'num'], [' />', 'punc']],
  [['  <', 'punc'], ['Button', 'tag'], ['>', 'punc'], ['Say hello'], ['</', 'punc'], ['Button', 'tag'], ['>', 'punc']],
  [['</', 'punc'], ['Card', 'tag'], ['>', 'punc']],
  [['/* card.scss */', 'com']],
  [['.card', 'tag'], [' {', 'punc']],
  [['  padding', 'prop'], [': ', 'punc'], ['24px', 'num'], [';', 'punc']],
  [['  gap', 'prop'], [': ', 'punc'], ['16px', 'num'], [';', 'punc']],
  [['  border-radius', 'prop'], [': ', 'punc'], ['12px', 'num'], [';', 'punc']],
  [['}', 'punc']],
];

const TAGS = [
  { label: 'Figma', x: '64%', y: '1%', depth: 22 },
  { label: 'Zeplin', x: '82%', y: '12%', depth: 14 },
  { label: 'WCAG', x: '1%', y: '56%', depth: 18 },
  { label: 'TypeScript', x: '70%', y: '88%', depth: 20 },
  { label: 'React', x: '4%', y: '65%', depth: 10 },
];

export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);

  useMouseParallax(rootRef, { disabled: reducedMotion });

  const autoplay = playing && !reducedMotion;
  const current = STAGES[stage];

  // The progress bar's own animation drives the cycle, so pausing it pauses everything.
  const handleProgressEnd = (event: AnimationEvent<HTMLSpanElement>) => {
    if (event.animationName === 'hv-progress') setStage((value) => (value + 1) % STAGES.length);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeld(false);
  };

  return (
    <div
      ref={rootRef}
      className={cx('hv', autoplay && 'is-autoplay', held && 'is-held')}
      data-stage={current.id}
      style={{ '--stage-duration': `${STAGE_DURATION_MS}ms` } as CSSProperties}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={handleBlur}
    >
      <div
        className="hv__stage"
        role="img"
        aria-label="Illustration: a profile card moving from a design file, to component code, to a finished interface."
      >
        <div className="hv__grid" aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        <svg className="hv__links" viewBox="0 0 100 110" preserveAspectRatio="none" aria-hidden="true">
          <path className={cx('hv__link', stage >= 1 && 'is-live')} d="M 26 46 C 26 60, 30 62, 40 62" />
          <path className={cx('hv__link', stage >= 2 && 'is-live')} d="M 82 82 C 82 92, 76 93, 66 93" />
        </svg>

        {/* 01 Design */}
        <div className={cx('hv-panel hv-panel--design', stage === 0 && 'is-active')} style={{ '--depth': 10 } as CSSProperties}>
          <div className="hv-panel__bar">
            <span>Profile card</span>
            <span className="hv-pill">Design</span>
          </div>
          <div className="hv-design">
            <div className="wf-card">
              <span className="wf-avatar" />
              <span className="wf-lines">
                <span className="wf-line" style={{ width: '72%' }} />
                <span className="wf-line wf-line--thin" style={{ width: '48%' }} />
              </span>
              <span className="wf-chips">
                <span />
                <span />
                <span />
              </span>
              <span className="wf-button" />

              <span className="hv-select">
                <span className="hv-select__size">48 × 48</span>
              </span>
              <span className="hv-redline hv-redline--padding">
                <span>24</span>
              </span>
              <span className="hv-redline hv-redline--gap">
                <span>16</span>
              </span>
            </div>
          </div>
        </div>

        {/* 02 Develop */}
        <div className={cx('hv-panel hv-panel--code', stage === 1 && 'is-active')} style={{ '--depth': 16 } as CSSProperties}>
          <div className="hv-panel__bar">
            <span className="hv-tabs">
              <span className="hv-tabs__tab is-current">ProfileCard.tsx</span>
              <span className="hv-tabs__tab">card.scss</span>
            </span>
          </div>
          <pre className="hv-code">
            <code>
              {CODE_LINES.map((tokens, lineIndex) => (
                <span key={lineIndex} className="hv-code__line">
                  <span className="hv-code__num">{lineIndex + 1}</span>
                  <span className="hv-code__text" style={{ '--i': lineIndex } as CSSProperties}>
                    {tokens.map(([text, kind], tokenIndex) => (
                      <span key={tokenIndex} className={kind ? `t-${kind}` : undefined}>
                        {text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>

        {/* 03 Experience */}
        <div className={cx('hv-panel hv-panel--render', stage === 2 && 'is-active')} style={{ '--depth': 24 } as CSSProperties}>
          <div className="hv-panel__bar">
            <span>Profile card</span>
            <span className="hv-pill hv-pill--live">
              <i /> Live
            </span>
          </div>
          <div className="hv-render">
            <div className="ui-card">
              <span className="ui-avatar">
                <span>JM</span>
              </span>
              <span className="ui-text">
                <span className="ui-name">Jayanta Mandal</span>
                <span className="ui-role">UI/UX Developer</span>
              </span>
              <span className="ui-chips">
                <span>React</span>
                <span>Vue.js</span>
                <span>TypeScript</span>
              </span>
              <span className="ui-button">Say hello</span>
            </div>
          </div>
        </div>

        {TAGS.map((tag) => (
          <span
            key={tag.label}
            className="hv-tag"
            style={{ '--x': tag.x, '--y': tag.y, '--depth': tag.depth } as CSSProperties}
            aria-hidden="true"
          >
            {tag.label}
          </span>
        ))}

        <span className="hv-cursor" aria-hidden="true">
          <svg viewBox="0 0 16 16" className="hv-cursor__arrow">
            <path d="M2 1.5 13.5 7 8 8.4 5.6 14 2 1.5Z" />
          </svg>
          <span className="hv-cursor__tag">Jayanta</span>
        </span>
      </div>

      <div className="hv__controls">
        <div className="hv__steps" role="group" aria-label="Show a stage">
          {STAGES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="hv-step"
              aria-pressed={index === stage}
              onClick={() => setStage(index)}
            >
              <span className="hv-step__track" aria-hidden="true">
                {index === stage ? (
                  <span key={`${stage}-${autoplay}`} className="hv-step__fill" onAnimationEnd={handleProgressEnd} />
                ) : null}
              </span>
              <span className="hv-step__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="hv-step__label">{item.label}</span>
            </button>
          ))}
        </div>
        {!reducedMotion ? (
          <button type="button" className="hv__toggle" onClick={() => setPlaying((value) => !value)}>
            <Icon name={playing ? 'pause' : 'play'} />
            <span className="visually-hidden">{playing ? 'Pause the animation' : 'Play the animation'}</span>
          </button>
        ) : null}
      </div>
      <p className="hv__caption">{current.caption}</p>
    </div>
  );
}
