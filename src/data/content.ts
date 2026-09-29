import type { PipelineStep, Principle, WorkflowStep } from '../types/content';

export const aboutParagraphs: string[] = [
  'I’m a UI/UX and Front-End Developer with 9+ years in the software industry. My work sits between the design file and the production build: I take Figma, Zeplin and wireframe designs and turn them into pixel-perfect, responsive interfaces made of reusable components.',
  'I’ve worked across React.js, Next.js, Angular and Vue.js with TypeScript, JavaScript, HTML5, CSS3, SASS and LESS. Accessibility, cross-browser behaviour and performance get the same attention as the visuals.',
];

export const designSources: string[] = ['Figma', 'Zeplin', 'Wireframes'];

export const aboutHighlights: string[] = [
  'Reusable UI components',
  'Cross-browser compatibility',
  'Cross-device compatibility',
  'Accessibility with WCAG and ADA compliance',
  'Performance optimization',
  'UI automation and E2E testing',
];

export const pipelineSteps: PipelineStep[] = [
  {
    id: 'design-file',
    title: 'Figma / Zeplin',
    description: 'Read the spec: spacing, type, colour and every state.',
  },
  {
    id: 'component-system',
    title: 'Component system',
    description: 'Break the screen into reusable, well-named pieces.',
  },
  {
    id: 'responsive-code',
    title: 'Responsive code',
    description: 'Build with fluid layouts that adapt at every breakpoint.',
  },
  {
    id: 'production',
    title: 'Production experience',
    description: 'Test across browsers and devices, then ship.',
  },
];

export const compareNotes: string[] = [
  'Spacing and sizing follow the spec exactly.',
  'Type and colour come from shared tokens, not one-off values.',
  'The same component adapts from mobile to desktop.',
];

export const principles: Principle[] = [
  {
    id: 'pixel-precision',
    title: 'Pixel precision',
    description: 'Accurate implementation of UI designs and design specifications.',
    icon: 'target',
  },
  {
    id: 'responsive-design',
    title: 'Responsive design',
    description: 'Interfaces that work across desktop, tablet and mobile.',
    icon: 'devices',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'WCAG and ADA-conscious implementation.',
    icon: 'accessibility',
  },
  {
    id: 'reusability',
    title: 'Reusability',
    description: 'Component-based architecture and reusable UI systems.',
    icon: 'components',
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Optimization of CSS, React components and page performance.',
    icon: 'gauge',
  },
  {
    id: 'compatibility',
    title: 'Compatibility',
    description: 'Cross-browser and cross-device consistency.',
    icon: 'browsers',
  },
  {
    id: 'quality',
    title: 'Quality',
    description: 'Testing, debugging, code reviews and production issue resolution.',
    icon: 'shield',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    description: 'Understand requirements, designs and user needs.',
    icon: 'search',
  },
  {
    id: 'design-system',
    number: '02',
    title: 'Design system',
    description: 'Identify components, spacing, typography and responsive behavior.',
    icon: 'layers',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'Convert designs into reusable frontend components.',
    icon: 'code',
  },
  {
    id: 'test',
    number: '04',
    title: 'Test',
    description: 'Validate responsive behavior, accessibility, browser compatibility and functionality.',
    icon: 'check-circle',
  },
  {
    id: 'optimize',
    number: '05',
    title: 'Optimize',
    description: 'Improve performance and user experience.',
    icon: 'zap',
  },
  {
    id: 'deliver',
    number: '06',
    title: 'Deliver',
    description:
      'Collaborate with developers, designers, QA and stakeholders to deliver production-ready features.',
    icon: 'send',
  },
];

export const performanceMetric = {
  value: 2,
  unit: 'sec',
  label: 'Average page load improvement',
  detail: 'Optimization strategies improved page load times by an average of 2 seconds within 3 months.',
  months: 3,
} as const;
