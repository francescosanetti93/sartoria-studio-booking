import { Link } from "react-router-dom";
import { Placeholder } from "../components/Placeholder";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";

export default function Craft() {
  const { t, path } = useI18n();
  const c = t.craft;

  return (
    <>
      <section className="relative h-[70svh] w-full overflow-hidden">
        <Placeholder label="CRAFT — HERO, LOOM AT WORK" className="absolute inset-0 h-full w-full slow-zoom" />
        <div className="veil absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-end pb-24 text-center">
          <div className="fade-up max-w-3xl px-6">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{c.heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <Placeholder label="CRAFT — WORKSHOP, WIDE" className="aspect-[16/9]" />
          <p className="eyebrow mt-6 text-center">{c.photoCaption}</p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="space-y-16">
            {c.steps.map((step) => (
              <div key={step.n} className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-10">
                <span className="font-display text-3xl text-primary">{step.n}</span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">{step.t}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 text-center sm:grid-cols-3 lg:px-10">
          {c.stats.map((stat) => (
            <div key={stat.k}>
              <p className="font-display text-4xl text-primary sm:text-5xl">{stat.k}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-t border-border py-36 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">{c.closingTitle}</h2>
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "craft_closing" })}
            className="mt-12 inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
          >
            {c.closingCta}
          </Link>
        </div>
      </section>
    </>
  );
}
