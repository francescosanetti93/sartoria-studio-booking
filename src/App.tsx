import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { I18nProvider } from "./i18n/I18nContext";
import { LOCALES } from "./i18n/types";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { DraftBanner } from "./components/DraftBanner";
import Home from "./pages/Home";
import Craft from "./pages/Craft";
import Experience from "./pages/Experience";
import Ateliers from "./pages/Ateliers";
import Apply from "./pages/Apply";

function LocaleLayout() {
  const { locale } = useParams<{ locale: string }>();
  const known = LOCALES.some((l) => l.code === locale);

  if (!known) {
    return <Navigate to="/en" replace />;
  }

  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="craft" element={<Craft />} />
            <Route path="experience" element={<Experience />} />
            <Route path="ateliers" element={<Ateliers />} />
            <Route path="apply" element={<Apply />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
        <SiteFooter />
        <DraftBanner />
      </div>
    </I18nProvider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path=":locale/*" element={<LocaleLayout />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
