import './globals.css'
import { Archivo, Instrument_Sans, Spline_Sans_Mono } from 'next/font/google'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { profile, metaDescription } from '@/lib/profile'

// Applies a stored explicit theme override before first paint, so there's
// no flash. System-default readers need no JS: the CSS media query in
// globals.css handles that case natively, before any script can run.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['wdth'],
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const splineSansMono = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
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
  name: 'Álvaro Freire',
  url: 'https://alvarofreire.es',
  jobTitle: profile.role,
  worksFor: {
    '@type': 'Organization',
    name: profile.company.name,
    url: profile.company.url,
  },
  sameAs: [
    'https://github.com/alvaro-freire',
    'https://linkedin.com/in/alvvarofreire',
    'https://x.com/alvvarofreire',
    'https://instagram.com/alvvarofreire',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${splineSansMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-primary min-h-screen flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="relative flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
