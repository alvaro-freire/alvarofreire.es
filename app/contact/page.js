import SectionAxis from '@/components/SectionAxis'
import Plate from '@/components/scenes/Plate'
import Ria from '@/components/scenes/Ria'
import { profile, publicChannels } from '@/lib/profile'

export const metadata = {
  title: 'Contact',
  description: `Where to find Álvaro Freire — ${publicChannels.map((c) => c.label).join(', ')}.`,
}

export default function Contact() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="mono-label mb-6">
            {profile.location.town}, {profile.location.region} · {profile.location.tz}
          </p>
          <h1 className="heading-1">Contact</h1>
          <p className="text-body text-primary mt-5 max-w-[52ch]">
            If you’re building something similar, or want to talk about anything
            on this site, write to me. Email is the reliable channel.
          </p>
          <Plate
            scene={Ria}
            sceneClass="absolute right-0 bottom-0 w-[145%] h-[145%]"
            kind="ria"
            place={`the harbour, ${profile.location.town}`}
            day="blue hour"
            night="night"
            frame="aspect-[16/9] sm:aspect-[3/1]"
            className="mt-10 md:mt-12"
            reveal={false}
          />
        </div>
      </section>

      <section className="section-spacing pt-6 md:pt-8">
        <div className="container-wide">
          <SectionAxis n="01" label="Channels" />
          <div className="flex flex-col">
            {publicChannels.map((c, i) => {
              const external = c.href.startsWith('http')
              return (
                <div
                  key={c.label}
                  className={`grid md:grid-cols-12 gap-x-8 gap-y-1 py-5 ${i > 0 ? 'border-t border-border' : ''}`}
                  data-reveal
                  style={{ '--i': i }}
                >
                  <p className="mono-label md:col-span-3 md:pt-3">{c.label}</p>
                  <a
                    href={c.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="channel-link md:col-span-9 w-fit"
                  >
                    {c.value}
                    {external ? <span className="arrow-ext text-secondary"> ↗</span> : null}
                  </a>
                </div>
              )
            })}
          </div>
          <p className="font-mono text-caption text-secondary mt-10">
            {profile.location.coords} · {profile.location.town}, {profile.location.region}, {profile.location.country}
          </p>
        </div>
      </section>
    </>
  )
}
