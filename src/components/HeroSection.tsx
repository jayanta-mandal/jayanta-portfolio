import { person } from '../data/site';
import { HeroVisual } from './HeroVisual';
import { Icon } from './ui/Icon';
import { DownloadCvLink } from './ui/DownloadCvLink';
import { MagneticLink } from './ui/MagneticLink';
import { SelectionFrame } from './ui/SelectionFrame';
import { SocialLinks } from './ui/SocialLinks';
import './HeroSection.scss';

export function HeroSection() {
  return (
    <section id="home" data-nav="home" className="hero" aria-labelledby="home-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__status hero__enter" style={{ animationDelay: '0.05s' }}>
            <span className="status-dot" aria-hidden="true" />
            Currently {person.current.role} at {person.current.shortCompany}
          </p>

          <h1 id="home-title" className="hero__name hero__enter" style={{ animationDelay: '0.12s' }}>
            {person.name}
            <span className="hero__roles">{person.roles.join(' · ')}</span>
          </h1>

          <SelectionFrame label="Headline" className="hero__headline-frame">
            <p className="hero__headline hero__enter" style={{ animationDelay: '0.2s' }}>
              {person.headline}
            </p>
          </SelectionFrame>

          <p className="hero__tagline hero__enter" style={{ animationDelay: '0.5s' }}>
            {person.tagline}
          </p>
          <p className="hero__summary hero__enter" style={{ animationDelay: '0.58s' }}>
            {person.summary}
          </p>

          <div className="hero__actions hero__enter" style={{ animationDelay: '0.66s' }}>
            <MagneticLink href="#projects" variant="primary" size="lg">
              Explore my work
            </MagneticLink>
            <MagneticLink href="#journey" variant="secondary" size="lg">
              View experience
            </MagneticLink>
          </div>

          <div className="hero__meta hero__enter">
            <SocialLinks className="hero__social" />
            <span className="hero__meta-divider" aria-hidden="true" />
            <DownloadCvLink className="hero__cv" />
          </div>
        </div>

        <div className="hero__visual hero__enter" style={{ animationDelay: '0.3s' }}>
          <HeroVisual />
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <Icon name="arrow-down" />
        <span className="visually-hidden">Skip to the about section</span>
      </a>
    </section>
  );
}
