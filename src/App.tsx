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

export default function App() {
  const activeSection = useActiveSection('home');

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <AppHeader activeSection={activeSection} />

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
