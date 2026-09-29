import type { HTMLAttributes, PointerEvent, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './SpotlightCard.scss';

interface SpotlightCardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'li';
  children: ReactNode;
}

/** A surface whose soft highlight follows the pointer via CSS custom properties. */
export function SpotlightCard({ as: Tag = 'article', className, children, onPointerMove, ...rest }: SpotlightCardProps) {
  const handleMove = (event: PointerEvent<HTMLElement>) => {
    onPointerMove?.(event);
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  return (
    <Tag className={cx('spotlight', className)} onPointerMove={handleMove} {...rest}>
      {children}
    </Tag>
  );
}
