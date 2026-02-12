import Navigation from '@/components/Navigation'
import Link from 'next/link'
import FadeIn, { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn'

export const metadata = {
  title: 'Work — Álvaro Freire',
  description: 'Case studies and projects — ERPs, chatbots, food traceability, infrastructure migrations, and open-source tools.',
}

function CaseStudy({ title, subtitle, context, built, impact, tech }) {
  return (
    <article className="card p-8 md:p-10">
      <div className="mb-6">
        <h2 className="heading-2 mb-1">{title}</h2>
        <p className="text-caption text-secondary">{subtitle}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-body font-semibold text-primary mb-2">Context</h3>
          <p className="text-body-sm text-secondary">{context}</p>
        </div>

        <div>
          <h3 className="text-body font-semibold text-primary mb-2">What I built</h3>
          {typeof built === 'string' ? (
            <p className="text-body-sm text-secondary">{built}</p>
          ) : (
            built
          )}
        </div>

        <div>
          <h3 className="text-body font-semibold text-primary mb-2">Impact</h3>
          <ul className="space-y-2">
            {impact.map((item, i) => (
              <li key={i} className="flex gap-3 text-body-sm text-secondary">
                <span className="text-accent font-medium mt-0.5">-&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h1 className="heading-1 mb-4">Work</h1>
                <p className="text-body text-secondary mb-12 max-w-[600px]">
                  Products I've built, systems I've designed, and problems I've solved. Each project shaped how I think about building software.
                </p>
              </FadeIn>

              <div className="space-y-8">
                {/* CoWtrol */}
                <FadeIn>
                  <CaseStudy
                    title="CoWtrol — Multiplatform ERP"
                    subtitle="Innogando · 2022 — Present"
                    context="Innogando is an IoT/agrotech startup that builds RUMI — GPS collars and a mobile app used by thousands of farmers for livestock monitoring. As the company grew, internal processes across sales, assembly, support, and operations were scattered across spreadsheets, messaging apps, and manual workflows. The team needed a single system to run the business."
                    built={
                      <div className="space-y-3 text-body-sm text-secondary">
                        <p>
                          I designed and built CoWtrol — a multiplatform ERP with a Flutter frontend and FastAPI backend that became the operational backbone of the company. It integrates with RUMI (the client-facing app), Holded CRM, WhatsApp Business, and Telegram to automate most internal processes.
                        </p>
                        <p>
                          The system covers assembly tracking, sales pipeline management, customer support workflows, inventory management (real-time stock valuation, low-stock alerts, component order delay detection), and account management for RUMI app users.
                        </p>
                      </div>
                    }
                    impact={[
                      'Consolidated 5+ disconnected tools into one platform',
                      'Automated inventory tracking — eliminated manual stock counts and prevented stockouts',
                      'Sales team stopped doing manual data entry — CRM syncs automatically',
                      'New team members onboard faster with one clear system instead of tribal knowledge',
                    ]}
                    tech={['Flutter', 'FastAPI', 'PostgreSQL', 'WhatsApp Business API', 'Telegram Bot API', 'Holded CRM', 'Docker']}
                  />
                </FadeIn>

                {/* Support Chatbot — Innogando */}
                <FadeIn>
                  <CaseStudy
                    title="Customer Support Chatbot"
                    subtitle="Innogando · 2024 — Present"
                    context="Innogando's support team couldn't cover customer inquiries 24/7. Common questions about RUMI GPS collars — setup, troubleshooting, billing — were repetitive, and customers contacting outside business hours had to wait for a response."
                    built={
                      <div className="space-y-3 text-body-sm text-secondary">
                        <p>
                          Built a WhatsApp support chatbot that handles incoming customer queries using a knowledge base extracted from real support tickets and conversation history. The bot answers common questions automatically and escalates complex issues to the right team member.
                        </p>
                      </div>
                    }
                    impact={[
                      'Customers get instant help outside business hours',
                      'Reduced the volume of tickets the support team handles directly',
                      'Faster resolution time for common, repetitive issues',
                      'Support team can focus on complex cases instead of answering the same questions',
                    ]}
                    tech={['WhatsApp Cloud API', 'n8n', 'Knowledge Base', 'Python']}
                  />
                </FadeIn>

                {/* Lead Classification Chatbot — Egoncu */}
                <FadeIn>
                  <CaseStudy
                    title="Lead Classification Chatbot"
                    subtitle="Proyectos Egoncu · 2025"
                    context="Proyectos Egoncu is a health insurance broker working with providers like Adeslas and Sanitas. Incoming leads through WhatsApp needed to be qualified before sales agents could work them. Without automation, agents spent too much time on unqualified or misrouted leads."
                    built={
                      <div className="space-y-3 text-body-sm text-secondary">
                        <p>
                          Built a WhatsApp chatbot using Chatwoot and n8n that integrates with their CRM. The bot engages incoming leads, asks qualifying questions, classifies them by type and intent, and filters out unqualified ones — so sales agents get a cleaner pipeline and can target leads more accurately.
                        </p>
                      </div>
                    }
                    impact={[
                      'Sales agents work a pre-qualified pipeline instead of raw leads',
                      'Unqualified leads filtered out automatically before reaching the team',
                      'Lead classification happens in minutes, not hours',
                      'End-to-end integration between WhatsApp, CRM, and internal notifications',
                    ]}
                    tech={['Chatwoot', 'n8n', 'WhatsApp Cloud API', 'CRM Integration']}
                  />
                </FadeIn>

                {/* Trazea */}
                <FadeIn>
                  <CaseStudy
                    title="Trazea — Food Traceability Platform"
                    subtitle="Co-founder · 2026 — Present"
                    context="Spanish food safety regulation (APPCC) requires restaurants, bars, and bakeries to maintain traceability records for every product they serve. Most small businesses do this on paper — it's tedious, error-prone, and the first thing inspectors check. My co-founder and I saw an opportunity to solve this with technology."
                    built={
                      <div className="space-y-3 text-body-sm text-secondary">
                        <p>
                          I own the entire technical side. The mobile app is built with Expo (React Native). An OCR pipeline scans product labels and extracts lot numbers and expiry dates. The backend generates PDF traceability sheets that comply with APPCC regulation.
                        </p>
                        <p>
                          Currently building the MVP and testing with real restaurants in a production environment.
                        </p>
                      </div>
                    }
                    impact={[
                      'MVP being tested with real restaurants in a production environment',
                      'OCR automates label scanning — eliminates manual data entry for kitchen staff',
                      'Single Expo/React Native codebase targeting both iOS and Android',
                      'Full technical ownership: mobile app, OCR pipeline, backend, infrastructure',
                    ]}
                    tech={['Expo', 'React Native', 'OCR', 'Python', 'FastAPI', 'PostgreSQL', 'Docker']}
                  />
                </FadeIn>

                {/* Infrastructure */}
                <FadeIn>
                  <CaseStudy
                    title="Infrastructure Migration to Kubernetes"
                    subtitle="Innogando · 2022 — 2025"
                    context="When I joined, deployment was manual (SSH into servers, no automation), the database was hitting its limits, and there was almost no monitoring. Over three years, I led a series of infrastructure improvements that transformed how the team ships software."
                    built={
                      <div className="space-y-3 text-body-sm text-secondary">
                        <p>
                          Phase 1: Led a phased database migration from InfluxDB to MongoDB to PostgreSQL — zero downtime, zero data loss. Phase 2: Implemented CI/CD pipelines across all projects with GitHub Actions, enforced GitFlow, and made deployment a non-event.
                        </p>
                        <p>
                          Phase 3 (end of 2025): Led the migration from mixed GCP–AWS infrastructure to Kubernetes on GKE. Introduced GitOps with ArgoCD, migrated all CI/CD pipelines, and set up monitoring with Grafana and Prometheus.
                        </p>
                      </div>
                    }
                    impact={[
                      'Deploy frequency went from weekly to multiple times per day',
                      'Zero downtime during database migration — features that took days now took hours',
                      'New engineers can deploy on day one — no special knowledge required',
                      'Full observability with Grafana dashboards and Prometheus alerting',
                    ]}
                    tech={['Kubernetes', 'GKE', 'ArgoCD', 'GitOps', 'Docker', 'GitHub Actions', 'Grafana', 'Prometheus', 'PostgreSQL']}
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Side Projects */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">Side projects</h2>
              </FadeIn>

              <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.08}>
                <FadeInStaggerItem>
                  <div className="card card-hover h-full group">
                    <h3 className="text-h3 font-semibold text-primary mb-2 group-hover:text-accent transition-colors">DevUtil Toolkit</h3>
                    <p className="text-body-sm text-secondary mb-4">
                      Developer utilities with a CLI and web app. Fuzzy search, categories (Git, terminal, Flutter, C...), one-click copy. Open source.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="tag">TypeScript</span>
                      <span className="tag">Next.js</span>
                      <span className="tag">CLI</span>
                    </div>
                    <div className="flex gap-4 text-caption">
                      <a href="https://alvaro-freire-devutil-toolkit.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover font-medium">
                        Live app
                      </a>
                      <a href="https://github.com/alvaro-freire/devutil-toolkit" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary font-medium">
                        GitHub
                      </a>
                    </div>
                  </div>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <div className="card card-hover h-full group">
                    <h3 className="text-h3 font-semibold text-primary mb-2 group-hover:text-accent transition-colors">Wordle League</h3>
                    <p className="text-body-sm text-secondary mb-4">
                      Hackathon project (HackUPC 2022) — create Wordle leagues with friends and share daily results. Built in a weekend.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="tag">JavaScript</span>
                      <span className="tag">Hackathon</span>
                    </div>
                    <div className="flex gap-4 text-caption">
                      <a href="https://wordleleague.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover font-medium">
                        Live app
                      </a>
                      <a href="https://github.com/alvaro-freire/hackupc-2022" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary font-medium">
                        GitHub
                      </a>
                    </div>
                  </div>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <div className="card bg-accent-subtle border-accent/10 text-center py-12 px-8">
                  <h2 className="heading-2 mb-4">Need something built?</h2>
                  <p className="text-body text-secondary mb-8 max-w-[480px] mx-auto">
                    I'm available for consulting, project-based work, and technical advisory. Let's talk about what you're building.
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Get in touch
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
