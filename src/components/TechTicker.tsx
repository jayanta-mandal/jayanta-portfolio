import { tickerTechnologies } from '../data/skills';
import './TechTicker.scss';

/** A slow strip of technology names. Decorative: the Skills section lists them properly. */
export function TechTicker() {
  const sequence = [...tickerTechnologies, ...tickerTechnologies];
  const originals = tickerTechnologies.length;

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {sequence.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className={index >= originals ? 'ticker__item ticker__item--clone' : 'ticker__item'}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
