---
paths: ["**/*.tsx", "**/*.jsx", "**/src/components/**", "**/*.astro"]
---

# Intégrer un composant copié (21st.dev, Aceternity, CodePen, capture d'écran...)

Quand l'utilisateur demande de « copier », « reprendre » ou « s'inspirer d'» un composant vu
ailleurs, le résultat attendu est TOUJOURS un composant **intégré, adapté et fonctionnel dans
le site**. Coller le code en texte brut dans la conversation et s'arrêter là est un échec :
l'utilisateur n'est pas développeur, il ne peut rien en faire.

## Procédure obligatoire (6 étapes, aucune optionnelle)

1. **Créer le fichier** : `src/components/animated/NomDuComposant.tsx` (PascalCase).
   Jamais de code livré uniquement dans la conversation.

2. **Installer ses dépendances** : lire les imports du composant copié, puis `npm install`
   ce qui manque (`motion` / `framer-motion`, `clsx`, `tailwind-merge`...).
   Si le composant repose sur Tailwind : `npx astro add tailwind` (autorisé pour les îlots
   animés, voir l'exception dans `webmaster-css.md`).

3. **Adapter, jamais coller tel quel** :
   - Couleurs en dur du composant → tokens du site : `var(--c-primary)`, `var(--c-bg-dark)`...
     (en Tailwind : classes arbitraires `bg-[var(--c-primary)]`, `text-[var(--c-text)]`).
   - Polices → `var(--font-title)` / `var(--font-body)`.
   - Textes de démo (« Build faster », lorem...) → contenus réels du brief, ou props
     remplies avec les vrais textes depuis la page.
   - Ce qui doit varier d'une page à l'autre devient une prop.

4. **Monter en îlot** dans la page Astro concernée :
   ```astro
   ---
   import NomDuComposant from '../components/animated/NomDuComposant.tsx';
   ---
   <NomDuComposant client:visible />
   ```
   (`client:load` si le composant est visible dès l'arrivée, ex : hero.)

5. **Vérifier réellement** : `npm run build` passe sans erreur ET le rendu est contrôlé sur
   `npm run dev`. Un composant jamais rendu à l'écran = travail non terminé.

6. **Accessibilité** : le mouvement respecte `prefers-reduced-motion` (le reset global du kit
   coupe les animations CSS ; pour framer-motion, utiliser `useReducedMotion` si le
   mouvement est central).

## Selon la source

- **21st.dev** : si le connecteur MCP (`component_builder`) renvoie un résultat illisible
  (`[object Object]`), récupérer le code du composant directement sur le site 21st.dev,
  puis dérouler la procédure. Le bug du MCP ne dispense JAMAIS d'intégrer le composant.
- **Aceternity UI** : copier le code depuis ui.aceternity.com, puis procédure ci-dessus.
- **Capture d'écran / lien vers un site** : reproduire le composant en code (même exigence :
  fichier + adaptation + îlot + vérification).

## Rappel

Un composant intégré doit avoir l'air d'avoir été conçu POUR ce site : mêmes couleurs,
mêmes polices, vrais textes. Si on reconnaît la démo d'origine, l'adaptation n'est pas finie.
