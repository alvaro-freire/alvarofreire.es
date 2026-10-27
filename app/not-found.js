import Link from 'next/link'
import Scene from '@/components/scenes/Scene'

export const metadata = {
  title: 'Page not found',
}

// The root not-found tree is serialized into every page's RSC payload, so
// the pasture comes in as its static art file; only the track that walks
// out of the frame is inline.
export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <p className="mono-label mb-4">404 / Signal lost</p>
        <h1 className="heading-1 mb-4">Page not found</h1>
        <p className="text-body text-secondary mb-8 max-w-[52ch]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="link-primary">
          Back to home
        </Link>
        <figure className="scene scene-pasture mt-12" aria-hidden="true">
          <div className="plate reg-marks scene-sky relative overflow-hidden aspect-[4/3] sm:aspect-[21/9]">
            <Scene name="pasture" align="xMidYMax" className="absolute inset-0" />
            <svg viewBox="0 0 800 132" preserveAspectRatio="none" className="absolute inset-x-0 bottom-[12%] h-[40%] w-full" fill="none">
              <path
                d="M 170 112 C 260 104, 330 116, 420 98 C 520 80, 610 88, 690 70 C 740 60, 770 58, 800 50"
                className="text-signal"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="2 9"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path d="M 170 112 h 0" className="text-signal" stroke="currentColor" strokeWidth="9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <figcaption className="mono-label mt-3">Illustration · last fix, then nothing</figcaption>
        </figure>
      </div>
    </section>
  )
}
