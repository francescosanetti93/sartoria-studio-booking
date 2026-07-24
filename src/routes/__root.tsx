import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#F4F0E8" }}>
      <div className="max-w-md text-center">
        <h1 className="serif" style={{ fontSize: 96 }}>404</h1>
        <p className="mt-2" style={{ color: "#23201C" }}>Questa pagina non esiste.</p>
        <a href="/" className="btn btn-primary mt-6 inline-flex">Torna alla home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#F4F0E8" }}>
      <div className="max-w-md text-center">
        <h2 className="serif" style={{ fontSize: 32 }}>Qualcosa non ha caricato</h2>
        <div className="mt-6">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn btn-primary"
          >
            Riprova
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Antichi Telai 1894 | Sartoria e camiceria su misura a Roma" },
      { name: "description", content: "Abiti su misura a Roma dal 1894. Sartoria e camiceria da uomo con atelier a Monteverde, Balduina e Vigna Clara. Prenota un appuntamento." },
      { name: "author", content: "Antichi Telai 1894" },
      { property: "og:title", content: "Antichi Telai 1894 — Sartoria su misura a Roma" },
      { property: "og:description", content: "Abiti e camicie su misura da uomo. Tre atelier a Roma. Dal 1894." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Antichi Telai 1894" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Antichi Telai 1894",
          description: "Sartoria e camiceria su misura da uomo a Roma dal 1894.",
          telephone: "+39 06 5820 9633",
          email: "info@antichitelai.it",
          foundingDate: "1894",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Roberto Alessandri 53",
            postalCode: "00151",
            addressLocality: "Roma",
            addressCountry: "IT",
          },
          areaServed: "Roma",
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "10:00", closes: "13:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "14:30", closes: "19:30" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "16:00", closes: "19:30" },
          ],
          sameAs: ["https://www.instagram.com/antichitelai1894official"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
        {/* GA4 / Google Ads: inserire ID e decommentare
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXX');`}}/>
        */}
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || [];" }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
