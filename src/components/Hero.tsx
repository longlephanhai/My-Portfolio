import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import portraitImg from '../assets/portrait.jpg';
import type { ContactInfo, PortfolioContent } from '../types/portfolio';
import { GitHubIcon } from './GitHubIcon';

export interface HeroProps {
  contact: ContactInfo;
  content: PortfolioContent['hero'];
}

export function Hero({ contact, content }: HeroProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  }

  return (
    <section
      id="about"
      className="bg-editorial-grid relative overflow-hidden border-b border-slate-200/80 py-14 sm:py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{content.availability}</span>
            </div>

            <p className="mt-5 font-mono text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {content.greeting}
            </p>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] dark:text-white">
              {contact.name}
            </h1>

            <p className="mt-3 text-xl font-semibold text-blue-600 sm:text-2xl dark:text-sky-400">
              {contact.role}
            </p>

            <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-200">
              {content.headlinePrefix}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {content.summary}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
              >
                <span>{content.viewProjects}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={contact.cvUrl}
                target="_blank"
                rel="noreferrer"
                download="Le-Phan-Hai-Long-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                <span>{content.downloadCv}</span>
              </a>

              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-slate-200/80 pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                <span>{contact.location}</span>
              </span>

              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-sky-400"
              >
                <Phone className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                <span className="font-mono text-xs sm:text-sm">{contact.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-sky-400"
                title={content.copyEmail}
              >
                <Mail className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                <span className="font-mono text-xs sm:text-sm">{contact.email}</span>
                {emailCopied ? (
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                    {content.copied}
                  </span>
                ) : (
                  <Copy className="h-3.5 w-3.5 opacity-60" />
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm">
              <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
                <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-slate-700/60">
                  <img
                    src={portraitImg}
                    alt={`${contact.name} — ${contact.role}`}
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>

                <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {content.portraitCaption}
                    </p>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {content.portraitSubcaption}
                    </p>
                  </div>
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-700 dark:bg-sky-950/70 dark:text-sky-300">
                    B.Eng SE
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
                {content.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white/90 px-4 py-2.5 shadow-xs dark:border-slate-800 dark:bg-slate-900/90"
                  >
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
