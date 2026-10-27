import { markup } from '@/components/scenes/markup'
import { artStyle } from '@/components/scenes/palette'
import { Art as Pasture } from '@/components/scenes/Pasture'
import { Art as Kitchen } from '@/components/scenes/Kitchen'
import { Art as Clinic } from '@/components/scenes/Clinic'
import { Art as Workshop } from '@/components/scenes/Workshop'
import { Art as Ria } from '@/components/scenes/Ria'

// Art layer of every scene, one static file per hour:
// /scenes/<name>-day.svg (light theme) and /scenes/<name>-night.svg (dark).
const ART = { pasture: Pasture, kitchen: Kitchen, clinic: Clinic, workshop: Workshop, ria: Ria }
const HOURS = ['day', 'night']

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(ART).flatMap((name) => HOURS.map((hour) => ({ file: `${name}-${hour}.svg` })))
}

export async function GET(_request, { params }) {
  const { file } = await params
  const [, name, hour] = file.match(/^(\w+)-(day|night)\.svg$/)
  const Art = ART[name]
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 640" width="1600" height="640">` +
    `<style>${artStyle(name, hour)}</style>${markup(<Art />)}</svg>`
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } })
}
