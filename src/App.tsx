import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { ContactSection } from './components/ContactSection';
import { DesignToCodeSection } from './components/DesignToCodeSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TechTicker } from './components/TechTicker';
import { WorkflowSection } from './components/WorkflowSection';
import { useActiveSection } from './hooks/useActiveSection';

/** Ignore the grid shortcut while the visitor is typing or using another shortcut. */
function isShortcutTarget(event: KeyboardEvent): boolean {
  if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return false;
  const target = event.target as HTMLElement | null;
  if (!target) return true;
  return !(target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
}

export default function App() {
  const activeSection = useActiveSection('home');
  const [gridVisible, setGridVisible] = useState(false);

  const toggleGrid = useCallback(() => setGridVisible((visible) => !visible), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'g' && isShortcutTarget(event)) toggleGrid();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleGrid]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <AppHeader activeSection={activeSection} gridVisible={gridVisible} onToggleGrid={toggleGrid} />

      <main id="main" tabIndex={-1}>
        <HeroSection />
        <TechTicker />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <DesignToCodeSection />
        <ExperienceSection />
        <PrinciplesSection />
        <WorkflowSection />
        <EducationSection />
        <ContactSection />
      </main>

      <AppFooter />
    </>
  );
}
