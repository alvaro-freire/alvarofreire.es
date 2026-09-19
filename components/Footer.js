import Link from 'next/link'
import { profile, publicChannels, email } from '@/lib/profile'

const social = publicChannels.filter((c) => c.href.startsWith('http'))

export default function Footer({ links }) {
  return (
    <footer>
      <div className="tick-strip border-border" aria-hidden="true" />
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left — wordmark + line */}
          <div>
            <Link
              href="/"
              className="font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.04em] text-primary hover:text-accent transition-colors"
              style={{ fontStretch: '116%' }}
            >
              {profile.name}
            </Link>
            <p className="text-body-sm text-secondary mt-3 max-w-[340px]">
              Building AI systems that reach production — and measuring them —
              from {profile.location.town}, {profile.location.region}.
            </p>
            <p className="mono-label mt-4">{profile.location.coords}</p>
          </div>

          {/* Right — contact */}
          <div className="flex flex-col gap-3">
            <span className="mono-label">Contact</span>
            <a href={email.href} className="link-primary text-body-sm w-fit">
              {email.value}
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-1">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-annotation uppercase text-secondary hover:text-primary transition-colors inline-block py-1"
                >
                  {s.label}&nbsp;<span className="arrow-ext">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-annotation text-secondary">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-6">
            {links.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="font-mono text-annotation uppercase text-secondary hover:text-primary transition-colors inline-block py-1"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
