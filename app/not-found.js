import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <p className="mono-label mb-4">404 / Signal lost</p>
        <h1 className="heading-1 mb-4">Page not found</h1>
        <p className="text-body text-secondary mb-8 max-w-[52ch]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="link-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}
