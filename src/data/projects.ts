import type { Project, ProjectFilter } from '../types/project';

export const projects: Project[] = [
  {
    id: 'crosscountry-mortgage',
    title: 'CrossCountry Mortgage',
    company: 'V2 Solutions',
    category: 'vue',
    summary:
      'Contributed to a responsive, scalable and user-focused web application, translating Figma and Zeplin designs into pixel-perfect interfaces and reusable UI components.',
    tech: ['Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'LESS'],
    highlights: [
      'Responsive UI development',
      'Figma/Zeplin implementation',
      'Reusable UI components',
      'E2E test cases',
      'Debugging',
      'Cross-browser testing',
      'Functional testing',
      'Agile/Scrum',
      'Production support',
    ],
    cover: 'app',
    accent: 'blue',
    featured: true,
    note: 'Client details are kept confidential.',
  },
  {
    id: 'jobs-in-education',
    title: 'Jobs In Education',
    company: 'Anandpushp Technologies',
    category: 'react',
    summary:
      'Built reusable UI components and responsive application features with Material UI, keeping the experience consistent across browsers and fixing issues in production.',
    tech: ['Next.js', 'React.js', 'Material UI', 'Bootstrap 5', 'HTML5', 'SASS'],
    highlights: [
      'Reusable UI components',
      'Responsive application development',
      'Material UI',
      'Cross-browser compatibility',
      'Production bug fixing',
    ],
    cover: 'listing',
    accent: 'violet',
  },
  {
    id: 'ponea-health',
    title: 'Ponea Health',
    company: 'Navigator Software',
    category: 'react',
    summary:
      'Implemented Figma designs as responsive pages built from reusable React components, with CSS and React performance optimization.',
    tech: ['Next.js', 'React.js', 'Material UI', 'HTML5', 'SASS'],
    highlights: [
      'Figma-to-code implementation',
      'Reusable React components',
      'Responsive pages',
      'CSS optimization',
      'React performance optimization',
    ],
    cover: 'health',
    accent: 'teal',
  },
  {
    id: 'buchheits',
    title: 'Buchheits',
    company: 'Navigator Software',
    category: 'angular',
    summary:
      'Developed responsive Angular applications with reusable components, third-party integrations, lazy loading, AOT compilation and state management.',
    tech: ['Angular 13', 'Angular Material', 'HTML', 'CSS', 'SASS'],
    highlights: [
      'Reusable Angular components',
      'Responsive applications',
      'Third-party integrations',
      'Lazy loading',
      'AOT compilation',
      'State management',
    ],
    cover: 'dashboard',
    accent: 'indigo',
  },
  {
    id: 'egiye-bangla',
    title: 'Government of West Bengal: Egiye Bangla',
    company: 'Brandsum',
    category: 'web',
    summary:
      'Built responsive, user-friendly web pages with cross-browser compatibility, following WCAG accessibility guidelines and ADA compliance.',
    tech: ['ASP.NET', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
    highlights: [
      'Responsive web pages',
      'Cross-browser compatibility',
      'WCAG accessibility',
      'ADA compliance',
      'User-friendly interfaces',
    ],
    cover: 'portal',
    accent: 'green',
  },
  {
    id: 'indian-chamber-of-commerce',
    title: 'Indian Chamber of Commerce',
    company: 'Brandsum',
    category: 'web',
    summary:
      'Created custom responsive WordPress pages and handled plugin customization, SEO, performance optimization, maintenance and security enhancements.',
    tech: ['WordPress', 'HTML', 'CSS'],
    highlights: [
      'Custom responsive pages',
      'SEO',
      'Performance optimization',
      'WordPress customization',
      'Plugin customization',
      'Maintenance',
      'Security enhancements',
    ],
    cover: 'article',
    accent: 'rose',
  },
];

export const projectFilters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'vue', label: 'Vue.js' },
  { id: 'react', label: 'React & Next.js' },
  { id: 'angular', label: 'Angular' },
  { id: 'web', label: 'Web & CMS' },
];
