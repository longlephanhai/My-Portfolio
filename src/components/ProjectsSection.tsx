import {
  Boxes,
  ExternalLink,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import type { PortfolioContent, ProjectItem, ProjectLink } from '../types/portfolio';
import { GitHubIcon } from './GitHubIcon';
import { SectionHeader } from './SectionHeader';

export interface ProjectsSectionProps {
  projects: ProjectItem[];
  labels: PortfolioContent['sections'];
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const icon =
    link.kind === 'github' ? (
      <GitHubIcon className="h-3.5 w-3.5" />
    ) : link.kind === 'video' ? (
      <PlayCircle className="h-3.5 w-3.5" />
    ) : (
      <ExternalLink className="h-3.5 w-3.5" />
    );

  const variantClasses =
    link.kind === 'live'
      ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:text-slate-950 dark:border-sky-500 dark:hover:bg-sky-400'
      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${variantClasses}`}
    >
      {icon}
      <span>{link.label}</span>
    </a>
  );
}

export function ProjectsSection({ projects, labels }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="border-b border-slate-200/80 bg-slate-50/70 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          indexLabel={labels.projectsIndex}
          title={labels.projectsTitle}
          subtitle={labels.projectsSubtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700 dark:bg-sky-950/70 dark:text-sky-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    <Boxes className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                    <span>{labels.architectureLabel}</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.architectureModules.map((mod) => (
                      <div
                        key={mod}
                        className="rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    {labels.highlightsLabel}
                  </p>
                  <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.links.map((link) => (
                    <ProjectLinkButton key={link.url} link={link} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
