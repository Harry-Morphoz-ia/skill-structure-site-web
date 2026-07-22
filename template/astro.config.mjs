import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Sortie 100% statique : des fichiers HTML publiables sur n'importe quel
  // hébergement (Hostinger, Netlify, Vercel, OVH, GitHub Pages...).
  output: 'static',

  // Renseigner l'URL finale du site : sert au sitemap et aux balises SEO.
  // site: 'https://www.exemple.com',
});
