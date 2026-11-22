import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function syncCvPdfPlugin(): Plugin {
  const sourcePdf = resolve(import.meta.dirname, 'assets/Le Phan Hai Long.pdf');
  const targetPdf = resolve(import.meta.dirname, 'public/Le-Phan-Hai-Long.pdf');

  const syncPdf = () => {
    if (!existsSync(sourcePdf)) return;
    mkdirSync(dirname(targetPdf), { recursive: true });
    copyFileSync(sourcePdf, targetPdf);
  };

  return {
    name: 'sync-cv-pdf',
    buildStart() {
      syncPdf();
    },
    configureServer() {
      syncPdf();
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), syncCvPdfPlugin()],
});
