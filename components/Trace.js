/**
 * The trace — signature element. A GPS track in signal yellow laid over
 * the pasture scene: the collars acquire signal first (left to right),
 * then the track draws across the field and stops at "Now". The line is
 * a graphic; the waypoints are verified facts (the <dl> under the scene
 * is the accessible version).
 *
 * Time axis: x = (year − 2022) × 160 viewBox units (0 = Jan 2022).
 * The SVG stretches to its box (`preserveAspectRatio="none"`) so every
 * waypoint stays visible however the landscape behind it is cropped;
 * strokes and dots don't scale with it (`vector-effect="non-scaling-stroke"`,
 * dots are zero-length round-capped paths).
 */
const TRACK_DELAY = 0.9
const TRACK_SECONDS = 1.4

// Collar fixes acquire before the track: f is the 0–1 position across the field
export const collarDelay = (f) => (0.1 + 0.75 * f).toFixed(2)

// A waypoint (and its annotation) appears when the track reaches it
export const markDelay = (x) => (TRACK_DELAY + TRACK_SECONDS * (x / 800)).toFixed(2)

export default function Trace({ milestones, className = '' }) {
  const now = milestones[milestones.length - 1]

  return (
    <svg
      viewBox="0 0 800 132"
      preserveAspectRatio="none"
      className={`sc-waypoint ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        className="trace-path text-signal"
        d="M 0 118 C 28 120, 55 116, 80 112 C 122 106, 146 114, 186 108 C 234 100, 252 90, 298 94 C 342 97, 362 80, 410 84 C 456 87, 494 68, 540 68 C 570 68, 585 63, 600 60 C 618 56, 634 55, 648 52 C 658 50, 664 48, 672 46 C 700 40, 728 34, 752 28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength="1000"
        style={{ animationDelay: `${TRACK_DELAY}s` }}
      />
      {/* Ring around "now" so the yellow reads as a marker on any ground */}
      <path
        className="trace-dot"
        d={`M ${now.x} ${now.y} h 0`}
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.45"
        style={{ animationDelay: `${markDelay(now.x)}s` }}
      />
      {milestones.map((m) => {
        const isNow = m === now
        return (
          <path
            key={m.year + m.fact}
            className={`trace-dot ${isNow ? 'text-signal' : ''}`}
            d={`M ${m.x} ${m.y} h 0`}
            stroke="currentColor"
            strokeWidth={isNow ? 10 : 8}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ animationDelay: `${markDelay(m.x)}s` }}
          />
        )
      })}
    </svg>
  )
}
