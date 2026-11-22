export type Language = 'en' | 'vi';
export type ThemeMode = 'light' | 'dark';

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  cvUrl: string;
}

export interface HeroMetric {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  projectName: string;
  period: string;
  summary: string;
  highlights: string[];
  cloudHighlights: string[];
  techStack: string[];
  awsServices: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'github' | 'live' | 'video';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: string;
  summary: string;
  architectureModules: string[];
  highlights: string[];
  techStack: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  kind: 'certification' | 'award';
}

export interface PortfolioContent {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    availability: string;
    greeting: string;
    headlinePrefix: string;
    summary: string;
    viewProjects: string;
    downloadCv: string;
    copyEmail: string;
    copied: string;
    portraitCaption: string;
    portraitSubcaption: string;
    metrics: HeroMetric[];
  };
  sections: {
    experienceIndex: string;
    experienceTitle: string;
    experienceSubtitle: string;
    coreEngineeringLabel: string;
    cloudExtensionLabel: string;
    projectsIndex: string;
    projectsTitle: string;
    projectsSubtitle: string;
    architectureLabel: string;
    highlightsLabel: string;
    skillsIndex: string;
    skillsTitle: string;
    skillsSubtitle: string;
    educationIndex: string;
    educationTitle: string;
    awardsTitle: string;
    contactIndex: string;
    contactTitle: string;
    contactSubtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    githubLabel: string;
    copyAction: string;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem;
  awards: AwardItem[];
  footer: {
    builtWith: string;
    rights: string;
  };
}

