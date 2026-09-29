import type { AnchorHTMLAttributes, PointerEvent } from 'react';
import { useFinePointer, usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import { cx } from '../../utils/cx';
import { Icon, type IconName } from './Icon';
import './MagneticLink.scss';

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'inverse' | 'outline-inverse';
  size?: 'md' | 'lg';
  icon?: IconName;
}

const PULL_X = 0.22;
const PULL_Y = 0.32;

/** A link styled as a button that leans gently toward the pointer. */
export function MagneticLink({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  onPointerMove,
  onPointerLeave,
  ...rest
}: MagneticLinkProps) {
  const reducedMotion = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const magnetic = finePointer && !reducedMotion;

  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event);
    if (!magnetic) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    element.style.setProperty('--mx', `${(x * PULL_X).toFixed(1)}px`);
    element.style.setProperty('--my', `${(y * PULL_Y).toFixed(1)}px`);
  };

  const handleLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event);
    event.currentTarget.style.setProperty('--mx', '0px');
    event.currentTarget.style.setProperty('--my', '0px');
  };

  return (
    <a
      className={cx('btn', `btn--${variant}`, `btn--${size}`, className)}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      <span className="btn__label">{children}</span>
      {icon ? <Icon name={icon} className="btn__icon" /> : null}
    </a>
  );
}
