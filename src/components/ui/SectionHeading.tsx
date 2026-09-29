import { cx } from '../../utils/cx';
import { RevealText } from './RevealText';
import './SectionHeading.scss';

interface SectionHeadingProps {
  id: string;
  title: string;
  lead?: string;
  className?: string;
}

export function SectionHeading({ id, title, lead, className }: SectionHeadingProps) {
  return (
    <header className={cx('section-heading', !lead && 'section-heading--solo', className)}>
      <RevealText as="h2" id={id} text={title} className="section-heading__title" />
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </header>
  );
}
