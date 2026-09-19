/**
 * Readout — a theme-invariant dark instrument panel (same voice as the
 * code blocks in posts) that shows what a system actually does:
 *
 *   kind="chat"   — an exchange with an agent: [{ who, time, text }]
 *                   who: 'user' | 'agent' | 'system'
 *   kind="fields" — a record being filled: [{ key, value, note? }]
 *
 * Zero image weight, real text (selectable, translatable, accessible).
 * `label` is the mono caption over the panel; `source` is where the
 * content comes from (e.g. "demo conversation · aurasia.es"), so a demo
 * is never mistaken for a real customer exchange.
 */
export default function Readout({ kind = 'chat', label, source, lines = [], footer, className = '' }) {
  return (
    <figure className={`readout ${className}`}>
      <div className="flex items-baseline justify-between gap-4 mb-2">
        {label && <figcaption className="mono-label text-primary!">{label}</figcaption>}
        {source && <span className="mono-label">{source}</span>}
      </div>
      <div className="readout-panel reg-marks">
        {kind === 'chat' ? (
          <ol className="readout-chat">
            {lines.map((l, i) => (
              <li key={i} className={`readout-line readout-${l.who}`} style={{ '--i': i }}>
                <span className="readout-meta">
                  <span className="readout-time">{l.time}</span>
                  <span className="readout-who">{l.who}</span>
                </span>
                <p className="readout-text">{l.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <dl className="readout-fields">
            {lines.map((l, i) => (
              <div key={l.key} className={`readout-field ${l.status ? `readout-${l.status}` : ''}`} style={{ '--i': i }}>
                <dt className="readout-key">{l.key}</dt>
                <dd className="readout-value">
                  {l.value}
                  {l.note && <span className="readout-note">{l.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        )}
        {footer && <p className="readout-footer">{footer}</p>}
      </div>
    </figure>
  )
}
