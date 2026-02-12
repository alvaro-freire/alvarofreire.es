# AGENTS.md

## Overview

Personal portfolio website for Alvaro Freire at `alvarofreire.es`. Fully static site — no backend, no API routes, no dynamic data fetching. All pages are server-rendered at build time.

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
| UI           | React 18, Server Components by default                          |
| Styling      | Tailwind CSS 3, custom design system in `app/globals.css`       |
| Animations   | Framer Motion via `@/components/FadeIn`                         |
| Fonts        | Inter via `next/font/google`                                    |
| Linting      | ESLint 9 (flat config) with `next/core-web-vitals`              |
| Build output | Standalone (`next.config.js` -> `output: 'standalone'`)         |
| Path alias   | `@/*` maps to project root (`jsconfig.json`)                    |

Dependencies are intentionally minimal: `next`, `react`, `react-dom`, `framer-motion` — nothing else.

## File Structure

```
app/
  layout.js           Root layout: Inter font, global metadata, Footer
  globals.css          Design system: custom properties, base styles, component classes
  page.js              Home (/)
  not-found.js         404 page
  about/page.js        /about — story, experience timeline, skills, education
  work/page.js         /work — case studies, side projects
  services/page.js     /services — service offerings, working principles
  contact/page.js      /contact
components/
  Navigation.js        Fixed top nav with mobile hamburger menu ('use client')
  Footer.js            Site footer with social links (Server Component)
  FadeIn.js            Framer Motion scroll animation wrapper ('use client')
  ProjectCard.js       Card for featured work (Server Component)
  ServiceCard.js       Card for service offerings (Server Component)
public/
  Static assets: photo, social SVGs, favicons, webmanifest
```

## Coding Conventions

- **No TypeScript.** Plain JavaScript only.
- **No semicolons.** Matches existing codebase style.
- **`@/` path alias** for all imports from project root.
- **PascalCase** for component filenames and exports.
- **`next/link`** for internal navigation; bare `<a>` only for external links.
- **External links** always include `target="_blank" rel="noopener noreferrer"`.
- **`react/no-unescaped-entities`** is disabled — apostrophes and quotes are used directly in JSX.
- **All custom styles** go in `app/globals.css` — never create additional CSS files.
- **Animations** use `FadeIn`, `FadeInStagger`, `FadeInStaggerItem` from `@/components/FadeIn`.

## Page Conventions

Every page follows the same skeleton:

```jsx
import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'

export const metadata = {
  title: 'Page Name — Alvaro Freire',
  description: '...',
}

export default function PageName() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>{/* Content */}</FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
```

Key rules:

- `<Navigation />` is always the first child of the fragment.
- `<main>` has `className="pt-16"` to clear the fixed nav.
- Content sections use `section-spacing` -> `container-custom` or `container-wide` -> content wrapper.
- Additional sections are separated with `border-t border-border`.
- Footer lives in `layout.js` and renders on every page automatically — do not add it in pages.
- Pages export a `metadata` object. Title format: `"Page Name — Alvaro Freire"`.
- Pages are Server Components. Only add `'use client'` for components that need browser APIs or Framer Motion.

## Linting

ESLint 9 with flat config (`eslint.config.mjs`). Extends `next/core-web-vitals`.

```bash
# Run linter
npm run lint
```

Always run `npm run lint` before considering a change complete. Fix any errors you introduce.

## Design System

### Colors (`tailwind.config.js`)

| Token          | Value     | Usage                            |
|----------------|-----------|----------------------------------|
| `background`   | `#FAFAF9` | Page background (warm off-white) |
| `primary`      | `#18181B` | Headings, emphasis text          |
| `secondary`    | `#71717A` | Body text, muted elements        |
| `accent`       | `#4F46E5` | Buttons, links, interactive      |
| `accent-hover` | `#4338CA` | Hover state for accent elements  |
| `accent-subtle`| `#EEF2FF` | Card backgrounds, highlights     |
| `border`       | `#E4E4E7` | Dividers, borders                |
| `surface`      | `#FFFFFF` | Card backgrounds                 |

### Typography (`tailwind.config.js`)

| Token          | Size     | Usage              |
|----------------|----------|--------------------|
| `text-display` | 3.5rem   | Hero headline      |
| `text-h1`      | 3rem     | Page titles        |
| `text-h2`      | 2rem     | Section headings   |
| `text-h3`      | 1.5rem   | Subsection headings|
| `text-body`    | 1.125rem | Paragraph text     |
| `text-body-sm` | 1rem     | Descriptions       |
| `text-caption` | 0.875rem | Tags, metadata     |

### Component Classes (`app/globals.css`)

| Class                     | Purpose                                         |
|---------------------------|--------------------------------------------------|
| `container-custom`        | Max-width 720px, horizontal padding              |
| `container-wide`          | Max-width 1080px, horizontal padding             |
| `section-spacing`         | Vertical rhythm: `py-16 md:py-24`               |
| `heading-display/1/2/3`   | Heading styles at each scale                     |
| `text-body-primary`       | Body text in primary color                       |
| `text-body-secondary`     | Body text in secondary color                     |
| `link-primary`            | Accent-colored underlined link                   |
| `link-subtle`             | Muted link, primary on hover                     |
| `card`                    | White card with border, rounded corners, shadow  |
| `card-hover`              | Adds lift + shadow on hover                      |
| `tag` / `tag-accent`      | Pill badges for skills and metadata              |
| `btn-primary`             | Indigo button                                    |
| `btn-secondary`           | Outlined button                                  |

### Spacing

8px base unit. Custom scale via CSS custom properties (`--space-xs` through `--space-4xl`) and Tailwind defaults.

## Common Pitfalls

- **Do not add `'use client'`** to page files. Pages are Server Components; only leaf components that need browser APIs or Framer Motion should be client components.
- **Do not add a `<Footer />`** inside pages — it is rendered globally from `layout.js`.
- **Do not create new CSS files.** All styles live in `app/globals.css` or as Tailwind utilities.
- **Do not add new dependencies** without explicit approval. The dependency footprint is intentionally minimal.
- **Do not add TypeScript.** The project uses plain JavaScript.
- **Do not use semicolons.** Match the existing code style.
- **Always verify** the build passes (`npm run build`) after structural changes to pages or layouts.
