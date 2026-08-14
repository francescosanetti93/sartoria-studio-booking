import heroFounders from "../assets/real/hero-founders.jpg";
import abitoGessato from "../assets/real/abito-gessato.jpg";
import principeDiGalles from "../assets/real/principe-di-galles.jpg";
import cerimoniaBordeaux from "../assets/real/cerimonia-bordeaux.jpg";
import quadriCravattaViola from "../assets/real/quadri-cravatta-viola.jpg";
import cappottoMovimento from "../assets/real/cappotto-movimento.jpg";
import giacciaSciarpa from "../assets/real/giacca-sciarpa.jpg";

/**
 * Real photos pulled from the "Antichi Telai" Lovable project (the atelier's own
 * product photography). These 7 slots are hardcoded, locale-independent labels
 * (same string regardless of language), so they're safe to key by label text.
 * The content-driven slots (home splits, atelier spaces) get their photo passed
 * explicitly via the `src` prop instead, since their labels are translated per
 * locale and can't be matched by text.
 */
const FIXED_PHOTOS: Record<string, string> = {
  "HERO — LOOM WEAVING": heroFounders,
  "CRAFT — HERO, LOOM AT WORK": abitoGessato,
  "CRAFT — WORKSHOP, WIDE": principeDiGalles,
  "EXPERIENCE — HERO": cerimoniaBordeaux,
  "EXPERIENCE — ROME, SUITE": quadriCravattaViola,
  "TRAVELING MASTER — TRUNK, HOTEL SUITE": cappottoMovimento,
  "ATELIERS — HERO": giacciaSciarpa,
};

export function Placeholder({
  label,
  src,
  className = "",
}: {
  label: string;
  src?: string;
  className?: string;
}) {
  const photo = src ?? FIXED_PHOTOS[label];

  if (photo) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <img
          src={photo}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`herringbone-placeholder relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="eyebrow" style={{ opacity: 0.8 }}>
          Missing photo · {label}
        </span>
      </div>
    </div>
  );
}
