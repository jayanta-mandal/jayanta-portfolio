import { useRef, type ReactNode } from 'react';
import { useElementSize } from '../../hooks/useElementSize';
import { cx } from '../../utils/cx';
import './SelectionFrame.scss';

interface SelectionFrameProps {
  /** Layer name shown above the selection, as a design tool would. */
  label: string;
  children: ReactNode;
  className?: string;
  /** Show the live width × height badge under the selection. */
  showSize?: boolean;
}

/** Wraps content in a design-tool selection box with handles and its real rendered size. */
export function SelectionFrame({ label, children, className, showSize = true }: SelectionFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(ref);

  return (
    <div ref={ref} className={cx('selection', className)}>
      {children}
      <span className="selection__box" aria-hidden="true">
        <span className="selection__label">{label}</span>
        {showSize && width > 0 ? (
          <span className="selection__size">
            {width} × {height}
          </span>
        ) : null}
      </span>
    </div>
  );
}
