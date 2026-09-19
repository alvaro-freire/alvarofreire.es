/**
 * Single source of truth for the CURRENT role, ventures, location and
 * contact channels. When something here changes, this file is the only
 * place to edit — see "Changing the current role" in AGENTS.md for the
 * pages that consume each field.
 */
export const profile = {
  name: 'Álvaro Freire',

  // Hero headline — also rendered into the OG image, keep them in sync here
  headline: 'I build software for livestock farms, restaurant kitchens and dental clinics.',

  role: 'Head of Software',
  roleSince: '2026',
  company: { name: 'Innogando', url: 'https://innogando.com' },

  // Ventures outside Innogando, most current first.
  // `role` null means no title is claimed — the verb is used instead.
  ventures: [
    {
      name: 'Aurasia',
      url: 'https://aurasia.es',
      role: null,
      verb: 'Building',
      since: '2026',
      status: 'being tested with dental clinics',
      summary: 'AI WhatsApp receptionist for dental clinics',
    },
    {
      name: 'Trazea',
      url: 'https://trazea.es',
      role: 'Co-founder',
      verb: 'Co-founder of',
      since: '2026',
      status: 'in production',
      summary: 'Food traceability (APPCC) for hospitality',
    },
  ],

  age: 24,
  location: {
    town: 'Ares',
    region: 'Galicia',
    country: 'Spain',
    coords: '43.43° N · 8.24° W',
    tz: 'CET/CEST',
  },

  // Contact channels. `public: false` keeps a profile out of /contact and
  // the footer while still listing it in JSON-LD sameAs (entity identity).
  channels: [
    { label: 'Email', value: 'hello@alvarofreire.es', href: 'mailto:hello@alvarofreire.es', public: true },
    { label: 'GitHub', value: 'alvaro-freire', href: 'https://github.com/alvaro-freire', public: true },
    { label: 'LinkedIn', value: 'alvvarofreire', href: 'https://linkedin.com/in/alvvarofreire', public: true },
    { label: 'X', value: 'alvvarofreire', href: 'https://x.com/alvvarofreire', public: true },
    { label: 'Instagram', value: 'alvvarofreire', href: 'https://instagram.com/alvvarofreire', public: false },
  ],

  // Trace milestone for the "Now" point in the home hero
  nowMilestone: 'Aurasia live · first tests with clinics',

  // Home "Now" section
  nowBody:
    'Innogando makes RUMI, GPS collars for cattle, from Abadín, Lugo. The software team is nine people across product, data and infrastructure. What keeps me at it is the gap between a demo and something a farmer, a cook or a receptionist uses on a Tuesday without thinking about it.',
  nowFootnote: 'Infra footnote: GKE, GitOps via ArgoCD, CI/CD on GitHub Actions.',
}

// Backwards-compatible alias: the shipped venture
profile.venture = profile.ventures.find((v) => v.name === 'Trazea')

export const publicChannels = profile.channels.filter((c) => c.public)
export const email = profile.channels.find((c) => c.label === 'Email')
export const sameAs = profile.channels.filter((c) => c.href.startsWith('http')).map((c) => c.href)

// Plain-text identity line for metadata, OG image and JSON-LD:
// stable job → current bet → shipped venture.
export const identityLine = [
  `${profile.role} at ${profile.company.name}`,
  ...profile.ventures.map((v) => `${v.verb} ${v.name}`),
].join(' · ')

export const metaDescription = 'Software for livestock farms, restaurant kitchens and dental clinics: Innogando, Trazea and Aurasia. Álvaro Freire’s projects and notes, from Galicia.'
