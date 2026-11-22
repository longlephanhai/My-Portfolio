import { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import type { ContactInfo, PortfolioContent } from '../types/portfolio';
import { GitHubIcon } from './GitHubIcon';
import { SectionHeader } from './SectionHeader';

export interface ContactFooterProps {
  contact: ContactInfo;
  labels: PortfolioContent['sections'];
  heroLabels: PortfolioContent['hero'];
  footerLabels: PortfolioContent['footer'];
}

export function ContactFooter({
  contact,
  labels,
  heroLabels,
  footerLabels,
}: ContactFooterProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  async function copyText(field: 'email' | 'phone', value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored if clipboard permission is blocked
    }
  }

  return (
    <footer id="contact" className="bg-white pt-16 pb-10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            indexLabel={labels.contactIndex}
            title={labels.contactTitle}
            subtitle={labels.contactSubtitle}
          />
          <div className="mb-10">
            <a
              href={contact.cvUrl}
              target="_blank"
              rel="noreferrer"
              download="Le-Phan-Hai-Long-CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              <Download className="h-4 w-4" />
              <span>{heroLabels.downloadCv}</span>
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                <Mail className="h-3.5 w-3.5" />
                {labels.emailLabel}
              </span>
              <button
                type="button"
                onClick={() => copyText('email', contact.email)}
                className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 hover:underline dark:text-sky-400"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="h-3 w-3" />
                    {heroLabels.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    {labels.copyAction}
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block truncate text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-sky-400"
            >
              {contact.email}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                <Phone className="h-3.5 w-3.5" />
                {labels.phoneLabel}
              </span>
              <button
                type="button"
                onClick={() => copyText('phone', contact.phone)}
                className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 hover:underline dark:text-sky-400"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="h-3 w-3" />
                    {heroLabels.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    {labels.copyAction}
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="mt-2 block font-mono text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-sky-400"
            >
              {contact.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
              <GitHubIcon className="h-3.5 w-3.5" />
              {labels.githubLabel}
            </span>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block truncate text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-sky-400"
            >
              {contact.githubHandle}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5" />
              {labels.locationLabel}
            </span>
            <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {contact.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row dark:border-slate-800 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {footerLabels.rights}
          </p>
          <p className="font-mono">{footerLabels.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
