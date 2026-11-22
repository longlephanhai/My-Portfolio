import { Briefcase, Cloud, Layers } from 'lucide-react';
import type { ExperienceItem, PortfolioContent } from '../types/portfolio';
import { SectionHeader } from './SectionHeader';

export interface ExperienceSectionProps {
  items: ExperienceItem[];
  labels: PortfolioContent['sections'];
}

export function ExperienceSection({ items, labels }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          indexLabel={labels.experienceIndex}
          title={labels.experienceTitle}
          subtitle={labels.experienceSubtitle}
        />

        <div className="space-y-8">
          {items.map((exp) => (
            <article
              key={exp.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs sm:p-8 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs dark:bg-sky-500 dark:text-slate-950">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-blue-600 dark:text-sky-400">
                      {exp.company} · <span className="text-slate-700 dark:text-slate-300">{exp.projectName}</span>
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {exp.period}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {exp.summary}
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200/90 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                    <Layers className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                    <span>{labels.coreEngineeringLabel}</span>
                  </div>
                  <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                    <Cloud className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{labels.cloudExtensionLabel}</span>
                  </div>
                  <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.cloudHighlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.awsServices.map((service) => (
                      <span
                        key={service}
                        className="rounded-md border border-emerald-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-emerald-800 dark:border-emerald-900/70 dark:bg-slate-900 dark:text-emerald-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

