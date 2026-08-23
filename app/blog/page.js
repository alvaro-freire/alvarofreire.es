import Link from 'next/link'
import SectionAxis from '@/components/SectionAxis'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Notes from running AI systems in production — agent evals, context engineering, and what survives contact with real users.',
}

const topics = [
  { label: 'Agent evals', body: 'How to know whether an agent actually works — task-level evaluation, not vibes.' },
  { label: 'Context engineering', body: 'Shaping what a model sees: context files, skills, and the tooling around them.' },
  { label: 'AI in production', body: 'What survives contact with real users, and what quietly breaks.' },
]

export default function Blog() {
  const posts = getAllPosts()

  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="mono-label mb-6">Field notes · published irregularly, measured always</p>
          <h1 className="heading-1">Writing</h1>
          <p className="text-body text-primary mt-5 max-w-[58ch]">
            Notes from running AI systems in production: agent evals, context
            engineering, and what actually survives contact with real users.
          </p>
        </div>
      </section>

      <section className="section-spacing pt-6 md:pt-8">
        <div className="container-wide">
          <SectionAxis n="01" label="Posts" />
          {posts.length > 0 ? (
            <div className="flex flex-col">
              {posts.map((post, i) => (
                <article key={post.slug} className={`py-7 ${i > 0 ? 'border-t border-border' : ''}`}>
                  <div className="grid md:grid-cols-12 gap-x-8 gap-y-2">
                    <p className="mono-label md:col-span-3 pt-1.5">{formatDate(post.date)}</p>
                    <div className="md:col-span-9 max-w-[62ch]">
                      <h2 className="heading-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      {post.description && (
                        <p className="text-body-sm text-secondary mt-2">{post.description}</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-content">
              <p className="text-body text-primary">
                First posts are in the works. This is what they will be about:
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-8">
                {topics.map((t) => (
                  <div key={t.label} className="data-mark">
                    <h2 className="mono-label !text-primary">{t.label}</h2>
                    <p className="text-caption text-secondary mt-2">{t.body}</p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-caption text-secondary mt-10">
                RSS will be live at <a href="/rss.xml" className="link-primary">/rss.xml</a> from the first post.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
