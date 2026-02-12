import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn, { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Álvaro Freire',
  description: 'I turn messy problems into systems that just work. Products, automation, and infrastructure — from first commit to production.',
}

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="flex items-center gap-3 mb-10">
                <Image
                  src="/alvaro.jpg"
                  alt="Álvaro Freire"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  priority
                />
                <span className="text-body-sm font-medium text-primary">Álvaro Freire</span>
                <span className="text-border">·</span>
                <span className="text-body-sm text-secondary">Galicia, Spain</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-display text-primary max-w-[720px] mb-10">
                I turn messy problems into systems that just work.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="max-w-[480px]">
                  <p className="text-body text-secondary mb-3">
                    I work at the intersection of product development and operations — building
                    tools, automations, and infrastructure that help teams move faster.
                  </p>
                  <p className="text-body-sm text-secondary">
                    Currently at{' '}
                    <a href="https://innogando.com" target="_blank" rel="noopener noreferrer" className="link-primary">Innogando</a>
                    {' '}and co-founding{' '}
                    <a href="https://trazea.es" target="_blank" rel="noopener noreferrer" className="link-primary">Trazea</a>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/work" className="btn-primary">
                    See my work
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Get in touch
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What I Do */}
        <section className="section-spacing border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <h2 className="heading-2">What I do</h2>
                <p className="text-body-sm text-secondary max-w-[400px]">
                  From mobile apps to cloud infrastructure — I help companies ship faster by building what they need.
                </p>
              </div>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-lg mb-4">
                    <span role="img" aria-label="rocket">&#x1F680;</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">End-to-end product</h3>
                  <p className="text-body-sm text-secondary">
                    I build the whole thing — mobile apps with Expo, web apps with React and Next.js, backends with FastAPI, and the infrastructure to run it all. One person, every layer.
                  </p>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-lg mb-4">
                    <span role="img" aria-label="gear">&#x2699;&#xFE0F;</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">Operations automation</h3>
                  <p className="text-body-sm text-secondary">
                    I find the manual work that's slowing your team down and build systems to eliminate it. Chatbots, CRM flows, workflow engines — the kind of work that quietly saves hours every week.
                  </p>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-lg mb-4">
                    <span role="img" aria-label="cloud">&#x2601;&#xFE0F;</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">Infrastructure for your stage</h3>
                  <p className="text-body-sm text-secondary">
                    Docker and CI/CD from day one. Kubernetes when scale demands it. Monitoring so you can sleep at night. I build infrastructure that matches where you are, not where you might be in three years.
                  </p>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-lg mb-4">
                    <span role="img" aria-label="lightbulb">&#x1F4A1;</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">Business-first engineering</h3>
                  <p className="text-body-sm text-secondary">
                    I've co-founded a startup and built the systems that run a company's daily operations. I make technical decisions based on what moves the business forward, not what's trending.
                  </p>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section-spacing border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <h2 className="heading-2">Featured work</h2>
                <Link href="/work" className="inline-flex items-center gap-1 text-accent font-medium text-body-sm hover:text-accent-hover transition-colors">
                  View all work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.08}>
              <FadeInStaggerItem>
                <ProjectCard
                  title="CoWtrol"
                  description="A multiplatform ERP I built for Innogando that automates assembly, sales, support, and inventory. Integrates with RUMI, Holded CRM, WhatsApp, and Telegram."
                  tags={['Flutter', 'FastAPI', 'PostgreSQL']}
                  href="/work"
                  linkLabel="View project"
                />
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <ProjectCard
                  title="Trazea"
                  description="Co-founding a startup that digitizes food traceability for restaurants. Building the MVP — OCR scans product labels and generates compliance sheets. Testing with real clients."
                  tags={['Expo', 'React Native', 'OCR']}
                  href="https://trazea.es"
                  linkLabel="Visit trazea.es"
                  external
                />
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <ProjectCard
                  title="DevUtil Toolkit"
                  description="Developer utilities with a CLI and web app. Fuzzy search, categories, one-click copy. Open source."
                  tags={['TypeScript', 'Next.js', 'CLI']}
                  href="https://alvaro-freire-devutil-toolkit.vercel.app"
                  linkLabel="Try it live"
                  external
                />
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>

        {/* Currently */}
        <section className="section-spacing border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <h2 className="heading-2 mb-8">What I'm up to</h2>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-caption font-medium text-secondary uppercase tracking-wide">Current role</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">
                    <a href="https://innogando.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Innogando</a>
                  </h3>
                  <p className="text-body-sm text-secondary">
                    Building CoWtrol (internal ERP), leading infrastructure to Kubernetes on GKE, managing CI/CD and GitHub Actions across all repos, and a WhatsApp support chatbot. IoT/agrotech startup.
                  </p>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-caption font-medium text-secondary uppercase tracking-wide">Venture</span>
                  </div>
                  <h3 className="text-body font-semibold text-primary mb-2">
                    <a href="https://trazea.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Trazea</a>
                  </h3>
                  <p className="text-body-sm text-secondary">
                    Co-founding a food traceability app for restaurants and bars. Full technical ownership — Expo app, OCR pipeline, backend, infrastructure.
                  </p>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <div className="card bg-accent-subtle border-accent/10 py-16 px-8 flex flex-col items-center text-center">
                <h2 className="heading-2 mb-4">Have a project in mind?</h2>
                <p className="text-body text-secondary mb-8 max-w-[480px]">
                  Whether you need help automating workflows, building an MVP, or setting up infrastructure — I'd love to hear about it.
                </p>
                <Link href="/contact" className="btn-primary">
                  Let's talk
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  )
}
