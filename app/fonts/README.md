# Self-hosted fonts

`archivo-wdth-700-800.woff2` — Archivo (Omnibus-Type, SIL Open Font License 1.1,
see `OFL-Archivo.txt`), variable, latin subset, restricted to the weight range
700–800 and the full width axis 62–125 %. The site only uses Archivo at 700/800
with `font-stretch` 68 %, 110 % and 116 %, so this file is 60 kB instead of the
90 kB full-range file Google Fonts serves — and it is the resource the hero
`<h1>` (the LCP element) waits for.

Regenerate from the full variable font (`Archivo[wdth,wght].ttf` or Google's
latin woff2) with fontTools:

```python
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
f = TTFont('Archivo-latin.woff2')
part = instancer.instantiateVariableFont(f, {'wght': (700, 800), 'wdth': (62, 125)}, inplace=False)
part.flavor = 'woff2'
part.save('archivo-wdth-700-800.woff2')
```

Instrument Sans and Spline Sans Mono keep coming from `next/font/google`.
