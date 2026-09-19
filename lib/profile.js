/**
 * Single source of truth for the CURRENT role, ventures, location and
 * contact channels. When something here changes, this file is the only
 * place to edit — see "Changing the current role" in AGENTS.md for the
 * pages that consume each field.
 */
export const profile = {
  name: 'Álvaro Freire',

  // Hero headline — also rendered into the OG image, keep them in sync here
  headline: 'Head of Software at Innogando. Trazea and Aurasia on the side.',

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
      status: 'validating in the market',
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
  nowMilestone: 'Aurasia live · validating in the market',

  // Home "Now" section
  nowBody:
    'Head of Software at Innogando since 2026. Innogando makes RUMI, GPS collars used by thousands of farmers, from Abadín, Lugo. I joined in July 2022 as an engineer, when the whole company was ten people; the team I run today is nine people across product, data and infrastructure. Outside Innogando I co-founded Trazea, food traceability for kitchens: in production, in both app stores, not billing yet. And I’m building Aurasia, an AI receptionist on WhatsApp for dental clinics, validating in the market.',
  nowFootnote: 'Infra footnote: Kubernetes on GKE, GitOps via ArgoCD, CI/CD pipelines.',
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

export const metaDescription = `Personal site of Álvaro Freire — ${identityLine}. What I’m building, in public.`
