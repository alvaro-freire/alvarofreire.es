'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * The one piece of motion JavaScript on the site.
 *
 * Elements marked `data-reveal` start hidden (CSS, only under `html.js`
 * and `prefers-reduced-motion: no-preference`) and get `data-revealed`
 * when they enter the viewport; the transition itself lives in
 * globals.css. Elements already on screen at scan time are marked
 * `instant` so nothing above the fold flickers and LCP is untouched.
 *
 * `data-count` numerals count up once to the value already in the HTML.
 * Without JS, with reduced motion, or for crawlers: everything is visible
 * from the first render — this component only ever adds attributes.
 */
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

function countUp(el) {
  const target = Number(el.dataset.count)
  if (!Number.isFinite(target)) return
  const final = el.textContent
  const duration = 600
  const start = performance.now()
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration)
    el.textContent = p < 1 ? String(Math.round(easeOut(p) * target)) : final
    if (p < 1) requestAnimationFrame(step)
  }
  el.textContent = '0'
  requestAnimationFrame(step)
}

export default function MotionObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]:not([data-revealed])')
    if (!targets.length) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.setAttribute('data-revealed', 'instant'))
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-revealed', '')
          entry.target.querySelectorAll('[data-count]').forEach(countUp)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    const fold = window.innerHeight * 0.92
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) {
        el.setAttribute('data-revealed', 'instant')
      } else {
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [pathname])

  return null
}
