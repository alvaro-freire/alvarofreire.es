# alvarofreire.es

Personal portfolio and services website. Built with Next.js 15, Tailwind CSS, and Framer Motion.

**Live at [alvarofreire.es](https://alvarofreire.es)**

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS 3 with a custom design system
- **Animations**: Framer Motion
- **Fonts**: Inter via `next/font/google`
- **Build**: Standalone output, fully static
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

## Project Structure

```
app/
  layout.js           Root layout (font, metadata, footer)
  globals.css         Design system and Tailwind config
  page.js             Home (/)
  not-found.js        404
  about/page.js       /about
  work/page.js        /work
  services/page.js    /services
  contact/page.js     /contact
components/
  Navigation.js       Fixed nav with mobile menu
  Footer.js           Site footer with social links
  FadeIn.js           Scroll animation wrapper
  ProjectCard.js      Card for featured projects
  ServiceCard.js      Card for service offerings
public/
  alvaro.jpg          Photo
  *.svg               Social icons (GitHub, LinkedIn, Instagram, Twitter)
  favicon.*           Favicons and app icons
  site.webmanifest    PWA manifest
```

## Design System

Colors, typography, spacing, and component classes are defined in `tailwind.config.js` and `app/globals.css`. The palette uses warm zinc grays with an indigo accent (`#4F46E5`). Typography is based on Inter with a scale from `text-caption` (0.875rem) to `text-display` (3.5rem).

Reusable CSS classes include `card`, `tag`, `btn-primary`, `btn-secondary`, `container-custom`, `container-wide`, and heading/body text utilities. See `globals.css` for the full list.

## Deployment

The site is configured for standalone builds (`output: 'standalone'` in `next.config.js`), which works well with Docker, Vercel, or any Node-based hosting.

## License

All content and copy are proprietary. Code structure is available under MIT for reference.
