/**
 * Clinic — Aurasia's plate. A dental clinic's reception after hours, seen
 * from the waiting room: the window onto Ferrol with the shipyard gantry,
 * the empty chairs, and a phone on its stand at the desk, the one thing
 * awake. The wall clock tells the hour from the site's own copy: 21:30 in
 * the light theme, 23:47 (the time in the demo conversation) in the dark.
 *
 * The phone screen is light, not data, so it uses the lamp tokens; there
 * is no interface drawn on it. Fills come from `.scene-clinic`. Decorative.
 */
import Scene from '@/components/scenes/Scene'
import { scatter } from '@/components/scenes/scatter'

const towns = scatter(5, 22, (r, i) => ({ x: 104 + i * 24 + r() * 8, w: 16 + r() * 14, h: 26 + r() * 56 }))
const windows = scatter(9, 26, (r) => ({ x: 110 + r() * 500, y: 300 + r() * 60 }))

// Wall clock: centre, and hands in degrees from 12 o'clock
const CX = 812
const CY = 140
const hands = {
  day: { h: (21.5 % 12) * 30, m: 30 * 6 },
  night: { h: (23 + 47 / 60 - 12) * 30, m: 47 * 6 },
}

function Hands({ h, m }) {
  return (
    <>
      <path d={`M${CX} ${CY}V${CY - 28}`} className="sc-hand" strokeWidth="6" strokeLinecap="round" transform={`rotate(${h} ${CX} ${CY})`} />
      <path d={`M${CX} ${CY}V${CY - 40}`} className="sc-hand" strokeWidth="3.5" strokeLinecap="round" transform={`rotate(${m} ${CX} ${CY})`} />
    </>
  )
}

export function Art() {
  return (
    <>
      <defs>
        <linearGradient id="cl-outside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="sc-outside-top" />
          <stop offset="1" className="sc-outside-low" />
        </linearGradient>
        <clipPath id="cl-pane">
          <rect x="100" y="70" width="520" height="300" />
        </clipPath>
      </defs>

      <rect width="1600" height="640" className="sc-wall" />
      <rect y="540" width="1600" height="100" className="sc-floor" />
      <rect y="532" width="1600" height="10" className="sc-skirting" />
      <rect x="560" y="0" width="480" height="14" className="sc-ceiling-light" />

      {/* Window onto Ferrol: the shipyard gantry and the town below it */}
      <g clipPath="url(#cl-pane)">
        <rect x="100" y="70" width="520" height="300" fill="url(#cl-outside)" />
        <g className="sc-town">
          <path d="M240 300V150H500V300H476V176H264V300Z" />
          <rect x="220" y="140" width="300" height="16" />
          <rect x="360" y="156" width="40" height="22" />
          {towns.map((b) => (
            <rect key={b.x} x={b.x} y={370 - b.h} width={b.w} height={b.h} />
          ))}
        </g>
        {windows.map((w, i) => (
          <rect key={i} x={w.x.toFixed(0)} y={w.y.toFixed(0)} width="4" height="5" className="sc-lamp" />
        ))}
      </g>
      <rect x="92" y="62" width="536" height="316" className="sc-frame-line" strokeWidth="16" />
      <path d="M360 70V370" className="sc-frame-line" strokeWidth="10" />
      <rect x="84" y="374" width="552" height="14" className="sc-sill" />

      {/* Wall clock */}
      <circle cx={CX} cy={CY} r="52" className="sc-clock" />
      <circle cx={CX} cy={CY} r="52" className="sc-clock-rim" strokeWidth="5" />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d={`M${CX} ${CY - 46}v8`} className="sc-hand" strokeWidth="3" transform={`rotate(${i * 30} ${CX} ${CY})`} />
      ))}

      {/* Reception desk */}
      <rect x="660" y="316" width="840" height="22" className="sc-desk-top" />
      <rect x="680" y="338" width="800" height="200" className="sc-desk" />
      <path d="M680 372H1480M1080 372V538" className="sc-desk-line" strokeWidth="3" />
      <rect x="680" y="296" width="800" height="20" className="sc-desk-back" />


      {/* Plant and an unlit desk lamp */}
      <rect x="1104" y="262" width="44" height="34" rx="4" className="sc-object" />
      <g className="sc-plant">
        <ellipse cx="1110" cy="232" rx="16" ry="34" transform="rotate(-24 1110 232)" />
        <ellipse cx="1140" cy="226" rx="14" ry="38" transform="rotate(18 1140 226)" />
        <ellipse cx="1126" cy="214" rx="12" ry="40" />
      </g>
      {/* Appointment book, closed */}
      <rect x="980" y="284" width="86" height="12" rx="2" className="sc-book" />
      <rect x="988" y="274" width="74" height="10" rx="2" className="sc-book-alt" />
      <path d="M1384 296V236L1420 206" className="sc-object-line" strokeWidth="7" strokeLinecap="round" />
      <path d="M1402 196L1446 214L1430 236Z" className="sc-object" />
      <rect x="1366" y="288" width="40" height="8" rx="3" className="sc-object" />

      {/* Waiting-room chairs, foreground */}
      {[60, 250, 440].map((x) => (
        <g key={x} className="sc-chair">
          <rect x={x} y="410" width="150" height="26" rx="10" />
          <rect x={x + 10} y="330" width="130" height="84" rx="14" />
          <rect x={x + 18} y="436" width="10" height="104" />
          <rect x={x + 122} y="436" width="10" height="104" />
        </g>
      ))}
      <rect x="0" y="600" width="1600" height="40" className="sc-floor-shade" />
    </>
  )
}

// Live layer: the hour on the clock (it follows the theme), the phone on
// its stand and its light on the wall — the one thing awake.
export default function Clinic({ className = '', eager, id = 'cl' }) {
  return (
    <Scene name="clinic" className={className} eager={eager}>
      <defs>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" className="sc-glow-stop" stopOpacity="1" />
          <stop offset="1" className="sc-glow-stop" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-above-desk`}>
          <rect width="1600" height="317" />
        </clipPath>
      </defs>
      <g className="when-light"><Hands {...hands.day} /></g>
      <g className="when-dark"><Hands {...hands.night} /></g>
      <circle cx={CX} cy={CY} r="4" className="sc-hand-dot" />
      <ellipse cx="900" cy="290" rx="300" ry="160" fill={`url(#${id}-glow)`} clipPath={`url(#${id}-above-desk)`} className="sc-glow" />
      <path d="M876 294L890 270H910L924 294Z" className="sc-object" />
      <rect x="874" y="206" width="52" height="92" rx="8" className="sc-object" />
      <rect x="879" y="212" width="42" height="80" rx="5" className="sc-screen" />
    </Scene>
  )
}
