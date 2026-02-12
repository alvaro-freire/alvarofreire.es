import Navigation from '@/components/Navigation'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import FadeIn, { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn'

export const metadata = {
  title: 'Services — Álvaro Freire',
  description: 'Automation, chatbots, internal tools, infrastructure, and MVP development. Services for companies that want to move faster.',
}

export default function Services() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Intro */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h1 className="heading-1 mb-4">Services</h1>
                <p className="text-body text-secondary max-w-[600px] mb-4">
                  I help companies ship faster by building the tools and systems they need. Everything I offer is something I already do — at Innogando, for Trazea, and for myself.
                </p>
                <p className="text-body text-secondary max-w-[600px]">
                  No generic deliverables. Every engagement starts with understanding your specific bottlenecks and ends with something that works in production.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">What I can help with</h2>
              </FadeIn>

              <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.08}>
                <FadeInStaggerItem>
                  <ServiceCard
                    icon="&#x2699;&#xFE0F;"
                    title="Process Automation"
                    description="Identifying bottlenecks in your workflows and building systems that eliminate them. If your team is doing the same manual work every week, there's probably a better way."
                  />
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <ServiceCard
                    icon="&#x1F4AC;"
                    title="Chatbot & CRM Integration"
                    description="WhatsApp and Telegram bots connected to your CRM for lead capture, classification, and automated follow-up. Turn incoming messages into organized pipeline entries."
                  />
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <ServiceCard
                    icon="&#x1F6E0;&#xFE0F;"
                    title="Internal Tools"
                    description="Custom dashboards, inventory systems, and admin panels shaped around how your team actually works — not how some off-the-shelf tool thinks you should work."
                  />
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <ServiceCard
                    icon="&#x2601;&#xFE0F;"
                    title="Infrastructure & DevOps"
                    description="CI/CD pipelines, containerized deployments with Docker and Kubernetes, monitoring with Grafana. Making deployment boring so your team can focus on building."
                  />
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <div className="md:col-span-2">
                    <ServiceCard
                      icon="&#x1F680;"
                      title="MVP Development"
                      description="Taking an idea from zero to shipped product. Mobile apps with Expo/React Native, web apps with Next.js and React, backends with FastAPI. I've always been through this process in the startup world, so I understand the pressure of getting something real into users' hands."
                    />
                  </div>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">How I work</h2>
              </FadeIn>

              <FadeInStagger className="space-y-8" staggerDelay={0.1}>
                <FadeInStaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-subtle flex items-center justify-center text-accent font-bold text-caption">1</div>
                    <div>
                      <h3 className="text-body font-semibold text-primary mb-2">Start with the outcome</h3>
                      <p className="text-body-sm text-secondary">
                        Before writing code, I work with you to clarify what success looks like. Not vague goals — measurable outcomes. Getting this right early saves time and avoids building the wrong thing.
                      </p>
                    </div>
                  </div>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-subtle flex items-center justify-center text-accent font-bold text-caption">2</div>
                    <div>
                      <h3 className="text-body font-semibold text-primary mb-2">Ship incrementally</h3>
                      <p className="text-body-sm text-secondary">
                        Large releases fail more often than small ones. I deploy small, tested changes frequently. Faster feedback, easier rollbacks, lower risk. You'll see working software early and often — not a big reveal after months of silence.
                      </p>
                    </div>
                  </div>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-subtle flex items-center justify-center text-accent font-bold text-caption">3</div>
                    <div>
                      <h3 className="text-body font-semibold text-primary mb-2">Choose boring technology</h3>
                      <p className="text-body-sm text-secondary">
                        I use proven tools unless there's a compelling reason not to. PostgreSQL over trendy databases, standard CI/CD over complex orchestration. New technology introduces risk. The best tool is the one that gets the job done reliably.
                      </p>
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
                  <h2 className="heading-2 mb-4">Let's figure out what you need</h2>
                  <p className="text-body text-secondary mb-8 max-w-[480px] mx-auto">
                    Tell me what's slowing your team down and we can figure out together if I'm the right fit.
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
