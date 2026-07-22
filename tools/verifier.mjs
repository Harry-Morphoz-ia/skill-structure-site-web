#!/usr/bin/env node
/* ================================================================
   verifier.mjs — contrôle qualité du site généré (zéro dépendance)

   Inspecte le dossier dist/ (le site final) et relève :
   - pages sans <title>, titles dupliqués ou trop longs
   - meta description absente ou dupliquée
   - nombre de <h1> différent de 1 par page
   - images sans attribut alt
   - liens internes morts (vers une page qui n'existe pas)
   - placeholders oubliés (REMPLACER_PAR, [À VALIDER])
   - tirets cadratins (interdits par la charte)
   - images trop lourdes (> 300 Ko)

   Usage :  node tools/verifier.mjs <chemin-vers-dist>
   Code retour : 0 = GO, 2 = erreurs bloquantes.
   ================================================================ */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const dist = process.argv[2] || 'dist';
let files;
try {
  files = walk(dist);
} catch {
  console.error(`Dossier introuvable : ${dist}. Lancer "npm run build" d'abord.`);
  process.exit(1);
}

const pages = files.filter((f) => f.endsWith('.html'));
const images = files.filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f));
const errors = [];
const warnings = [];

const titles = new Map();
const descs = new Map();

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const rel = relative(dist, page).replace(/\\/g, '/');

  // Un seul H1 par page
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count !== 1) errors.push(`${rel} : ${h1Count} balise(s) <h1> (il en faut exactement 1)`);

  // Title unique et raisonnable
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1];
  if (!title) errors.push(`${rel} : pas de <title>`);
  else {
    if (title.length > 65) warnings.push(`${rel} : title long (${title.length} caractères, viser <= 60)`);
    if (titles.has(title)) errors.push(`title dupliqué "${title}" (${rel} et ${titles.get(title)})`);
    else titles.set(title, rel);
  }

  // Meta description présente et unique
  const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1];
  if (!desc) errors.push(`${rel} : pas de meta description`);
  else if (descs.has(desc)) warnings.push(`meta description dupliquée (${rel} et ${descs.get(desc)})`);
  else descs.set(desc, rel);

  // Images sans alt
  for (const img of html.match(/<img[^>]*>/gi) || []) {
    if (!/alt="[^"]+"/i.test(img)) warnings.push(`${rel} : image sans alt (${img.slice(0, 60)}...)`);
  }

  // Placeholders oubliés
  if (html.includes('REMPLACER_PAR')) errors.push(`${rel} : placeholder REMPLACER_PAR restant (formulaire non branché ?)`);
  if (html.includes('[À VALIDER]')) warnings.push(`${rel} : contenu [À VALIDER] restant`);

  // Tiret cadratin interdit
  if (html.includes('—')) warnings.push(`${rel} : tiret cadratin présent, interdit par la charte`);

  // Liens internes morts
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (href === '/') continue;
    if (/\.(css|js|xml|txt|ico|svg|png|jpe?g|webp|pdf|mp4)$/i.test(href)) {
      const asset = join(dist, href);
      if (!files.includes(asset)) warnings.push(`${rel} : fichier lié introuvable "${href}"`);
      continue;
    }
    const clean = href.replace(/\/$/, '');
    const candidates = [join(dist, clean, 'index.html'), join(dist, `${clean}.html`)];
    if (!candidates.some((c) => files.includes(c))) errors.push(`${rel} : lien interne mort "${href}"`);
  }
}

// Poids des images
for (const img of images) {
  const kb = statSync(img).size / 1024;
  if (kb > 300) warnings.push(`${relative(dist, img).replace(/\\/g, '/')} : ${Math.round(kb)} Ko (> 300 Ko, compresser sur squoosh.app)`);
}

// Rapport
console.log(`\n  Contrôle qualité — ${pages.length} page(s), ${images.length} image(s)\n  ${'-'.repeat(56)}`);
if (errors.length) {
  console.log(`\n  ERREURS BLOQUANTES (${errors.length}) :`);
  errors.forEach((e) => console.log(`   ✗ ${e}`));
}
if (warnings.length) {
  console.log(`\n  Avertissements (${warnings.length}) :`);
  warnings.forEach((w) => console.log(`   ! ${w}`));
}
console.log(`\n  ${'-'.repeat(56)}`);
console.log(errors.length
  ? `  Verdict : NO-GO — corriger les ${errors.length} erreur(s) avant mise en ligne.\n`
  : `  Verdict : GO — aucun bloquant${warnings.length ? ` (${warnings.length} avertissement(s) à considérer)` : ''}.\n`);
process.exit(errors.length ? 2 : 0);
