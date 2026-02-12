import Link from 'next/link'

export default function ProjectCard({ title, description, tags = [], href, linkLabel = 'Learn more', external = false }) {
  const LinkComponent = external ? 'a' : Link
  const linkProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <div className="card card-hover group">
      <h3 className="heading-3 mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-body-sm text-secondary mb-4">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {href && (
        <LinkComponent {...linkProps} className="inline-flex items-center gap-1 text-accent font-medium text-body-sm hover:text-accent-hover transition-colors">
          {linkLabel}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </LinkComponent>
      )}
    </div>
  )
}
