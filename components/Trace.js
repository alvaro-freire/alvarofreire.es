/**
 * The hero trace — signature element. One signal-yellow path across a
 * real timeline, with annotated milestone dots. The line is a graphic;
 * the annotations are verified facts.
 *
 * Time axis: x = (year − 2022) × 160 viewBox units (0 = Jan 2022).
 * The SVG stretches vertically (`preserveAspectRatio="none"`) so it keeps
 * a readable height on phones; strokes and dots don't scale with it
 * (`vector-effect="non-scaling-stroke"`, dots are zero-length round-capped
 * paths) so the line stays 2.5px and the dots stay round.
 *
 * Purely decorative for assistive tech: the <dl> of milestones below it is
 * the accessible version.
 */
const YEARS = ['2022', '2023', '2024', '2025', '2026']

export default function Trace({ milestones }) {
  const drawSeconds = 1.4
  const drawDelay = 0.2

  return (
    <div className="mt-14 md:mt-20" aria-hidden="true">
      <div className="dot-grid pt-4 pb-2">
        <svg
          viewBox="0 0 800 132"
          preserveAspectRatio="none"
          className="block w-full h-32 sm:h-36 md:h-auto md:aspect-[800/132]"
          fill="none"
        >
          <path
            className="trace-path text-signal"
            d="M 0 118 C 28 120, 55 116, 80 112 C 122 106, 146 114, 186 108 C 234 100, 252 90, 298 94 C 342 97, 362 80, 410 84 C 456 87, 494 68, 540 68 C 570 68, 585 63, 600 60 C 618 56, 634 55, 648 52 C 658 50, 664 48, 672 46 C 700 40, 728 34, 752 28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength="1000"
          />
          {milestones.map((m, i) => {
            const isNow = i === milestones.length - 1
            return (
              <path
                key={m.year + m.fact}
                className={`trace-dot ${isNow ? 'text-signal' : 'text-primary'}`}
                d={`M ${m.x} ${m.y} h 0`}
                stroke="currentColor"
                strokeWidth={isNow ? 9 : 8}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ animationDelay: `${(drawDelay + drawSeconds * (m.x / 800)).toFixed(2)}s` }}
              />
            )
          })}
          {/* Ink ring around the "now" point so the yellow reads as a marker */}
          {milestones.length > 0 && (
            <path
              className="trace-dot text-primary"
              d={`M ${milestones[milestones.length - 1].x} ${milestones[milestones.length - 1].y} h 0`}
              stroke="currentColor"
              strokeWidth="13"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                animationDelay: `${(drawDelay + drawSeconds * (milestones[milestones.length - 1].x / 800)).toFixed(2)}s`,
                mixBlendMode: 'normal',
              }}
              opacity="0.35"
            />
          )}
        </svg>
      </div>
      <div className="tick-strip border-primary/60 mt-1" />
      <div className="mt-1.5 grid grid-cols-5 font-mono text-annotation text-secondary">
        {YEARS.map((y) => (
          <span key={y} className="border-l border-border pl-1.5">
            {y}
          </span>
        ))}
      </div>
    </div>
  )
}
