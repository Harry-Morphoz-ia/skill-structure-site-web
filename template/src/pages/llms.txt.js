// ================================================================
// /llms.txt — la « carte de visite » du site pour les IA génératives
// (ChatGPT, Claude, Perplexity...). Standard émergent : un fichier
// texte structuré qui décrit qui est la société, ce qu'elle fait, et
// où trouver quoi sur le site.
//
// Généré AUTOMATIQUEMENT au build à partir de src/config/site.js :
// rien à maintenir à la main. Enrichi par le skill /site-geo
// (descriptions des pages via le champ optionnel `description` de nav).
// ================================================================
import { site } from '../config/site.js';

export function GET() {
  const seo = site.seo || {};
  const base = (seo.url || '').replace(/\/$/, '');

  const lignes = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    '## Informations',
    ...(seo.city ? [`- Ville : ${seo.city}${seo.region ? ` (${seo.region})` : ''}`] : []),
    ...(site.area ? [`- Zone d'intervention : ${site.area}`] : []),
    ...(site.address ? [`- Adresse : ${site.address}`] : []),
    ...(site.phone ? [`- Téléphone : ${site.phone}`] : []),
    ...(site.email ? [`- Email : ${site.email}`] : []),
    ...(seo.openingHours ? [`- Horaires : ${seo.openingHours}`] : []),
    '',
    '## Pages',
    ...site.nav.map((item) => {
      const url = base ? `${base}${item.href === '/' ? '/' : item.href}` : item.href;
      return `- [${item.label}](${url})${item.description ? ` : ${item.description}` : ''}`;
    }),
  ];

  const socials = Object.entries(site.socials || {}).filter(([, url]) => url);
  if (socials.length) {
    lignes.push('', '## Réseaux sociaux');
    socials.forEach(([reseau, url]) => lignes.push(`- ${reseau} : ${url}`));
  }

  return new Response(lignes.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
