/**
 * Plate — frames a scene as a printed plate: a cropped viewport onto the
 * scene's SVG (sliced from the centre, so the subject survives any aspect
 * ratio), hairline registration marks, and a mono caption that names the
 * place and the hour. The hour follows the theme (light = day, dark =
 * night) through the same `.when-light` / `.when-dark` cascade as the
 * theme toggle.
 *
 * Scenes are illustration, not evidence: the caption always says so, and
 * the whole plate is hidden from assistive tech (the case study text next
 * to it carries the content).
 */
export default function Plate({ scene: Scene, kind, place, day, night, frame = 'aspect-[21/9]', sky = false, sceneProps = {}, sceneClass = 'absolute inset-0 w-full h-full', className = '', reveal = true }) {
  return (
    <figure className={`scene scene-${kind} ${className}`} aria-hidden="true" {...(reveal ? { 'data-reveal': '' } : {})}>
      <div className={`plate reg-marks relative overflow-hidden ${sky ? 'scene-sky' : ''} ${frame}`}>
        <Scene className={sceneClass} {...sceneProps} />
      </div>
      <figcaption className="mono-label mt-3">
        Illustration · {place} · <span className="when-light">{day}</span>
        <span className="when-dark">{night}</span>
      </figcaption>
    </figure>
  )
}
