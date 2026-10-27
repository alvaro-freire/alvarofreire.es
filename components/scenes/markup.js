/**
 * markup — a minimal serializer from JSX to SVG markup, for static art
 * only: host elements, function components without hooks, fragments,
 * arrays, string/number children. Used to render each scene's art layer
 * to a static SVG file and to inline the small live layer as one string
 * (a Server Component's element tree is also serialized into the RSC
 * payload as JSON, ~4× its size; a string costs ~1×).
 */
const RENAME = { className: 'class' }
// SVG attributes that keep their camelCase
const CAMEL = new Set(['viewBox', 'preserveAspectRatio', 'patternUnits', 'gradientUnits', 'pathLength'])

const attrName = (k) => RENAME[k] || (CAMEL.has(k) ? k : k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`))
const escape = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const style = (o) =>
  Object.entries(o)
    .map(([k, v]) => `${k.startsWith('--') ? k : attrName(k)}:${v}`)
    .join(';')

export function markup(node) {
  if (node == null || typeof node === 'boolean') return ''
  if (Array.isArray(node)) return node.map(markup).join('')
  if (typeof node === 'string' || typeof node === 'number') return escape(node)
  const { type, props } = node
  if (typeof type === 'function') return markup(type(props))
  if (typeof type !== 'string') return markup(props.children) // Fragment
  let attrs = ''
  for (const [k, v] of Object.entries(props)) {
    if (k === 'children' || v == null || v === false) continue
    attrs += ` ${attrName(k)}="${escape(k === 'style' ? style(v) : v)}"`
  }
  const inner = markup(props.children)
  return inner ? `<${type}${attrs}>${inner}</${type}>` : `<${type}${attrs}/>`
}
