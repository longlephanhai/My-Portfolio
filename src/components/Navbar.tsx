import { useState } from 'react';
import { Download, Languages, Menu, Moon, Sun, X } from 'lucide-react';
import type { Language, PortfolioContent, ThemeMode } from '../types/portfolio';

export interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  labels: PortfolioContent['nav'];
  cvUrl: string;
}

export function Navbar({
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
  labels,
  cvUrl,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: labels.about },
    { href: '#experience', label: labels.experience },
    { href: '#projects', label: labels.projects },
    { href: '#skills', label: labels.skills },
    { href: '#education', label: labels.education },
    { href: '#contact', label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#about"
          className="group inline-flex items-center gap-2.5 text-slate-900 dark:text-slate-50"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold tracking-tight text-white transition-transform group-hover:scale-105 dark:bg-sky-500 dark:text-slate-950">
            LPHL
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Le Phan Hai Long
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            aria-label="Toggle language"
            title="Switch language (EN / VI)"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            download="Le-Phan-Hai-Long-CV.pdf"
            className="hidden items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-600 sm:inline-flex dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{labels.downloadCv}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              download="Le-Phan-Hai-Long-CV.pdf"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950"
            >
              <Download className="h-4 w-4" />
              <span>{labels.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

