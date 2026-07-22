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
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
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
};
