import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import type { AwardItem, EducationItem, PortfolioContent } from '../types/portfolio';
import { SectionHeader } from './SectionHeader';

export interface EducationAwardsSectionProps {
  education: EducationItem;
  awards: AwardItem[];
  labels: PortfolioContent['sections'];
}

export function EducationAwardsSection({
  education,
  awards,
  labels,
}: EducationAwardsSectionProps) {
  return (
    <section
      id="education"
      className="border-b border-slate-200/80 bg-slate-50/70 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          indexLabel={labels.educationIndex}
          title={`${labels.educationTitle} & ${labels.awardsTitle}`}
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-sky-950 dark:text-sky-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {education.period}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-50">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-blue-600 dark:text-sky-400">
                {education.institution}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {education.details}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                      {award.kind === 'certification' ? (
                        <BadgeCheck className="h-5 w-5" />
                      ) : (
                        <Award className="h-5 w-5" />
                      )}
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                      {award.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 dark:text-slate-50">
                    {award.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {award.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

