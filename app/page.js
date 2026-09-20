import Link from 'next/link'
import Image from 'next/image'
import SectionAxis from '@/components/SectionAxis'
import Trace from '@/components/Trace'
import Readout from '@/components/Readout'
import { getAllPosts, formatDate } from '@/lib/posts'
import { profile } from '@/lib/profile'
import { aurasiaDemo, trazeaScan } from '@/lib/evidence'

const [aurasia, trazea] = profile.ventures

// Trace milestones: x = (year − 2022) × 160 viewBox units; y sits on the path.
const milestones = [
  { year: '2022', fact: 'Joined Innogando · 10 people in total', x: 80, y: 112 },
  { year: '2025', fact: 'From SSH deploys to Kubernetes', x: 600, y: 60 },
  { year: '2026', fact: 'Head of Software', x: 648, y: 52 },
  { year: '2026', fact: 'Trazea in both app stores', x: 672, y: 46 },
  { year: 'Now', fact: profile.nowMilestone, x: 752, y: 28 },
]

const production = [
  {
    label: 'Slack agent',
    body: 'Plain-language questions over internal databases, answered in Slack.',
    result: 'hours → minutes',
    detail: 'per answered question',
  },
  {
    label: 'WhatsApp agent',
    body: 'Customer support after hours. Hands over to a person when it isn’t sure.',
    result: 'real customers',
    detail: 'live in production',
  },
  {
    label: 'Team tooling',
    body: 'Shared Claude Code setup: context files, skills, hooks, subagents.',
    result: '9',
    detail: 'engineers using it daily',
    numeral: true,
  },
  {
    label: 'n8n ops',
    body: 'Lead-classifying chatbot (Chatwoot + n8n) plus a nightly qualification job.',
    result: '1,000',
    suffix: '+',
    count: 1000,
    detail: 'qualified leads',
    numeral: true,
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="container-wide">
          <p className="mono-label mb-6">
            {profile.location.coords} — {profile.location.town}, {profile.location.region}
          </p>
          <h1 className="heading-display max-w-[21ch]">{profile.headline}</h1>
          <p className="text-body text-primary mt-6 max-w-[58ch]">
            That’s RUMI, GPS collars made by Innogando in Abadín, Lugo, where nine
            of us build the software. On my own time: Trazea, food traceability for
            kitchens, not yet making money, and Aurasia, an AI WhatsApp receptionist
            I’m testing with dental clinics.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="reg-marks p-1 shrink-0">
              <Image src="/alvaro.jpg" alt="Álvaro Freire" width={52} height={52} priority />
            </div>
            <p className="text-body-sm text-secondary">
              {profile.role} at{' '}
              <a href={profile.company.url} target="_blank" rel="noopener noreferrer" className="link-primary">
                {profile.company.name}
              </a>
              {profile.ventures.map((v) => (
                <span key={v.name}>
                  {' '}· {v.verb}{' '}
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="link-primary">
                    {v.name}
                  </a>
                </span>
              ))}
            </p>
          </div>

          {/* The trace — signature element. The line is a graphic; the annotations are facts. */}
          <Trace milestones={milestones} />
          <dl className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4">
            {milestones.map((m) => (
              <div
                key={`${m.year}-${m.fact}`}
                className="data-mark trace-annotation"
                style={{ animationDelay: `${(0.2 + 1.4 * (m.x / 800)).toFixed(2)}s` }}
              >
                <dt className="mono-label text-primary!">{m.year}</dt>
                <dd className="text-caption text-secondary mt-1">{m.fact}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 / Built and running */}
      <section id="in-production" className="section-spacing pt-10 md:pt-14 scroll-mt-24">
        <div className="container-wide">
          <SectionAxis n="01" label="Built and running" />
          <div className="flex flex-col">
            {production.map((item, i) => (
              <article
                key={item.label}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-3 py-7 ${i > 0 ? 'border-t border-border' : ''}`}
                data-reveal
                style={{ '--i': i % 3 }}
              >
                <h3 className="mono-label text-primary! md:col-span-2 pt-1">{item.label}</h3>
                <p className="text-body text-primary md:col-span-7 max-w-[58ch]">{item.body}</p>
                <div className="md:col-span-3 md:text-right">
                  {item.numeral ? (
                    <p className="numeral text-primary! md:ml-auto">
                      <span data-count={item.count ?? item.result}>{item.result}</span>
                      {item.suffix}
                      <span className="mono-label block mt-1.5">{item.detail}</span>
                    </p>
                  ) : (
                    <p className="font-mono text-caption text-primary!">
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
      <section id="work" className="section-spacing pt-0 scroll-mt-24">
        <div className="container-wide">
          <SectionAxis n="02" label="Selected work" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* Aurasia — the current bet, shown as what it does */}
            <article className="reg-marks border border-border bg-surface p-7 md:p-9 flex flex-col" data-reveal>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="heading-2">{aurasia.name}</h3>
                <span className="mono-label">{aurasia.since} — in testing</span>
              </div>
              <p className="text-body text-primary mt-4">
                Answers a dental clinic’s WhatsApp when nobody there can, at 21:30 or
                on a Saturday: it offers real slots and prepares the appointment, and
                the staff confirm it in the morning. It says it’s an AI.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="data-mark text-body-sm text-primary">Live in A Coruña and Ferrol</li>
                <li className="data-mark text-body-sm text-primary">
                  Public comparison against 7 competitors
                </li>
                <li className="data-mark text-body-sm text-primary">EU-only data, deleted after 30 days</li>
              </ul>
              <Readout kind="chat" className="mt-7" {...aurasiaDemo} />
              <div className="mt-6 flex flex-wrap gap-2">
                {['WhatsApp Business API', 'LLM agent', 'Google Calendar', 'GDPR'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href={aurasia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary inline-block mt-auto pt-7 text-body-sm w-fit"
              >
                aurasia.es <span className="arrow-ext">↗</span>
              </a>
            </article>

            {/* Trazea — the proof of end-to-end */}
            <article className="reg-marks border border-border bg-surface p-7 md:p-9 flex flex-col" data-reveal style={{ '--i': 1 }}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="heading-2">{trazea.name}</h3>
                <span className="mono-label">{trazea.role} · {trazea.since} — Present</span>
              </div>
              <p className="text-body text-primary mt-4">
                Food traceability records (APPCC) for restaurant kitchens: photograph
                the supplier label and the record fills itself. Backend, iOS and Android
                apps, site and billing.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="data-mark text-body-sm text-primary">OCR measured against real label photos</li>
                <li className="data-mark text-body-sm text-primary">
                  Favorable technical report from the Food Safety Service of the Xunta de Galicia
                </li>
                <li className="data-mark text-body-sm text-primary">Pilot running in real venues</li>
              </ul>
              <Readout kind="fields" className="mt-7" {...trazeaScan} />
              <div className="mt-6 flex flex-wrap gap-2">
                {['FastAPI', 'PostgreSQL', 'Expo', 'OCR', 'Astro'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href={trazea.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary inline-block mt-auto pt-7 text-body-sm w-fit"
              >
                trazea.es <span className="arrow-ext">↗</span>
              </a>
            </article>
          </div>

          {/* CoWtrol — internal platform, case study on /work */}
          <article className="grid md:grid-cols-12 gap-x-8 gap-y-3 mt-10 pt-8 border-t border-border" data-reveal>
            <div className="md:col-span-3">
              <h3 className="heading-3">CoWtrol</h3>
              <p className="mono-label mt-1">Innogando · 2022 — Present</p>
            </div>
            <p className="text-body text-primary md:col-span-6 max-w-[58ch]">
              Internal platform for stock, orders, assembly and support at Innogando.
            </p>
            <div className="md:col-span-3 md:text-right">
              <p className="data-mark md:inline-block text-body-sm text-primary text-left">Replaced 5+ disconnected tools</p>
              <Link href="/work#cowtrol" className="link-primary block mt-3 text-body-sm">
                Read more <span className="arrow">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 03 / Writing — only once there is a published post */}
      {posts.length > 0 && (
        <section id="writing" className="section-spacing pt-0 scroll-mt-24">
          <div className="container-wide">
            <SectionAxis n="03" label="Writing" />
            <div className="flex flex-col max-w-content">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className={`py-5 ${i > 0 ? 'border-t border-border' : ''}`}
                  data-reveal
                  style={{ '--i': i }}
                >
                  <h3 className="heading-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mono-label mt-2">{formatDate(post.date)} · {post.readingMinutes} min</p>
                </article>
              ))}
            </div>
            <Link href="/blog" className="link-primary inline-block mt-8 text-body-sm">
              Go to the blog <span className="arrow">→</span>
            </Link>
          </div>
        </section>
      )}

      {/* Now */}
      <section id="now" className="section-spacing pt-0 scroll-mt-24">
        <div className="container-wide">
          <SectionAxis n={posts.length > 0 ? '04' : '03'} label="Now" />
          <div className="max-w-content" data-reveal>
            <p className="text-body text-primary">{profile.nowBody}</p>
            <p className="font-mono text-caption text-secondary mt-6">{profile.nowFootnote}</p>
          </div>
        </div>
      </section>
    </>
  )
}
