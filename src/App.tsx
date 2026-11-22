import { useEffect, useState } from 'react';
import { ContactFooter } from './components/ContactFooter';
import { EducationAwardsSection } from './components/EducationAwardsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CONTACT_INFO, PORTFOLIO_CONTENT } from './data/portfolioData';
import type { Language, ThemeMode } from './types/portfolio';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const content = PORTFOLIO_CONTENT[language];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-sky-400 dark:selection:text-slate-950">
      <Navbar
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'))}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        labels={content.nav}
        cvUrl={CONTACT_INFO.cvUrl}
      />

      <main>
        <Hero contact={CONTACT_INFO} content={content.hero} />
        <ExperienceSection items={content.experience} labels={content.sections} />
        <ProjectsSection projects={content.projects} labels={content.sections} />
        <SkillsSection groups={content.skills} labels={content.sections} />
        <EducationAwardsSection
          education={content.education}
          awards={content.awards}
          labels={content.sections}
        />
      </main>

      <ContactFooter
        contact={CONTACT_INFO}
        labels={content.sections}
        heroLabels={content.hero}
        footerLabels={content.footer}
      />
    </div>
  );
}

export default App;

