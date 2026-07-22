# Animations « wow » — 21st.dev & Aceternity

Pour les sites marqués **« très animé »** dans le brief, on ajoute des composants animés
issus de 21st.dev et d'Aceternity UI. Ce sont des composants **React** : on les intègre
dans le template Astro sous forme d'« îlots » (des morceaux interactifs au milieu d'un site
statique).

> ⚠️ **Sécurité — à lire absolument**
> Ta clé API 21st.dev est **personnelle et secrète**. Elle ne doit **jamais** apparaître dans
> le kit ni dans aucun dépôt git. Chaque personne qui duplique le kit met **sa propre clé** dans
> son fichier `.mcp.json` **local**, qui doit être **gitignoré**. Le kit ne contient aucune clé.

---

## Prérequis : activer React dans Astro

Une seule fois par site qui utilise ces animations :

```bash
cd mon-site
npx astro add react
```

Astro peut alors afficher des composants React ponctuels (`client:load`, `client:visible`).

---

## Option A — 21st.dev (connecteur « Magic MCP »)

Permet de générer des composants animés à la demande, directement depuis Claude Code.

### 1. Récupérer ta clé
Crée un compte sur <https://21st.dev>, puis génère une clé sur
<https://21st.dev/magic/console>. Elle ressemble à `21st_sk_xxxxxxxx...`.

### 2. Brancher ta clé (dans TON `.mcp.json` local, jamais commité)
Ajoute cette entrée à côté de tes autres serveurs MCP :

```json
"@21st-dev/magic": {
  "command": "npx",
  "args": ["-y", "@21st-dev/magic@latest", "API_KEY=\"21st_sk_VOTRE_CLE\""]
}
```

Vérifie que `.mcp.json` est bien dans ton `.gitignore` :

```bash
grep -q '^\.mcp\.json$' .gitignore || echo '.mcp.json' >> .gitignore
```

### 3. Redémarrer Claude Code
Ferme et relance Claude Code pour qu'il charge le connecteur. Ensuite, demande un composant
(ex : « un hero animé avec un dégradé en mouvement ») : Claude génère le code React, à placer
dans un composant Astro et à appeler en îlot.

---

## Option B — Aceternity UI (copier-coller, pas de compte)

Aucune clé ni compte. On pioche les composants sur <https://ui.aceternity.com>.

1. Choisis un composant sur le site, copie son code React (ou utilise la CLI shadcn indiquée).
2. Colle-le dans `src/components/` en tant que composant React (`.tsx`).
3. Utilise-le dans une page Astro comme îlot :

```astro
---
import MonEffet from '../components/MonEffet.tsx';
---
<MonEffet client:visible />
```

La version Pro (199 $, paiement unique) ajoute des composants et templates premium : optionnel.

---

## Composant fourni avec le kit : AuroraBackground

Le template inclut déjà un effet « wow » prêt à l'emploi :
`src/components/animated/AuroraBackground.tsx` (halos de couleur flous en mouvement lent
derrière le hero). Ses couleurs viennent **automatiquement de la palette du site**.

Activation / désactivation en un mot, dans une page :

```astro
<Hero animated title="..." />   <!-- avec l'effet -->
<Hero title="..." />            <!-- sans l'effet (site sobre) -->
```

## État du connecteur 21st.dev (testé le 22/07/2026)

- ✅ **`logo_search` fonctionne** : récupère les logos officiels de marques (SVG complets avec
  leurs vraies couleurs). Utile pour la section « logos clients / partenaires » d'un site.
- ❌ **Le générateur de composants (`component_builder` / `component_inspiration`) est cassé
  côté 21st.dev** : il renvoie `[object Object]` au lieu du code (bug de leur serveur, pas de
  votre config). Contournement : piocher les composants directement sur <https://21st.dev>
  (copier-coller, comme Aceternity). Le connecteur utilise `@latest` : il se mettra à jour
  tout seul, retester de temps en temps.

## Règle d'usage

- Réserver ces composants aux endroits à fort impact (hero, section clé), pas partout : un site
  reste rapide et lisible avant d'être spectaculaire.
- Toujours respecter `prefers-reduced-motion` (déjà géré dans `global.css`).
