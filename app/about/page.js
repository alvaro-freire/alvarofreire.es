import Image from 'next/image'
import SectionAxis from '@/components/SectionAxis'
import { identityLine } from '@/lib/profile'

export const metadata = {
  title: 'About',
  description: `${identityLine}. AI systems in production, measured.`,
}

const experience = [
  {
    role: 'Head of Software Engineering',
    org: 'Innogando',
    period: 'Jul 2022 — Present',
    body: 'Agrotech/IoT — maker of RUMI, GPS collars used by thousands of farmers. Joined as an engineer while still at university, when the whole company was ten people. Today: a nine-person team across product, data and infrastructure, AI agents in production, and a shared AI tooling setup the whole team works with. Still writing code.',
  },
  {
    role: 'Founder',
    org: 'Trazea',
    period: '2026 — Present',
    body: 'Food traceability and APPCC compliance for hospitality. Built end to end: backend, mobile apps in both app stores, OCR pipeline, site and billing. Favorable technical report from the Food Safety Service of the Xunta de Galicia.',
  },
  {
    role: 'Software Engineer Intern',
    org: 'Avansig',
    period: 'Sep 2023 — Dec 2023',
    body: 'Geospatial data processing and GIS tooling.',
  },
]

const practice = [
  {
    label: 'Measure first',
    body: 'An agent or a model output is not done when it demos well — it is done when it scores well on an eval built from real data. Benchmarks against real photographs, per-task evaluation, and observability from day one.',
  },
  {
    label: 'Context engineering',
    body: 'Most of the leverage with AI is in what the model sees: shared context files, skills, hooks and subagents shaped to the team’s actual repos and conventions — maintained like any other piece of infrastructure.',
  },
  {
    label: 'Boring foundations',
    body: 'FastAPI and PostgreSQL by default. Docker from day one, CI/CD early. Kubernetes on GKE with GitOps via ArgoCD once scale demanded it — not before.',
  },
]

const community = [
  {
    label: 'HackUDC · GPUL',
    body: 'Organized three editions of one of Spain’s largest student hackathons — sponsors, logistics, 200+ participants.',
  },
  {
    label: 'Xuventude Mentoring Galicia',
    body: 'Mentor in Galicia’s youth mentoring program.',
  },
  {
    label: 'Xeración',
    body: 'Coordinated Erasmus+ mobility projects (2023 — 2025).',
  },
  {
    label: 'HackUPC · FOSDEM',
    body: 'Recurring participant — built Wordle League in a weekend at HackUPC 2022.',
  },
]

export default function About() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <div className="flex items-center gap-5 mb-8">
            <Image
              src="/alvaro.jpg"
              alt="Álvaro Freire"
              width={72}
              height={72}
              className="border border-border"
              priority
            />
            <p className="mono-label">Galicia, Spain · CET/CEST</p>
          </div>
          <h1 className="heading-1">About</h1>
          <div className="mt-6 max-w-content space-y-5">
            <p className="text-body text-primary">
              I build AI systems that reach production and stay there — agents
              answering real customers, evals that say whether the thing actually
              works, and tooling that makes a whole team more effective, not just
              me.
            </p>
            <p className="text-body text-primary">
              I got into this because I like problems you can point at: that used
              to be broken, now it works — and here is the number that proves it.
              I studied Computer Engineering at Universidade da Coruña, spent an
              Erasmus semester in Timișoara, and started at Innogando while still
              in school, when the company was ten people.
            </p>
            <p className="text-body text-primary">
              Outside of work I organize hackathons and mentor young professionals
              in Galicia. I like building things and helping people build things.
            </p>
          </div>
        </div>
      </section>

      {/* 01 / Experience */}
      <section className="section-spacing pt-6 md:pt-8">
        <div className="container-wide">
          <SectionAxis n="01" label="Experience" />
          <div className="flex flex-col">
            {experience.map((e, i) => (
              <article
                key={e.org}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-2 py-7 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <p className="mono-label md:col-span-3 pt-1">{e.period}</p>
                <div className="md:col-span-9 max-w-[62ch]">
                  <h3 className="heading-3">
                    {e.role} · {e.org}
                  </h3>
                  <p className="text-body-sm text-primary mt-2">{e.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / How I work */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="02" label="How I work" />
          <div className="grid md:grid-cols-3 gap-8">
            {practice.map((p) => (
              <div key={p.label} className="data-mark">
                <h3 className="mono-label !text-primary">{p.label}</h3>
                <p className="text-body-sm text-primary mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / Community */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="03" label="Community" />
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {community.map((c) => (
              <div key={c.label}>
                <h3 className="mono-label !text-primary">{c.label}</h3>
                <p className="text-body-sm text-primary mt-2 max-w-[52ch]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / Education */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="04" label="Education" />
          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-1">
              <p className="mono-label md:col-span-3 pt-1">2020 — 2024</p>
              <p className="text-body-sm text-primary md:col-span-9">
                Computer Engineering — Universidade da Coruña
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-1">
              <p className="mono-label md:col-span-3 pt-1">2024</p>
              <p className="text-body-sm text-primary md:col-span-9">
                Erasmus+ — Universitatea de Vest din Timișoara, Romania
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
