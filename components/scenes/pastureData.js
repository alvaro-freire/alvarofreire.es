/**
 * Pasture geometry — plain data, importable from Server Components (the
 * OG image, the 404) and from the client-rendered Pasture scene alike.
 */
// Cows: kind, x (centre), ground y, scale, facing left
export const cows = [
  ['graze', 150, 618, 1.3, false],
  ['lie', 352, 612, 1.0, true],
  ['stand', 598, 546, 0.66, true],
  ['graze', 708, 548, 0.6, false],
  ['lie', 868, 606, 1.12, false],
  ['lie', 1016, 516, 0.56, true],
  ['stand', 1188, 624, 1.38, false],
  ['graze', 1410, 610, 1.06, true],
  ['stand', 1514, 498, 0.5, false],
]

// Cow silhouettes in a 100×60 box, ground at y=60 (also drawn by the OG image)
export const COW_SHAPES = {
  stand: [
    'M14 18C18 14 26 13 34 14C46 15 56 13 64 14C68 14 71 15 74 17L82 18C84 15 86 12 89 11C88 13 87 16 87 18C90 18 94 20 96 24C98 28 97 31 94 32C91 33 87 32 84 30C81 31 78 33 76 36C75 39 74 41 72 42L72 58C72 59.5 71 60 69.5 60L67.5 60L67 44L63 44L63 58C63 59.5 62 60 60.5 60L59 60L58.5 44C50 46 36 46 28 44L27 58C27 59.5 26 60 24.5 60L23 60L22.5 45L20 44L19.5 58C19.5 59.5 18.5 60 17 60L15.5 60L15 42C13 38 12 32 12 26C12 22 12.5 20 14 18Z',
    'M13 20C9 24 8 32 9 42L10.5 42C10.5 34 11 27 14 23Z',
    'M8 43.5a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0Z',
    'M82 19C79 17 76 17 74 19C77 21 80 21 83 21Z',
  ],
  graze: [
    'M14 18C18 14 26 13 34 14C46 15 56 13 64 14C70 15 76 19 80 26C83 31 86 38 88 45C89 50 89 54 87 56C85 58 81 58 80 55C78 50 76 46 73 43L72 44L72 58C72 59.5 71 60 69.5 60L67.5 60L67 44L63 44L63 58C63 59.5 62 60 60.5 60L59 60L58.5 44C50 46 36 46 28 44L27 58C27 59.5 26 60 24.5 60L23 60L22.5 45L20 44L19.5 58C19.5 59.5 18.5 60 17 60L15.5 60L15 42C13 38 12 32 12 26C12 22 12.5 20 14 18Z',
    'M84 31C87 29 90 30 91 32C88 32 86 33 85 35Z',
    'M81 29C78 27 75 28 74 30C77 31 80 32 82 32Z',
    'M13 20C9 24 8 32 9 42L10.5 42C10.5 34 11 27 14 23Z',
    'M8 43.5a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0Z',
  ],
  lie: [
    'M6 60C5 50 10 41 22 38C34 35 50 35 60 36C64 34 67 30 70 27L76 25C78 22 80 20 83 19C82 21 81 23 81 25C84 25 88 27 89 31C90 34 89 36 86 37C83 38 80 37 78 36C75 38 73 41 72 44C74 48 76 52 76 56L86 57C88 57.5 88 60 86 60Z',
    'M7 54C3 56 2 59 3 60L7 60Z',
    'M75 27C72 25 69 25 67 27C70 29 73 29 76 29Z',
  ],
}

// Layer outlines, shared with the OG image (app/opengraph-image.js)
export const LAYERS = {
  distant: 'M0 384C180 362 340 346 500 354C660 362 780 334 940 318C1100 302 1200 282 1340 262C1440 248 1520 240 1600 236L1600 640L0 640Z',
  far: 'M0 420C160 404 300 386 440 388C580 390 680 366 800 350C940 330 1040 300 1160 278C1280 256 1400 232 1600 214L1600 640L0 640Z',
  mid: 'M0 476C140 450 260 440 400 452C540 464 660 430 800 420C940 410 1040 400 1160 384C1300 366 1440 352 1600 344L1600 640L0 640Z',
  near: 'M0 528C200 508 380 500 560 510C760 522 900 486 1100 478C1280 470 1440 470 1600 462L1600 640L0 640Z',
  ground: 'M0 574C260 558 520 562 800 568C1080 574 1340 554 1600 562L1600 640L0 640Z',
}

// Where the collar's GPS unit sits on each silhouette
const COLLAR = { stand: [77, 35], graze: [76, 44], lie: [74, 40] }

export function placement(x, y, s, flip) {
  const r = (n) => Math.round(n * 10) / 10
  return flip
    ? `translate(${r(x + 50 * s)} ${r(y - 60 * s)}) scale(${-s} ${s})`
    : `translate(${r(x - 50 * s)} ${r(y - 60 * s)}) scale(${s})`
}

export function collarAt([kind, x, y, s, flip]) {
  const [dx, dy] = COLLAR[kind]
  return { cx: x + (dx - 50) * s * (flip ? -1 : 1), cy: y - (60 - dy) * s }
}
