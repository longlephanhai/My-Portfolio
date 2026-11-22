import { Code2, Database, Layout, Server } from 'lucide-react';
import type { PortfolioContent, SkillGroup } from '../types/portfolio';
import { SectionHeader } from './SectionHeader';

export interface SkillsSectionProps {
  groups: SkillGroup[];
  labels: PortfolioContent['sections'];
}

function getSkillIcon(groupId: string) {
  switch (groupId) {
    case 'languages':
      return <Code2 className="h-5 w-5" />;
    case 'backend':
      return <Server className="h-5 w-5" />;
    case 'frontend':
      return <Layout className="h-5 w-5" />;
    default:
      return <Database className="h-5 w-5" />;
  }
}

export function SkillsSection({ groups, labels }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          indexLabel={labels.skillsIndex}
          title={labels.skillsTitle}
          subtitle={labels.skillsSubtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-900"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-sky-950 dark:text-sky-400">
                {getSkillIcon(group.id)}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-slate-100">
                {group.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {group.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

