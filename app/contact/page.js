import Navigation from '@/components/Navigation'
import Image from 'next/image'
import FadeIn, { FadeInStagger, FadeInStaggerItem } from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — Álvaro Freire',
  description: 'Get in touch for consulting, project work, or just to say hello.',
}

export default function Contact() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h1 className="heading-1 mb-4">Let's talk</h1>
                <p className="text-body text-secondary max-w-[560px] mb-4">
                  Have a project in mind? Building something and need help? Or just want to say hello? I'd love to hear from you.
                </p>
                <p className="text-body text-secondary max-w-[560px]">
                  I respond to all thoughtful messages — usually within 24-48 hours.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.08}>
                <FadeInStaggerItem>
                  <a href="mailto:hello@alvarofreire.es" className="card card-hover block group text-center py-8">
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-xl mx-auto mb-4">
                      <span role="img" aria-label="email">&#x2709;&#xFE0F;</span>
                    </div>
                    <h3 className="text-body font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Email</h3>
                    <p className="text-body-sm text-secondary">hello@alvarofreire.es</p>
                  </a>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <a href="https://linkedin.com/in/alvvarofreire" target="_blank" rel="noopener noreferrer" className="card card-hover block group text-center py-8">
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mx-auto mb-4">
                      <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} />
                    </div>
                    <h3 className="text-body font-semibold text-primary mb-1 group-hover:text-accent transition-colors">LinkedIn</h3>
                    <p className="text-body-sm text-secondary">alvvarofreire</p>
                  </a>
                </FadeInStaggerItem>

                <FadeInStaggerItem>
                  <a href="https://github.com/alvaro-freire" target="_blank" rel="noopener noreferrer" className="card card-hover block group text-center py-8">
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mx-auto mb-4">
                      <Image src="/github-svgrepo-com.svg" alt="GitHub" width={24} height={24} />
                    </div>
                    <h3 className="text-body font-semibold text-primary mb-1 group-hover:text-accent transition-colors">GitHub</h3>
                    <p className="text-body-sm text-secondary">alvaro-freire</p>
                  </a>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h2 className="heading-2 mb-8">Send a message</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="card p-8">
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-spacing border-t border-border">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <div className="card p-8">
                  <h2 className="heading-3 mb-4">Location &amp; availability</h2>
                  <div className="space-y-3">
                    <p className="text-body-sm text-secondary">
                      Based in <span className="text-primary font-medium">Galicia, Spain</span> (CET/CEST timezone).
                    </p>
                    <p className="text-body-sm text-secondary">
                      Open to remote work with European or US timezone overlap. Also open to relocation for the right opportunity.
                    </p>
                    <p className="text-body-sm text-secondary">
                      Available for consulting and project-based work.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
