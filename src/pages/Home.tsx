import { Link } from "react-router-dom";
import { Placeholder } from "../components/Placeholder";
import { Split } from "../components/Split";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";
import atelierSketch from "../assets/real/atelier-sketch.jpg";
import specchio from "../assets/real/specchio.jpg";
import portraitBn from "../assets/real/portrait-bn.jpg";
import cappottoDoppiopetto from "../assets/real/cappotto-doppiopetto.jpg";

// Real photos for the 4 home splits, in the same fixed order as h.splits
// (I Telai / Esperienza Roma / Sarto itinerante / Atelier) across every locale.
const SPLIT_PHOTOS = [atelierSketch, specchio, portraitBn, cappottoDoppiopetto];

export default function Home() {
  const { t, path } = useI18n();
  const h = t.home;

  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Placeholder label="HERO — LOOM WEAVING" className="absolute inset-0 h-full w-full slow-zoom" />
        <div className="veil absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-end pb-28 text-center">
          <div className="fade-up max-w-3xl px-6">
            <p className="eyebrow">{h.heroEyebrow}</p>
            <h1 className="mt-8 whitespace-pre-line font-display text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
              {h.heroTitle}
            </h1>
            <div className="gold-rule mx-auto mt-10" />
            <Link
              to={path("apply")}
              onClick={() => track("cta_click", { source: "home_hero" })}
              className="mt-10 inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
            >
              {h.heroCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-center lg:py-44">
        <p className="eyebrow">{h.manifestoEyebrow}</p>
        <p className="mt-10 font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl lg:text-4xl">
          {h.manifestoBody}
        </p>
      </section>

      {h.splits.map((split, i) => (
        <Split key={split.to + i} split={split} reverse={i % 2 === 1} photo={SPLIT_PHOTOS[i]} />
      ))}

      <section className="relative border-t border-border py-36 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow">{h.admissionEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">{h.admissionTitle}</h2>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{h.admissionBody}</p>
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "home_admission" })}
            className="mt-12 inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
          >
            {h.admissionCta}
          </Link>
        </div>
      </section>
    </>
  );
}
