// Reference data distilled from the guitar theory cheat-sheet, focused on the
// song's key of E minor. Chord names reference keys in chordLibrary.ts.

export interface VoicingSwap {
  /** The chord as it appears in the song (open / standard shape). */
  openChord: string
  /** A voicing that tends to sit better on electric guitar. */
  electricChord: string
  /** Why the electric voicing works better. */
  why: string
}

// Open chords ring with lots of open strings — lovely on an acoustic, but on a
// clean/reverbed or lightly-driven electric they can turn muddy and "campfire".
// Sparser voicings, 7ths and add9s, and suspensions keep things clear and
// atmospheric — the Dustin Kensrue / Bon Iver / The National electric palette.
export const ELECTRIC_VOICINGS: VoicingSwap[] = [
  {
    openChord: 'Em',
    electricChord: 'Em7',
    why: 'Adds the 7th (D) for an airier, less blocky tone that rings out beautifully under reverb.'
  },
  {
    openChord: 'Am',
    electricChord: 'Am7',
    why: 'Lifts one finger to open the C string — a wistful color that does not clutter the mix.'
  },
  {
    openChord: 'Cmaj7',
    electricChord: 'Cadd9',
    why: 'Cmaj7 is already gorgeous on electric; Cadd9 is its brighter sibling if you want more shimmer up top.'
  },
  {
    openChord: 'G',
    electricChord: 'Gmaj7',
    why: 'The full 6-string G gets muddy with gain/reverb. Gmaj7 (320002) thins it out and adds longing.'
  },
  {
    openChord: 'D/F#',
    electricChord: 'Dsus4',
    why: 'Hammer the sus4 down to D for movement — the suspension rings and resolves cleanly on electric.'
  },
  {
    openChord: 'Bm',
    electricChord: 'Bm7',
    why: 'The barre Bm is fine on electric, but Bm7 (x20202) is lighter and lets the open strings breathe.'
  }
]

export interface DiatonicChord {
  roman: string
  chord: string
  quality: string
}

// "Chords in every MINOR key" — the E minor (Aeolian) row from the chart.
export const DIATONIC_EM: DiatonicChord[] = [
  { roman: 'i', chord: 'Em', quality: 'minor' },
  { roman: 'ii°', chord: 'F#°', quality: 'diminished' },
  { roman: '♭III', chord: 'G', quality: 'major' },
  { roman: 'iv', chord: 'Am', quality: 'minor' },
  { roman: 'v', chord: 'Bm', quality: 'minor' },
  { roman: '♭VI', chord: 'C', quality: 'major' },
  { roman: '♭VII', chord: 'D', quality: 'major' }
]

export interface StructureSection {
  name: string
  roman: string
  chords: string[]
  note: string
}

export const STRUCTURE_IDEAS: StructureSection[] = [
  {
    name: 'Verse',
    roman: 'i – ♭VI – ♭III – ♭VII',
    chords: ['Em', 'Cmaj7', 'G', 'D/F#'],
    note: 'Your current progression. The bass walks down E–C–G–F#, a brooding, settled feel to sit lyrics on.'
  },
  {
    name: 'Pre-Chorus / Build',
    roman: 'iv – v – ♭VI – ♭VII',
    chords: ['Am', 'Bm', 'C', 'D'],
    note: 'Rises step by step to lift the energy and pull you into the chorus.'
  },
  {
    name: 'Chorus (lift)',
    roman: '♭III – ♭VII – i – ♭VI',
    chords: ['G', 'D', 'Em', 'C'],
    note: 'Leans on the relative major (G) for brightness, then falls back home to Em — light breaking into grief.'
  },
  {
    name: 'Turnaround',
    roman: 'iv – V7 – i',
    chords: ['Am', 'B7', 'Em'],
    note: 'Swap the minor v (Bm) for a dominant B7. That borrowed major chord gives a strong classical pull home — great at the end of a chorus.'
  },
  {
    name: 'Bridge / Outro',
    roman: '♭VI – ♭VII – I',
    chords: ['C', 'D', 'G'],
    note: 'Land the lament on G major (the relative major) for "He has been good to me" — trust and light after the grief.'
  }
]

// The "Circle of Fourths & Fifths" idea — moving by descending fifths creates
// strong, cascading forward motion that always feels like it is resolving.
export const FIFTHS_FLOW = ['Em', 'Am', 'D', 'G', 'C']
