#!/usr/bin/env node
/* ================================================================
   contrast.mjs — test de lisibilité WCAG (zéro dépendance)

   Vérifie que du texte reste lisible sur son fond, selon la norme
   d'accessibilité WCAG 2.1. Utilisé par le skill /site-style.

   Usage :
     node tools/contrast.mjs "#111827,#FFFFFF" "#FFFFFF,#4F46E5"
   Chaque argument = "couleurTexte,couleurFond" (hex).

   Sortie : ratio + verdict AA pour texte normal (>=4.5) et grand
   texte / éléments d'interface (>=3.0).
   ================================================================ */

function hexToRgb(hex) {
  const h = hex.trim().replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) throw new Error(`Couleur invalide : ${hex}`);
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}

// Luminance relative (WCAG)
function luminance([r, g, b]) {
  const lin = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function ratio(fg, bg) {
  const L1 = luminance(hexToRgb(fg));
  const L2 = luminance(hexToRgb(bg));
  const [light, dark] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (light + 0.05) / (dark + 0.05);
}

const pairs = process.argv.slice(2);
if (pairs.length === 0) {
  console.log('Usage : node tools/contrast.mjs "#texte,#fond" ["#texte2,#fond2" ...]');
  process.exit(1);
}

let allPass = true;
console.log('\n  Test de lisibilité WCAG AA\n  ' + '-'.repeat(52));
for (const pair of pairs) {
  const [fg, bg] = pair.split(',');
  try {
    const r = ratio(fg, bg);
    const normal = r >= 4.5;        // texte courant
    const large = r >= 3.0;         // grand texte (>=24px) et éléments UI
    if (!normal) allPass = false;
    const tag = normal ? 'OK texte'
              : large ? 'OK gros texte / UI seulement'
              : 'ECHEC';
    console.log(
      `  ${fg} sur ${bg}  ->  ${r.toFixed(2)}:1   [${tag}]`
    );
  } catch (e) {
    allPass = false;
    console.log(`  ${pair}  ->  ${e.message}`);
  }
}
console.log('  ' + '-'.repeat(52));
console.log(allPass
  ? '  Verdict : palette lisible (toutes les paires passent AA texte).\n'
  : '  Verdict : au moins une paire echoue, ajuster la couleur.\n');
process.exit(allPass ? 0 : 2);
