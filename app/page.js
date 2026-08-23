import Link from 'next/link'
import SectionAxis from '@/components/SectionAxis'
import { getAllPosts, formatDate } from '@/lib/posts'

const milestones = [
  { year: '2022', fact: 'Joined Innogando — 10 people in the whole company' },
  { year: '2025', fact: 'Kubernetes on GKE, GitOps via ArgoCD' },
  { year: '2026', fact: 'Trazea live in both app stores' },
  { year: 'Now', fact: 'Team of 9 · AI agents in production' },
]

const production = [
  {
    label: 'Slack agent',
    body: 'Natural-language questions over internal databases, answered in Slack. Built with Hermes.',
    result: 'hours → minutes',
    detail: 'per answered question',
  },
  {
    label: 'WhatsApp agent',
    body: 'Customer support outside business hours, with escalation to a human when the agent is not sure.',
    result: 'real customers',
    detail: 'live in production',
  },
  {
    label: 'OCR eval',
    body: 'Accuracy benchmark for a pipeline that extracts expiry dates and supplier lot numbers — scored against real photographs, not clean data.',
    result: 'measured',
    detail: 'against real photos',
  },
  {
    label: 'Team tooling',
    body: 'A shared Claude Code setup: context files (CLAUDE.md, AGENTS.md), skills, hooks, slash commands and subagents, tuned for how the team actually works.',
    result: '9',
    detail: 'engineers using it daily',
    numeral: true,
  },
  {
    label: 'n8n ops',
    body: 'Lead-classification chatbot (Chatwoot + n8n) and a nightly qualification pipeline running unattended.',
    result: '400',
    detail: 'qualified leads',
    numeral: true,
  },
]

const writingTopics = [
  { label: 'Agent evals', body: 'How to know whether an agent actually works — task-level evaluation, not vibes.' },
  { label: 'Context engineering', body: 'Shaping what a model sees: context files, skills, and the tooling around them.' },
  { label: 'AI in production', body: 'What survives contact with real users, and what quietly breaks.' },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="container-wide">
          <p className="mono-label mb-6">43.36° N · 8.41° W — Galicia, Spain</p>
          <h1 className="heading-display max-w-[21ch]">
            I put AI agents into production — and measure whether they work.
          </h1>
          <p className="text-body text-primary mt-6 max-w-[58ch]">
            Agents answering real customers, evals scored against real photographs,
            and the tooling that makes a nine-engineer team ship this way.
          </p>
          <p className="text-body-sm text-secondary mt-4">
            Head of Software Engineering at{' '}
            <a href="https://innogando.com" target="_blank" rel="noopener noreferrer" className="link-primary">
              Innogando
            </a>{' '}
            · Creator of{' '}
            <a href="https://trazea.es" target="_blank" rel="noopener noreferrer" className="link-primary">
              Trazea
            </a>
          </p>

          {/* The trace — signature element. The line is a graphic; the annotations are facts. */}
          <div className="mt-14 md:mt-20" aria-hidden="true">
            <svg viewBox="0 0 800 132" className="w-full h-auto" fill="none">
              <path
                className="trace-path"
                d="M 8 120 C 30 122, 50 116, 70 112 C 110 104, 130 116, 170 110 C 220 102, 240 88, 290 92 C 340 96, 360 76, 410 80 C 460 84, 500 64, 545 68 C 570 70, 590 62, 610 58 C 640 52, 670 50, 700 44 C 730 38, 760 32, 785 26"
                stroke="#E8B931"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle className="trace-dot" cx="70" cy="112" r="4" fill="#171B18" />
              <circle className="trace-dot" cx="610" cy="58" r="4" fill="#171B18" />
              <circle className="trace-dot" cx="700" cy="44" r="4" fill="#171B18" />
              <circle className="trace-dot" cx="785" cy="26" r="4" fill="#171B18" />
            </svg>
            <div className="border-t border-primary/60 mt-2 pt-2 flex justify-between font-mono text-annotation text-secondary">
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {milestones.map((m) => (
              <div key={m.year} className="data-mark">
                <dt className="mono-label !text-primary">{m.year}</dt>
                <dd className="text-caption text-secondary mt-1">{m.fact}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 / In production */}
      <section id="in-production" className="section-spacing pt-10 md:pt-14">
        <div className="container-wide">
          <SectionAxis n="01" label="In production" />
          <div className="flex flex-col">
            {production.map((item, i) => (
              <article
                key={item.label}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-3 py-7 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <h3 className="mono-label !text-primary md:col-span-2 pt-1">{item.label}</h3>
                <p className="text-body text-primary md:col-span-7 max-w-[58ch]">{item.body}</p>
                <div className="md:col-span-3 md:text-right">
                  {item.numeral ? (
                    <p className="numeral !text-primary md:ml-auto">
                      {item.result}
                      <span className="mono-label block mt-1.5">{item.detail}</span>
                    </p>
                  ) : (
                    <p className="font-mono text-caption !text-primary">
                      {item.result}
                      <span className="mono-label block mt-1.5">{item.detail}</span>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / Selected work */}
      <section id="work" className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="02" label="Selected work" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-12">
            {/* Trazea — the proof of end-to-end */}
            <article className="md:col-span-3 border border-border p-7 md:p-9 bg-surface">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="heading-2">Trazea</h3>
                <span className="mono-label">2026 — Present</span>
              </div>
              <p className="text-body text-primary mt-4">
                Food traceability and APPCC compliance for hospitality, built end to end
                with AI tooling: FastAPI + PostgreSQL backend, Expo/React Native apps,
                authentication, an OCR pipeline, an Astro site, and billing.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="data-mark text-body-sm text-primary">
                  Published in both app stores
                </li>
                <li className="data-mark text-body-sm text-primary">
                  Favorable technical report from the Food Safety Service of the Xunta de Galicia
                </li>
                <li className="data-mark text-body-sm text-primary">
                  Pilot running in real venues
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {['FastAPI', 'PostgreSQL', 'Expo', 'OCR', 'Astro'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href="https://trazea.es"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary inline-block mt-7 text-body-sm"
              >
                trazea.es ↗
              </a>
            </article>

            {/* CoWtrol */}
            <article className="md:col-span-2 border border-border p-7 md:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="heading-2">CoWtrol</h3>
                <span className="mono-label">Innogando</span>
              </div>
              <p className="text-body text-primary mt-4">
                Internal platform covering stock, orders, support and integrations —
                one system across sales, assembly and support.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="data-mark text-body-sm text-primary">
                  Replaced 5+ disconnected tools
                </li>
              </ul>
              <Link href="/work" className="link-primary inline-block mt-7 text-body-sm">
                Read the case study →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 03 / Writing */}
      <section id="writing" className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="03" label="Writing" />
          {posts.length > 0 ? (
            <div className="flex flex-col max-w-content">
              {posts.map((post, i) => (
                <article key={post.slug} className={`py-5 ${i > 0 ? 'border-t border-border' : ''}`}>
                  <h3 className="heading-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mono-label mt-2">{formatDate(post.date)}</p>
                </article>
              ))}
            </div>
          ) : (
            <>
              <p className="text-body text-primary max-w-[58ch]">
                Notes from running AI systems in production — first posts are in the works.
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-8">
                {writingTopics.map((t) => (
                  <div key={t.label} className="data-mark">
                    <h3 className="mono-label !text-primary">{t.label}</h3>
                    <p className="text-caption text-secondary mt-2">{t.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          <Link href="/blog" className="link-primary inline-block mt-8 text-body-sm">
            Go to the blog →
          </Link>
        </div>
      </section>

      {/* 04 / Now */}
      <section id="now" className="section-spacing pt-0">
        <div className="container-wide">
          <SectionAxis n="04" label="Now" />
          <div className="max-w-content">
            <p className="text-body text-primary">
              Head of Software Engineering at Innogando — agrotech/IoT, maker of RUMI,
              GPS collars used by thousands of farmers. I joined when the whole company
              was ten people; today I lead a nine-person team across product, data and
              infrastructure, and I still write code.
            </p>
            <p className="font-mono text-caption text-secondary mt-6">
              Infra footnote: Kubernetes on GKE, GitOps via ArgoCD, CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
