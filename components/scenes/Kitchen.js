/**
 * Kitchen — Trazea's plate. A restaurant kitchen seen across the steel
 * prep counter: tiled wall, a high window, the hood, a ticket rail, and a
 * supplier crate with a tin of olive oil whose label is being read. The
 * read lot line is framed in signal yellow (the one data mark): that's
 * the OCR step, nothing else in the drawing claims to be the product.
 * Light theme is midday prep; dark theme is after service, one pendant on.
 *
 * Fills come from `.scene-kitchen` tokens in globals.css. Decorative.
 */
import Scene from '@/components/scenes/Scene'
const tickets = [1132, 1206, 1282, 1350, 1428]

export function Art() {
  return (
    <>
      <defs>
        <pattern id="ki-tiles" width="44" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H44M0.5 0V30" className="sc-grout" strokeWidth="1.2" />
        </pattern>
        <linearGradient id="ki-shaft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" className="sc-shaft-stop" stopOpacity="0.7" />
          <stop offset="1" className="sc-shaft-stop" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ki-pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" className="sc-pool-stop" stopOpacity="1" />
          <stop offset="1" className="sc-pool-stop" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wall and tiles */}
      <rect width="1600" height="640" className="sc-wall" />
      <rect width="1600" height="430" fill="url(#ki-tiles)" />

      {/* High window, and the daylight it throws across the tiles */}
      <rect x="132" y="52" width="388" height="168" className="sc-frame" />
      <rect x="144" y="64" width="364" height="144" className="sc-window" />
      <path d="M326 64V208M144 136H508" className="sc-frame-line" strokeWidth="8" />
      <path d="M144 208L508 208L980 430L420 430Z" fill="url(#ki-shaft)" />

      {/* Hood */}
      <path d="M560 0H1040V46L1086 150H514L560 46Z" className="sc-steel" />
      <path d="M514 150H1086V164H514Z" className="sc-steel-dark" />
      <path d="M600 60H1000M590 84H1010M580 108H1020" className="sc-steel-line" strokeWidth="2" />

      {/* Hood light: dim by day, the only light left on after service */}
      <rect x="600" y="160" width="400" height="6" className="sc-lamp" />
      <path d="M600 166H1000L1100 430H500Z" className="sc-cone" />
      <ellipse cx="800" cy="430" rx="360" ry="36" fill="url(#ki-pool)" />

      {/* Ticket rail with the day's orders */}
      <path d="M1098 236H1490" className="sc-steel-line" strokeWidth="6" strokeLinecap="round" />
      {tickets.map((x, i) => (
        <g key={x}>
          <rect x={x} y="240" width="52" height={78 + (i % 3) * 14} className="sc-paper" />
          {[256, 268, 280, 292].map((y) => (
            <path key={y} d={`M${x + 8} ${y}h${(i * 7 + y) % 3 === 0 ? 24 : 36}`} className="sc-ink" strokeWidth="2.5" />
          ))}
        </g>
      ))}

      {/* Shelf with pots, left of the hood */}
      <path d="M40 300H480" className="sc-steel-line" strokeWidth="6" />
      <rect x="64" y="246" width="96" height="54" rx="4" className="sc-steel-dark" />
      <rect x="56" y="240" width="112" height="8" rx="3" className="sc-steel-dark" />
      <rect x="190" y="262" width="124" height="38" rx="4" className="sc-steel-dark" />
      <path d="M314 270h22M168 252h12" className="sc-steel-dark-line" strokeWidth="6" strokeLinecap="round" />
      <rect x="352" y="232" width="84" height="68" rx="6" className="sc-steel-dark" />

      {/* Counter */}
      <rect y="430" width="1600" height="210" className="sc-steel" />
      <rect y="420" width="1600" height="14" className="sc-steel-top" />
      <path d="M0 434H1600" className="sc-steel-line" strokeWidth="2" />
      <path d="M200 450V640M600 450V640M1000 450V640M1400 450V640" className="sc-steel-line" strokeWidth="2" />
      <path d="M380 520H420M780 520H820M1180 520H1220" className="sc-steel-dark-line" strokeWidth="5" strokeLinecap="round" />

      {/* Cutting board, knife, onions */}
      <rect x="250" y="410" width="250" height="12" rx="3" className="sc-wood" />
      <path d="M280 406H420L452 400L420 410H280Z" className="sc-steel-dark" />
      <circle cx="476" cy="396" r="15" className="sc-onion" />
      <circle cx="508" cy="402" r="11" className="sc-onion" />

      {/* Tomatoes in a steel bowl */}
      <circle cx="1146" cy="372" r="20" className="sc-tomato" />
      <circle cx="1184" cy="366" r="22" className="sc-tomato" />
      <circle cx="1222" cy="374" r="19" className="sc-tomato" />
      <circle cx="1166" cy="352" r="17" className="sc-tomato" />
      <path d="M1180 346l6 -8M1162 336l4 -7" className="sc-stem" strokeWidth="3" strokeLinecap="round" />
      <path d="M1110 380H1260C1256 408 1226 420 1185 420C1144 420 1114 408 1110 380Z" className="sc-steel-dark" />

      {/* Supplier crate */}
      <rect x="620" y="318" width="360" height="104" className="sc-wood" />
      <path d="M620 352H980M620 386H980" className="sc-wood-line" strokeWidth="4" />
      <path d="M640 318V422M960 318V422" className="sc-wood-line" strokeWidth="6" />

      {/* The tin of olive oil and its label */}
      <rect x="690" y="224" width="132" height="196" rx="6" className="sc-tin" />
      <rect x="730" y="208" width="34" height="18" rx="3" className="sc-steel-dark" />
      <rect x="702" y="276" width="108" height="104" className="sc-label" />
      <path d="M714 296h70M714 312h52" className="sc-ink" strokeWidth="5" />
      <path d="M714 346h84M714 364h60" className="sc-ink" strokeWidth="3" />


      {/* Stockpot, right */}
      <rect x="1340" y="336" width="130" height="86" rx="6" className="sc-copper" />
      <rect x="1330" y="328" width="150" height="10" rx="4" className="sc-copper-dark" />
      <path d="M1330 356h-16M1480 356h16" className="sc-copper-line" strokeWidth="8" strokeLinecap="round" />
    </>
  )
}

// Live layer: the OCR read. Brackets draw in when the plate is revealed.
export default function Kitchen({ className = '', eager }) {
  return (
    <Scene name="kitchen" className={className} eager={eager}>
      <g className="sc-read" strokeWidth="3.5" strokeLinecap="square">
        <path pathLength="100" d="M706 352v-12h12M794 340h12v12M806 358v12h-12M718 370h-12v-12" />
      </g>
    </Scene>
  )
}
