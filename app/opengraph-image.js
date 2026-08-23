import { ImageResponse } from 'next/og'
import { identityLine } from '@/lib/profile'

export const alt = 'Álvaro Freire — AI agents in production, measured.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F2F3EF',
          color: '#171B18',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#5B6159',
            }}
          >
            Álvaro Freire
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: 36,
              maxWidth: 980,
            }}
          >
            I put AI agents into production — and measure whether they work.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <svg width="1040" height="90" viewBox="0 0 1040 90">
            <polyline
              points="0,70 140,58 260,64 380,34 520,42 660,20 800,28 940,8 1040,14"
              fill="none"
              stroke="#E8B931"
              strokeWidth="5"
            />
            <circle cx="140" cy="58" r="8" fill="#171B18" />
            <circle cx="380" cy="34" r="8" fill="#171B18" />
            <circle cx="660" cy="20" r="8" fill="#171B18" />
            <circle cx="940" cy="8" r="8" fill="#171B18" />
            <line x1="0" y1="89" x2="1040" y2="89" stroke="#DCDFD6" strokeWidth="2" />
          </svg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 22,
              color: '#5B6159',
              marginTop: 16,
            }}
          >
            <span>{identityLine}</span>
            <span>alvarofreire.es</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
