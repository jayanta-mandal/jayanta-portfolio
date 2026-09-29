import { cx } from '../../utils/cx';
import './FilterChips.scss';

export interface FilterOption<T extends string> {
  id: T;
  label: string;
  count?: number;
}

interface FilterChipsProps<T extends string> {
  label: string;
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

/** A group of toggle buttons where exactly one option is pressed. */
export function FilterChips<T extends string>({ label, options, value, onChange, className }: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className={cx('filter-chips', className)}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="filter-chips__option"
          aria-pressed={option.id === value}
          onClick={() => onChange(option.id)}
        >
          {option.label}
          {typeof option.count === 'number' ? (
            <>
              <span className="filter-chips__count" aria-hidden="true">
                {option.count}
              </span>
              <span className="visually-hidden">, {option.count} items</span>
            </>
          ) : null}
        </button>
      ))}
    </div>
  );
}
