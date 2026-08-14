import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { LOCALES } from "../i18n/types";
import { track } from "../lib/track";

export function SiteFooter() {
  const { t, path } = useI18n();

  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.22em]">ANTICHI TELAI</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.blurb}</p>
        </div>

        <div className="space-y-4">
          <p className="eyebrow">{t.footer.discretionEyebrow}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.discretionBody}</p>
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "footer_apply" })}
            className="inline-block border-b border-primary/50 pb-1 text-sm text-primary transition-colors hover:border-primary"
          >
            {t.footer.cta}
          </Link>
        </div>

        <div className="space-y-4">
          <p className="eyebrow">{t.footer.directContactEyebrow}</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="tel:+390658209633"
              onClick={() => track("cta_click", { source: "footer_phone" })}
              className="transition-colors hover:text-primary"
            >
              06 5820 9633
            </a>
            <a
              href="mailto:info@antichitelai.it"
              onClick={() => track("cta_click", { source: "footer_email" })}
              className="transition-colors hover:text-primary"
            >
              info@antichitelai.it
            </a>
            <a
              href="https://www.instagram.com/antichitelai1894official"
              target="_blank"
              rel="noreferrer"
              onClick={() => track("cta_click", { source: "footer_instagram" })}
              className="transition-colors hover:text-primary"
            >
              @antichitelai1894official
            </a>
          </div>
          <p className="eyebrow pt-2">{t.footer.languagesEyebrow}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {LOCALES.map((l) => (
              <span key={l.code} className="transition-colors hover:text-primary">
                {l.label}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{t.footer.languagesNote}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} Antichi Telai — Roma</span>
          <span className="tracking-[0.2em] uppercase">{t.footer.byInvitation}</span>
        </div>
      </div>
    </footer>
  );
}
