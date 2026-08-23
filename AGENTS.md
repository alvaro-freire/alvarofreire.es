# AGENTS.md

## Overview

Personal website for Álvaro Freire at `alvarofreire.es`. Positioning: engineer who puts AI systems into production and measures them — Head of Software Engineering at Innogando, creator of Trazea. Fully static site — no backend, no dynamic data fetching. All pages (including blog posts) are rendered at build time. Not a client-acquisition site: there is no services page and no lead-capture CTAs — do not reintroduce them.

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
| Framework    | Next.js 15, App Router                                          |
| Language     | JavaScript — no TypeScript                                      |
| UI           | React 19, Server Components by default                          |
| Blog         | MDX files in `content/posts/`, compiled with `next-mdx-remote/rsc` + `gray-matter` |
| Styling      | Tailwind CSS 3, custom design system in `app/globals.css`       |
| Animations   | CSS only (hero trace draw-in); no animation library             |
| Fonts        | Archivo (display, variable width), Instrument Sans (text), Spline Sans Mono (annotations) via `next/font/google` |
| Linting      | ESLint 9 (flat config) with `next/core-web-vitals`              |
| Build output | Standalone (`next.config.js` -> `output: 'standalone'`)         |
| Path alias   | `@/*` maps to project root (`jsconfig.json`)                    |

Dependencies are intentionally minimal: `next`, `react`, `react-dom`, `next-mdx-remote`, `gray-matter` — nothing else. If token-level syntax highlighting is ever wanted for code blocks, the approved path is `rehype-pretty-code` + `shiki` plugged into `MDXRemote`'s `options.mdxOptions.rehypePlugins`; until then code blocks are styled with CSS only.

## File Structure

```
app/
  layout.js            Root layout: fonts, metadata (title template, OG), JSON-LD Person,
                       skip link, <Navigation />, <main id="main">, <Footer />
  globals.css          Design system: base styles, component classes, prose styles, motion rules
  page.js              Home (/) — hero + trace, In production, Selected work, Writing, Now
  not-found.js         404 page
  about/page.js        /about — bio, experience, how I work, community, education
  work/page.js         /work — case studies (Trazea, CoWtrol), AI at Innogando, infra, side projects
  blog/page.js         /blog — post listing (topics shown while there are no posts)
  blog/[slug]/page.js  Blog post: generateStaticParams + MDXRemote + JSON-LD BlogPosting
  contact/page.js      /contact — email + social channels (no form)
  sitemap.js           Sitemap incl. published posts
  robots.js            robots.txt
  rss.xml/route.js     Static RSS feed built from published posts
  opengraph-image.js   OG image (1200×630) generated with next/og
components/
  Navigation.js        Fixed top nav with mobile hamburger ('use client'; rendered from layout only)
  Footer.js            Site footer: contact email + social text links (Server Component)
  SectionAxis.js       Tick-marked section separator with mono label ("01 / Name")
content/
  posts/               Blog posts (*.mdx) — frontmatter: title, date, description, draft
lib/
  posts.js             getAllPosts / getPostBySlug / formatDate (fs + gray-matter, build-time only)
  profile.js           Single source of truth for the CURRENT role/identity line
                       (consumed by layout metadata, JSON-LD, hero, home "Now", OG image, about)
app/icon.svg           Brand icon (ink square, yellow trace) — the PNG app icons in
                       public/ (android-chrome-*, apple-touch-icon, favicon.ico) are
                       rendered from this file; regenerate them together if it changes
public/
  Static assets: photo, app icons, webmanifest
```

## Blog

- Posts live in `content/posts/*.mdx`. Frontmatter: `title`, `date` (`YYYY-MM-DD`), `description`, optional `draft: true`.
- `draft: true` posts are excluded everywhere (listing, home, sitemap, RSS, static params). `hello-world.mdx` is a permanent draft used to smoke-test the pipeline — leave it as `draft: true`.
- Posts are read with `fs` only at build time (`lib/posts.js`). Never read them at request time — `output: 'standalone'` does not copy `content/` into the runtime bundle. After adding a post, verify with `npm run build && npm run start`.
- Post body styling comes from `.prose-post` in `globals.css` (there is no typography plugin).
- `lib/posts.js` computes `readingMinutes` (words / 220) — shown as instrument meta next to the date on the home list, blog listing and post header.

## Changing the current role

Everything that asserts the current job flows from `lib/profile.js`. When the role changes:

1. **`lib/profile.js`** — update `role`, `company`, `nowMilestone`, `nowBody`, `nowFootnote`. This propagates to: layout metadata description, JSON-LD `jobTitle`/`worksFor`, hero identity line, the "Now" trace milestone, home "04 / Now", the OG image, and the about metadata.
2. **`app/about/page.js`** — close the open-ended experience entry (change `Jul 2022 — Present` to an end date, switch its body to past tense) and add the new role on top. The bio prose is role-independent by design — verify it stays that way.
3. **`app/work/page.js`** — close the CoWtrol period (`2022 — Present`) if applicable. Case studies are already written as historical facts.
4. **Home "01 / In production"** — review tenses: the rows describe shipped systems and remain true as facts, but details like "engineers using it daily" may need a past-tense pass.
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
- **No decorative animation.** The only animation is the hero trace drawing itself once (CSS, gated behind `prefers-reduced-motion: no-preference`). Everything else is hover/focus transitions.

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
          {/* content */}
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
- Pages are Server Components. Only add `'use client'` to leaf components that need browser APIs.

## Linting

ESLint 9 with flat config (`eslint.config.mjs`). Extends `next/core-web-vitals`.

Always run `npm run lint` before considering a change complete. Fix any errors you introduce.

## Design System — "Field telemetry"

The site reads like a measuring instrument: axes with ticks, mono annotations, one data trace. Personality sources: systems that get measured (evals, time series) and the real context (Galicia, GPS collars, ear tags) — as origin of decisions, never literal illustration.

### Colors (`tailwind.config.js`)

| Token        | Value     | Usage                                                  |
|--------------|-----------|--------------------------------------------------------|
| `background` | `#F2F3EF` | Page background — fog, cool grey-green (NOT cream)     |
| `primary`    | `#171B18` | Ink — headings, body emphasis                          |
| `secondary`  | `#5B6159` | Moss — secondary text                                  |
| `accent`     | `#2E4B3C` | Pasture green — links, active nav, structural accents  |
| `signal`     | `#E8B931` | **Ear-tag yellow. Data marks ONLY**: trace, ticks, metric underlines, active-nav underline, selection. Never body text, never large fills, never buttons. |
| `border`     | `#DCDFD6` | Grid — axes, ticks, borders                            |
| `surface`    | `#FFFFFF` | Featured panels (e.g. Trazea card)                     |

No dark mode — one deliberate appearance.

### Typography (`tailwind.config.js` + `next/font` in `layout.js`)

| Family            | CSS var          | Role                                                        |
|-------------------|------------------|-------------------------------------------------------------|
| Archivo (variable, wdth axis) | `--font-display` | Display: headings at `font-stretch: 116%` (expanded), big metric numerals at `68%` (condensed, `.numeral`) |
| Instrument Sans   | `--font-sans`    | Reading text (body default)                                 |
| Spline Sans Mono  | `--font-mono`    | Annotations: axis labels, dates, tags, kickers, blog meta   |

Type scale is fluid (`clamp()`), defined in `tailwind.config.js` `fontSize`: `display`, `h1`, `h2`, `h3`, `numeral`, `body`, `body-sm`, `caption`, `annotation`.

### Component Classes (`app/globals.css`)

| Class                     | Purpose                                                    |
|---------------------------|-------------------------------------------------------------|
| `container-custom`        | Max-width 720px (reading column)                            |
| `container-wide`          | Max-width 1080px (page container)                           |
| `section-spacing`         | Vertical rhythm: `py-16 md:py-24`                           |
| `heading-display/1/2/3`   | Display headings (Archivo, expanded)                        |
| `numeral`                 | Big condensed metric numeral (ear-tag voice)                |
| `mono-label`              | Mono uppercase annotation label                             |
| `section-axis`            | Tick-marked section baseline (used via `<SectionAxis />`)   |
| `tick-strip`              | Standalone tick baseline (hero time axis, footer rule) — pass a border color class |
| `dot-grid`                | Graph-paper dot backdrop with vertical fade (hero trace)    |
| `reg-marks`               | Ink registration marks on opposite corners of a featured panel or portrait |
| `arrow` / `arrow-ext` / `arrow-back` | Wrap a link's arrow glyph (→ / ↗ / ←) for a 2–3px hover nudge |
| `data-mark`               | Signal-yellow tick before a metric/fact                     |
| `link-primary`            | Green underlined link                                       |
| `link-subtle`             | Muted link, primary on hover                                |
| `tag`                     | Mono uppercase bordered tag (tech labels)                   |
| `card`                    | Flat bordered box (transitional, avoid for new work)        |
| `btn-primary/secondary`   | Transitional buttons — the design prefers text links        |
| `skip-link`               | Visually hidden until focused                               |
| `prose-post`              | Blog post body styles (headings, lists, code, tables)       |
| `trace-path` / `trace-dot`| Hero trace draw-in animation classes                        |

### Signature element

The hero **trace**: one SVG path in signal yellow crossing the hero, with annotated milestone dots over a real timeline. The line is a graphic; the annotations are verified facts. Its echo: every section separator is an axis with ticks, every metric is typeset as a data point (condensed numeral + mono unit + yellow tick).

## Accessibility & quality floor

- `:focus-visible` outline is global; skip link in layout; mobile menu has `aria-expanded`, `aria-controls`, Escape-to-close.
- `prefers-reduced-motion: reduce` kills all animation and smooth scroll globally; the trace's default (no-animation) state is fully drawn.
- Fluid type — verify at 375px before shipping layout changes.
- `next/image` for raster images.
- Content rules: only publish verified numbers. No Trazea pilot figures. Tone: facts and numbers over adjectives.

## Common Pitfalls

- **Do not add `'use client'`** to page files.
- **Do not import `<Navigation />` or add `<main>`/`<Footer />` in pages** — layout owns them (double-nav bug otherwise).
- **Do not create new CSS files.** All styles live in `app/globals.css` or as Tailwind utilities.
- **Do not add new dependencies** without explicit approval. The dependency footprint is intentionally minimal.
- **Do not add TypeScript.** The project uses plain JavaScript.
- **Do not use semicolons.** Match the existing code style.
- **Do not use `signal` yellow outside data marks** — if it shows up on buttons or backgrounds, the system is broken.
- **The global `p` rule** sets `text-body text-secondary` — add `text-primary` explicitly where body text should be ink.
- **`/services` is gone** — a permanent redirect to `/` lives in `next.config.js`. Do not recreate the page or client-acquisition CTAs ("Have a project in mind?", "Let's talk", consulting language).
- **Always verify** the build passes (`npm run build`) after structural changes to pages, layouts, or `content/`.
