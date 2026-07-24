import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import heroImg from "../assets/hero.jpg.asset.json";
import portraitBn from "../assets/portrait-bn.jpg.asset.json";
import specchio from "../assets/specchio.jpg.asset.json";
import atelierSketch from "../assets/atelier-sketch.jpg.asset.json";
import ph8782 from "../assets/DSC_8782.jpg.asset.json";
import ph8805 from "../assets/DSC_8805.jpg.asset.json";
import ph8825 from "../assets/DSC_8825.jpg.asset.json";
import ph8918 from "../assets/DSC_8918.jpg.asset.json";
import ph8924 from "../assets/DSC_8924.jpg.asset.json";
import ph8207 from "../assets/DSC_8207.jpg.asset.json";
import ph8304 from "../assets/DSC_8304.jpg.asset.json";
import ph8536 from "../assets/DSC_8536-e1603813895346.jpg.asset.json";
import videoCerimonia from "../assets/cerimonia_12_compr.mp4.asset.json";
import videoCollezione from "../assets/collezione07_1.mp4.asset.json";

const IMAGES: Record<string, { url: string; alt: string }> = {
  "hero.jpg": { url: heroImg.url, alt: "Savino e Antonio Di Pietrantonio in abito Antichi Telai" },
  "abito.jpg": { url: ph8536.url, alt: "Abito gessato grigio su misura" },
  "camicia.jpg": { url: ph8805.url, alt: "Dettaglio camicia bianca con giacca a quadri blu" },
  "cerimonia.jpg": { url: ph8207.url, alt: "Abito da cerimonia bordeaux con gilet" },
  "dettaglio-1.jpg": { url: ph8782.url, alt: "Giacca sportiva in lana con sciarpa in seta" },
  "dettaglio-2.jpg": { url: portraitBn.url, alt: "Ritratto in bianco e nero, giacca a quadri" },
  "dettaglio-3.jpg": { url: ph8304.url, alt: "Abito Principe di Galles doppiopetto seduto in poltrona" },
  "atelier-1.jpg": { url: specchio.url, alt: "Prova smoking allo specchio in atelier" },
  "atelier-2.jpg": { url: atelierSketch.url, alt: "Bozzetto di una giacca su tessuto in atelier" },
  "ritratto-1.jpg": { url: ph8825.url, alt: "Abito a quadri blu e viola con cravatta viola" },
  "ritratto-2.jpg": { url: ph8918.url, alt: "Cappotto grigio doppiopetto con pantalone a quadri" },
  "ritratto-3.jpg": { url: ph8924.url, alt: "Cappotto grigio e abito blu in movimento" },
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

const ATELIERS = [
  { key: "monteverde", nome: "Monteverde", via: "Via Roberto Alessandri 53", cap: "00151 Roma", tel: "06 5820 9633", maps: "https://www.google.com/maps/search/?api=1&query=Via+Roberto+Alessandri+53+Roma" },
  { key: "balduina", nome: "Balduina", via: "Via Romeo Rodriguez Pereira 120", cap: "00136 Roma", tel: "06 5820 9633", maps: "https://www.google.com/maps/search/?api=1&query=Via+Romeo+Rodriguez+Pereira+120+Roma" },
  { key: "vignaclara", nome: "Vigna Clara", via: "Piazza Carli 10", cap: "00191 Roma", tel: "06 5820 9633", maps: "https://www.google.com/maps/search/?api=1&query=Piazza+Carli+10+Roma" },
];

function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // @ts-expect-error dataLayer
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error dataLayer
  window.dataLayer.push({ event, ...payload });
}

export const Route = createFileRoute("/")({ component: Home });

// ---------- Placeholder immagine mancante ----------
function Placeholder({ label, className = "", ratio = "4 / 5" }: { label: string; className?: string; ratio?: string }) {
  const img = IMAGES[label];
  if (img) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio, background: "var(--lino)" }}>
        <img src={img.url} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className={`herringbone relative w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="eyebrow" style={{ color: "#23201C", opacity: 0.7 }}>
          Mancante · {label}
        </span>
      </div>
    </div>
  );
}

// ---------- Rise on scroll ----------
function Rise({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rise ${className}`}>{children}</div>;
}

// ---------- Header ----------
function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const color = scrolled ? "var(--inchiostro)" : "#F4F0E8";
  const bg = scrolled ? "rgba(244,240,232,0.96)" : "transparent";
  const border = scrolled ? "1px solid var(--border)" : "1px solid transparent";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]"
      style={{ background: bg, color, borderBottom: border, transition: "all .3s ease" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-4 flex items-center justify-between gap-6">
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <a href="#sumisura" className="eyebrow" style={{ color: "inherit" }} onClick={() => track("cta_click", { source: "nav_sumisura" })}>Su misura</a>
          <a href="#famiglia" className="eyebrow" style={{ color: "inherit" }} onClick={() => track("cta_click", { source: "nav_famiglia" })}>La famiglia</a>
          <a href="#atelier" className="eyebrow" style={{ color: "inherit" }} onClick={() => track("cta_click", { source: "nav_atelier" })}>Atelier</a>
        </nav>
        <a href="#top" className="serif italic text-2xl md:text-3xl leading-none tracking-tight" style={{ color: "inherit" }}>
          Antichi Telai <span style={{ fontSize: "0.55em", letterSpacing: "0.2em" }} className="not-italic ml-1">1894</span>
        </a>
        <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
          <a href="tel:+390658209633" className="eyebrow" style={{ color: "inherit" }} onClick={() => track("cta_click", { source: "nav_phone" })}>06 5820 9633</a>
          <button onClick={() => { track("cta_click", { source: "nav_prenota" }); onBook(); }} className="btn" style={{ color: "inherit", borderColor: "currentColor" }}>
            Prenota
          </button>
        </div>
        <button onClick={() => { track("cta_click", { source: "nav_prenota_mobile" }); onBook(); }} className="btn md:hidden" style={{ color: "inherit", borderColor: "currentColor", padding: "10px 16px" }}>
          Prenota
        </button>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative w-full h-[100svh] overflow-hidden" style={{ background: "#23201C" }}>
      <div className="absolute inset-0 hero-zoom">
        <Placeholder label="hero.jpg" ratio="16 / 9" className="!h-full !aspect-auto opacity-90" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(35,32,28,0.35) 0%, rgba(35,32,28,0.15) 40%, rgba(35,32,28,0.85) 100%)" }} />
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-5 md:px-10 pb-16 md:pb-24" style={{ color: "#F4F0E8" }}>
          <p className="eyebrow mb-6">Sartoria · Roma · dal 1894</p>
          <h1 className="serif leading-[0.95]" style={{ fontSize: "clamp(48px, 9vw, 92px)" }}>
            Un abito che <em className="italic" style={{ color: "#E9E2D5" }}>ti somiglia</em>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(244,240,232,0.85)" }}>
            Prendiamo le misure, scegliamo la stoffa, cuciamo a mano quello che serve.<br />
            Poi il capo torna imbastito e lo correggiamo addosso a te.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button onClick={() => { track("cta_click", { source: "hero_primary" }); onBook(); }} className="btn btn-primary">
              Prenota un appuntamento
            </button>
            <a href="#sumisura" onClick={() => track("cta_click", { source: "hero_secondary" })} className="btn btn-ghost on-dark" style={{ color: "#F4F0E8" }}>
              Scopri il su misura
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SVG icons ----------
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function IconMetro() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" {...stroke}>
      <rect x="4" y="24" width="56" height="16" />
      <path d="M10 24v6M16 24v10M22 24v6M28 24v10M34 24v6M40 24v10M46 24v6M52 24v10" />
    </svg>
  );
}
function IconForbici() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" {...stroke}>
      <circle cx="16" cy="46" r="7" />
      <circle cx="48" cy="46" r="7" />
      <path d="M22 41 L58 12 M42 41 L6 12 M32 32 L32 40" />
    </svg>
  );
}
function IconBottoni() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" {...stroke}>
      <circle cx="32" cy="32" r="18" />
      <circle cx="26" cy="28" r="1.5" />
      <circle cx="38" cy="28" r="1.5" />
      <circle cx="26" cy="36" r="1.5" />
      <circle cx="38" cy="36" r="1.5" />
    </svg>
  );
}
function IconFilo() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" {...stroke}>
      <path d="M14 10 L14 46 Q14 54 22 54 L50 54" />
      <path d="M14 14 Q30 14 30 26 Q30 40 46 40" />
      <circle cx="50" cy="54" r="2" />
    </svg>
  );
}

// ---------- Manifesto ----------
function Manifesto() {
  const items = [
    { icon: <IconMetro />, title: "Misure prese a mano", text: "Diciotto passaggi, un tuo cartamodello unico." },
    { icon: <IconForbici />, title: "Taglio individuale", text: "Nessun capo esce uguale a un altro." },
    { icon: <IconBottoni />, title: "Cuciture interne a mano", text: "Le parti che tengono la forma non si vedono. Ci sono." },
    { icon: <IconFilo />, title: "Prove finché serve", text: "Il capo torna imbastito e si corregge addosso a te." },
  ];
  return (
    <section className="py-24 md:py-36" style={{ background: "var(--carta)" }}>
      <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
        <Rise>
          <p className="eyebrow mb-8">Il nostro modo</p>
          <p className="serif italic" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15 }}>
            Un capo su misura non è più bello.<br /> È più <em>tuo</em>.
          </p>
        </Rise>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {items.map((it, i) => (
            <Rise key={i} className="flex flex-col items-center text-center" >
              <div style={{ color: "var(--ottone)" }}>{it.icon}</div>
              <h3 className="serif mt-4 text-xl">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--inchiostro) 70%, transparent)" }}>{it.text}</p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Bande su misura ----------
function Banda({
  index, eyebrow, titolo, corsivo, paragrafo, dettagli, immagine, onBook,
}: {
  index: number; eyebrow: string; titolo: string; corsivo: string; paragrafo: string; dettagli: string[]; immagine: string; onBook: () => void;
}) {
  const flip = index % 2 === 1;
  return (
    <div className="grid md:grid-cols-2 gap-0 items-stretch">
      <div className={`${flip ? "md:order-2" : ""}`}>
        <Placeholder label={immagine} ratio="4 / 5" className="!h-full" />
      </div>
      <div className={`flex items-center px-5 md:px-16 py-16 md:py-24 ${flip ? "md:order-1" : ""}`} style={{ background: index % 2 === 0 ? "var(--carta)" : "var(--lino)" }}>
        <Rise className="max-w-lg">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="serif" style={{ fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1.05 }}>
            {titolo} <em className="italic">{corsivo}</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "color-mix(in oklab, var(--inchiostro) 78%, transparent)" }}>{paragrafo}</p>
          <ul className="mt-8">
            {dettagli.map((d, i) => (
              <li key={i} className="py-3 text-sm flex justify-between items-center" style={{ borderBottom: "1px solid var(--border)" }}>
                <span>{d}</span>
                <span style={{ color: "var(--ottone)" }} className="eyebrow">0{i + 1}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => { track("cta_click", { source: `banda_${eyebrow.toLowerCase()}` }); onBook(); }} className="mt-10 eyebrow link-underline" style={{ color: "var(--bordeaux)" }}>
            Prenota una consulenza →
          </button>
        </Rise>
      </div>
    </div>
  );
}

function SuMisura({ onBook }: { onBook: () => void }) {
  return (
    <section id="sumisura">
      <Banda
        index={0}
        eyebrow="Abito e giacca"
        titolo="La forma segue"
        corsivo="il corpo."
        paragrafo="Costruiamo abiti e giacche partendo dal tuo cartamodello. Tele interne cucite a mano, spalla morbida o strutturata a seconda di come stai meglio, scelta della stoffa tra i lanifici che conosciamo da decenni."
        dettagli={["Due o tre prove intermedie", "Consegna in 6–8 settimane", "Rimesso in forma ogni volta che serve"]}
        immagine="abito.jpg"
        onBook={onBook}
      />
      <Banda
        index={1}
        eyebrow="Camiceria"
        titolo="La prima definisce"
        corsivo="tutte le altre."
        paragrafo="La camicia è il capo che porti più spesso. Facciamo il cartamodello una volta, poi cuci le successive sulla tua taglia esatta. Colletto e polsino li decidi insieme a noi, cotone scelto tra tessuti italiani e svizzeri."
        dettagli={["Ordine minimo di due camicie", "Numerose combinazioni collo e polso", "Ricambi e riparazioni sempre possibili"]}
        immagine="camicia.jpg"
        onBook={onBook}
      />
      <Banda
        index={2}
        eyebrow="Cerimonia"
        titolo="Il giorno che"
        corsivo="ti ricordi."
        paragrafo="Abiti da sposo, tight, mezzo tight, smoking. Ci prendiamo il tempo necessario, di solito quattro mesi. Vestiamo anche testimoni e padri, così l'insieme resta coerente senza sembrare una divisa."
        dettagli={["Percorso guidato dall'inizio", "Prova finale a ridosso della data", "Custodia e ripassatura incluse"]}
        immagine="cerimonia.jpg"
        onBook={onBook}
      />
    </section>
  );
}

// ---------- Citazione ----------
function Citazione() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden" style={{ background: "#23201C" }}>
      <div className="absolute inset-0 opacity-30">
        <Placeholder label="dettaglio-2.jpg" ratio="16 / 6" className="!h-full !aspect-auto" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(35,32,28,0.85), rgba(35,32,28,0.95))" }} />
      <div className="relative mx-auto max-w-4xl px-5 md:px-10 text-center" style={{ color: "#F4F0E8" }}>
        <p className="serif italic" style={{ fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.2 }}>
          "Un abito ben fatto lo si nota una volta. Un abito su misura non si nota mai."
        </p>
      </div>
    </section>
  );
}

// ---------- Famiglia ----------
function Famiglia() {
  const tappe = [
    { anno: "1894", luogo: "Abruzzo", testo: "Il primo laboratorio della famiglia Di Pietrantonio apre le porte. Si cuce per gli uomini del paese, con le stoffe che arrivano da Napoli e da Biella." },
    { anno: "1952", luogo: "Roma", testo: "La sartoria si sposta nella capitale. La bottega di Monteverde diventa il punto di riferimento per professionisti, giornalisti, uomini di teatro." },
    { anno: "Oggi", luogo: "Savino e Antonio", testo: "I fratelli Di Pietrantonio conducono la sartoria in tre atelier di Roma. Stesso mestiere di quattro generazioni fa, con clienti che tornano da anni." },
  ];
  return (
    <section id="famiglia" className="py-24 md:py-36" style={{ background: "var(--lino)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Rise className="max-w-2xl">
          <p className="eyebrow mb-4">La famiglia</p>
          <h2 className="serif" style={{ fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.05 }}>
            Quattro generazioni <em className="italic">senza saltare un giorno</em>.
          </h2>
        </Rise>
        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-16">
          {tappe.map((t, i) => (
            <Rise key={i}>
              <div className="serif" style={{ color: "var(--bordeaux)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 1 }}>{t.anno}</div>
              <p className="eyebrow mt-2" style={{ color: "var(--ottone)" }}>{t.luogo}</p>
              <p className="mt-6 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--inchiostro) 78%, transparent)" }}>{t.testo}</p>
            </Rise>
          ))}
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <Placeholder label="atelier-1.jpg" ratio="4 / 3" />
          <Placeholder label="atelier-2.jpg" ratio="4 / 3" />
        </div>
      </div>
    </section>
  );
}

// ---------- Galleria ----------
function Galleria() {
  return (
    <section className="py-24 md:py-36" style={{ background: "var(--carta)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Rise className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="eyebrow mb-4">Nella bottega</p>
            <h2 className="serif" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Alcuni gesti, alcuni dettagli.</h2>
          </div>
          <a
            href="https://www.instagram.com/antichitelai1894official"
            target="_blank" rel="noreferrer"
            onClick={() => track("cta_click", { source: "gallery_instagram" })}
            className="eyebrow link-underline"
            style={{ color: "var(--bordeaux)" }}
          >
            Su Instagram → @antichitelai1894official
          </a>
        </Rise>
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 md:col-span-4 md:row-span-2"><Placeholder label="dettaglio-1.jpg" ratio="4 / 3" /></div>
          <div className="col-span-3 md:col-span-2"><Placeholder label="dettaglio-2.jpg" ratio="1 / 1" /></div>
          <div className="col-span-3 md:col-span-2"><Placeholder label="dettaglio-3.jpg" ratio="1 / 1" /></div>
          <div className="col-span-2"><Placeholder label="atelier-1.jpg" ratio="1 / 1" /></div>
          <div className="col-span-2"><Placeholder label="atelier-2.jpg" ratio="1 / 1" /></div>
          <div className="col-span-2"><Placeholder label="dettaglio-2.jpg" ratio="1 / 1" /></div>
        </div>
      </div>
    </section>
  );
}

// ---------- Tessuti ----------
function Tessuti() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--lino)" }}>
      <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
        <Rise>
          <p className="eyebrow mb-6">Tessuti</p>
          <p className="serif" style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: 1.5 }}>
            Lavoriamo con <em className="italic">Dormeuil</em>, <em className="italic">Holland &amp; Sherry</em> e i migliori
            lanifici italiani. Le stoffe le vediamo, tocchiamo e scegliamo insieme a te, in atelier.
          </p>
        </Rise>
      </div>
    </section>
  );
}

// ---------- Recensioni ----------
function Recensioni() {
  const recs = [
    { testo: "[Recensione Google segnaposto. Sostituire con testo reale del cliente.]", autore: "Cliente Google" },
    { testo: "[Recensione Google segnaposto. Sostituire con testo reale del cliente.]", autore: "Cliente Google" },
    { testo: "[Recensione Google segnaposto. Sostituire con testo reale del cliente.]", autore: "Cliente Google" },
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--carta)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Rise className="text-center mb-16">
          <p className="eyebrow">Dai clienti</p>
        </Rise>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {recs.map((r, i) => (
            <Rise key={i} className="text-center px-4">
              <div style={{ color: "var(--ottone)", letterSpacing: "0.25em" }} aria-label="5 stelle su 5">★★★★★</div>
              <p className="serif italic mt-6" style={{ fontSize: 22, lineHeight: 1.4 }}>{r.testo}</p>
              <p className="eyebrow mt-6">{r.autore}</p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Prenota ----------
function Prenota({ formRef }: { formRef: React.RefObject<HTMLElement | null> }) {
  const [selectedAtelier, setSelectedAtelier] = useState("monteverde");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    const errs: Record<string, string> = {};
    if (!String(fd.get("nome") || "").trim()) errs.nome = "Manca il nome.";
    if (!String(fd.get("telefono") || "").trim()) errs.telefono = "Manca il telefono.";
    if (!String(fd.get("email") || "").trim()) errs.email = "Manca l'email.";
    if (!String(fd.get("servizio") || "").trim()) errs.servizio = "Scegli cosa ti serve.";
    if (!fd.get("privacy")) errs.privacy = "Serve il consenso per procedere.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    fd.set("atelier", selectedAtelier);
    setState("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("send failed");
      track("generate_lead", { servizio: fd.get("servizio"), atelier: selectedAtelier });
      setState("ok");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="prenota" ref={formRef as React.RefObject<HTMLElement>} className="py-24 md:py-36" style={{ background: "var(--inchiostro)", color: "#F4F0E8" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">
        <Rise>
          <p className="eyebrow mb-4">Prenota</p>
          <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05 }}>
            Un'ora insieme, <em className="italic">poi si vede</em>.
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(244,240,232,0.75)" }}>
            Ricevuta la richiesta ti chiamiamo entro un giorno lavorativo per fissare l'appuntamento nell'atelier che preferisci.
          </p>
          <ul className="mt-10 space-y-4">
            {["Dura circa un'ora.", "Non ti impegna a nulla.", "Ti diciamo subito i prezzi.", "Puoi venire anche solo a vedere i tessuti."].map((t, i) => (
              <li key={i} className="flex gap-4 items-baseline">
                <span className="eyebrow" style={{ color: "var(--ottone)" }}>0{i + 1}</span>
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(244,240,232,0.15)" }}>
            <p className="eyebrow mb-4" style={{ color: "rgba(244,240,232,0.6)" }}>Se hai fretta</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+390658209633" onClick={() => track("cta_click", { source: "prenota_phone" })} className="serif text-2xl link-underline">06 5820 9633</a>
              <a href="https://wa.me/390658209633" target="_blank" rel="noreferrer" onClick={() => track("cta_click", { source: "prenota_whatsapp" })} className="eyebrow link-underline">WhatsApp</a>
              <a href="mailto:info@antichitelai.it" onClick={() => track("cta_click", { source: "prenota_email" })} className="eyebrow link-underline">info@antichitelai.it</a>
            </div>
          </div>
        </Rise>

        <Rise>
          {state === "ok" ? (
            <div className="py-12">
              <p className="eyebrow mb-4" style={{ color: "var(--ottone)" }}>Ricevuta</p>
              <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1 }}>Ti richiamiamo entro un giorno lavorativo.</h3>
              <p className="mt-6" style={{ color: "rgba(244,240,232,0.75)" }}>Se preferisci non aspettare: <a className="link-underline" href="tel:+390658209633">06 5820 9633</a>.</p>
            </div>
          ) : (
          <form onSubmit={onSubmit} noValidate>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

            <label className="block mt-4">
              <span className="field-label">Nome e cognome *</span>
              <input className="field" name="nome" type="text" autoComplete="name" />
              {errors.nome && <span className="text-xs mt-1 block" style={{ color: "#E9C29B" }}>{errors.nome}</span>}
            </label>

            <label className="block mt-6">
              <span className="field-label">Telefono *</span>
              <input className="field" name="telefono" type="tel" inputMode="tel" autoComplete="tel" />
              {errors.telefono && <span className="text-xs mt-1 block" style={{ color: "#E9C29B" }}>{errors.telefono}</span>}
            </label>

            <label className="block mt-6">
              <span className="field-label">Email *</span>
              <input className="field" name="email" type="email" autoComplete="email" />
              {errors.email && <span className="text-xs mt-1 block" style={{ color: "#E9C29B" }}>{errors.email}</span>}
            </label>

            <label className="block mt-6">
              <span className="field-label">Cosa ti serve *</span>
              <select className="field" name="servizio" defaultValue="">
                <option value="" disabled>—</option>
                <option value="abito">Abito o giacca su misura</option>
                <option value="camicia">Camicia su misura</option>
                <option value="sposo">Abito da sposo o cerimonia</option>
                <option value="cappotto">Cappotto o capospalla</option>
                <option value="accessori">Cravatte e accessori</option>
                <option value="consiglio">Non lo so ancora, vorrei un consiglio</option>
              </select>
              {errors.servizio && <span className="text-xs mt-1 block" style={{ color: "#E9C29B" }}>{errors.servizio}</span>}
            </label>

            <label className="block mt-6">
              <span className="field-label">Quando ti serve</span>
              <select className="field" name="quando" defaultValue="">
                <option value="">—</option>
                <option>Entro un mese</option>
                <option>Tra uno e tre mesi</option>
                <option>Oltre tre mesi</option>
                <option>Nessuna scadenza</option>
              </select>
            </label>

            <div className="mt-8">
              <span className="field-label">Atelier preferito *</span>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {ATELIERS.map((a) => (
                  <button
                    key={a.key}
                    type="button"
                    className="atelier-choice text-left"
                    data-selected={selectedAtelier === a.key}
                    onClick={() => setSelectedAtelier(a.key)}
                  >
                    <div className="eyebrow" style={{ color: selectedAtelier === a.key ? "var(--ottone)" : "rgba(244,240,232,0.6)" }}>{a.nome}</div>
                    <div className="text-xs mt-2" style={{ color: "rgba(244,240,232,0.7)" }}>{a.via}</div>
                  </button>
                ))}
              </div>
            </div>

            <label className="block mt-6">
              <span className="field-label">Quando preferisci passare</span>
              <select className="field" name="fascia" defaultValue="">
                <option value="">—</option>
                <option>Mattina feriale</option>
                <option>Pomeriggio feriale</option>
                <option>Sabato</option>
              </select>
            </label>

            <label className="block mt-6">
              <span className="field-label">Note</span>
              <textarea className="field" name="note" rows={3} />
            </label>

            <label className="flex gap-3 mt-8 text-sm cursor-pointer" style={{ color: "rgba(244,240,232,0.8)" }}>
              <input type="checkbox" name="privacy" className="mt-1 accent-[var(--ottone)]" />
              <span>Acconsento al trattamento dei dati secondo la <a href="#privacy" className="link-underline">privacy policy</a>. *</span>
            </label>
            {errors.privacy && <span className="text-xs mt-1 block" style={{ color: "#E9C29B" }}>{errors.privacy}</span>}

            <button type="submit" disabled={state === "sending"} className="btn mt-10 w-full" style={{ background: "var(--ottone)", borderColor: "var(--ottone)", color: "var(--inchiostro)" }}>
              {state === "sending" ? "Invio in corso" : "Prenota l'appuntamento"}
            </button>

            {state === "error" && (
              <p className="mt-4 text-sm" style={{ color: "#E9C29B" }}>
                L'invio non è riuscito. Chiamaci direttamente: <a className="link-underline" href="tel:+390658209633">06 5820 9633</a>.
              </p>
            )}
          </form>
          )}
        </Rise>
      </div>
    </section>
  );
}

// ---------- Atelier ----------
function Atelier() {
  return (
    <section id="atelier" className="py-24 md:py-32" style={{ background: "var(--carta)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Rise className="text-center mb-16">
          <p className="eyebrow mb-4">Gli atelier</p>
          <h2 className="serif" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Tre indirizzi a Roma.</h2>
        </Rise>
        <div className="grid md:grid-cols-3">
          {ATELIERS.map((a, i) => (
            <Rise key={a.key} className={`px-6 md:px-10 py-10 md:py-4 ${i > 0 ? "md:border-l" : ""}`} >
              <div style={i > 0 ? { borderColor: "var(--border)" } : {}}>
                <p className="eyebrow" style={{ color: "var(--ottone)" }}>{a.nome}</p>
                <p className="serif mt-4 text-2xl leading-snug">{a.via}<br />{a.cap}</p>
                <div className="mt-6 flex flex-col gap-2">
                  <a href={`tel:+39${a.tel.replace(/\s/g, "")}`} onClick={() => track("cta_click", { source: `atelier_phone_${a.key}` })} className="link-underline text-sm">{a.tel}</a>
                  <a href={a.maps} target="_blank" rel="noreferrer" onClick={() => track("cta_click", { source: `atelier_maps_${a.key}` })} className="eyebrow link-underline" style={{ color: "var(--bordeaux)" }}>Vedi su mappa →</a>
                </div>
              </div>
            </Rise>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
          <div>
            <p className="eyebrow mb-3">Lun — Ven</p>
            <p className="serif text-lg">10:00 — 13:00<br />14:30 — 19:30</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Sabato</p>
            <p className="serif text-lg">10:00 — 13:00<br />16:00 — 19:30</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Domenica</p>
            <p className="serif text-lg" style={{ color: "color-mix(in oklab, var(--inchiostro) 55%, transparent)" }}>Chiuso</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="py-14" style={{ background: "var(--lino)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row gap-6 md:justify-between md:items-center text-sm">
        <div>
          <p className="serif italic text-xl">Antichi Telai <span className="not-italic text-sm tracking-[0.2em]">1894</span></p>
          <p className="mt-2 text-xs" style={{ color: "color-mix(in oklab, var(--inchiostro) 60%, transparent)" }}>
            Di Pietrantonio Sartori · P.IVA 00000000000
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <a href="https://www.instagram.com/antichitelai1894official" target="_blank" rel="noreferrer" onClick={() => track("cta_click", { source: "footer_instagram" })} className="eyebrow link-underline">Instagram</a>
          <a href="#privacy" className="eyebrow link-underline">Privacy</a>
          <a href="#cookie" className="eyebrow link-underline">Cookie</a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Barra mobile fissa ----------
function MobileBar({ onBook, hidden }: { onBook: () => void; hidden: boolean }) {
  if (hidden) return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2" style={{ borderTop: "1px solid var(--border)" }}>
      <a href="tel:+390658209633" onClick={() => track("cta_click", { source: "mobilebar_call" })} className="btn" style={{ background: "var(--carta)", color: "var(--inchiostro)", border: 0, padding: "18px", borderRight: "1px solid var(--border)" }}>
        Chiama
      </a>
      <button onClick={() => { track("cta_click", { source: "mobilebar_prenota" }); onBook(); }} className="btn btn-primary" style={{ border: 0, padding: "18px" }}>
        Prenota
      </button>
    </div>
  );
}

// ---------- Home ----------
function Home() {
  const formRef = useRef<HTMLElement | null>(null);
  const [formVisible, setFormVisible] = useState(false);

  const scrollToBook = () => {
    document.getElementById("prenota")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => setFormVisible(e.isIntersecting)), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--carta)" }}>
      <Header onBook={scrollToBook} />
      <Hero onBook={scrollToBook} />
      <Manifesto />
      <SuMisura onBook={scrollToBook} />
      <Citazione />
      <Famiglia />
      <Galleria />
      <Tessuti />
      <Recensioni />
      <Prenota formRef={formRef} />
      <Atelier />
      <Footer />
      <MobileBar onBook={scrollToBook} hidden={formVisible} />
    </div>
  );
}
