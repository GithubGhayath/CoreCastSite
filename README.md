# CORECAST — Cinematic Marketing Agency

An Awwwards-style cinematic website for **CORECAST**, a premium marketing agency.
The site is built as an interactive short film: a scroll-driven 3D monolith opens the
story, every section is a graded scene, and every interaction — cursor, magnetic
buttons, masked reveals, smooth scroll — is tuned to feel like motion design.

## Stack

- **Next.js 15** (App Router, static prerendering) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — design tokens as CSS variables, dark & light themes
- **Framer Motion** — reveals, page furniture, quote theatre, forms
- **GSAP + ScrollTrigger** — scroll-scrubbed word exposure
- **React Three Fiber + Drei** — the hero monolith (black stone, smoked glass,
  brushed metal; sweeping warm key light, dust, local Lightformer environment)
- **Lenis** — smooth scroll, synced to GSAP's ticker
- **Lucide** — iconography

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerender statically)
```

## Structure

```
app/                  pages: / about services projects projects/[slug]
                      reviews contact booking careers (+ sitemap, robots, 404)
components/
  providers/          theme (dark/light tokens), experience (Lenis + preloader + cursor)
  layout/             header (full-screen menu), footer, page-hero
  home/               hero, trusted-by, about, stats, services, projects, reviews, cta
  three/              monolith scene (R3F)
  ui/                 cinematic-scene, project-poster, reveals, marquee, magnetic,
                      cursor, counter, buttons, fields
  forms/              contact, booking flow (5 steps), careers (CV upload)
lib/
  data.ts             all site content (projects, services, reviews, team, config)
  media.ts            cinematic scene manifest + Seedance 2.0 prompts
```

## Design system

All colors live as CSS variables in `app/globals.css` (`:root` = light,
`[data-theme="dark"]` = dark) and are mapped to Tailwind tokens via `@theme inline`.
Nothing is hardcoded. Sections can force the dark grade (film look) by carrying
`data-theme="dark"` — the hero and reviews sections do this in both themes.
Note: forced-dark sections must set `text-fg` explicitly, since inherited color
resolves at `body` level.

Type system: **Anton** (editorial display), **Instrument Serif italic** (accents),
**Manrope** (body) — loaded through `next/font`.

## Cinematic video (Seedance 2.0 · Higgsfield MCP)

Every scene backdrop is designed for an 8s Seedance 2.0 clip
(std · 1080p · 16:9 · no audio · ultra realistic · cinematic lighting · premium
grading · shallow DOF · smooth camera). Until the clips are rendered, each scene
plays a bespoke procedural stand-in (graded gradients, volumetric sweep,
scene-specific set geometry) — the site is fully self-contained without them.

To upgrade a scene to film:

1. Generate the clip with the prompt in `lib/media.ts` (`scenes[<id>].prompt`)
   using model `seedance_2_0` on Higgsfield (≈72 credits per clip at these settings).
2. Save it to `public/videos/<scene-id>.mp4`.
3. Set `video: "/videos/<scene-id>.mp4"` for that scene in `lib/media.ts`.

Every `CinematicScene` for that id switches to the clip automatically.
The hero keeps its interactive R3F monolith regardless — the clip becomes the
backdrop layer behind it if provided.

Scene ids: `hero`, `brand-identity`, `content-creation`, `reels-video`,
`photography`, `the-people`.
