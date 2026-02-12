import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Álvaro Freire',
  description: 'I turn messy problems into systems that just work. Products, automation, and infrastructure — from first commit to production.',
  metadataBase: new URL('https://alvarofreire.es'),
  openGraph: {
    title: 'Álvaro Freire',
    description: 'I turn messy problems into systems that just work. Products, automation, and infrastructure — from first commit to production.',
    url: 'https://alvarofreire.es',
    siteName: 'Álvaro Freire',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Álvaro Freire — I turn messy problems into systems that just work.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Álvaro Freire',
    description: 'I turn messy problems into systems that just work. Products, automation, and infrastructure — from first commit to production.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-background text-primary min-h-screen flex flex-col">
        <div className="relative flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
