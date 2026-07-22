import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Sortie 100% statique : des fichiers HTML publiables sur n'importe quel
  // hébergement (Hostinger, Netlify, Vercel, OVH, GitHub Pages...).
  // Renseigner l'URL finale du site : sert au sitemap et aux balises SEO.
  // site: 'https://www.exemple.com',
  output: 'static',

  integrations: [react()],
});