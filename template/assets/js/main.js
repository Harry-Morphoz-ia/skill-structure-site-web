/* ================================================================
   TEMPLATE — interactions légères (vanilla, zéro dépendance)
   ================================================================ */

// 1. Menu burger : ouvre/ferme la navigation sur mobile
const burger = document.querySelector('.burger');
const nav = document.getElementById('menu');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const ouvert = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    burger.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Referme le menu quand on clique un lien (sur mobile)
  nav.querySelectorAll('a').forEach((lien) => {
    lien.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. Année automatique dans le pied de page
const annee = document.getElementById('annee');
if (annee) annee.textContent = new Date().getFullYear();
