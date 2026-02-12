import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left — branding */}
          <div>
            <Link href="/" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
              Álvaro Freire
            </Link>
            <p className="text-body-sm text-secondary mt-2 max-w-[320px]">
              Building products, automating operations, and scaling infrastructure from Galicia, Spain.
            </p>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/alvaro-freire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Image src="/github-svgrepo-com.svg" alt="GitHub" width={22} height={22} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com/in/alvvarofreire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={22} height={22} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://instagram.com/alvvarofreire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Image src="/instagram-svgrepo-com.svg" alt="Instagram" width={22} height={22} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://x.com/alvvarofreire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Twitter / X"
            >
              <Image src="/twitter-svgrepo-com.svg" alt="Twitter" width={22} height={22} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-caption text-secondary">
            &copy; {new Date().getFullYear()} Álvaro Freire. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-caption">
            <Link href="/work" className="text-secondary hover:text-primary transition-colors">Work</Link>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
            <Link href="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link>
            <Link href="/services" className="text-secondary hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
