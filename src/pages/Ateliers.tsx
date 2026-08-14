import { Link } from "react-router-dom";
import { Placeholder } from "../components/Placeholder";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";
import atelierSketch from "../assets/real/atelier-sketch.jpg";
import camiciaDettaglio from "../assets/real/camicia-dettaglio.jpg";
import specchio from "../assets/real/specchio.jpg";

// Real photos for the 3 atelier spaces, in the same fixed order as a.spaces
// (Monteverde / Balduina / Vigna Clara) across every locale.
const SPACE_PHOTOS = [atelierSketch, camiciaDettaglio, specchio];

export default function Ateliers() {
  const { t, path } = useI18n();
  const a = t.ateliers;

  return (
    <>
      <section className="relative h-[60svh] w-full overflow-hidden">
        <Placeholder label="ATELIERS — HERO" className="absolute inset-0 h-full w-full slow-zoom" />
        <div className="veil absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-end pb-24 text-center">
          <div className="fade-up max-w-3xl px-6">
            <p className="eyebrow">{a.eyebrow}</p>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{a.heroTitle}</h1>
            <p className="mt-8 max-w-lg mx-auto text-sm leading-relaxed text-muted-foreground">{a.heroNote}</p>
          </div>
        </div>
      </section>

      {a.spaces.map((space, i) => (
        <section key={space.name} className="border-t border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <Placeholder label={space.photoLabel} src={SPACE_PHOTOS[i]} className="aspect-[1408/1008]" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="eyebrow">{space.role}</p>
              <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{space.name}</h2>
              <div className="gold-rule mt-8" />
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{space.text}</p>
              <p className="mt-6 text-sm text-foreground/70">{space.address}</p>
              <p className="eyebrow mt-4">{a.byAppointment}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <p className="eyebrow">{a.contactTitle}</p>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <a href="tel:+390658209633" className="transition-colors hover:text-primary">
              06 5820 9633
            </a>
            <a href="mailto:info@antichitelai.it" className="transition-colors hover:text-primary">
              info@antichitelai.it
            </a>
            <a
              href="https://www.instagram.com/antichitelai1894official"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              @antichitelai1894official
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-36 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">{a.closingTitle}</h2>
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "ateliers_closing" })}
            className="mt-12 inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
          >
            {a.closingCta}
          </Link>
        </div>
      </section>
    </>
  );
}
