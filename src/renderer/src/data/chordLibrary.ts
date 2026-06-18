export interface ChordDef {
  name: string
  displayName: string
  baseFret: number
  barre?: number
  fingers: Array<{
    string: number
    fret: number
    finger: number
  }>
}

export const CHORD_LIBRARY: Record<string, ChordDef> = {
  Am: {
    name: 'Am',
    displayName: 'A minor',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 0, finger: 0 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  C: {
    name: 'C',
    displayName: 'C major',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  G: {
    name: 'G',
    displayName: 'G major',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 3, finger: 2 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 3, finger: 3 }
    ]
  },
  F: {
    name: 'F',
    displayName: 'F major',
    baseFret: 1,
    barre: 1,
    fingers: [
      { string: 6, fret: 1, finger: 1 },
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 3, finger: 4 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 1, finger: 1 }
    ]
  },
  Em: {
    name: 'Em',
    displayName: 'E minor',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 0, finger: 0 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Dm: {
    name: 'Dm',
    displayName: 'D minor',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: -1, finger: 0 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 1, finger: 1 }
    ]
  },
  E: {
    name: 'E',
    displayName: 'E major',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 0, finger: 0 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 1, finger: 1 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Fmaj7: {
    name: 'Fmaj7',
    displayName: 'F major 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: -1, finger: 0 },
      { string: 4, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Cmaj7: {
    name: 'Cmaj7',
    displayName: 'C major 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  'D/F#': {
    name: 'D/F#',
    displayName: 'D / F# bass',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 2, finger: 1 },
      { string: 5, fret: -1, finger: 0 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 4 },
      { string: 1, fret: 2, finger: 3 }
    ]
  },
  Bm: {
    name: 'Bm',
    displayName: 'B minor',
    baseFret: 2,
    barre: 2,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 4, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
      { string: 2, fret: 3, finger: 2 },
      { string: 1, fret: 2, finger: 1 }
    ]
  },
  Bm7: {
    name: 'Bm7',
    displayName: 'B minor 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 2, finger: 3 }
    ]
  },
  Em7: {
    name: 'Em7',
    displayName: 'E minor 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 0, finger: 0 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Am7: {
    name: 'Am7',
    displayName: 'A minor 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 0, finger: 0 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Cadd9: {
    name: 'Cadd9',
    displayName: 'C add 9',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 3, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 0, finger: 0 }
    ]
  },
  Gmaj7: {
    name: 'Gmaj7',
    displayName: 'G major 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 2, finger: 1 }
    ]
  },
  Dsus4: {
    name: 'Dsus4',
    displayName: 'D suspended 4',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: -1, finger: 0 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 2 },
      { string: 1, fret: 3, finger: 3 }
    ]
  },
  B7: {
    name: 'B7',
    displayName: 'B dominant 7',
    baseFret: 1,
    fingers: [
      { string: 6, fret: -1, finger: 0 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 2, finger: 4 }
    ]
  }
}
