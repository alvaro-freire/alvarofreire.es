import { ImageResponse } from 'next/og'
import { profile, identityLine } from '@/lib/profile'
import { LAYERS, COW_SHAPES, cows, placement, collarAt } from '@/components/scenes/pastureData'

export const alt = 'Álvaro Freire — an illustrated pasture in Lugo at dawn, cows wearing GPS collars, under the headline “Most of my code ends up on cattle farms in Galicia.”'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Fixed light-theme (dawn) inks: the image is rendered once at build time,
// with no access to a viewer's theme. Same values as .scene-pasture.
const ink = {
  background: '#F2F3EF',
  primary: '#171B18',
  secondary: '#5B6159',
  signal: '#E8B931',
  skyLow: '#ECE2CD',
  distant: '#E0E0D4',
  far: '#C8CFC6',
  mid: '#94A895',
  near: '#58745C',
  ground: '#3D5943',
  cow: '#BC8854',
  fog: '#F7F4EB',
}

const TRACK = 'M 0 118 C 28 120, 55 116, 80 112 C 122 106, 146 114, 186 108 C 234 100, 252 90, 298 94 C 342 97, 362 80, 410 84 C 456 87, 494 68, 540 68 C 570 68, 585 63, 600 60 C 618 56, 634 55, 648 52 C 658 50, 664 48, 672 46 C 700 40, 728 34, 752 28'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: `linear-gradient(to bottom, ${ink.background} 0%, ${ink.background} 30%, ${ink.skyLow} 100%)`,
          color: ink.primary,
          fontFamily: 'sans-serif',
        }}
      >
        <svg
          width="1200"
          height="380"
          viewBox="0 220 1600 420"
          preserveAspectRatio="xMidYMax slice"
          style={{ position: 'absolute', left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={ink.fog} stopOpacity="0" />
              <stop offset="0.5" stopColor={ink.fog} stopOpacity="0.92" />
              <stop offset="1" stopColor={ink.fog} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={LAYERS.distant} fill={ink.distant} />
          <path d={LAYERS.far} fill={ink.far} />
          <rect x="0" y="250" width="1600" height="170" fill="url(#fog)" />
          <path d={LAYERS.mid} fill={ink.mid} />
          <rect x="0" y="400" width="1600" height="110" fill="url(#fog)" opacity="0.85" />
          <path d={LAYERS.near} fill={ink.near} />
          <path d={LAYERS.ground} fill={ink.ground} />
          <path d={TRACK} transform="translate(180 470) scale(1.65 1)" fill="none" stroke={ink.signal} strokeWidth="5" strokeLinecap="round" />
          {cows.map((c) => {
            const [kind, x, y, s, flip] = c
            const { cx, cy } = collarAt(c)
            return (
              <g key={`${x}-${y}`}>
                <g transform={placement(x, y, s, flip)} fill={ink.cow}>
                  {COW_SHAPES[kind].map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
                <circle cx={cx} cy={cy} r={3 + 1.6 * s} fill={ink.signal} />
              </g>
            )
          })}
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '60px 80px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, letterSpacing: 4, textTransform: 'uppercase', color: ink.secondary }}>
            <span>{profile.name}</span>
            <span style={{ letterSpacing: 1, textTransform: 'none' }}>alvarofreire.es</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 68, fontWeight: 800, lineHeight: 1.04, marginTop: 26, letterSpacing: -1 }}>
            {profile.headlineLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ fontSize: 22, color: ink.secondary, marginTop: 22 }}>{identityLine}</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
