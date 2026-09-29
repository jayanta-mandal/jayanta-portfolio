import type { CSSProperties, ElementType, Ref } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cx } from '../../utils/cx';
import './RevealText.scss';

interface RevealTextProps {
  text: string;
  as?: ElementType;
  id?: string;
  className?: string;
}

/** Splits a heading into words that rise into view once, the first time it is seen. */
export function RevealText({ text, as: Tag = 'h2', id, className }: RevealTextProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.35 });
  const words = text.split(' ');

  return (
    <Tag ref={ref as Ref<HTMLElement>} id={id} className={cx('reveal-text', visible && 'is-visible', className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="reveal-text__word">
            <span className="reveal-text__inner" style={{ '--i': index } as CSSProperties}>
              {word}
            </span>
          </span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  );
}
