'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navigation({ links }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const buttonRef = useRef(null)

  /* Prevent body scroll when menu is open; close on Escape */
  useEffect(() => {
    if (!mobileOpen) return undefined
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`)

  const linkClasses = (href) =>
    `font-mono text-annotation uppercase transition-colors inline-block py-2 ${
      isActive(href)
        ? 'text-accent underline decoration-signal decoration-2 underline-offset-8'
        : 'text-secondary hover:text-primary'
    }`

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border"
      style={{ viewTransitionName: 'site-header' }}
    >
      <nav aria-label="Main" className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.04em] text-primary hover:text-accent transition-colors py-2"
            style={{ fontStretch: '116%' }}
          >
            Álvaro Freire
          </Link>

          <div className="flex items-center gap-1 md:gap-5">
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 mr-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(link.href)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile hamburger — 44px hit area, 20px glyph */}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2 gap-1.5 cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-5 h-0.5 bg-primary origin-center transition-transform duration-200 ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-opacity duration-150 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary origin-center transition-transform duration-200 ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-height panel under the bar; tapping the empty area closes it */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu md:hidden absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-background border-t border-border overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false)
          }}
        >
          <div className="container-wide py-8 flex flex-col gap-1">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`mobile-menu-link ${linkClasses(link.href)} py-3 text-sm`}
                style={{ '--i': i }}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="tick-strip border-border mt-6" aria-hidden="true" />
          </div>
        </div>
      )}
    </header>
  )
}
