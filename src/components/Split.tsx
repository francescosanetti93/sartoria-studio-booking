import { Link } from "react-router-dom";
import { Placeholder } from "./Placeholder";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";
import type { Split as SplitT } from "../i18n/types";

export function Split({
  split,
  reverse,
  photo,
}: {
  split: SplitT;
  reverse?: boolean;
  photo?: string;
}) {
  const { path } = useI18n();
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
        <div className={reverse ? "lg:order-2" : ""}>
          <Placeholder label={split.photoLabel} src={photo} className="aspect-[1408/1008]" />
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <p className="eyebrow">{split.eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">{split.title}</h2>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{split.body}</p>
          <Link
            to={path(split.to)}
            onClick={() => track("cta_click", { source: `home_split_${split.to}` })}
            className="mt-10 inline-block border-b border-primary/50 pb-1 text-[0.6875rem] uppercase tracking-[0.28em] text-primary transition-colors hover:border-primary"
          >
            {split.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
