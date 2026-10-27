/**
 * Pasture, Lugo — the home plate. Layered like a print: the Serra do
 * Xistral ridge with its wind turbines, two bands of brétema, carballo
 * clumps and a hórreo on the middle hill, a stone wall, and Rubia Galega
 * cows wearing collars. Light theme is dawn; dark theme is night, with
 * the turbine beacons, the stars and the collar halos on.
 *
 * Every fill is a token from `.scene-pasture` in globals.css — no colors
 * here. The collar fixes are the only data marks (signal yellow) and they
 * "acquire" left to right on load (`.trace-dot` + `markDelay`).
 *
 * The viewBox is wide (1600×640) and sliced from the bottom-centre, so
 * phones see the middle of the field; nothing essential sits at the edges.
 * Decorative: always rendered `aria-hidden`.
 *
 * The geometry lives in pastureData.js so the OG image and the 404 can
 * read it too.
 */
import { collarDelay } from '@/components/Trace'
import { scatter } from '@/components/scenes/scatter'
import Scene from '@/components/scenes/Scene'
import { COW_SHAPES, LAYERS, cows, placement, collarAt } from '@/components/scenes/pastureData'

// Stars stay right of the text column; tufts sit in the foreground field
const stars = scatter(7, 30, (r) => ({ x: Math.round(990 + r() * 610), y: Math.round(14 + r() * 230), s: (0.7 + r() * 1.1).toFixed(1) }))
// Each tuft is three blades, as one path
const grass = scatter(11, 40, (r) => {
  const x = Math.round(r() * 1600)
  const y = Math.round(592 + r() * 44)
  const h = Math.round(4 + r() * 5)
  return `M${x} ${y}l-1.5 -${h - 1}M${x} ${y}v-${h}M${x} ${y}l2 -${h - 2}`
}).join('')

// The far ridge rises to the east; turbines stand on it
const RIDGE = [[0, 420], [440, 388], [800, 350], [1160, 278], [1600, 214]]
const ridgeY = (x) => {
  const i = RIDGE.findIndex(([rx]) => rx >= x)
  const [x0, y0] = RIDGE[Math.max(0, i - 1)]
  const [x1, y1] = RIDGE[i]
  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0 || 1) + 5
}

// Wind turbines along the far ridge: x, base y, blade rotation
const turbines = [
  [1004, 47], [1082, 12], [1166, 71], [1250, 33], [1336, 58], [1418, 20], [1508, 44], [1588, 66],
].map(([x, a]) => {
  const y = Math.round(ridgeY(x))
  const hub = y - 58
  // Tower plus three blades, one path per turbine
  const blades = [0, 120, 240]
    .map((r) => {
      const t = ((a + r) * Math.PI) / 180
      return `M${x} ${hub}l${(25 * Math.sin(t)).toFixed(1)} ${(-25 * Math.cos(t)).toFixed(1)}`
    })
    .join('')
  return { x, hub, d: `M${x} ${y}V${hub}${blades}` }
})

const p = (name) => `pa-${name}`

export function Art() {
  return (
    <>
      <defs>
        <linearGradient id={p('fog')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="sc-fog" stopOpacity="0" />
          <stop offset="0.5" className="sc-fog" stopOpacity="0.92" />
          <stop offset="1" className="sc-fog" stopOpacity="0" />
        </linearGradient>
        <pattern id={p('stip')} width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.95" className="sc-stipple" />
          <circle cx="5" cy="5" r="0.75" className="sc-stipple" />
        </pattern>
        <mask id={p('crescent')}>
          <circle cx="1296" cy="132" r="21" fill="white" />
          <circle cx="1306" cy="125" r="18" fill="black" />
        </mask>
        {Object.entries(COW_SHAPES).map(([kind, shapes]) => (
          <symbol key={kind} id={p(kind)} viewBox="0 0 100 60">
            {shapes.map((d) => (
              <path key={d} d={d} />
            ))}
          </symbol>
        ))}
      </defs>

      {/* Sky marks: low sun by day, crescent and stars by night */}
      <circle cx="1150" cy="318" r="66" className="sc-sun" />
      <rect x="1270" y="100" width="60" height="60" className="sc-moon" mask={`url(#${p('crescent')})`} />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.s} className="sc-star" />
      ))}

      {/* Distant hills, almost sky */}
      <path
        className="sc-distant"
        d={LAYERS.distant}
      />

      {/* Far ridge — Serra do Xistral, with its wind farm */}
      <path
        className="sc-far"
        d={LAYERS.far}
      />
      {turbines.map((t) => (
        <g key={t.x}>
          <path d={t.d} className="sc-turbine" strokeWidth="1.9" strokeLinecap="round" />
          <circle cx={t.x} cy={t.hub} r="2.4" className="sc-turbine-hub" />
          <circle cx={t.x} cy={t.hub} r="1.9" className="sc-beacon" />
        </g>
      ))}

      <rect x="0" y="250" width="1600" height="170" fill={`url(#${p('fog')})`} />

      {/* Middle hill — carballos to the west, eucalyptus to the east, a hórreo */}
      <path
        className="sc-mid"
        d={LAYERS.mid}
      />
      <g className="sc-tree">
        {[
          [70, 452, 18], [96, 444, 22], [128, 446, 17], [152, 440, 20], [180, 442, 15],
          [214, 436, 19], [242, 438, 14], [520, 446, 13], [540, 440, 16], [562, 444, 12],
          [820, 420, 12], [842, 414, 15], [866, 418, 11],
        ].map(([x, y, r]) => (
          <circle key={x} cx={x} cy={y} r={r} />
        ))}
        {[1392, 1408, 1426, 1446, 1462, 1484, 1500, 1522, 1544].map((x, i) => (
          <ellipse key={x} cx={x} cy={346 - (i % 3) * 6 - (x - 1392) * 0.05} rx="7.5" ry={24 + (i % 2) * 6} />
        ))}
        {/* Hórreo: stone stilts, granary body, pitched roof with a cross */}
        <g transform="translate(1236 362)">
          <rect x="2" y="12" width="4" height="10" />
          <rect x="18" y="12" width="4" height="10" />
          <rect x="34" y="12" width="4" height="10" />
          <rect x="-1" y="10" width="42" height="3" />
          <rect x="1" y="-4" width="38" height="14" />
          <path d="M-3 -4L20 -14L43 -4Z" />
          <path d="M19 -21h2v8h-2zM17 -18h6v2h-6z" />
        </g>
      </g>
      {/* A farmhouse window: dim by day, lit at night */}
      <g className="sc-tree">
        <rect x="632" y="424" width="34" height="22" />
        <path d="M628 424L649 412L670 424Z" />
      </g>
      <rect x="644" y="431" width="7" height="7" className="sc-lamp" />

      <rect x="0" y="400" width="1600" height="110" fill={`url(#${p('fog')})`} opacity="0.85" />

      {/* Near hill, stippled, with a dry-stone wall along its crest */}
      <path
        id={p('near')}
        className="sc-near"
        d={LAYERS.near}
      />
      <use href={`#${p('near')}`} fill={`url(#${p('stip')})`} />
      <path
        className="sc-rim"
        d="M-10 529C200 509 380 501 560 511C760 523 900 487 1100 479C1280 471 1440 471 1610 463"
        strokeWidth="2.5"
      />
      <path
        className="sc-wall-line"
        d="M-10 538C200 518 380 510 560 520C760 532 900 496 1100 488C1280 480 1440 480 1610 472"
        strokeWidth="7"
        strokeDasharray="11 3"
        strokeLinecap="round"
      />

      {/* Foreground field */}
      <path
        id={p('ground')}
        className="sc-ground"
        d={LAYERS.ground}
      />
      <use href={`#${p('ground')}`} fill={`url(#${p('stip')})`} />
      <path d={grass} className="sc-grass" strokeWidth="1.1" strokeLinecap="round" />

      {/* Herd */}
      {cows.map(([kind, x, y, s, flip]) => (
        <g key={`${x}-${y}`}>
          <ellipse cx={Math.round(x - 34 * s)} cy={y - 1} rx={Math.round(62 * s)} ry={(3.6 * s).toFixed(1)} className="sc-shadow" />
          <use href={`#${p(kind)}`} width="100" height="60" className="sc-cow" transform={placement(x, y, s, flip)} />
        </g>
      ))}

    </>
  )
}

// Live layer: the collar fixes — the data marks. They acquire left to right.
export default function Pasture({ className = '', eager }) {
  return (
    <Scene name="pasture" align="xMidYMax" className={className} eager={eager}>
      {cows.map((c) => {
        const { cx, cy } = collarAt(c)
        const delay = { animationDelay: `${collarDelay(cx / 1600)}s` }
        return (
          <g key={`fix-${c[1]}`}>
            <circle cx={Math.round(cx)} cy={Math.round(cy)} r={Math.round(8 + 4 * c[3])} className="sc-halo trace-dot" style={delay} />
            <circle cx={Math.round(cx)} cy={Math.round(cy)} r={(2.2 + 1.3 * c[3]).toFixed(1)} className="sc-signal trace-dot" style={delay} />
          </g>
        )
      })}
    </Scene>
  )
}
