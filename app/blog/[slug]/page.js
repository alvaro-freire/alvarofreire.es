import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Ria from '@/components/scenes/Ria'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://alvarofreire.es/blog/${post.slug}`,
    },
  }
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://alvarofreire.es/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Álvaro Freire',
      url: 'https://alvarofreire.es',
    },
  }

  return (
    <article className="section-spacing pt-16 md:pt-24">
      <div className="container-custom">
        <p className="mono-label mb-6">
          <Link href="/blog" className="hover:text-primary transition-colors">
            <span className="arrow-back">←</span> Writing
          </Link>
          <span className="mx-3">·</span>
          {formatDate(post.date)}
          <span className="mx-3">·</span>
          {post.readingMinutes} min
        </p>
        <h1 className="heading-1 mb-8">{post.title}</h1>
        {/* The ría's horizon as the rule under the title */}
        <div className="scene scene-ria plate relative overflow-hidden h-14 md:h-16 mb-3" aria-hidden="true">
          <Ria className="absolute inset-0 w-full h-full" />
        </div>
        <div className="tick-strip border-border mb-10" aria-hidden="true" />
        <div className="prose-post">
          <MDXRemote source={post.content} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  )
}
