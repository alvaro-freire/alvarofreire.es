import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Page Not Found — Álvaro Freire',
}

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-[800px]">
              <h1 className="heading-1 mb-4">Page not found</h1>
              <p className="text-body text-secondary mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
