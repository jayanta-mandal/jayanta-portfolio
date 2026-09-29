# Jayanta Mandal — Portfolio

Personal portfolio for Jayanta Mandal, UI/UX & Front-End Developer. Built with React, TypeScript, SCSS and Vite.

The visual idea is a design canvas: each section is a white "frame" on a dotted canvas, with selection boxes, component diamonds and redline measurements borrowed from design tools. It reflects the work itself, which is turning design files into production UI.

## Getting started

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check, then production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # TypeScript only
```

`dist/` is a static site and can be deployed to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Project structure

```
src/
├── App.tsx               Page composition, skip link, layout-grid shortcut
├── main.tsx              Entry point
├── components/           One component (+ .scss) per page section
│   ├── AppHeader         Fixed navigation, active-section indicator, mobile menu
│   ├── HeroSection       Headline in a live selection frame + HeroVisual
│   ├── HeroVisual        Design → code → rendered card stage animation
│   ├── TechTicker        Scrolling technology strip (decorative)
│   ├── AboutSection
│   ├── JourneySection    Career timeline with scroll progress
│   ├── SkillsSection     Skill groups with highlight filter
│   ├── ProjectsSection   Project cards with technology filter
│   ├── DesignToCodeSection  Pipeline + design vs implementation slider
│   ├── ExperienceSection Current role + performance metric
│   ├── PrinciplesSection
│   ├── WorkflowSection   Six-step process as accessible tabs
│   ├── EducationSection
│   ├── ContactSection
│   ├── AppFooter
│   └── ui/               Reusable primitives (SectionFrame, SelectionFrame,
│                         MagneticLink, SpotlightCard, RevealText, FilterChips,
│                         SocialLinks, LayoutGrid, Icon…)
├── data/                 All content. Edit these files to update the site.
├── hooks/                useScrollReveal, useActiveSection, useCounter,
│                         useMediaQuery, useMouseParallax, useScrollProgress…
├── types/                Shared TypeScript types for the data
├── styles/               Tokens, mixins, reset, keyframes, global styles
└── utils/
```

Content and presentation are separate: components never hard-code biography, roles or project text. Everything lives in `src/data/`.

## Updating content

| What | File |
| --- | --- |
| Name, headline, current role, contact details, CV file, nav items | `src/data/site.ts` |
| Career timeline and current role focus | `src/data/experience.ts` |
| Projects and project filters | `src/data/projects.ts` |
| Skill groups and the ticker | `src/data/skills.ts` |
| About text, pipeline, principles, workflow, performance metric | `src/data/content.ts` |
| Education | `src/data/education.ts` |

### Adding the GitHub profile

GitHub is currently a placeholder and renders as "Profile link coming soon" (not a link). In `src/data/site.ts`, update:

```ts
github: {
  label: 'GitHub',
  value: 'github.com/your-username',
  href: 'https://github.com/your-username',
},
```

The hero, footer and contact section pick it up automatically.

### Updating the CV

The "Download CV" buttons (hero and contact section) serve `public/JayantaMandal_Resume.pdf`. To update it, replace that file with a new PDF using the same name. To use a different file name or label, edit `resume` in `src/data/site.ts`.

### Adding a role

Append an entry to `experience` in `src/data/experience.ts`. Mark the current role with `current: true` (only one entry should have it); the Experience section and the timeline highlight it automatically.

### Adding a project

Append to `projects` in `src/data/projects.ts`:

```ts
{
  id: 'unique-id',
  title: 'Project name',
  company: 'Company',
  category: 'react',          // 'vue' | 'react' | 'angular' | 'web' (drives the filter)
  summary: 'One or two sentences.',
  tech: ['React.js', 'TypeScript'],
  highlights: ['What you worked on'],
  cover: 'dashboard',         // 'app' | 'listing' | 'health' | 'dashboard' | 'portal' | 'article'
  accent: 'teal',             // 'blue' | 'violet' | 'teal' | 'rose' | 'indigo' | 'green'
}
```

Set `featured: true` to make a card span the full row. A card left alone on the last row also spans the row automatically.

## Accessibility and motion

- Semantic landmarks, one `h1`, a skip link, and labelled sections.
- Full keyboard support: the mobile menu moves focus to its first link, closes with Esc and returns focus to the menu button; workflow tabs follow the WAI-ARIA tabs pattern (arrows, Home, End); the comparison slider is a native range input.
- Visible focus styles throughout, including on dark surfaces.
- `prefers-reduced-motion` turns off autoplay, parallax, magnetic buttons, the ticker and counters; content appears immediately.
- Light and dark themes follow the operating system (`prefers-color-scheme`).
- Decorative visuals are hidden from assistive technology, and every animated value has a static text equivalent.

## Keyboard shortcut

Press **G** (or use the grid button in the header) to toggle the 12-column layout grid overlay.

## Fonts

Bricolage Grotesque (display), Geist (body) and Geist Mono (code snippets) load from Google Fonts in `index.html`. Each has a system-font fallback, so the site still renders correctly offline.
