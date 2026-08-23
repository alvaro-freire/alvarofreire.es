# alvarofreire.es

Personal website. Built with Next.js 15 and Tailwind CSS, blog in MDX.

**Live at [alvarofreire.es](https://alvarofreire.es)**

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: JavaScript
- **Styling**: Tailwind CSS 3 with a custom design system ("Field telemetry")
- **Blog**: MDX files in `content/posts/`, compiled with `next-mdx-remote/rsc` + `gray-matter`
- **Fonts**: Archivo (display), Instrument Sans (text), Spline Sans Mono (annotations) via `next/font/google`
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
Then `npm run build` — posts are compiled statically.

## Project Structure

```
app/
  layout.js            Root layout (fonts, metadata, nav, footer, JSON-LD)
  globals.css          Design system (single CSS file)
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
components/
  Navigation.js        Fixed nav with mobile menu
  Footer.js            Footer with contact + social links
  SectionAxis.js       Tick-marked section separator
content/posts/         Blog posts (*.mdx)
lib/posts.js           Post loading (build-time only)
public/                Photo, favicons, webmanifest
```

## Design System

"Field telemetry": the site reads like a measuring instrument — tick-marked
axes, mono annotations, one signal-yellow data trace in the hero. Palette:
fog `#F2F3EF`, ink `#171B18`, moss `#5B6159`, pasture `#2E4B3C`, ear-tag
signal `#E8B931` (data marks only), grid `#DCDFD6`. Fluid type scale with
`clamp()`. Full token tables and rules in `AGENTS.md`.

## Deployment

The site is configured for standalone builds (`output: 'standalone'` in `next.config.js`), which works well with Docker, Vercel, or any Node-based hosting. `/services` is permanently redirected to `/`.

## License

All content and copy are proprietary. Code structure is available under MIT for reference.
