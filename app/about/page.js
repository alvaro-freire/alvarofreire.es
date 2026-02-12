import Navigation from '@/components/Navigation'
import Image from 'next/image'
import FadeIn, { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn'

export const metadata = {
  title: 'About — Álvaro Freire',
  description: 'Background, experience, and technical skills. Based in Galicia, Spain — building products, automating operations, and scaling infrastructure.',
}

const experience = [
  {
    role: 'Co-founder',
    company: 'Trazea',
    url: 'https://trazea.es',
    period: '2026 — Present',
    description: 'Building a mobile app that digitizes food traceability for hospitality businesses. Own the full technical side — Expo/React Native app, OCR pipeline, backend, infrastructure.',
  },
  {
    role: 'Engineer',
    company: 'Innogando',
    url: 'https://innogando.com',
    period: 'Jul 2022 — Present',
    description: 'Building CoWtrol (internal ERP), leading infrastructure migration to Kubernetes/GKE, managing CI/CD pipelines, GitHub Actions, and GitFlow across all repositories, and building a WhatsApp support chatbot with a knowledge base from real tickets. IoT/agrotech startup — RUMI GPS collars used by thousands of farmers.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Avansig',
    period: 'Sep 2023 — Dec 2023',
    description: 'Developed geospatial data processing solutions and optimized database queries for GIS applications.',
  },
]

const community = [
  {
    role: 'Hackathon Organizer',
    company: 'HackUDC, GPUL',
    period: 'Sep 2022 — Present',
    description: 'Organized three editions of one of Spain\'s largest student hackathons. Managed sponsors, logistics, and 200+ participants.',
  },
  {
    role: 'Participant & Mentor',
    company: 'HackUPC',
    period: '2022 — Present',
    description: 'Competed and mentored at Catalonia\'s biggest student hackathon. Built Wordle League in a weekend (HackUPC 2022).',
  },
  {
    role: 'Attendee',
    company: 'FOSDEM',
    period: '2024 — Present',
    description: 'Regular attendee at Europe\'s largest open-source conference in Brussels.',
  },
  {
    role: 'Mobility Coordinator',
    company: 'Xeración',
    period: 'Oct 2023 — Dec 2025',
    description: 'Coordinated Erasmus+ youth mobility programs across European countries.',
  },
  {
    role: 'Mentor',
    company: 'Xuventude Mentoring Galicia',
    period: '2024 — Present',
    description: 'Guiding young professionals in career development, technical skills, and job-seeking strategies.',
  },
]

const stack = [
  {
    area: 'Backend',
    description: 'I default to FastAPI and PostgreSQL — both are fast, well-documented, and boring in the best way.',
  },
  {
    area: 'Mobile & Web',
    description: 'For mobile, I prefer Expo and React Native — TypeScript keeps the codebase readable and you ship to both platforms from one codebase. On the web, React and Next.js. I avoid framework churn.',
  },
  {
    area: 'Infrastructure',
    description: 'Docker from day one on most projects. CI/CD early (GitHub Actions). Kubernetes and ArgoCD when scale demands it — not before. Monitoring with Grafana and Prometheus, because what you can\'t see will hurt you.',
  },
  {
    area: 'Automation',
    description: 'n8n and Make for workflow orchestration. WhatsApp Cloud API and Telegram Bot API for conversational interfaces. CRM integrations for keeping data in sync across systems.',
  },
]

export default function About() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Intro */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <div className="flex items-center gap-5 mb-10">
                  <Image
                    src="/alvaro.jpg"
                    alt="Álvaro Freire"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h1 className="heading-1 mb-1">About me</h1>
                    <p className="text-body-sm text-secondary">Galicia, Spain</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-5 max-w-[640px]">
                  <p className="text-body text-secondary">
                    I care more about what systems accomplish than what they're built with. I got into this field because I like solving problems — not in the abstract, but the kind where you can point at something and say "that used to be broken, now it works."
                  </p>

                  <p className="text-body text-secondary">
                    I studied Computer Engineering at Universidade da Coruña, spent a semester abroad in Timișoara (Romania) through Erasmus, and started working at Innogando while still in school. That overlap taught me early on that shipping matters more than perfecting, and that the best engineering serves the business, not the other way around.
                  </p>

                  <p className="text-body text-secondary">
                    These days I split my time between building internal tools and infrastructure at Innogando (IoT/agrotech) and co-founding Trazea, a food traceability startup. I've also started offering automation and consulting services to other companies — helping them build the systems I've been building for years.
                  </p>

                  <p className="text-body text-secondary">
                    Outside of work, I organize hackathons, mentor young professionals through Galicia's youth mentoring program, and coordinate Erasmus+ mobility projects. I like building things and helping people build things.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-10">Experience</h2>
              </FadeIn>

              <div className="space-y-0">
                {experience.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.05}>
                    <div className={`relative pl-8 pb-10 ${i < experience.length - 1 ? 'border-l-2 border-border' : 'border-l-2 border-transparent'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-3.5 h-3.5 -translate-x-[7.5px] rounded-full bg-surface border-2 border-accent" />

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-body font-semibold text-primary">{item.role}</h3>
                          <p className="text-body-sm font-medium text-accent">
                            {item.url ? (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hover transition-colors">
                                {item.company}
                              </a>
                            ) : (
                              item.company
                            )}
                          </p>
                        </div>
                        <p className="text-caption text-secondary whitespace-nowrap">{item.period}</p>
                      </div>
                      <p className="text-body-sm text-secondary">{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">Community</h2>
              </FadeIn>

              <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.06}>
                {community.map((item, i) => (
                  <FadeInStaggerItem key={i}>
                    <div className="card h-full">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-body-sm font-semibold text-primary">{item.role}</h3>
                        <span className="text-caption text-secondary whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-caption font-medium text-accent mb-2">{item.company}</p>
                      <p className="text-body-sm text-secondary">{item.description}</p>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* How I Build */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-10">How I build</h2>
              </FadeIn>

              <FadeInStagger className="space-y-8" staggerDelay={0.08}>
                {stack.map((item) => (
                  <FadeInStaggerItem key={item.area}>
                    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                      <span className="text-body-sm font-semibold text-primary md:w-32 md:text-right flex-shrink-0">
                        {item.area}
                      </span>
                      <p className="text-body-sm text-secondary">{item.description}</p>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">Education</h2>
              </FadeIn>

              <FadeInStagger className="space-y-6" staggerDelay={0.1}>
                <FadeInStaggerItem>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="text-body font-semibold text-primary">Computer Engineering</h3>
                      <p className="text-body-sm text-secondary">Universidade da Coruña, Spain</p>
                    </div>
                    <p className="text-caption text-secondary">2020 — 2024</p>
                  </div>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="text-body font-semibold text-primary">Erasmus+ Exchange</h3>
                      <p className="text-body-sm text-secondary">Universitatea de Vest din Timișoara, Romania</p>
                    </div>
                    <p className="text-caption text-secondary">2024</p>
                  </div>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
