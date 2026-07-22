// ================================================================
// Fond animé « aurora » : halos de couleur flous en mouvement lent,
// derrière le contenu du hero. Effet « wow » pour les sites marqués
// « très animé » dans le brief.
//
// - Les couleurs viennent de la palette du site (variables CSS),
//   donc l'effet s'adapte automatiquement à chaque site.
// - Respecte prefers-reduced-motion (les halos deviennent fixes).
// - Îlot React : à utiliser avec client:load dans un fichier .astro.
// ================================================================

export default function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <style>{`
        .aurora { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
        .aurora-blob {
          position: absolute; width: 55vmax; height: 55vmax; border-radius: 50%;
          filter: blur(80px); opacity: 0.5; mix-blend-mode: screen;
          will-change: transform;
        }
        .aurora-1 {
          background: var(--c-primary, #4F46E5);
          top: -20%; left: -10%;
          animation: aurora-move-1 18s ease-in-out infinite alternate;
        }
        .aurora-2 {
          background: var(--c-primary-soft, #6366F1);
          bottom: -25%; right: -10%;
          animation: aurora-move-2 22s ease-in-out infinite alternate;
        }
        .aurora-3 {
          background: var(--c-aurora, var(--c-primary-soft, #6366F1));
          top: 30%; left: 40%; width: 40vmax; height: 40vmax; opacity: 0.3;
          animation: aurora-move-3 26s ease-in-out infinite alternate;
        }
        @keyframes aurora-move-1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(18vw, 10vh) scale(1.15); }
        }
        @keyframes aurora-move-2 {
          from { transform: translate(0, 0) scale(1.1); }
          to   { transform: translate(-15vw, -12vh) scale(0.95); }
        }
        @keyframes aurora-move-3 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-10vw, 14vh); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
