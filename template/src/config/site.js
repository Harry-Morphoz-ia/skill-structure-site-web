// ================================================================
// CONFIGURATION CENTRALE DU SITE
// On change ces valeurs ici, tout le site suit. /site-construire
// remplit ce fichier à partir du brief.md.
// ================================================================

export const site = {
  // Identité
  name: 'NomSociété',
  tagline: 'La promesse principale du site, en une phrase forte.',

  // Coordonnées (footer, page contact, SEO local)
  phone: '00 00 00 00 00',
  email: 'contact@societe.fr',
  address: 'Ville, département',
  area: "Zone d'intervention",

  // Navigation — adapter selon les pages de la vitrine.
  // Pour une landing page : ne garder qu'une entrée vers l'ancre principale.
  // Le champ `description` (optionnel) alimente /llms.txt, la carte de visite
  // du site pour les IA (rempli par /site-geo).
  nav: [
    { label: 'Accueil', href: '/', description: '' },
    { label: 'Services', href: '/services', description: '' },
    { label: 'À propos', href: '/a-propos', description: '' },
    { label: 'Contact', href: '/contact', description: '' },
  ],

  // Action de conversion principale (bouton mis en avant partout)
  cta: { label: 'Prendre rendez-vous', href: '/contact' },

  // Réseaux sociaux : mettre l'URL pour afficher l'icône, laisser vide pour la masquer.
  // Les icônes prennent automatiquement la couleur de la palette.
  socials: {
    instagram: '',
    linkedin: '',
    tiktok: '',
    youtube: '',
    facebook: '',
  },

  // SEO — rempli par /site-seo depuis la section H du brief.
  // Alimente les données structurées JSON-LD (la carte d'identité du site pour Google).
  seo: {
    url: '',                        // URL finale du site (ex : 'https://www.exemple.com')
    businessType: 'LocalBusiness',  // ou 'Restaurant', 'Plumber', 'BeautySalon'... (types Schema.org)
    city: '',                       // ville principale (SEO local)
    region: '',                     // département / région
    openingHours: '',               // ex : 'Mo-Fr 09:00-18:00'
  },
};
