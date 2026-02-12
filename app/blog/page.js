import Navigation from '@/components/Navigation'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata = {
  title: 'Blog — Álvaro Freire',
  description: 'Thoughts on building products, automation, infrastructure, and lessons from the startup world.',
}

export default function Blog() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <FadeIn>
                <h1 className="heading-1 mb-4">Blog</h1>
                <p className="text-body text-secondary max-w-[600px] mb-12">
                  Thoughts on building products, automation, infrastructure, and lessons from the startup world.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="card text-center py-16">
                  <p className="text-h3 font-semibold text-primary mb-3">Coming soon</p>
                  <p className="text-body-sm text-secondary max-w-[420px] mx-auto mb-8">
                    I'm working on my first posts about Kubernetes migrations, startup automation, and building products end-to-end. In the meantime, check out my work.
                  </p>
                  <Link href="/work" className="btn-primary">
                    View my work
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
