export type Locale = "en" | "it" | "zh" | "ru" | "ar";

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl"; draft?: boolean }[] = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr", draft: true },
  { code: "ru", label: "РУ", dir: "ltr", draft: true },
  { code: "ar", label: "العربية", dir: "rtl", draft: true },
  { code: "it", label: "IT", dir: "ltr" },
];

export interface Step {
  n: string;
  t: string;
  d: string;
}

export interface Stat {
  k: string;
  v: string;
}

export interface AtelierSpace {
  name: string;
  address: string;
  role: string;
  text: string;
  photoLabel: string;
}

export interface Split {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: "craft" | "experience" | "ateliers";
  photoLabel: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  draftBanner: string;
  nav: {
    craft: string;
    experience: string;
    ateliers: string;
    apply: string;
    taglineYear: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroCta: string;
    manifestoEyebrow: string;
    manifestoBody: string;
    splits: Split[];
    admissionEyebrow: string;
    admissionTitle: string;
    admissionBody: string;
    admissionCta: string;
  };
  craft: {
    eyebrow: string;
    heroTitle: string;
    photoCaption: string;
    steps: Step[];
    stats: Stat[];
    closingTitle: string;
    closingCta: string;
  };
  experience: {
    eyebrow: string;
    heroTitle: string;
    romanLabel: string;
    romanTitle: string;
    romanIntro: string;
    romanDays: Step[];
    travelingLabel: string;
    travelingTitle: string;
    travelingIntro: string;
    travelCitiesLabel: string;
    travelCities: string[];
    travelNote: string;
    procedureEyebrow: string;
    procedureTitle: string;
    procedureBody: string;
    cta: string;
  };
  ateliers: {
    eyebrow: string;
    heroTitle: string;
    heroNote: string;
    spaces: AtelierSpace[];
    byAppointment: string;
    closingTitle: string;
    closingCta: string;
    contactTitle: string;
  };
  apply: {
    eyebrow: string;
    title: string;
    intro: string;
    fields: { name: string; city: string; email: string; phone: string; note: string };
    occasionLabel: string;
    occasions: string[];
    routeLabel: string;
    routes: string[];
    heardLabel: string;
    heard: string[];
    submit: string;
    sending: string;
    disclaimer: string;
    successEyebrow: string;
    successTitle: string;
    successBody: string;
    errorText: string;
  };
  footer: {
    blurb: string;
    discretionEyebrow: string;
    discretionBody: string;
    cta: string;
    languagesEyebrow: string;
    languagesNote: string;
    directContactEyebrow: string;
    byInvitation: string;
  };
}
