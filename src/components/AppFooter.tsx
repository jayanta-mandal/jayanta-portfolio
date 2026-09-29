import { person } from '../data/site';
import { Icon } from './ui/Icon';
import { SocialLinks } from './ui/SocialLinks';
import './AppFooter.scss';

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{person.name}</p>
          <p className="site-footer__role">{person.roles.join(' · ')}</p>
        </div>

        <SocialLinks className="site-footer__social" />

        <div className="site-footer__meta">
          <p>Designed and built with React, TypeScript and SCSS.</p>
          <p>
            © {year} {person.name}
          </p>
        </div>

        <a className="site-footer__top" href="#home">
          <Icon name="arrow-up" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
