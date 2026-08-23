'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const buttonRef = useRef(null)

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* Prevent body scroll when menu is open; close on Escape */
  useEffect(() => {
    if (!mobileOpen) return
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

  const linkClasses = (href) =>
    `font-mono text-annotation uppercase transition-colors inline-block py-2 ${
      pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
        ? 'text-accent underline decoration-signal decoration-2 underline-offset-8'
        : 'text-secondary hover:text-primary'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <nav aria-label="Main" className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-[0.9375rem] font-extrabold uppercase tracking-[0.04em] text-primary hover:text-accent transition-colors"
            style={{ fontStretch: '116%' }}
          >
            Álvaro Freire
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              ref={buttonRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
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

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border"
        >
          <div className="container-wide py-6 flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`${linkClasses(link.href)} py-3 text-sm`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
