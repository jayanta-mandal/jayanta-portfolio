import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';

export type IconName =
  | 'linkedin'
  | 'github'
  | 'mail'
  | 'phone'
  | 'arrow-down'
  | 'download'
  | 'arrow-up'
  | 'arrow-up-right'
  | 'chevron-left'
  | 'chevron-right'
  | 'copy'
  | 'check'
  | 'grid'
  | 'menu'
  | 'close'
  | 'play'
  | 'pause'
  | 'target'
  | 'devices'
  | 'accessibility'
  | 'components'
  | 'gauge'
  | 'browsers'
  | 'shield'
  | 'search'
  | 'layers'
  | 'code'
  | 'check-circle'
  | 'zap'
  | 'send';

interface IconDefinition {
  body: ReactNode;
  filled?: boolean;
}

const ICONS: Record<IconName, IconDefinition> = {
  linkedin: {
    filled: true,
    body: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.22 8.02h4.56V23H.22V8.02Zm8.12 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.3H18v-7.36c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.91-2.83 3.89V23H8.34V8.02Z" />
    ),
  },
  github: {
    filled: true,
    body: (
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  mail: {
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </>
    ),
  },
  phone: {
    body: (
      <path d="M5 4h3.2l1.8 4.6-2.3 1.5a11 11 0 0 0 6.2 6.2l1.5-2.3L20 15.8V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    ),
  },
  'arrow-down': { body: <path d="M12 5v14M6 13l6 6 6-6" /> },
  download: { body: <path d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14" /> },
  'arrow-up': { body: <path d="M12 19V5M6 11l6-6 6 6" /> },
  'arrow-up-right': { body: <path d="M7 17 17 7M8.5 7H17v8.5" /> },
  'chevron-left': { body: <path d="m15 6-6 6 6 6" /> },
  'chevron-right': { body: <path d="m9 6 6 6-6 6" /> },
  copy: {
    body: (
      <>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h8" />
      </>
    ),
  },
  check: { body: <path d="m5 12.5 4.5 4.5L19 7.5" /> },
  grid: {
    body: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
        <path d="M9.2 3.5v17M14.8 3.5v17" />
      </>
    ),
  },
  menu: { body: <path d="M4 8h16M4 16h16" /> },
  close: { body: <path d="M6 6l12 12M18 6 6 18" /> },
  play: { body: <path d="M8 5.5v13l10-6.5-10-6.5Z" /> },
  pause: { body: <path d="M8.5 5.5v13M15.5 5.5v13" /> },
  target: {
    body: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </>
    ),
  },
  devices: {
    body: (
      <>
        <rect x="2" y="4" width="14" height="10" rx="1.5" />
        <path d="M6 18h6M9 14v4" />
        <rect x="17.5" y="8" width="4.5" height="12" rx="1.2" />
      </>
    ),
  },
  accessibility: {
    body: (
      <>
        <circle cx="12" cy="4.5" r="1.6" />
        <path d="M5 8.5 12 10l7-1.5M12 10v4.5M8.8 21l3.2-6.5 3.2 6.5" />
      </>
    ),
  },
  components: {
    body: (
      <path d="M12 2.8 15.2 6 12 9.2 8.8 6 12 2.8ZM6 8.8 9.2 12 6 15.2 2.8 12 6 8.8Zm12 0 3.2 3.2-3.2 3.2-3.2-3.2L18 8.8Zm-6 6 3.2 3.2-3.2 3.2L8.8 18 12 14.8Z" />
    ),
  },
  gauge: {
    body: (
      <>
        <path d="M3.5 17a8.5 8.5 0 1 1 17 0" />
        <path d="m12 17 4.5-5.5" />
        <circle cx="12" cy="17" r="1.4" />
      </>
    ),
  },
  browsers: {
    body: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M6.5 6.5h.01M9 6.5h.01" />
      </>
    ),
  },
  shield: {
    body: (
      <>
        <path d="M12 3 19 6v6c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-3Z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </>
    ),
  },
  search: {
    body: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.5-4.5" />
      </>
    ),
  },
  layers: { body: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5" /> },
  code: { body: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /> },
  'check-circle': {
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12.2 2.8 2.8L16 9.5" />
      </>
    ),
  },
  zap: { body: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /> },
  send: { body: <path d="M21 3 3 10.5l7.5 3L14 21l7-18ZM10.5 13.5 15 9" /> },
};

interface IconProps {
  name: IconName;
  className?: string;
  /** Provide a title only when the icon is the sole content that conveys meaning. */
  title?: string;
}

export function Icon({ name, className, title }: IconProps) {
  const { body, filled } = ICONS[name];

  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={cx('icon', className)}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {body}
    </svg>
  );
}
