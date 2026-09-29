import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    summary: 'The languages every interface is written in.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SASS', 'LESS'],
    span: 2,
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    summary: 'Component frameworks used across my project work.',
    skills: ['React.js', 'Next.js', 'Angular', 'Vue.js'],
    span: 2,
  },
  {
    id: 'ui-libraries',
    name: 'UI libraries',
    summary: 'Component libraries and CSS frameworks for consistent UI.',
    skills: ['Material UI', 'Angular Material', 'Bootstrap', 'Tailwind CSS'],
    span: 2,
  },
  {
    id: 'ui-design',
    name: 'UI and design',
    summary: 'Reading designs precisely and implementing them faithfully.',
    skills: [
      'Responsive Web Design',
      'Pixel-Perfect UI Development',
      'Design-to-Code',
      'Figma',
      'Zeplin',
      'Wireframes',
      'UI/UX Implementation',
    ],
    span: 3,
  },
  {
    id: 'engineering',
    name: 'Engineering',
    summary: 'The qualities that make an interface hold up in production.',
    skills: [
      'Reusable UI Components',
      'Cross-Browser Compatibility',
      'Cross-Device Compatibility',
      'Accessibility',
      'WCAG',
      'ADA Compliance',
      'Performance Optimization',
      'E2E Testing',
    ],
    span: 3,
  },
  {
    id: 'tools',
    name: 'Tools',
    summary: 'Version control, delivery tracking and AI-assisted development.',
    skills: ['Git', 'Bitbucket', 'Jira', 'Claude Code', 'AI-Assisted Development', 'Generative AI'],
    span: 6,
  },
];

const tickerGroups = ['frameworks', 'frontend', 'ui-libraries'];

/** Technologies shown in the scrolling strip under the hero, derived from the groups above. */
export const tickerTechnologies: string[] = [
  ...skillGroups.filter((group) => tickerGroups.includes(group.id)).flatMap((group) => group.skills),
  'Figma',
  'Zeplin',
  'WCAG',
];

export const coreStack: string[] = [
  'React.js',
  'Next.js',
  'Angular',
  'Vue.js',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SASS',
  'LESS',
];