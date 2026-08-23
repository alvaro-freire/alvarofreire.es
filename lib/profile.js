/**
 * Single source of truth for the CURRENT role and identity line.
 * When the job changes, edit this file (and close the open-ended
 * experience entry in app/about/page.js) — see "Changing the current
 * role" in AGENTS.md for the full checklist.
 */
export const profile = {
  name: 'Álvaro Freire',
  role: 'Head of Software Engineering',
  company: { name: 'Innogando', url: 'https://innogando.com' },
  venture: { name: 'Trazea', url: 'https://trazea.es' },

  // Trace milestone for the "Now" point in the home hero
  nowMilestone: 'Team of 9 · AI agents in production',

  // Home "04 / Now" section
  nowBody:
    'Head of Software Engineering at Innogando — agrotech/IoT, maker of RUMI, GPS collars used by thousands of farmers. I joined when the whole company was ten people; today I lead a nine-person team across product, data and infrastructure, and I still write code.',
  nowFootnote: 'Infra footnote: Kubernetes on GKE, GitOps via ArgoCD, CI/CD pipelines.',
}

// Plain-text identity line for metadata, OG image and JSON-LD
export const identityLine = `${profile.role} at ${profile.company.name} · Creator of ${profile.venture.name}`

export const metaDescription = `AI agents in production — built end to end and measured. ${profile.role} at ${profile.company.name}, creator of ${profile.venture.name}.`
