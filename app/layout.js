import './globals.css'
import { ViewTransition } from 'react'
import localFont from 'next/font/local'
import { Instrument_Sans, Spline_Sans_Mono } from 'next/font/google'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MotionObserver from '@/components/MotionObserver'
import { getAllPosts } from '@/lib/posts'
import { profile, metaDescription, sameAs } from '@/lib/profile'

// Runs before first paint: applies a stored explicit theme override (so
// there's no flash) and marks the document as JS-capable, which is what
// gates every reveal animation in globals.css. System-default readers need
// no JS for the theme: the CSS media query resolves before any script runs.
const initScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){d.setAttribute('data-theme',t)}}catch(e){}})()`

// Archivo is self-hosted as a variable subset (weights 700–800, full width
// axis, latin) — 60 kB instead of Google's 90 kB full-range file. The hero
// <h1> is the LCP element and repaints when this font arrives, so its size
// is the one that matters. Regenerate with fontTools' varLib.instancer
// (see app/fonts/README.md).
const archivo = localFont({
  src: './fonts/archivo-wdth-700-800.woff2',
  weight: '700 800',
  style: 'normal',
  display: 'swap',
  variable: '--font-archivo',
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
  adjustFontFallback: 'Arial',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-instrument',
})

const splineSansMono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-spline',
})

const description = metaDescription

export const metadata = {
  title: {
    default: 'Álvaro Freire',
    template: '%s — Álvaro Freire',
  },
  description,
  metadataBase: new URL('https://alvarofreire.es'),
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    title: 'Álvaro Freire',
    description,
    url: 'https://alvarofreire.es',
    siteName: 'Álvaro Freire',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Álvaro Freire',
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F3EF' },
    { media: '(prefers-color-scheme: dark)', color: '#10130F' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://alvarofreire.es',
  jobTitle: profile.role,
  worksFor: {
    '@type': 'Organization',
    name: profile.company.name,
    url: profile.company.url,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: profile.location.town,
    addressRegion: profile.location.region,
    addressCountry: 'ES',
  },
  sameAs,
}

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }) {
  // The blog only appears in the navigation once there is a published post.
  const hasPosts = getAllPosts().length > 0
  const links = navLinks.filter((l) => hasPosts || l.href !== '/blog')

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${instrumentSans.variable} ${splineSansMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-primary min-h-screen flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {initScript}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation links={links} />
        <main id="main" className="relative flex-1 pt-16">
          <ViewTransition default="vt-page">
            <div>{children}</div>
          </ViewTransition>
        </main>
        <Footer links={links} />
        <MotionObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
