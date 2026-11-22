export interface SectionHeaderProps {
  indexLabel: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ indexLabel, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-sky-400">
        {indexLabel}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

