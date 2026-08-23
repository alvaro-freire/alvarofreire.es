module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2F3EF',   // fog — cool grey-green
        primary: '#171B18',      // ink — near-black, green cast
        secondary: '#5B6159',    // moss — secondary text
        accent: '#2E4B3C',       // pasture — structural accent
        signal: '#E8B931',       // ear-tag yellow — data marks only
        border: '#DCDFD6',       // grid — axes, ticks, borders
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        'content': '720px',
        'content-wide': '1080px',
      },
      fontSize: {
        'display': ['clamp(2.375rem, 1.55rem + 3.7vw, 4rem)', { lineHeight: '1.04', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h1': ['clamp(1.875rem, 1.4rem + 2.1vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h2': ['clamp(1.375rem, 1.2rem + 0.9vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '700' }],
        'numeral': ['clamp(2rem, 1.6rem + 1.8vw, 3rem)', { lineHeight: '1', fontWeight: '700' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'annotation': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
