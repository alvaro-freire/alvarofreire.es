import Image from 'next/image'
import SectionAxis from '@/components/SectionAxis'
import { profile, identityLine } from '@/lib/profile'

export const metadata = {
  title: 'About',
  description: `Who I am and where I’ve worked. ${identityLine}.`,
}

const [aurasia, trazea] = profile.ventures

const experience = [
  {
    role: profile.role,
    org: profile.company.name,
    period: `${profile.roleSince} — Present`,
    body: 'Innogando makes RUMI, GPS collars used by thousands of farmers, from Abadín, Lugo. I run the software team: nine people across product, data and infrastructure. The agents, the evals and the shared Claude Code setup on the Work page come from this period.',
  },
  {
    role: 'Engineer',
    org: profile.company.name,
    period: 'Jul 2022 — 2026',
    body: 'Joined in July 2022 while still at university, when the whole company was ten people. Built CoWtrol, the internal platform behind the operation; took the infrastructure from SSH deploys to Kubernetes on GKE with GitOps; shipped the first agents and evals.',
  },
  {
    role: null,
    org: aurasia.name,
    period: `${aurasia.since} — Present`,
    body: `${aurasia.verb} an AI WhatsApp receptionist for dental clinics in A Coruña and Ferrol: it answers outside business hours, proposes real slots, and hands every appointment to the staff to confirm. Live at aurasia.es — ${aurasia.status}.`,
  },
  {
    role: trazea.role,
    org: trazea.name,
    period: `${trazea.since} — Present`,
    body: 'Food traceability and APPCC records for hospitality kitchens. Backend, mobile apps in both app stores, OCR pipeline, site and billing. Favorable technical report from the Food Safety Service of the Xunta de Galicia. In production, not billing yet.',
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
    body: 'Most of what an AI tool does well or badly depends on what the model sees: shared context files, skills, hooks and subagents shaped to the team’s actual repos and conventions, maintained like any other piece of infrastructure.',
  },
  {
    label: 'Boring foundations',
    body: 'FastAPI and PostgreSQL by default. Docker from day one, CI/CD early. Kubernetes on GKE with GitOps via ArgoCD once scale demanded it — not before.',
  },
]

const community = [
  {
    label: 'HackUDC · GPUL',
    body: 'Organized three editions of HackUDC, the student hackathon in A Coruña: sponsors, logistics, 200+ participants.',
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
            <div className="reg-marks p-1">
              <Image src="/alvaro.jpg" alt="Álvaro Freire" width={72} height={72} priority />
            </div>
            <p className="mono-label">
              {profile.location.town}, {profile.location.region} · {profile.location.tz}
            </p>
          </div>
          <h1 className="heading-1">About</h1>
          <div className="mt-6 max-w-content space-y-5">
            <p className="text-body text-primary">
              I write software for a living and build products on the side. Since
              July 2022 that has meant Innogando, an agrotech company in Abadín, Lugo:
              I started as an engineer and have been Head of Software since 2026. On
              the side, I co-founded Trazea and I’m building Aurasia.
            </p>
            <p className="text-body text-primary">
              I’m {profile.age}, based in {profile.location.town} on the Galician coast.
              I studied Computer Engineering at Universidade da Coruña, spent an
              Erasmus semester in Timișoara, and joined Innogando while still
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
                key={`${e.org}-${e.period}`}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-2 py-7 ${i > 0 ? 'border-t border-border' : ''}`}
                data-reveal
                style={{ '--i': i }}
              >
                <p className="mono-label md:col-span-3 pt-1">{e.period}</p>
                <div className="md:col-span-9 max-w-[62ch]">
                  <h3 className="heading-3">{e.role ? `${e.role} · ${e.org}` : e.org}</h3>
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
            {practice.map((p, i) => (
              <div key={p.label} className="data-mark" data-reveal style={{ '--i': i }}>
                <h3 className="mono-label text-primary!">{p.label}</h3>
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
            {community.map((c, i) => (
              <div key={c.label} data-reveal style={{ '--i': i }}>
                <h3 className="mono-label text-primary!">{c.label}</h3>
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
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-1" data-reveal>
              <p className="mono-label md:col-span-3 pt-1">2020 — 2024</p>
              <p className="text-body-sm text-primary md:col-span-9">
                Computer Engineering — Universidade da Coruña
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-1" data-reveal style={{ '--i': 1 }}>
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
