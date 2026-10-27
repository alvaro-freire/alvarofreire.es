/**
 * Deterministic scatter for scene details (stars, grass, ripples).
 * Seeded, so the markup is identical on every build — no Math.random.
 */
export function scatter(seed, n, fn) {
  let t = seed
  const rand = () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
  return Array.from({ length: n }, (_, i) => fn(rand, i))
}
