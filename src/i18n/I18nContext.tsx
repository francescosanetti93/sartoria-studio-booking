import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LOCALES, type Locale, type SiteContent } from "./types";
import en from "./content/en";
import it from "./content/it";
import zh from "./content/zh";
import ru from "./content/ru";
import ar from "./content/ar";

const CONTENT: Record<Locale, SiteContent> = { en, it, zh, ru, ar };

interface Ctx {
  locale: Locale;
  dir: "ltr" | "rtl";
  isDraft: boolean;
  t: SiteContent;
  path: (page: string) => string;
  switchLocale: (l: Locale) => void;
}

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ locale?: string }>();
  const navigate = useNavigate();
  const localeMeta = LOCALES.find((l) => l.code === params.locale) ?? LOCALES[0];
  const locale = localeMeta.code;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta.dir;
    document.title = CONTENT[locale].meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", CONTENT[locale].meta.description);
  }, [locale, localeMeta.dir]);

  const value: Ctx = {
    locale,
    dir: localeMeta.dir,
    isDraft: Boolean(localeMeta.draft),
    t: CONTENT[locale],
    path: (page: string) => `/${locale}${page ? `/${page}` : ""}`,
    switchLocale: (l: Locale) => {
      const rest = window.location.pathname.split("/").slice(2).join("/");
      navigate(`/${l}${rest ? `/${rest}` : ""}`);
    },
  };

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
