import type { NavItem } from '../types/content';

export const person = {
  name: 'Jayanta Mandal',
  roles: ['UI/UX Developer', 'Front-End Developer'],
  experience: '9+ years',
  headline: 'I turn designs into digital experiences.',
  tagline: 'Pixel-perfect UI. Production-ready code.',
  summary:
    'UI/UX and Front-End Developer with 9+ years of experience building responsive, accessible and user-focused web applications using modern frontend technologies.',
  story: 'From designing interfaces to building experiences.',
  supporting: 'Turning designs into responsive, accessible and production-ready digital experiences.',
  current: {
    role: 'UI/UX Developer',
    company: 'V2 Solutions Pvt. Ltd.',
    shortCompany: 'V2 Solutions',
    payroll: 'eLabs Infotech Pvt. Ltd.',
    since: 'July 2025',
  },
} as const;

export interface ContactLink {
  label: string;
  value: string;
  /** `null` marks a placeholder that has not been provided yet. */
  href: string | null;
}

export const contact = {
  email: {
    label: 'Email',
    value: 'jayantamandal011@gmail.com',
    href: 'mailto:jayantamandal011@gmail.com',
  },
  phone: {
    label: 'Phone',
    value: '+91 97750 86869',
    href: 'tel:+919775086869',
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jayanta-mandal1',
    href: 'https://www.linkedin.com/in/jayanta-mandal1',
  },
  // Placeholder: replace `href` and `value` once the GitHub profile URL is available.
  github: {
    label: 'GitHub',
    value: 'Profile link coming soon',
    href: null,
  },
} satisfies Record<string, ContactLink>;

/**
 * Downloadable CV. The file lives in `public/`; replace it with an updated PDF
 * (keeping the same file name) whenever the CV changes.
 */
export const resume = {
  label: 'Download CV',
  format: 'PDF',
  fileName: 'JayantaMandal_CV.pdf',
  href: `${import.meta.env.BASE_URL}JayantaMandal_CV.pdf`,
};

export const conversationHref = `${contact.email.href}?subject=${encodeURIComponent('Project enquiry')}`;

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
