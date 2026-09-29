import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './SectionFrame.scss';

interface SectionFrameProps {
  id: string;
  /** Navigation group this section belongs to; drives the active nav link. */
  nav: string;
  /** Frame name shown above the surface, like a frame title on a design canvas. */
  label: string;
  tone?: 'default' | 'inverse';
  className?: string;
  children: ReactNode;
}

/** A page section drawn as a named frame sitting on the canvas. */
export function SectionFrame({ id, nav, label, tone = 'default', className, children }: SectionFrameProps) {
  return (
    <section id={id} data-nav={nav} aria-labelledby={`${id}-title`} className={cx('section', `section--${tone}`, className)}>
      <div className="container">
        <p className="section__label" aria-hidden="true">
          {label}
        </p>
        <div className="section__frame">{children}</div>
      </div>
    </section>
  );
}
