# AGENTS.md

## Overview

Personal website for Álvaro Freire at `alvarofreire.es`. Tone: first person, sober, build-in-public — it shows who he is and what he builds (Head of Software at Innogando, co-founder of Trazea, building Aurasia), never a value proposition or a job-seeking pitch. Facts, names, dates and numbers over adjectives; no CV buzzwords. Fully static site — no backend, no dynamic data fetching. All pages (including blog posts) are rendered at build time. Not a client-acquisition site: there is no services page and no lead-capture CTAs — do not reintroduce them.

## Setup & Development Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev

# Production build (outputs standalone bundle)
npm run build

# Serve the production build locally
npm run start

# Run ESLint across the project
npm run lint
```

**Requirements**: Node >= 22 (pinned in `package.json` engines).

## Tech Stack

| Layer        | Choice                                                           |
|--------------|------------------------------------------------------------------|
| Framework    | Next.js 16, App Router, Turbopack (`next build` default)        |
| Language     | JavaScript — no TypeScript                                      |
| UI           | React 19.3, Server Components by default                        |
| Blog         | MDX files in `content/posts/`, compiled with `next-mdx-remote/rsc` + `gray-matter` |
| Styling      | Tailwind CSS 4 (CSS-first `@theme` in `app/globals.css`, `@tailwindcss/postcss`) |
| Animations   | CSS + one IntersectionObserver component (`MotionObserver`); React `<ViewTransition>` for page changes. No animation library. |
| Illustration | Hand-authored SVG scenes in `components/scenes/` (JSX), art layer rendered to static SVG files at build time by a route handler. No raster art, no image generation. |
| Fonts        | Archivo (display, variable width) self-hosted subset via `next/font/local` (`app/fonts/`); Instrument Sans (text, 400) and Spline Sans Mono (annotations, 400/500) via `next/font/google` |
| Theming      | Light/dark via CSS variables — system preference by default, manual override persisted in `localStorage` |
| Linting      | ESLint 9 (flat config) with `eslint-config-next/core-web-vitals` |
| Build output | Standalone (`next.config.js` -> `output: 'standalone'`)         |
| Path alias   | `@/*` maps to project root (`jsconfig.json`)                    |

Dependencies are intentionally minimal: `next`, `react`, `react-dom`, `next-mdx-remote`, `gray-matter`, plus `tailwindcss`, `@tailwindcss/postcss`, `eslint`, `eslint-config-next` as dev dependencies — nothing else. If token-level syntax highlighting is ever wanted for code blocks, the approved path is `rehype-pretty-code` + `shiki` plugged into `MDXRemote`'s `options.mdxOptions.rehypePlugins`; until then code blocks are styled with CSS only.

Known debt: `next-mdx-remote` is archived upstream (April 2026). It builds fine under Turbopack today; if it ever breaks, the drop-in replacement is `next-mdx-remote-client`.

## File Structure

```
app/
  layout.js            Root layout: fonts, metadata (title template, OG), JSON-LD Person,
                       init script (theme + html.js), skip link, <Navigation />,
                       <main id="main"> wrapped in <ViewTransition>, <Footer />, <MotionObserver />
  globals.css          Design system: tokens (@theme), base, utilities, components, motion rules
  page.js              Home (/) — pasture hero + trace, Built and running, Selected work, [Writing], Now
  not-found.js         404 page
  about/page.js        /about — bio, experience, how I work, community, education
  work/page.js         /work — day triptych, case studies with plates (Aurasia, Trazea, CoWtrol), AI at Innogando, infra, side projects
  blog/page.js         /blog — post listing (minimal placeholder while there are no posts)
  blog/[slug]/page.js  Blog post: generateStaticParams + MDXRemote + JSON-LD BlogPosting
  contact/page.js      /contact — channels from lib/profile.js (no form)
  sitemap.js           Sitemap incl. published posts
  robots.js            robots.txt
  rss.xml/route.js     Static RSS feed built from published posts
  opengraph-image.js   OG image (1200×630) generated with next/og: the dawn pasture + headline from lib/profile.js
  scenes/[file]/route.js  Static art files /scenes/<name>-day.svg and -night.svg (force-static, one per scene and hour)
components/
  Navigation.js        Fixed top nav with mobile hamburger + <ThemeToggle /> ('use client'; receives `links`)
  Footer.js            Site footer: contact email + social text links (Server Component; receives `links`)
  SectionAxis.js       Tick-marked section separator with mono label ("01 / Name"); draws in on reveal
  ThemeToggle.js       Light/dark toggle ('use client') — icon swap is pure CSS, no render state
  Trace.js             Hero GPS track over the pasture — the signature element (see below); exports the timing helpers
  MotionObserver.js    The only motion JS: marks [data-reveal] elements revealed, counts [data-count] up
  Readout.js           Theme-invariant dark instrument panel — agent transcripts (kind="chat") or records (kind="fields")
  Schematic.js         SVG integration diagram (inputs → hub → outputs) for systems without a screenshot
  scenes/              Illustrated plates (see "Scenes" below):
    Scene.js           Two-layer scene: static art <picture> per hour + inline live layer
    Plate.js           Frames a scene: crop, reg marks, "Illustration · place · hour" caption
    Pasture.js         Lugo pasture (home hero, /work triptych, 404); geometry in pastureData.js
    Kitchen.js, Clinic.js, Workshop.js   Trazea, Aurasia and CoWtrol plates on /work
    Ria.js             The ría from Ares (about, contact, blog strip, post rule)
    palette.js         Art inks per scene, [day, night], and the role-class map
    markup.js          Minimal JSX → SVG markup serializer (art files + inline live layer)
    scatter.js         Seeded scatter for stars, grass, ripples (stable markup)
content/
  posts/               Blog posts (*.mdx) — frontmatter: title, date, description, draft
lib/
  posts.js             getAllPosts / getPostBySlug / formatDate (fs + gray-matter, build-time only)
  profile.js           Single source of truth for role, ventures, location, age, contact channels,
                       hero headline (`headlineLines`) and the "Now" copy (consumed by layout, JSON-LD, hero, OG, about, contact, footer)
  evidence.js          Verbatim content shown in Readouts — copied from the public product sites, never invented
app/fonts/             Self-hosted Archivo subset (woff2) + OFL license + regeneration notes
app/icon.svg           Brand icon (ink square, yellow trace) — the PNG app icons in
                       public/ (android-chrome-*, apple-touch-icon, favicon.ico) are
                       rendered from this file; regenerate them together if it changes
public/
  Static assets: photo, app icons, webmanifest
audit-antes/, audit-despues/   Screenshot + Lighthouse audits (git-ignored, regenerate with Playwright)
```

## Blog

- Posts live in `content/posts/*.mdx`. Frontmatter: `title`, `date` (`YYYY-MM-DD`), `description`, optional `draft: true`.
- `draft: true` posts are excluded everywhere (listing, home, sitemap, RSS, static params). `hello-world.mdx` is a permanent draft used to smoke-test the pipeline — leave it as `draft: true`.
- **While there are no published posts, the blog is hidden from the navigation and the footer, and the home "Writing" section is not rendered.** This is automatic: `app/layout.js` computes `hasPosts` from `getAllPosts()` and filters the nav links; `app/page.js` renders the section only when `posts.length > 0`. `/blog`, `/rss.xml` and the sitemap entry stay live. Publishing the first post brings everything back without code changes.
- Posts are read with `fs` only at build time (`lib/posts.js`). Never read them at request time — `output: 'standalone'` does not copy `content/` into the runtime bundle. After adding a post, verify with `npm run build && npm run start`.
- `formatDate` formats in UTC on purpose: frontmatter dates are calendar days parsed as UTC midnight, and a build server west of Greenwich would otherwise print the previous day.
- Post body styling comes from `.prose-post` in `globals.css` (there is no typography plugin).
- `lib/posts.js` computes `readingMinutes` (words / 220) — shown as instrument meta next to the date on the home list, blog listing and post header.

## Changing the current role, ventures or channels

Everything that asserts the current job, ventures, location and contact channels flows from `lib/profile.js`:

| Field | Consumed by |
|---|---|
| `headlineLines` | Home hero `<h1>`, one line per entry from `md` up (break where the thought breaks); OG image. `profile.headline` is the joined string |
| `role`, `roleSince`, `company` | Hero identity line, `identityLine` (metadata, OG, about metadata), JSON-LD `jobTitle`/`worksFor`, about experience (first entry) |
| `ventures[]` (`name`, `url`, `role`, `verb`, `since`, `status`, `summary`) | Hero identity line (`verb name`), home Selected work, about experience, /work case-study metas. `role: null` means no title is claimed — the `verb` is used ("Building Aurasia"). `profile.venture` is a compatibility alias for Trazea. |
| `location` (`town`, `region`, `coords`, `tz`) | Hero kicker, footer, contact, about, JSON-LD address |
| `age` | About bio |
| `channels[]` (`public` flag) | `/contact` and footer show `public: true` only; JSON-LD `sameAs` lists every http channel (Instagram is `public: false` on purpose: entity identity for machines, not a human contact channel) |
| `nowMilestone`, `nowBody`, `nowFootnote` | Trace "Now" annotation, home "Now" section |

When the role changes:

1. **`lib/profile.js`** — update `role`, `roleSince`, `company`, `ventures`, `nowMilestone`, `nowBody`.
2. **`app/about/page.js`** — the experience list is built from `profile` for the current role and ventures; close the previous role entry with an end date and past tense, add the new one on top. The bio prose is role-independent by design — verify it stays that way.
3. **`app/page.js`** — the `milestones` array (year, fact, x/y on the GPS track over the pasture) is hand-placed: x = (year − 2022) × 160, y sits on the path in `components/Trace.js`. Add or move dots deliberately; the last entry is "Now".
4. **`app/work/page.js`** — close the CoWtrol period (`2022 — Present`) if applicable. Case studies are already written as historical facts; the Aurasia entry is a *status* (in testing), not a result.
5. Rebuild and regenerate: `npm run build` (the OG image is rebuilt automatically).

## Coding Conventions

- **No TypeScript.** Plain JavaScript only.
- **No semicolons.** Matches existing codebase style.
- **`@/` path alias** for all imports from project root.
- **PascalCase** for component filenames and exports.
- **`next/link`** for internal navigation; bare `<a>` only for external links.
- **External links** always include `target="_blank" rel="noopener noreferrer"`.
- **`react/no-unescaped-entities`** is disabled — apostrophes and quotes are used directly in JSX.
- **All custom styles** go in `app/globals.css` — never create additional CSS files.
- **Motion** follows the policy below. No new animation without a reason that fits "power on and settle".

## Page Conventions

`<Navigation />`, the skip link, `<main id="main" className="... pt-16">` and `<Footer />` all live in `app/layout.js`. Pages return **sections only**:

```jsx
import SectionAxis from '@/components/SectionAxis'

export const metadata = {
  title: 'Page Name', // layout template appends "— Álvaro Freire"
  description: '...',
}

export default function PageName() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="mono-label mb-6">Kicker annotation</p>
          <h1 className="heading-1">Page Name</h1>
        </div>
      </section>
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="01" label="Section name" />
          {/* rows: <article data-reveal style={{ '--i': i }}> … */}
        </div>
      </section>
    </>
  )
}
```

Key rules:

- **Never import `<Navigation />` or render `<main>`/`<Footer />` in a page** — they come from the layout.
- Sections are separated by `<SectionAxis n="NN" label="Name" />` (tick-marked axis), not bare rules.
- Page `metadata.title` is the short name only; the layout's `title.template` adds the suffix.
- Pages are Server Components. Only add `'use client'` to leaf components that need browser APIs. Scenes are Server Components too: their art never reaches the HTML (static files) and their small live layer is inlined as one markup string via `markup()`.
- Never put `data-reveal` on anything in the hero or above the fold on a typical viewport — the LCP element must never start hidden.

## Linting

ESLint 9 with flat config (`eslint.config.mjs`), using the flat preset exported by `eslint-config-next/core-web-vitals` directly (no `@eslint/eslintrc`).

**ESLint stays on 9.x on purpose.** `eslint-config-next` parses JavaScript with the `@babel/eslint-parser` bundled inside Next, and depends on `eslint-plugin-react` 7.37.x (the latest release); neither implements the ESLint 10 API (`scopeManager.addGlobals`, `context.getFilename` removal). Revisit when `eslint-plugin-react` publishes ESLint 10 support.

Always run `npm run lint` before considering a change complete. Fix any errors you introduce. `react-hooks/set-state-in-effect` is active: never call a state setter synchronously inside an effect — handle the event where it happens instead (e.g. close the mobile menu from the link's `onClick`).

## Design System — "Field telemetry"

The site reads like a measuring instrument set down in the places the software runs: axes with ticks, mono annotations, one data trace — and, since the scenes redesign, an illustrated plate per page (a pasture in Lugo, a kitchen, a clinic after hours, the ría from Ares). Light theme is the daytime hour of each place, dark theme is its night. Personality sources: systems that get measured (evals, time series) and the real context (Galicia, GPS collars, ear tags). The plates are illustration, never evidence (see Scenes).

### Colors (`app/globals.css`)

Tailwind v4 is configured in CSS. Each color exists as a per-theme RGB triplet (`--color-*-rgb`, defined on `:root` and redefined for dark) and is mapped to a Tailwind color inside `@theme inline` as `rgb(var(--color-*-rgb))`. Because the mapping is `inline`, utilities resolve the triplet at the element, so opacity modifiers keep working (`text-accent/30`, `bg-background/85`, `bg-primary/6`) via `color-mix()` and the values swap per theme. Inside plain CSS use `var(--color-border)`; for alpha use `--alpha(var(--color-primary) / 45%)`. The default Tailwind palette is disabled (`--color-*: initial`).

| Token        | Light     | Dark      | Usage                                                  |
|--------------|-----------|-----------|----------------------------------------------------------|
| `background` | `#F2F3EF` | `#10130F` | Page background — fog (light) / near-black ink (dark)  |
| `primary`    | `#171B18` | `#EDEEE8` | Headings, body emphasis, trace dots (`currentColor`)   |
| `secondary`  | `#5B6159` | `#969D91` | Secondary text                                          |
| `accent`     | `#2E4B3C` | `#82BD9A` | Links, active nav, structural accents (brighter in dark for contrast) |
| `signal`     | `#E8B931` | `#E8B931` | **Ear-tag yellow, constant across themes. Data marks ONLY**: trace, ticks, metric underlines, active-nav underline, selection, the "now" dot, agent lines in readouts, schematic lines — and, inside scenes, only the lights that are data: collar fixes, the GPS track, the OCR read, the Ares fix. Never the sun, sky, windows or lamps (those use the scene's `lamp` ink). Never body text, never large fills, never buttons. |
| `border`     | `#DCDFD6` | `#2A2F27` | Grid — axes, ticks, borders                            |
| `surface`    | `#FFFFFF` | `#1A1E16` | Featured panels (Selected work cards, schematic boxes) |
| `code-bg` / `code-text` | fixed | fixed | Code blocks and Readout panels — always a dark readout, in both themes |

### Dark mode

System preference by default (`@media (prefers-color-scheme: dark)`, gated `:not([data-theme="light"])`), manual override via the nav's `<ThemeToggle />` sets `html[data-theme="light"|"dark"]` and wins in both directions — the same token redefinitions live under `:root[data-theme="dark"]`. `color-scheme` follows the theme so native controls and scrollbars match. **Never add a raw hex color to a page or component** — add/adjust a `--color-*-rgb` token instead, or the color won't flip with the theme.

- **No flash**: the inline `beforeInteractive` script (`app/layout.js`) applies a stored override before first paint and adds the `js` class to `<html>`. The system-default case needs no JS — the CSS media query resolves before any script runs.
- **`ThemeToggle` has no render state.** Both icons always render; `.when-light`/`.when-dark` (generic, also used by scene captions and the clinic's clock hands) show/hide via the same `[data-theme]`/media-query cascade as the color tokens. The click handler flips the attribute, writes `localStorage`, and adds `html.theme-switching` for 260ms so tokens crossfade instead of snapping. Don't add `useState`/`useEffect` to it — that's how you get hydration mismatches.
- **`.prose-post pre` and `.readout-panel` are deliberately theme-invariant** — fixed `code-bg`/`code-text` tokens, always a dark readout like a terminal. Don't switch them to `bg-primary`/`text-background`.
- `viewport.themeColor` in `layout.js` is a two-entry array (light/dark media queries) for the browser chrome color — it follows system preference only, not the manual override (acceptable scope: the manual toggle is the rare path).
- `app/opengraph-image.js` and `app/icon.svg` render with fixed light-theme hex values on purpose — they're generated once at build time with no access to a viewer's theme. Same for the scene art files: their inks live as values in `components/scenes/palette.js`, one file per hour.

### Typography (`@theme inline` in `globals.css` + `next/font` in `layout.js`)

Archivo is **self-hosted** (`app/fonts/archivo-wdth-700-800.woff2`, OFL): a variable subset restricted to weights 700–800 with the full width axis, 60 kB instead of Google's 90 kB full-range file. The hero `<h1>` (or, on phones, the pasture art beside it) is the LCP element and repaints when Archivo arrives, so this file's size is the single biggest performance lever on mobile — never load Archivo from Google Fonts again or widen the range without re-measuring Lighthouse. Instrument Sans (400 only) and Spline Sans Mono (400, 500) come from `next/font/google` with explicit weights for the same reason. Regeneration steps in `app/fonts/README.md`.

| Family            | next/font var      | Tailwind family | Role                                                        |
|-------------------|--------------------|-----------------|-------------------------------------------------------------|
| Archivo (variable, wdth axis, self-hosted 700–800) | `--font-archivo` | `font-display` | Display: headings at `font-stretch: 116%` (expanded), big metric numerals at `68%` (condensed, `.numeral`) |
| Instrument Sans   | `--font-instrument` | `font-sans`    | Reading text (body default)                                 |
| Spline Sans Mono  | `--font-spline`    | `font-mono`     | Annotations: axis labels, dates, tags, kickers, blog meta, readouts |

The `next/font` variables are named differently from Tailwind's `--font-*` theme variables on purpose — v4 generates `--font-display`/`--font-sans`/`--font-mono` itself and the names would collide.

Type scale is fluid (`clamp()`), defined as `--text-*` theme variables with `--text-*--line-height/letter-spacing/font-weight`: `display`, `h1`, `h2`, `h3`, `numeral`, `body`, `body-sm`, `caption`, `annotation`. `display` is poster scale — `clamp(2.5rem, 1rem + 5.4vw, 5.75rem)`, line-height 0.98 — and is only used by the home headline, set over the scene's sky in three lines (`profile.headlineLines`); phones let it wrap freely with `text-balance`.

### Utilities and component classes (`app/globals.css`)

Type and layout roles are `@utility` (so they take variants and can be `@apply`'d); everything with pseudo-elements or nested selectors is a class in `@layer components`. `@apply` only accepts utilities — never `@apply` a component class.

| Class                     | Kind | Purpose                                                    |
|---------------------------|------|-------------------------------------------------------------|
| `container-custom`        | utility | Max-width 720px (reading column)                            |
| `container-wide`          | utility | Max-width 1080px (page container)                           |
| `section-spacing`         | utility | Vertical rhythm: `py-16 md:py-24`                           |
| `heading-display/1/2/3`   | utility | Display headings (Archivo, expanded)                        |
| `numeral`                 | utility | Big condensed metric numeral (ear-tag voice)                |
| `mono-label`              | utility | Mono uppercase annotation label                             |
| `link-primary` / `link-subtle` | utility | Green underlined link / muted link                    |
| `channel-link`            | utility | Contact channel set large in the display face             |
| `section-axis`            | component | Tick-marked section baseline (used via `<SectionAxis />`)   |
| `tick-strip`              | component | Standalone tick baseline (hero time axis, footer rule) — pass a border color class |
| `reg-marks`               | component | Ink registration marks on opposite corners of a featured panel or portrait; grow 2px on hover |
| `arrow` / `arrow-ext` / `arrow-back` | component | Wrap a link's arrow glyph (→ / ↗ / ←) for a 2–3px hover nudge |
| `theme-toggle`            | component | Wraps `<ThemeToggle />`'s icon pair; hover rotates the visible icon |
| `data-mark`               | component | Signal-yellow tick before a metric/fact                     |
| `tag`                     | component | Mono uppercase bordered tag (tech labels)                   |
| `readout-*`               | component | `<Readout />` panel, lines, fields, footer                  |
| `schematic-*`             | component | `<Schematic />` boxes, labels, lines                        |
| `mobile-menu`, `mobile-menu-link` | component | Mobile panel entrance (`@starting-style`)           |
| `card`, `btn-primary/secondary` | component | Transitional — avoid for new work                     |
| `skip-link`               | component | Visually hidden until focused                               |
| `prose-post`              | component | Blog post body styles (headings, lists, code, tables)       |
| `trace-path` / `trace-dot` / `trace-annotation` | component | Hero trace draw-in animation classes (also the collar fixes) |
| `when-light` / `when-dark` | component | Show only in that theme (toggle icons, scene captions, clock hands) |
| `scene`, `scene-<name>`, `scene-sky` | component | Scene wrapper, its live-layer tokens, the sky gradient that starts at `background` |
| `plate`                   | component | Hairline frame of a scene (with `reg-marks`)              |
| `art-auto` / `art-forced` / `art-day` / `art-night` | component | Art layer: `<picture>` by system preference; forced (lazy) image under an explicit `data-theme` |
| `sc-*`                    | component | Scene role classes; art roles resolve in the art files, live roles (`sc-signal`, `sc-halo`, `sc-read`, `sc-screen`, `sc-hand`, `sc-fix-ring`…) in `globals.css` |

### Signature element

The hero **trace** (`components/Trace.js`): a GPS track in signal yellow laid over the pasture, crossing the field with annotated milestone waypoints over a real timeline — the collars acquire signal first (left to right), then the track draws and stops at "Now". The line is a graphic; the waypoints are verified facts, and the `<dl>` on the axis under the plate is their accessible version. It lives in its own SVG layer aligned to `container-wide`, so every waypoint stays visible however the landscape behind it is cropped. The SVG stretches vertically (`preserveAspectRatio="none"`) so it stays readable on phones; strokes and dots use `vector-effect="non-scaling-stroke"` (dots are zero-length round-capped paths) so nothing distorts. Waypoints use the scene's `waypoint` ink (light on the dark ground in both themes). The last dot ("Now") is signal yellow with a ring — the one data mark that is *now*. Its echo: every section separator is an axis with ticks, every metric is typeset as a data point (condensed numeral + mono unit + yellow tick).

### Scenes — illustrated plates

One plate per page, drawn by hand in SVG (no raster art, no image generation), layered like a print: atmospheric planes, brétema bands, stipple via `<pattern>`, silhouettes, never faces. Each place is shown at the hour it is used; the theme picks the hour.

| Scene | Day (light theme) | Night (dark theme) | Data marks | Used on |
|---|---|---|---|---|
| `Pasture` — Lugo, Serra do Xistral, Rubia Galega cows | dawn, brétema | night, turbine beacons, stars | collar fixes + GPS track | home hero, `/work` triptych, 404, OG |
| `Kitchen` — Trazea | midday prep | after service, hood light only | OCR brackets on the lot line | `/work` |
| `Clinic` — Aurasia, window onto Ferrol | 21:30 (from the site copy) | 23:47 (the demo's time) | — (phone light is a lamp, no UI) | `/work` |
| `Workshop` — CoWtrol, Abadín bench | morning | late shift, bench lamp | collar LEDs | `/work` |
| `Ria` — Ares | blue hour | night, harbour lit | the Ares fix | about, contact, blog strip, post rule |

How they are built (`components/scenes/`):

- **Two layers.** The *art* (everything that doesn't move) is rendered at build time to `/scenes/<name>-day.svg` and `-night.svg` by `app/scenes/[file]/route.js`, inked from `palette.js`, and shown through a `<picture>` that picks the hour from the system preference — one download, no JS. An explicit theme override swaps in a lazy `.art-forced` image (fetched only then). The *live* layer — the data marks, the phone, the clock hands — is inlined over it with the same viewBox and alignment, tokened in `globals.css` (`light-dark()`), and animated by page CSS.
- **Why not inline everything:** a Server Component's tree is serialized a second time into the RSC payload (as JSON, ~4× the SVG), and the root `not-found.js` tree rides in *every* page's payload. Inline scenes pushed the home document from 11 kB to 29 kB gzip — past the first TCP window, +150 ms FCP/LCP in Lighthouse. As static art the home is 13.6 kB and the art is cached across pages.
- **Authoring:** scenes are JSX. Export `Art` (static, no props) and a default component that renders `<Scene name align>` with the live layer as children. New inks go in `palette.js` as `[day, night]`; new role classes too (`ROLES`). Keep subjects inside x ≈ 544–1056 of the 1600×640 canvas — that's what a 4:5 crop shows.
- **Plates are illustration, not evidence.** Every plate carries a mono caption starting with "Illustration"; no plate shows a product UI, a readable conversation, a real logo or brand (no RUMI, no Innogando marks) or a face. Times drawn in a scene come from the site's own copy. The evidence stays in `Readout` / `Schematic`.
- The art crossfades are not animated: the hour swaps instantly on toggle (the live layer and the page do crossfade).

### Evidence — showing the work without a gallery

- **`<Readout />`**: a dark instrument panel with real text. `kind="chat"` for an agent exchange (`who: user | agent | system`, agent lines get the signal tick), `kind="fields"` for a record (`key/value`, `status: 'ok'` adds the tick). Always pass `label` and `source`; a demo must say `demo` in `source`. Content lives in `lib/evidence.js` and is copied **verbatim** from the public product sites (aurasia.es, trazea.es). Never write a transcript or a record value that does not exist publicly.
- **`<Schematic />`**: inputs → hub → outputs in SVG, for internal systems with nothing publishable (CoWtrol). Lines draw in on reveal.
- No product screenshots are shipped: the public landings only have HTML mockups, and a screenshot of a mockup is not evidence. If real, publishable app captures ever exist, add them as a hairline-framed `next/image` figure with a reserved `aspect-ratio`, WebP ≤ 150 kB, mono callouts as HTML — never text baked into the image.

## Motion — "power on and settle"

An instrument doesn't fade in decoratively: it powers on, acquires signal and settles. Every animation on the site reads as acquisition, not decoration. Budget per view: the hero acquisition (collars, then the trace), one reveal per section (rows staggered), one story per plate, numerals counting once. Nothing infinite, nothing scroll-linked, nothing that follows the cursor.

| Motion | Where | Duration / easing |
|---|---|---|
| Collar fixes acquire left → right (`.trace-dot` on the live layer) | Home hero, `/work` triptych | 400ms each at `0.1 + 0.75·f` s (`collarDelay`) |
| Trace draw-in + waypoints + annotations (`.trace-annotation`) appear as the line reaches each dot | Hero | 1.4s from 0.9s, `cubic-bezier(.4,0,.2,1)`; waypoints/annotations 400ms at `0.9 + 1.4·x/800` s (`markDelay`) |
| Plate stories, once on reveal: OCR brackets close (`stroke-dashoffset`), the clinic phone and its light come on (opacity), the bench collars acquire one by one | `/work` plates | 640ms / 520ms / 260ms staggered |
| Reveal: opacity 0.001 → 1, `translateY(8px)` → 0, staggered by `--i` (50ms, capped at 6) | Any `[data-reveal]` element below the fold | 320ms, `cubic-bezier(.2,.7,.2,1)` |
| Section axis tick line draws left → right (`clip-path`) | `<SectionAxis />` | 520ms |
| Numerals count up to the SSR value (`[data-count]`) | Home "Built and running" | 600ms, ease-out, `tabular-nums` |
| Readout lines / fields settle one by one; schematic lines draw (`stroke-dashoffset`) | Inside a revealed figure | 260ms / 640ms, staggered |
| Page transition: content crossfades and settles 4px, root (header, background) does not animate | `<ViewTransition default="vt-page">` in layout | 140ms out / 220ms in |
| Theme switch crossfade (`html.theme-switching`) | Toggle click only | 200ms |
| Micro: link underline offset, tag border, reg-marks growth, arrow nudges, icon rotate | Hover | 200ms |
| Mobile menu panel + links (`@starting-style`) | Menu open | 200–240ms |

Hard rules:

- **Gating**: every hidden initial state lives under `html.js` **and** `@media (prefers-reduced-motion: no-preference)`. Without JS, with reduced motion, and for crawlers, everything is visible on first render. `MotionObserver` only ever *adds* attributes.
- **Above the fold nothing is hidden**: `MotionObserver` marks elements already on screen at scan time `data-revealed="instant"` (no transition). Never put `data-reveal` on the hero or the `<h1>` — the LCP element must never start at `opacity: 0`.
- **Only `transform`, `opacity`, `clip-path`, `stroke-dashoffset` and colors are animated.** No `will-change`, no `filter`, no animated `backdrop-filter`, no `transition: all`, no layout properties.
- **Reduced motion** kills all animation and smooth scroll globally (durations to 0.01ms, view transitions to `none`), and the trace's default state is fully drawn.
- **Next 16 note**: `data-scroll-behavior="smooth"` on `<html>` keeps client navigations jumping to top instead of smooth-scrolling through the whole page.
- Adding a reveal: put `data-reveal` on the row/card and `style={{ '--i': i }}` for stagger (use `i % 3` on long lists so late rows don't wait). Nothing else is needed.
- Rejected on purpose (they age badly or break sobriety): marquees, custom cursors, magnetic buttons, spotlight cards, character-split text, parallax, blur transitions, scroll-linked `animation-timeline` as the primary mechanism.

## Accessibility & quality floor

- `:focus-visible` outline is global; skip link in layout; mobile menu has `aria-expanded`, `aria-controls`, Escape-to-close, tap-outside-to-close, full-height panel; nav links carry `aria-current="page"`.
- Interactive header controls are 44×44px hit areas (glyphs stay 18–20px).
- The mobile menu panel is `absolute` inside the fixed header on purpose: the header's `backdrop-filter` makes it the containing block for `fixed` descendants, so `fixed; bottom: 0` would collapse to the header height.
- `prefers-reduced-motion: reduce` kills all animation and smooth scroll globally; the trace's default (no-animation) state is fully drawn.
- Fluid type — verify at 375px before shipping layout changes.
- `next/image` for raster images. Scene art uses plain `<picture>`/`<img>` (static SVG, art-directed by color scheme) with empty `alt`; the whole scene is `aria-hidden`.
- Content rules: only publish verified numbers. No Trazea pilot figures. Aurasia is framed as a product being tested with dental clinics ("being tested with dental clinics"), never as a success story; its tags are limited to what its public site states. Readout content is verbatim from public sources (see Evidence). Tone: facts and numbers over adjectives.
- Location is Ares (`43.43° N · 8.24° W`), not A Coruña city.

## Verification checklist

Run before shipping anything visual (Playwright with the preinstalled Chromium is enough):

1. `npm run build` and `npm run lint` clean.
2. Screenshots of `/`, `/work`, `/about`, `/contact`, `/blog` and the 404 at 1440 and 375, in light and dark — both by system preference and by the toggle (explicit `data-theme`, which uses the forced art) — plus reduced motion and no-JS, mobile menu open — after scrolling through each page so reveals fire. Check the scene crops at 768 and 1920 too. Compare with `audit-antes/` / `audit-despues/`.
3. Lighthouse (mobile + desktop) on `/` from `npm start`: Performance ≥ 96 / 100, Accessibility 100, Best Practices 100, SEO 100. `next start` does not compress route-handler or `public/` responses (Vercel does), so for before/after comparisons put the same gzip proxy in front of both builds. Home HTML budget: ≤ 14 kB gzip (the first TCP window); check with `curl -s localhost:3000/ | gzip -c | wc -c`.
4. No horizontal scroll at 375px; mobile menu opens, closes on Escape and on tapping the panel.
5. `/sitemap.xml`, `/robots.txt`, `/rss.xml`, `/opengraph-image` → 200; `/services` → 308.
6. Reduced-motion and no-JS contexts: every `[data-reveal]` element computes `opacity: 1` without scrolling.
7. Mobile Lighthouse varies ±2 between runs on the same build — run it three times and compare medians, never a single pass.

Rejected performance ideas, so nobody retries them: `experimental.inlineCss` (inlines the unminified stylesheet into the HTML *and* the RSC payload: 12 kB → 210 kB documents); `font-display: optional` for Archivo (first-visit headings in Arial on slow networks is a worse trade than ~300 ms of LCP).

## Common Pitfalls

- **Do not add `'use client'`** to page files.
- **Do not inline a full scene in the root `not-found.js`** (or in any shared layout): it is serialized into every page's RSC payload. Use `<Scene>` (static art) there.
- **Scene art doesn't see page CSS.** It's a separate SVG document: change its inks in `palette.js`, not in `globals.css`; anything that must animate or follow the toggle live goes in the live layer.
- **Do not import `<Navigation />` or add `<main>`/`<Footer />` in pages** — layout owns them (double-nav bug otherwise).
- **Do not create new CSS files.** All styles live in `app/globals.css` or as Tailwind utilities.
- **Do not add new dependencies** without explicit approval. The dependency footprint is intentionally minimal.
- **Do not add TypeScript.** The project uses plain JavaScript.
- **Do not use semicolons.** Match the existing code style.
- **Do not use `signal` yellow outside data marks** — if it shows up on buttons or backgrounds, the system is broken.
- **Do not hardcode a hex color** in a page/component for anything meant to adapt to the theme — add a `--color-*-rgb` token in `globals.css` instead.
- **Tailwind v4 syntax**: important is a suffix (`text-primary!`, not `!text-primary`); `@apply` only takes utilities (type roles are `@utility` for this reason); `hover:` only applies on devices that hover; the default border color is `currentColor`, so `.tick-strip` callers pass a border color.
- **Tailwind sources are explicit** (`@source "../app"`, `@source "../components"`) so `.agents/` skill data and audits are never scanned for class names. Add a new source directory there if components move.
- **The global `p` rule** sets `text-body text-secondary` — add `text-primary` explicitly where body text should be ink.
- **`/services` is gone** — a permanent redirect to `/` lives in `next.config.js`. Do not recreate the page or client-acquisition CTAs ("Have a project in mind?", "Let's talk", consulting language).
- **Full-page screenshots look empty below the fold** unless you scroll first — reveals are IntersectionObserver-driven. This is expected; the audit script scrolls through before capturing.
- **Always verify** the build passes (`npm run build`) after structural changes to pages, layouts, or `content/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
