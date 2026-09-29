import type { ReactNode } from 'react';
import type { ProjectCoverVariant } from '../types/project';
import { cx } from '../utils/cx';

const lines = (count: number, prefix = 'l') =>
  Array.from({ length: count }, (_, index) => <i key={`${prefix}${index}`} className="sk sk--line" />);

const SCREENS: Record<ProjectCoverVariant, ReactNode> = {
  app: (
    <div className="cs cs--app">
      <div className="cs__side">{lines(5, 's')}</div>
      <div className="cs__main">
        <div className="cs__steps">
          <i className="is-done" />
          <i className="is-done" />
          <i className="is-now" />
          <i />
        </div>
        <div className="cs__fields">
          <i className="sk sk--field" />
          <i className="sk sk--field" />
          <i className="sk sk--field sk--wide" />
        </div>
        <i className="sk sk--cta" />
      </div>
    </div>
  ),
  listing: (
    <div className="cs cs--listing">
      <i className="sk sk--search" />
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="cs__row">
          <i className="sk sk--thumb" />
          <div className="cs__stack">{lines(2, `r${index}`)}</div>
          <i className="sk sk--pill" />
        </div>
      ))}
    </div>
  ),
  health: (
    <div className="cs cs--health">
      <div className="cs__cards">
        <i className="sk sk--card" />
        <i className="sk sk--card" />
        <i className="sk sk--card" />
      </div>
      <div className="cs__chart">
        {[40, 65, 50, 80, 60, 90, 70].map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  ),
  dashboard: (
    <div className="cs cs--dashboard">
      <div className="cs__topbar">{lines(3, 't')}</div>
      <div className="cs__tiles">
        {Array.from({ length: 6 }, (_, index) => (
          <i key={index} className="sk sk--tile" />
        ))}
      </div>
    </div>
  ),
  portal: (
    <div className="cs cs--portal">
      <i className="sk sk--banner" />
      <div className="cs__tiles cs__tiles--three">
        <i className="sk sk--tile" />
        <i className="sk sk--tile" />
        <i className="sk sk--tile" />
      </div>
      <div className="cs__stack">{lines(2, 'p')}</div>
    </div>
  ),
  article: (
    <div className="cs cs--article">
      <i className="sk sk--hero" />
      <div className="cs__stack">{lines(4, 'a')}</div>
    </div>
  ),
};

/** Abstract, wireframe-style artwork for a project: a desktop view with its mobile counterpart. */
export function ProjectCover({ variant }: { variant: ProjectCoverVariant }) {
  return (
    <div className={cx('cover', `cover--${variant}`)} aria-hidden="true">
      <div className="cover__browser">
        <div className="cover__chrome">
          <i />
          <i />
          <i />
          <span className="cover__url" />
        </div>
        <div className="cover__screen">{SCREENS[variant]}</div>
      </div>
      <div className="cover__phone">
        <span className="cover__notch" />
        <div className="cover__phone-screen">
          <i className="sk sk--hero" />
          {lines(3, 'm')}
          <i className="sk sk--cta" />
        </div>
      </div>
    </div>
  );
}
