import { markup } from '@/components/scenes/markup'

/**
 * Scene — one plate, in two layers.
 *
 * Art: the drawing itself, as static SVG files rendered at build time
 * (/scenes/<name>-day.svg and -night.svg, app/scenes/[file]/route.js).
 * They are cached across pages and never enter the HTML or the RSC
 * payload. One hour is downloaded: a <picture> picks it from the system
 * preference (no JS); only when the toggle has set an explicit theme does
 * `.art-forced` take over, and being lazy it is fetched only then.
 *
 * Live: the data marks (`children`) — collar fixes, the OCR read, the
 * phone, the clock hands, the Ares fix — inline, tokened in globals.css,
 * animated by the page's CSS. Same viewBox and alignment as the art, so
 * the two layers register exactly.
 *
 * `align` is the SVG alignment of the crop (`xMidYMax` = bottom-centre).
 * Always decorative: `aria-hidden`, empty alt.
 */
const POSITION = {
  xMidYMid: '50% 50%',
  xMidYMax: '50% 100%',
  xMaxYMid: '100% 50%',
  xMaxYMax: '100% 100%',
}

export default function Scene({ name, align = 'xMidYMid', eager = false, className = '', children }) {
  const src = (hour) => `/scenes/${name}-${hour}.svg`
  const img = { draggable: false, decoding: 'async', style: { objectPosition: POSITION[align] } }

  return (
    <span className={`block ${className}`} aria-hidden="true">
      <picture className="art-auto">
        <source srcSet={src('night')} media="(prefers-color-scheme: dark)" />
        <img alt="" src={src('day')} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} {...img} />
      </picture>
      {/* eslint-disable-next-line @next/next/no-img-element -- shown only under an explicit theme override */}
      <img alt="" src={src('day')} loading="lazy" className="art-forced art-day" {...img} />
      {/* eslint-disable-next-line @next/next/no-img-element -- shown only under an explicit theme override */}
      <img alt="" src={src('night')} loading="lazy" className="art-forced art-night" {...img} />
      {children && (
        <svg
          viewBox="0 0 1600 640"
          preserveAspectRatio={`${align} slice`}
          className="absolute inset-0 w-full h-full"
          dangerouslySetInnerHTML={{ __html: markup(children) }}
        />
      )}
    </span>
  )
}
