import SectionAxis from '@/components/SectionAxis'

export const metadata = {
  title: 'Contact',
  description: 'Where to find Álvaro Freire — email, GitHub, LinkedIn.',
}

const channels = [
  {
    label: 'Email',
    value: 'hello@alvarofreire.es',
    href: 'mailto:hello@alvarofreire.es',
  },
  {
    label: 'GitHub',
    value: 'alvaro-freire',
    href: 'https://github.com/alvaro-freire',
  },
  {
    label: 'LinkedIn',
    value: 'alvvarofreire',
    href: 'https://linkedin.com/in/alvvarofreire',
  },
  {
    label: 'X',
    value: 'alvvarofreire',
    href: 'https://x.com/alvvarofreire',
  },
]

export default function Contact() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="mono-label mb-6">Galicia, Spain · CET/CEST</p>
          <h1 className="heading-1">Contact</h1>
          <p className="text-body text-primary mt-5 max-w-[52ch]">
            Questions about something I wrote, built, or shipped — happy to hear
            them. Email is the reliable channel.
          </p>
        </div>
      </section>

      <section className="section-spacing pt-6 md:pt-8">
        <div className="container-wide">
          <SectionAxis n="01" label="Channels" />
          <div className="flex flex-col">
            {channels.map((c, i) => (
              <div
                key={c.label}
                className={`grid md:grid-cols-12 gap-x-8 gap-y-1 py-5 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <p className="mono-label md:col-span-3 pt-0.5">{c.label}</p>
                <a
                  href={c.href}
                  {...(c.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="link-primary text-body-sm md:col-span-9 w-fit"
                >
                  {c.value} {c.href.startsWith('http') ? '↗' : ''}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
