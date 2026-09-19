/**
 * Evidence content shown in Readouts — real text taken verbatim from the
 * public product sites, never invented. Keep sources honest: a demo is
 * labelled as a demo. Values here are the only ones allowed on the site
 * (see "Content rules" in AGENTS.md).
 */

// Demo conversation published on aurasia.es (Spanish, as shipped).
export const aurasiaDemo = {
  label: 'WhatsApp · after hours',
  source: 'demo · aurasia.es',
  lines: [
    { who: 'user', time: '23:47', text: 'Hola, ¿tenéis hueco el sábado para una limpieza?' },
    {
      who: 'agent',
      time: '23:47',
      text: 'Hola, soy el asistente virtual de la Clínica Demo Aurasia (una IA). El sábado tengo hueco a las 10:30 y a las 12:00. ¿Te viene bien alguno?',
    },
    { who: 'user', time: '23:48', text: '10:30, perfecto' },
    {
      who: 'agent',
      time: '23:48',
      text: 'Anotado. El equipo lo confirma mañana a primera hora y te llega el aviso aquí mismo. ¿Algo más?',
    },
  ],
  footer: 'The agent introduces itself as an AI · staff confirm every appointment',
}

// The Aurasia column of the public comparison at aurasia.es/comparativa,
// rows chosen to show how the comparison is written — limits included.
export const aurasiaComparison = {
  label: 'Public comparison · own column',
  source: 'aurasia.es/comparativa · 7 competitors',
  lines: [
    { key: 'Paso a una persona', value: 'Sí, bandeja compartida, un toque', status: 'ok' },
    { key: 'Dónde están los datos', value: 'Todo en la UE (Fráncfort)', status: 'ok' },
    { key: 'Cuánto guardan el texto', value: '30 días (texto); cita, 24 meses', status: 'ok' },
    { key: 'Especialización', value: 'Solo dental (A Coruña y Ferrol)' },
    { key: 'Audios del paciente', value: 'No: pide al paciente que escriba' },
    { key: 'Recordatorios de cita', value: 'No disponibles hoy' },
    { key: 'Quién hay detrás', value: 'Álvaro Freire, Ares, persona física' },
  ],
  footer: 'Every row sourced · competitors listed only with public prices · gaps stated, not hidden',
}

// The scan → record flow as shown on the app screen at trazea.es.
export const trazeaScan = {
  label: 'Label photo → record',
  source: 'app screen · trazea.es',
  lines: [
    { key: 'Estado', value: 'Lote detectado', status: 'ok' },
    { key: 'Producto', value: 'Aceite AOVE' },
    { key: 'Lote', value: 'L-2026-0847' },
    { key: 'Fecha', value: '15/03/2026' },
  ],
  footer: 'OCR reads lot and date from the supplier label · the record fills itself',
}
