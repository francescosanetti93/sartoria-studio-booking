# Antichi Telai 1894 — HNW rebuild (standalone codebase)

This is a fresh, standalone React + Vite + Tailwind site, built outside Lovable so it
doesn't consume workspace credits. It carries the new positioning: by-invitation
access to a real Roman tailoring house, not a "book an appointment" lead-gen page.

It is **not connected to the Lovable project** (`antichi-telai-1894` /
`sartoria-studio-booking`). That project still has the old site (local clientele,
"prenota un appuntamento") and is synced to
`github.com/francescosanetti93/sartoria-studio-booking`. Treat this as a separate
codebase until you decide whether/how to merge it in.

## What's real vs. placeholder

- **Copy**: EN and IT are complete, hand-written to the brief (no prices, no
  "Prenota", forbidden-word list respected, "Request an Invitation" CTA throughout).
  中文 / Русский / العربية are **AI-drafted translations**, flagged in the UI itself
  with a small "draft — pending native review" tag near the language switcher.
  Do not send these three languages to real clients before a native speaker reviews
  them — see `src/i18n/content/zh.ts`, `ru.ts`, `ar.ts`.
- **Photos & video**: this sandbox has no network access to `lovable.app`, so it
  could not download the real photos/videos already uploaded to the Lovable project
  (`hero.jpg`, the `DSC_*.jpg` set, `portrait-bn.jpg`, `specchio.jpg`,
  `atelier-sketch.jpg`, `logo.png`, and two real videos —
  `cerimonia_12_compr.mp4`, `collezione07_1.mp4`). Every photo/video slot on this
  site is currently an honest labeled placeholder (linen background + herringbone
  texture + a small caption saying exactly what's missing), same convention as the
  original Lovable prompt used. To swap real files in:
  1. Download the assets from the Lovable project (Lovable editor → project files →
     `src/assets/*.asset.json`, or ask Lovable support/export).
  2. Drop them in `src/assets/`.
  3. In the relevant page (`src/pages/*.tsx`) replace the matching
     `<Placeholder label="..." />` with an `<img src={...} loading="lazy" />` (or a
     `<video autoPlay muted loop playsInline>` for the hero).
- **Contact data** (phone, email, three atelier addresses, Instagram handle) is the
  real data from the current site — verified against the live Lovable project.

## Structure

Five pages, under a locale prefix (`/en`, `/it`, `/zh`, `/ru`, `/ar`, defaulting to
`/en`): Home, The Craft (`/craft`), The Experience (`/experience`, both narratives —
Roman Atelier Experience and The Traveling Master), The Atelier(s) (`/ateliers`),
Private Application (`/apply`). Arabic renders right-to-left automatically
(`dir="rtl"` is set on `<html>`).

All copy lives in `src/i18n/content/{locale}.ts`, typed against
`src/i18n/types.ts` — edit text there, not in the components.

## Before this goes live

- [ ] Swap in real photos/video (see above).
- [ ] Native review of the zh/ru/ar copy; remove the draft banner in
      `src/components/DraftBanner.tsx` once cleared per language (it's gated on the
      `draft` flag in `src/i18n/types.ts` — flip it off per locale there).
- [ ] Replace `FORMSPREE_ENDPOINT` in `src/pages/Apply.tsx` with a real endpoint.
- [ ] Fill in the GA4 / Google Ads IDs commented out in `index.html`.
- [ ] Confirm the P.IVA placeholder in the footer (`src/components/Footer.tsx`)
      with the real one.
- [ ] The five-star hotel mentioned in The Experience → Roman track is a
      placeholder phrase ("a five-star hotel in the centre of Rome") until a real
      partner hotel is confirmed — see `src/i18n/content/en.ts`, key
      `experience.roman.paragraphs[1]`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks then builds to dist/
npm run preview  # serves the production build locally
```

## Deploying

This is a static site after `npm run build` (output in `dist/`) — it deploys as-is
to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host. No server
runtime is required.
