import SectionAxis from '@/components/SectionAxis'

export const metadata = {
  title: 'Work',
  description:
    'AI agents, evals and products in production — Trazea, CoWtrol, and the systems behind them.',
}

function CaseStudy({ title, meta, context, built, measured, tech, link }) {
  return (
    <article className="grid md:grid-cols-12 gap-x-8 gap-y-6">
      <div className="md:col-span-4">
        <h3 className="heading-2">{title}</h3>
        <p className="mono-label mt-2">{meta}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary inline-block mt-4 text-body-sm"
          >
            {link.label} <span className="arrow-ext">↗</span>
          </a>
        )}
      </div>
      <div className="md:col-span-8 space-y-6">
        <div>
          <h4 className="mono-label !text-primary mb-2">Context</h4>
          <p className="text-body text-primary">{context}</p>
        </div>
        <div>
          <h4 className="mono-label !text-primary mb-2">Built</h4>
          <p className="text-body text-primary">{built}</p>
        </div>
        <div>
          <h4 className="mono-label !text-primary mb-2">Measured</h4>
          <ul className="space-y-2.5">
            {measured.map((m) => (
              <li key={m} className="data-mark text-body-sm text-primary">{m}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

const aiWork = [
  {
    label: 'Slack agent',
    body: 'An agent that answers natural-language questions over internal databases, in Slack, built with Hermes. Questions that meant asking an engineer and waiting hours are answered in minutes, with the query visible for auditing.',
  },
  {
    label: 'WhatsApp agent',
    body: 'A support agent for customer queries outside business hours, answering from a knowledge base built out of real tickets and escalating to a human when it is not confident. Live with real customers.',
  },
  {
    label: 'OCR eval',
    body: 'An accuracy benchmark for the OCR pipeline that extracts expiry dates and supplier lot numbers. Scored against real photographs taken in real kitchens — glare, angles, curved labels — not against clean scans.',
  },
  {
    label: 'Team tooling',
    body: 'A shared Claude Code setup used daily by nine engineers: shared context files (CLAUDE.md, AGENTS.md), skills, hooks, slash commands and subagents, tuned to the team’s repos and conventions.',
  },
  {
    label: 'n8n automation',
    body: 'A lead-classification chatbot (Chatwoot + n8n) for an insurance brokerage, plus a nightly qualification pipeline running unattended — 400 qualified leads and counting.',
  },
]

export default function Work() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="mono-label mb-6">Case studies · measured where it matters</p>
          <h1 className="heading-1 max-w-[24ch]">Work</h1>
          <p className="text-body text-primary mt-5 max-w-[58ch]">
            Products and systems that made it to production. Each entry says what
            existed before, what was built, and what changed — with numbers where
            the numbers are real.
          </p>
        </div>
      </section>

      {/* 01 / Trazea */}
      <section className="section-spacing pt-6 md:pt-8">
        <div className="container-wide">
          <SectionAxis n="01" label="Trazea" />
          <CaseStudy
            title="Trazea"
            meta="Founder · 2026 — Present"
            link={{ href: 'https://trazea.es', label: 'trazea.es' }}
            context="Spanish food safety regulation (APPCC) requires restaurants, bars and bakeries to keep traceability records. Most small businesses still do it on paper — slow, error-prone, and painful when an inspector asks for it."
            built="A complete product, end to end, with AI tooling in the loop at every step: a FastAPI + PostgreSQL backend, Expo/React Native apps for iOS and Android, authentication, an OCR pipeline that reads expiry dates and supplier lot numbers from label photos, an Astro marketing site, and billing."
            measured={[
              'Published in both app stores',
              'Favorable technical report from the Food Safety Service of the Xunta de Galicia',
              'Pilot running in real venues',
              'OCR accuracy benchmarked against real photographs, not clean data',
            ]}
            tech={['Expo', 'React Native', 'FastAPI', 'PostgreSQL', 'OCR', 'Astro', 'Docker']}
          />
        </div>
      </section>

      {/* 02 / CoWtrol */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="02" label="CoWtrol" />
          <CaseStudy
            title="CoWtrol"
            meta="Innogando · 2022 — Present"
            context="Innogando builds RUMI — GPS collars used by thousands of farmers for livestock monitoring. Behind the product, daily operations ran on five or more disconnected tools: spreadsheets for stock, a CRM nobody updated, chat threads for support."
            built="An internal platform that covers the whole operation — stock, orders, assembly, support and account management — integrated with RUMI, Holded CRM, WhatsApp Business and Telegram. Real-time stock valuation, low-stock alerts, and order-delay detection."
            measured={[
              'Replaced 5+ disconnected tools with one system',
              'Sales stopped doing manual data entry — the CRM syncs automatically',
              'Automated inventory tracking ended manual stock counts',
            ]}
            tech={['Flutter', 'FastAPI', 'PostgreSQL', 'WhatsApp Business API', 'Telegram Bot API', 'Holded CRM']}
          />
        </div>
      </section>

      {/* 03 / AI at Innogando */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="03" label="AI at Innogando" />
          <div className="flex flex-col">
            {aiWork.map((item, i) => (
              <article
                key={item.label}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-3 py-7 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <h3 className="mono-label !text-primary md:col-span-3 pt-1">{item.label}</h3>
                <p className="text-body text-primary md:col-span-9 max-w-[62ch]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / Infrastructure */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="04" label="Infrastructure" />
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-4">
            <p className="mono-label md:col-span-3 pt-1">2022 — 2025</p>
            <div className="md:col-span-9 max-w-[62ch]">
              <p className="text-body text-primary">
                From SSH deploys to a platform: a phased database migration
                (InfluxDB → MongoDB → PostgreSQL) with zero downtime, CI/CD on
                GitHub Actions across every repo, and a migration to Kubernetes
                on GKE with GitOps via ArgoCD. Monitoring with Grafana and Prometheus.
              </p>
              <p className="data-mark text-body-sm text-primary mt-4">
                Deploy frequency went from weekly to multiple times per day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / Side projects */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="05" label="Side projects" />
          <div className="grid md:grid-cols-2 gap-8">
            <article>
              <h3 className="heading-3">DevUtil Toolkit</h3>
              <p className="text-body-sm text-primary mt-2 max-w-[52ch]">
                Developer utilities with a CLI and a web app — fuzzy search,
                categories, one-click copy. Open source.
              </p>
              <div className="mt-3 flex gap-5">
                <a
                  href="https://alvaro-freire-devutil-toolkit.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary text-body-sm"
                >
                  Live <span className="arrow-ext">↗</span>
                </a>
                <a
                  href="https://github.com/alvaro-freire/devutil-toolkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary text-body-sm"
                >
                  GitHub <span className="arrow-ext">↗</span>
                </a>
              </div>
            </article>
            <article>
              <h3 className="heading-3">Wordle League</h3>
              <p className="text-body-sm text-primary mt-2 max-w-[52ch]">
                Wordle leagues with friends, sharing daily results. Built in a
                weekend at HackUPC 2022.
              </p>
              <div className="mt-3 flex gap-5">
                <a
                  href="https://wordleleague.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary text-body-sm"
                >
                  Live <span className="arrow-ext">↗</span>
                </a>
                <a
                  href="https://github.com/alvaro-freire/hackupc-2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary text-body-sm"
                >
                  GitHub <span className="arrow-ext">↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
