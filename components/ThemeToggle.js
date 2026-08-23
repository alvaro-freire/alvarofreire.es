'use client'

function getEffectiveTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Icon visibility is pure CSS (.theme-icon-light/.theme-icon-dark in
 * globals.css, keyed off [data-theme] / prefers-color-scheme) — no
 * client-side state, so there's nothing to get wrong on hydration.
 * The click handler only flips the attribute and persists the choice.
 */
export default function ThemeToggle() {
  function toggle() {
    const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage unavailable (private mode, etc.) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="theme-toggle shrink-0 w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-colors"
    >
      <svg
        className="theme-icon-light"
        viewBox="0 0 20 20"
        width="18"
        height="18"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="3.75" stroke="currentColor" strokeWidth="1.5" />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M10 1.5v2.25M10 16.25v2.25M18.5 10h-2.25M3.75 10H1.5M15.66 4.34l-1.6 1.6M5.94 14.06l-1.6 1.6M15.66 15.66l-1.6-1.6M5.94 5.94l-1.6-1.6"
        />
      </svg>
      <svg
        className="theme-icon-dark"
        viewBox="0 0 20 20"
        width="18"
        height="18"
        fill="none"
        aria-hidden="true"
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          d="M17.5 11.7A7.6 7.6 0 018.3 2.5a7.6 7.6 0 109.2 9.2z"
        />
      </svg>
    </button>
  )
}
