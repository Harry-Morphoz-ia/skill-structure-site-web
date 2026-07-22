# Référencement sur les IA (GEO)

De plus en plus de gens demandent directement à ChatGPT, Claude ou Perplexity
« un plombier à Lyon » ou « un traiteur pour un mariage en Seine-et-Marne ». Ces IA
répondent en citant des sites qu'elles ont lus et compris. Le GEO (Generative Engine
Optimization) consiste à maximiser les chances que ce soit **ton** site.

## Ce que le kit met en place automatiquement

| Brique | Ce que c'est | Où |
|---|---|---|
| **llms.txt** | La « carte de visite » du site pour les IA : qui est la société, ce qu'elle fait, ses coordonnées, ses pages. Standard émergent, généré tout seul au build depuis la config du site. | `https://ton-site.fr/llms.txt` |
| **FAQ structurée** | Des questions/réponses balisées (données FAQPage) : le format que les IA citent le plus volontiers. | composant `Faq.astro` |
| **Robots IA autorisés** | GPTBot (ChatGPT), ClaudeBot (Claude), PerplexityBot et Google-Extended (Gemini) sont explicitement autorisés à lire le site. | `public/robots.txt` |
| **Données structurées** | La carte d'identité Schema.org (déjà en place pour le SEO) sert aussi aux IA. | `SeoSchema.astro` |
| **Site rapide et factuel** | Les IA privilégient les sites clairs, structurés, sans jargon creux : exactement ce que le kit produit. | tout le kit |

## Comment l'activer sur ton site

Lance **`/site-geo`** après `/site-seo` : le skill enrichit le llms.txt, construit ta FAQ
à partir des vraies questions de tes clients, et rend ton contenu « citable ».

## Les attentes, honnêtement

Le GEO est un domaine **jeune** : les pratiques évoluent vite et personne ne peut garantir
qu'une IA citera ton site. Deux certitudes quand même :
1. Le SEO classique reste la fondation (les IA s'appuient beaucoup sur les résultats de
   recherche) : fais-le d'abord, toujours.
2. Un site clair, factuel et structuré part avec une vraie longueur d'avance, et c'est
   déjà bon pour tes visiteurs humains.

**Pour mesurer** : quelques semaines après la mise en ligne, demande toi-même à ChatGPT /
Claude / Perplexity « [ton métier] à [ta ville] » et regarde si ton site est mentionné.
Refais le test régulièrement.

## Si tu ne veux PAS que les IA lisent ton site

C'est un choix légitime (certains préfèrent). Dans `public/robots.txt`, remplace les
`Allow: /` des agents IA par `Disallow: /`. Conséquence assumée : pas de citations.
