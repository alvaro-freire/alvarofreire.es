/**
 * Ría — Ares, where I live. The ría at blue hour (light theme) or at
 * night (dark theme): the far shore with its lights, mussel rafts on the
 * water, the breakwater with its green harbour light, moored boats, and
 * the village climbing the slope. One data mark: a signal-yellow fix on
 * the village — the coordinates printed next to the plate.
 *
 * Crops differ per page (wide on About, closer on Contact, a thin horizon
 * strip on the blog); the drawing is the same. It anchors right by default
 * so narrow crops keep the village. Decorative.
 */
import Scene from '@/components/scenes/Scene'
import { scatter } from '@/components/scenes/scatter'

const shoreLights = scatter(3, 24, (r) => ({ x: r() * 1600, y: 322 + r() * 22 }))
const ripples = scatter(13, 48, (r) => ({ x: r() * 1600, y: 368 + r() * 250, w: 30 + r() * 90 }))
const houses = [
  [1110, 430, 70, 46], [1170, 404, 64, 48], [1236, 380, 74, 52], [1298, 352, 68, 50],
  [1362, 330, 80, 54], [1430, 312, 66, 50], [1496, 296, 76, 52], [1220, 450, 80, 44],
  [1310, 420, 72, 46], [1392, 392, 70, 48], [1470, 368, 72, 48],
]
const boats = [[540, 498, 1], [660, 506, 0.85], [800, 494, 1.1]]

export function Art() {
  return (
    <>
      <defs>
        <linearGradient id="ri-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="sc-sky-top" />
          <stop offset="1" className="sc-sky-low-stop" />
        </linearGradient>
        <linearGradient id="ri-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="sc-water-top" />
          <stop offset="1" className="sc-water-low" />
        </linearGradient>
      </defs>

      <rect width="1600" height="360" fill="url(#ri-sky)" />
      <circle cx="380" cy="120" r="2" className="sc-star" />
      <circle cx="560" cy="64" r="1.4" className="sc-star" />
      <circle cx="760" cy="150" r="1.6" className="sc-star" />
      <circle cx="980" cy="90" r="1.2" className="sc-star" />
      <circle cx="1220" cy="140" r="1.8" className="sc-star" />
      <circle cx="160" cy="70" r="1.3" className="sc-star" />

      {/* Far shore across the ría */}
      <path d="M0 300C140 284 260 290 400 300C560 312 700 286 880 288C1040 290 1180 276 1320 280C1440 284 1520 296 1600 300V362H0Z" className="sc-far" />
      <path d="M0 330C200 322 420 330 640 334C880 338 1120 326 1600 330V362H0Z" className="sc-mid" />
      {shoreLights.map((l, i) => (
        <rect key={i} x={l.x.toFixed(0)} y={l.y.toFixed(0)} width="3" height="3" className="sc-lamp" />
      ))}

      {/* Water */}
      <rect y="360" width="1600" height="280" fill="url(#ri-water)" />
      <g className="sc-ripple" strokeWidth="1.6" strokeLinecap="round">
        {ripples.map((r, i) => (
          <path key={i} d={`M${r.x.toFixed(0)} ${r.y.toFixed(0)}h${r.w.toFixed(0)}`} />
        ))}
      </g>
      {shoreLights.filter((_, i) => i % 3 === 0).map((l, i) => (
        <path key={i} d={`M${l.x.toFixed(0)} 372v40`} className="sc-reflection" strokeWidth="2" strokeDasharray="5 6" />
      ))}

      {/* Mussel rafts */}
      {[[860, 392], [960, 388], [1060, 394], [920, 410], [1020, 414]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="72" height="7" className="sc-raft" />
      ))}

      {/* Breakwater with its green harbour light */}
      <path d="M0 452L860 440L872 462L0 478Z" className="sc-stone" />
      <path d="M0 452L860 440" className="sc-stone-top" strokeWidth="3" />
      <rect x="846" y="404" width="10" height="38" className="sc-stone" />
      <circle cx="851" cy="400" r="6" className="sc-harbour-light" />
      <path d="M851 470v46" className="sc-harbour-reflection" strokeWidth="3" strokeDasharray="6 5" />

      {/* Moored boats inside the harbour */}
      {boats.map(([x, y, s]) => (
        <g key={x} transform={`translate(${x} ${y}) scale(${s})`}>
          <path d="M-60 0H60L44 22H-44Z" className="sc-hull" />
          <rect x="-18" y="-24" width="34" height="24" className="sc-cabin" />
          <path d="M28 0V-62" className="sc-mast" strokeWidth="3" />
        </g>
      ))}

      {/* The village on the slope */}
      <path d="M1040 640V470C1160 420 1300 330 1440 290C1500 274 1560 268 1600 266V640Z" className="sc-slope" />
      {houses.map(([x, y, w, h]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={h} className="sc-house" />
          <path d={`M${x - 6} ${y}L${x + w / 2} ${y - 20}L${x + w + 6} ${y}Z`} className="sc-roof" />
          <rect x={x + w * 0.22} y={y + h * 0.3} width="10" height="12" className="sc-window" />
          <rect x={x + w * 0.62} y={y + h * 0.3} width="10" height="12" className="sc-window-alt" />
        </g>
      ))}
      {/* Church tower */}
      <rect x="1548" y="196" width="40" height="100" className="sc-house" />
      <path d="M1542 196L1568 160L1594 196Z" className="sc-roof" />
      <rect x="1562" y="214" width="12" height="20" className="sc-window" />

      {/* Promenade and sand, foreground */}
      <path d="M0 560C300 552 700 556 1040 560L1040 640H0Z" className="sc-sand" />
      <path d="M0 556C300 548 700 552 1040 556" className="sc-rail" strokeWidth="3" />
      {Array.from({ length: 27 }, (_, i) => (
        <path key={i} d={`M${i * 40} ${555 - i * 0.05}v-26`} className="sc-rail" strokeWidth="3" />
      ))}
      <path d="M0 529C300 521 700 525 1040 529" className="sc-rail" strokeWidth="3" />

    </>
  )
}

// Live layer: the fix on Ares
export default function Ria({ className = '', align = 'xMaxYMid', eager }) {
  return (
    <Scene name="ria" align={align} className={className} eager={eager}>
      <circle cx="1300" cy="440" r="14" className="sc-halo" />
      <circle cx="1300" cy="440" r="6" className="sc-signal" />
      <circle cx="1300" cy="440" r="11" className="sc-fix-ring" strokeWidth="2" />
    </Scene>
  )
}
