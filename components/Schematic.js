/**
 * Schematic — an integration diagram in the instrument voice, for systems
 * with no publishable screenshot (CoWtrol is internal). Mono labels,
 * hairline boxes, lines that draw in when revealed (see globals.css).
 * Colors come from currentColor / theme tokens, so it follows the theme.
 *
 * inputs → hub → outputs, all as plain text so it is readable by
 * assistive tech (the SVG has a <title> and the same content is repeated
 * in a visually-hidden list).
 */
export default function Schematic({ title, inputs, hub, outputs, caption }) {
  const W = 640
  const rowH = 44
  const rows = Math.max(inputs.length, outputs.length)
  const H = rows * rowH + 24
  const midY = H / 2
  const boxW = 168
  const hubW = 128
  const hubH = 56
  const hubX = (W - hubW) / 2
  const leftX = 8
  const rightX = W - boxW - 8

  const yFor = (i, n) => 12 + (i + 0.5) * ((H - 24) / n)

  return (
    <figure className="schematic" data-reveal>
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto text-primary" role="img" aria-labelledby="schematic-title">
        <title id="schematic-title">{title}</title>
        {/* Input boxes and lines into the hub */}
        {inputs.map((label, i) => {
          const y = yFor(i, inputs.length)
          return (
            <g key={label} className="schematic-node" style={{ '--i': i }}>
              <rect x={leftX} y={y - 15} width={boxW} height={30} className="schematic-box" />
              <text x={leftX + 12} y={y + 4} className="schematic-label">{label}</text>
              <path
                className="schematic-line"
                d={`M ${leftX + boxW} ${y} C ${leftX + boxW + 48} ${y}, ${hubX - 48} ${midY}, ${hubX} ${midY}`}
                pathLength="100"
              />
            </g>
          )
        })}
        {/* Hub */}
        <g className="schematic-hub">
          <rect x={hubX} y={midY - hubH / 2} width={hubW} height={hubH} className="schematic-box schematic-box-hub" />
          <text x={W / 2} y={midY + 5} textAnchor="middle" className="schematic-label schematic-label-hub">{hub}</text>
        </g>
        {/* Output lines and boxes */}
        {outputs.map((label, i) => {
          const y = yFor(i, outputs.length)
          return (
            <g key={label} className="schematic-node" style={{ '--i': i + inputs.length }}>
              <path
                className="schematic-line schematic-line-out"
                d={`M ${hubX + hubW} ${midY} C ${hubX + hubW + 48} ${midY}, ${rightX - 48} ${y}, ${rightX} ${y}`}
                pathLength="100"
              />
              <rect x={rightX} y={y - 15} width={boxW} height={30} className="schematic-box" />
              <text x={rightX + 12} y={y + 4} className="schematic-label">{label}</text>
            </g>
          )
        })}
      </svg>
      <ul className="sr-only">
        {inputs.map((l) => <li key={l}>{l} → {hub}</li>)}
        {outputs.map((l) => <li key={l}>{hub} → {l}</li>)}
      </ul>
      {caption && <figcaption className="mono-label mt-3">{caption}</figcaption>}
    </figure>
  )
}
