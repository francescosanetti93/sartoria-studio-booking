import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import { LOCALES } from "../i18n/types";
import { track } from "../lib/track";

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const { t, path, locale, switchLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { to: path("craft"), label: t.nav.craft },
    { to: path("experience"), label: t.nav.experience },
    { to: path("ateliers"), label: t.nav.ateliers },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to={path("")} className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.28em] text-foreground">ANTICHI TELAI</span>
          <span className="eyebrow mt-1 text-[0.6rem] tracking-[0.4em]">{t.nav.taglineYear}</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-l border-border pl-8">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className="eyebrow"
                style={{ opacity: l.code === locale ? 1 : 0.4, cursor: "pointer" }}
                aria-current={l.code === locale}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link
            to={path("apply")}
            onClick={() => track("cta_click", { source: "nav_apply" })}
            className="border border-primary/60 px-5 py-2.5 text-[0.6875rem] uppercase tracking-[0.28em] text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            {t.nav.apply}
          </Link>
        </nav>

        <button className="text-foreground md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={path("apply")}
              onClick={() => {
                setOpen(false);
                track("cta_click", { source: "nav_apply_mobile" });
              }}
              className="font-display text-2xl text-primary"
            >
              {t.nav.apply}
            </Link>
            <div className="eyebrow flex gap-4 pt-4">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    switchLocale(l.code);
                    setOpen(false);
                  }}
                  style={{ opacity: l.code === locale ? 1 : 0.4 }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
