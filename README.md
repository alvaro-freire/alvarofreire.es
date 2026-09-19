# alvarofreire.es

Personal website. Built with Next.js 16 and Tailwind CSS 4, blog in MDX.

**Live at [alvarofreire.es](https://alvarofreire.es)**

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack), React 19.3
- **Language**: JavaScript
- **Styling**: Tailwind CSS 4 (CSS-first theme in `app/globals.css`) with a custom design system ("Field telemetry")
- **Motion**: CSS + one small IntersectionObserver component; React `<ViewTransition>` for page changes. No animation library.
- **Blog**: MDX files in `content/posts/`, compiled with `next-mdx-remote/rsc` + `gray-matter`
- **Fonts**: Archivo (display, self-hosted variable subset in `app/fonts/`), Instrument Sans (text), Spline Sans Mono (annotations) via `next/font/google`
- **Theme**: Light/dark, system preference by default, manual toggle persisted in `localStorage`
- **Build**: Standalone output, fully static (blog included)
- **Node**: 22.x or higher

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Writing a post

Add a `.mdx` file to `content/posts/` with frontmatter:

```yaml
---
title: 'Post title'
date: '2026-09-01'
description: 'One-line description.'
---
```

Add `draft: true` to keep it out of the listing, home, sitemap and RSS.
Then `npm run build` — posts are compiled statically. The Blog link in the
navigation and the "Writing" section on the home page appear automatically
with the first published post.

## Project Structure

```
app/
  layout.js            Root layout (fonts, metadata, nav, footer, JSON-LD, view transitions)
  globals.css          Design system + motion rules (single CSS file, Tailwind v4 @theme)
  page.js              Home (/)
  about/page.js        /about
  work/page.js         /work
  blog/page.js         /blog (listing)
  blog/[slug]/page.js  Blog posts (MDX)
  contact/page.js      /contact
  sitemap.js           Sitemap
  robots.js            robots.txt
  rss.xml/route.js     RSS feed
  opengraph-image.js   OG image via next/og
  fonts/               Self-hosted Archivo subset (OFL) + regeneration notes
components/
  Navigation.js        Fixed nav with mobile menu + theme toggle
  Footer.js            Footer with contact + social links
  SectionAxis.js       Tick-marked section separator
  ThemeToggle.js       Light/dark switch
  Trace.js             Hero trace (signature element)
  MotionObserver.js    Scroll reveals + count-up (the only motion JS)
  Readout.js           Dark instrument panel for agent transcripts / records
  Schematic.js         Integration diagram in SVG
content/posts/         Blog posts (*.mdx)
lib/profile.js         Single source of truth: role, ventures, location, channels
lib/evidence.js        Verbatim content shown in readouts (from the public product sites)
lib/posts.js           Post loading (build-time only)
public/                Photo, favicons, webmanifest
```

## Design System

"Field telemetry": the site reads like a measuring instrument — tick-marked
axes, mono annotations, one signal-yellow data trace in the hero. Colors are
CSS variables with a light and a dark palette (ear-tag signal yellow stays
constant across both); fluid type scale with `clamp()`. Motion follows one
idea — an instrument powers on and settles — and is gated behind JavaScript
and `prefers-reduced-motion`. Full token tables, motion rules and content
rules in `AGENTS.md`.

## Deployment

The site is configured for standalone builds (`output: 'standalone'` in `next.config.js`), which works well with Docker, Vercel, or any Node-based hosting. `/services` is permanently redirected to `/`.

## License

All content and copy are proprietary. Code structure is available under MIT for reference.
