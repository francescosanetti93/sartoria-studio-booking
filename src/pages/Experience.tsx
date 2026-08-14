import { Link } from "react-router-dom";
import { Placeholder } from "../components/Placeholder";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";

export default function Experience() {
  const { t, path } = useI18n();
  const e = t.experience;

  return (
    <>
      <section className="relative h-[70svh] w-full overflow-hidden">
        <Placeholder label="EXPERIENCE — HERO" className="absolute inset-0 h-full w-full slow-zoom" />
        <div className="veil absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-end pb-24 text-center">
          <div className="fade-up max-w-3xl px-6">
            <p className="eyebrow">{e.eyebrow}</p>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{e.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* Roman Atelier Experience */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
          <div>
            <Placeholder label="EXPERIENCE — ROME, SUITE" className="aspect-[1408/1008]" />
          </div>
          <div>
            <p className="eyebrow">{e.romanLabel}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{e.romanTitle}</h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">{e.romanIntro}</p>
            <div className="mt-12 space-y-8">
              {e.romanDays.map((day, i) => (
                <div key={day.n + i} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
                  <p className="eyebrow">{day.n}</p>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{day.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traveling Master */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
          <div className="lg:order-2">
            <Placeholder label="TRAVELING MASTER — TRUNK, HOTEL SUITE" className="aspect-[1408/1008]" />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">{e.travelingLabel}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{e.travelingTitle}</h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">{e.travelingIntro}</p>
            <p className="eyebrow mt-12">{e.travelCitiesLabel}</p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {e.travelCities.map((city) => (
                <span
                  key={city}
                  className="border border-border px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/80"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">{e.travelNote}</p>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <p className="eyebrow">{e.procedureEyebrow}</p>
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{e.procedureTitle}</h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">{e.procedureBody}</p>
        </div>
      </section>

      <section className="relative border-t border-border py-36 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "experience_closing" })}
            className="inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
          >
            {e.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
