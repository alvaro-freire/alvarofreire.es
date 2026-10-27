/**
 * Workshop — CoWtrol's plate. The assembly bench in Abadín that the
 * internal platform runs: stock on the shelves, collars being assembled
 * and packed, a pegboard of tools, and the pasture outside the window
 * (the same hills as the home plate). Collar fixes are the data marks.
 * Light theme is morning; dark theme is a late shift under the bench lamp.
 *
 * Fills come from `.scene-workshop` tokens. Decorative.
 */
import Scene from '@/components/scenes/Scene'
const collars = [212, 352, 492, 632]

function Collar({ x }) {
  return (
    <g>
      <ellipse cx={x} cy="372" rx="50" ry="42" className="sc-strap" strokeWidth="14" />
      <rect x={x - 9} y="324" width="18" height="14" rx="2" className="sc-buckle" />
      <rect x={x - 24} y="394" width="48" height="32" rx="5" className="sc-unit" />
    </g>
  )
}

export function Art() {
  return (
    <>
      <defs>
        <pattern id="ws-peg" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="11" cy="11" r="2.2" className="sc-peg-hole" />
        </pattern>
        <clipPath id="ws-pane">
          <rect x="1130" y="70" width="380" height="250" />
        </clipPath>
        <radialGradient id="ws-pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" className="sc-pool-stop" stopOpacity="1" />
          <stop offset="1" className="sc-pool-stop" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="640" className="sc-wall" />

      {/* Window onto the pasture */}
      <g clipPath="url(#ws-pane)">
        <rect x="1130" y="70" width="380" height="250" className="sc-outside" />
        <path d="M1130 238C1200 222 1260 214 1330 220C1400 226 1450 206 1510 200V320H1130Z" className="sc-hill-far" />
        <path d="M1130 276C1220 262 1300 258 1380 266C1440 272 1480 262 1510 258V320H1130Z" className="sc-hill-near" />
        <path d="M1452 214V160M1452 160l-14 -18M1452 160l20 -8M1452 160l-4 24" className="sc-hill-far-line" strokeWidth="2.5" />
      </g>
      <rect x="1122" y="62" width="396" height="266" className="sc-frame-line" strokeWidth="16" />
      <path d="M1320 70V320" className="sc-frame-line" strokeWidth="10" />

      {/* Pegboard with tools */}
      <rect x="110" y="70" width="520" height="250" className="sc-board" />
      <rect x="110" y="70" width="520" height="250" fill="url(#ws-peg)" />
      <g className="sc-tool">
        <path d="M170 110h14v120h-14z M164 230h26v36h-26z" />
        <path d="M240 104l12 0l0 70l14 14l-8 8l-18 -18z" />
        <circle cx="330" cy="130" r="26" />
        <rect x="324" y="150" width="12" height="110" rx="4" />
        <path d="M420 100h70v28h-70z M440 128h30v130h-30z" />
        <path d="M540 110l16 0l0 130l-8 16l-8 -16z" />
      </g>
      <circle cx="330" cy="130" r="13" className="sc-board" />

      {/* Shelving: stock in boxes */}
      <rect x="680" y="40" width="14" height="390" className="sc-rack" />
      <rect x="1046" y="40" width="14" height="390" className="sc-rack" />
      {[110, 210, 310].map((y, row) => (
        <g key={y}>
          <rect x="680" y={y} width="380" height="10" className="sc-rack" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={704 + i * 86 + (row % 2) * 12}
              y={y - 54 + ((i + row) % 3) * 8}
              width="74"
              height={54 - ((i + row) % 3) * 8}
              className={(i + row) % 4 === 1 ? 'sc-box-dark' : 'sc-box'}
            />
          ))}
        </g>
      ))}

      {/* Bench lamp, lit on the late shift */}
      <path d="M450 0V22" className="sc-cord" strokeWidth="2" />
      <path d="M410 22H490L510 48H390Z" className="sc-lamp-shade" />
      <ellipse cx="450" cy="49" rx="54" ry="4" className="sc-lamp" />
      <ellipse cx="560" cy="430" rx="420" ry="40" fill="url(#ws-pool)" />

      {/* Bench */}
      <rect y="430" width="1600" height="22" className="sc-bench-top" />
      <rect y="452" width="1600" height="188" className="sc-bench" />
      <path d="M120 452V640M1480 452V640" className="sc-bench-line" strokeWidth="22" />
      {[300, 700, 1100].map((x) => (
        <g key={x}>
          <rect x={x - 150} y="476" width="300" height="70" rx="3" className="sc-drawer" />
          <path d={`M${x - 28} 511h56`} className="sc-bench-line" strokeWidth="7" strokeLinecap="round" />
        </g>
      ))}

      {/* Collars being assembled */}
      {collars.map((x) => (
        <Collar key={x} x={x} />
      ))}

      {/* A carton being packed, with a collar inside */}
      <path d="M1020 330H1300L1290 430H1030Z" className="sc-box" />
      <path d="M1020 330L980 296L1060 296L1080 330Z M1300 330L1340 296L1260 296L1240 330Z" className="sc-box-dark" />
      <ellipse cx="1160" cy="336" rx="70" ry="16" className="sc-strap" strokeWidth="9" />
      <rect x="1360" y="384" width="120" height="46" rx="4" className="sc-unit" />
      <rect x="1374" y="396" width="54" height="10" className="sc-box" />
    </>
  )
}

// Live layer: the collars on the bench acquire signal one by one
export default function Workshop({ className = '', eager }) {
  return (
    <Scene name="workshop" className={className} eager={eager}>
      {collars.map((x, i) => (
        <circle key={x} cx={x + 12} cy="406" r="4" className="sc-signal" style={{ '--i': i }} />
      ))}
    </Scene>
  )
}
