# Antichi Telai — Roman Legacy Atelier (standalone rebuild)

This is a standalone, portable rebuild of the Lovable project **"Roman Legacy
Atelier"** (project `20d53195-3a95-4933-8c91-c22ed0ae78f6`, noir & gold
design). It was rebuilt outside Lovable — plain Vite + React + TypeScript +
Tailwind CSS v4 + react-router-dom — because the Lovable workspace ran out of
credits mid-edit and the codebase needed factual corrections that couldn't
wait. It builds to static files and can be hosted anywhere (Vercel, Netlify,
GitHub Pages, S3, etc.).

## What's real vs. placeholder

**Real (already correct, do not change without checking with the business
owner):**
- Founding year: **1894** (the original Lovable copy said 1911 in one place
  — fixed everywhere, including the header tagline)
- The Di Pietrantonio family name
- The three real ateliers and their addresses:
  - **Monteverde** — Via Roberto Alessandri 53, 00151 Roma (the original
    workshop)
  - **Balduina** — Via Romeo Rodriguez Pereira 120, 00136 Roma (the quiet
    fitting room)
  - **Vigna Clara** — Piazza Carli 10, 00191 Roma (the cutting table)
- Phone: **06 5820 9633** / +39 06 5820 9633
- Email: **info@antichitelai.it**
- Instagram: **@antichitelai1894official**
- Fabric suppliers referenced honestly: Dormeuil, Holland & Sherry, and
  unnamed Italian mills — no fabricated named mills

**Corrected from the original Lovable draft** (which invented specifics that
don't reflect the real business):
- "Nine looms, none younger than ninety-one [years]" → replaced with the
  honest, unverifiable-in-specifics "Frames older than the century. Hands
  that have kept them alive."
- A named "Maestro Ennio..." photo caption → replaced with a plain, accurate
  caption ("The Di Pietrantonio workshop — Monteverde, Rome.")
- Overly specific manufacturing numbers (4,800 ends, years 1911/1935, "400
  times more", named mills in Biella/Kashmir/Como) → softened to statements
  that are true in spirit without inventing figures nobody confirmed
  ("thousands of ends," "more than a century ago," "far more")
- A fabricated "27 clients per season" stat → removed
- "Fifth-century palazzo" (Rome experience) → corrected to "a five-star
  hotel in the centre of Rome"
- The homepage previously teased only Craft + two Experience narratives —
  **a fourth teaser for The Ateliers was added**, since the Ateliers page
  existed but had no link in from the homepage

**Placeholders — need real photos before launch:**
Every image on the site is an honest labeled placeholder (a herringbone
texture with a caption like "Missing photo · CRAFT — WEAVER'S HANDS ON THE
WARP"). This build could not reach the Lovable-hosted images already
generated for this project (no network access to lovable.app from the build
environment), so nothing was faked. To finish:
1. Export/download the real photos from the Lovable project's asset library
2. Drop them into `src/assets/`
3. In each page/component, replace `<Placeholder label="..." className="..." />`
   with an `<img src={...} className="..." />` using the same className
   (aspect ratios are already tuned per slot)

Photo slots needed: hero (loom weaving), craft workshop wide shot, craft
photo caption image, Rome experience suite, traveling master trunk/hotel
suite, ateliers hero, and one photo per atelier (Monteverde entrance,
Balduina interior, Vigna Clara cutting table) — plus each homepage teaser
image.

## Languages

Five locales, each fully translated: `en` (default), `it`, `zh`, `ru`, `ar`
(right-to-left). Routes are locale-prefixed: `/en`, `/en/craft`,
`/ar/ateliers`, etc. `/` redirects to `/en`.

- **English and Italian** are final-quality, human-checkable copy.
- **Chinese, Russian, and Arabic are AI-assisted draft translations.** A
  small "draft — pending native review" banner shows automatically on those
  three locales (bottom-left, or bottom-right in Arabic RTL) so nobody
  mistakes them for finished copy. **Do not send these three to clients
  until a native speaker has reviewed them.** Once reviewed, delete the
  `draft: true` flag for that locale in `src/i18n/types.ts` (`LOCALES`
  array) to remove the banner.

## The Private Application form

`src/pages/Apply.tsx` submits to a Formspree endpoint that is currently a
placeholder:

```
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";
```

Before launch: create a Formspree form (or swap in whatever backend you
prefer) and replace that constant. The form already has:
- Client-side required-field validation
- A honeypot field (`company`) for spam bots
- Sending / success / error states, with the error state showing a direct
  email fallback
- `dataLayer` event tracking on attempt/success/error (see below)

There is intentionally **no e-commerce, no instant booking, no prices
anywhere** on this site — every call to action leads to this qualifying
application form, per the brand's by-invitation-only positioning.

## Analytics

Every CTA click and form submission event pushes to `window.dataLayer` via
`src/lib/track.ts`, e.g. `track("cta_click", { source: "home_hero" })`. Wire
a GA4 / GTM container to `index.html`'s existing `dataLayer` initialization
to start collecting these.

## Structured data

`index.html` includes a `schema.org` `ClothingStore` JSON-LD block with the
real founding date, address, phone, email, and Instagram — update it if any
of these ever change.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Before going live — checklist

- [ ] Replace every `<Placeholder>` with a real photo
- [ ] Get native review on the zh / ru / ar translations, then remove their
      `draft: true` flags
- [ ] Create the real Formspree form and swap in the endpoint
- [ ] Wire GA4/GTM to the existing `dataLayer` calls
- [ ] Point a real domain at the built `dist/` output
- [ ] Re-check every fact on this page against the business owner before
      launch — this rebuild corrected what was flagged as fabricated in the
      original Lovable draft, but a final human check is still worth doing
