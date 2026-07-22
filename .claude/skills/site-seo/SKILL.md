---
name: site-seo
description: Quatrième skill du kit de création de sites web. Optimise le référencement Google du site construit, à partir de la section H du brief (mots-clés, zone géographique, concurrents, fiche Google Business) - attribue une intention de recherche par page, écrit title/meta description uniques, optimise H1/contenus/alt, remplit les données structurées JSON-LD (SEO local) et active le sitemap. Route ensuite vers /site-verifier. Utiliser après /site-construire.
---

# Skill /site-seo — référencement du site

## Pour quoi faire

Quatrième étape du workflow. Le site existe et compile : ce skill fait en sorte que
**Google le comprenne et le montre aux bonnes personnes**. Tout part de la section H du
brief : les mots-clés réels que tapent les clients, et la zone géographique.

Sortie : balises optimisées sur chaque page, données structurées remplies, sitemap actif,
checklist de mise en ligne + suggestion de lancer `/site-verifier`.

## Règles d'or

1. **Une page = une intention de recherche.** Chaque page vise UN mot-clé principal ;
   deux pages ne se battent jamais sur le même.
2. **Jamais de bourrage de mots-clés.** Le mot-clé se place naturellement (title, H1,
   premier paragraphe) ; si la phrase devient bizarre, on reformule. Google pénalise le forcé.
3. **Cohérence NAP** : Nom, Adresse, Téléphone strictement identiques partout (site, footer,
   fiche Google Business, annuaires).
4. **Pas de fait inventé** : pas de faux avis, pas de fausse adresse, pas d'horaires devinés.

## Comment procéder

### Étape 1 — Charger la matière

Lire le `brief.md` : section H (mots-clés, zone, concurrents, fiche Google Business),
section A (coordonnées, horaires), section C (pages du site). Si la section H est vide,
poser les 2 questions minimales : « que tapent vos clients sur Google ? » et « quelle zone ? ».

### Étape 2 — Attribuer les intentions de recherche

Construire le tableau mot-clé ↔ page :
- **Accueil** → la requête principale + la ville (ex : « traiteur événementiel Melun »)
- **Services** (ou chaque page service) → une requête par prestation
- **À propos / Contact** → requêtes de marque et locales
Le noter dans `design-tokens.md` ou en tête de chaque page (commentaire).

### Étape 3 — Balises par page (props du BaseLayout)

Pour chaque page, écrire dans `<BaseLayout title="..." description="...">` :
- **title** : unique, ≤ 60 caractères, mot-clé + ville + marque
  (ex : « Traiteur mariage à Melun · NomSociété »)
- **description** : ~150 caractères, le bénéfice + un appel à l'action
  (« Recevez vos invités sans stress. Devis gratuit sous 24h. »). C'est le texte de
  l'annonce dans Google : il doit donner envie de cliquer.

### Étape 4 — Optimiser le contenu de chaque page

- Le **H1** contient le mot-clé de la page, formulé naturellement.
- Le mot-clé apparaît dans le **premier paragraphe** ; les **H2** déclinent les sous-sujets.
- Les **alt** d'images décrivent réellement l'image (mot-clé si pertinent, jamais forcé).
- **Densité** : les pages qui visent un mot-clé ont un contenu substantiel (≥ 300 mots).
  Si une page est trop maigre, l'étoffer depuis la matière du brief (retour Étape 6 de
  /site-construire).

### Étape 5 — SEO local (données structurées)

Remplir le bloc `seo` de `src/config/site.js` :
- `url` : l'URL finale du site
- `businessType` : le type Schema.org le plus précis pour le métier
  (`Restaurant`, `Plumber`, `BeautySalon`, `LegalService`... sinon `LocalBusiness`)
- `city`, `region`, `openingHours` (section A du brief)

Le JSON-LD LocalBusiness se génère alors automatiquement sur toutes les pages
(composant `SeoSchema.astro`). Rappeler : fiche Google Business à créer/lier, NAP identique.

### Étape 6 — Technique

- Renseigner `site: 'https://...'` dans `astro.config.mjs` → le **sitemap** se génère
  automatiquement au build (`/sitemap-index.xml`).
- Dans `public/robots.txt`, activer la ligne `Sitemap:` avec la vraie URL.
- Vérifier l'`og:image` (l'image de partage) : idéalement 1200 × 630 px.

### Étape 7 — Vérifier

```bash
npm run build
```
Contrôles dans `dist/` : chaque page a un title et une description **uniques** ; le
`sitemap-index.xml` existe ; le JSON-LD est présent dans le `<head>` ; un seul H1 par page.

### Étape 8 — Récapituler et router

Récap : tableau mot-clé ↔ page, ce qui reste à faire côté client (fiche Google Business,
nom de domaine). Puis :

> SEO en place. Prochaine étape : `/site-verifier` (contrôle qualité complet), puis mise
> en ligne. Après la mise en ligne : suivre le tuto `docs/indexation-google.md`
> (Search Console, sitemap, indexation, fiche Google Business).

## Ce que /site-seo ne fait pas

- La mise en ligne et la Search Console (post-déploiement).
- Le suivi de positions dans le temps.
- Le référencement sur les IA (llms.txt) : option future du kit, après le SEO classique.
