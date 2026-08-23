/**
 * Tick-marked section baseline — the axis that separates sections.
 * `n` is the section index ("01"), `label` the section name.
 * Renders the label as the section heading (h2) unless `as` overrides it.
 */
export default function SectionAxis({ n, label, as: Tag = 'h2' }) {
  return (
    <div className="section-axis mb-10 md:mb-12">
      <Tag className="mono-label whitespace-nowrap">
        <span className="text-accent">{n}</span>
        <span aria-hidden="true"> / </span>
        <span className="text-primary">{label}</span>
      </Tag>
    </div>
  )
}
