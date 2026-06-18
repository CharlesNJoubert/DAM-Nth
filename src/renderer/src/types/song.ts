export type PanelId = 'tabs' | 'sheet' | 'chords' | 'strumming' | 'videos' | 'lyrics'

export interface SongData {
  title: string
  key: string
  timeSignature: [number, number]
  tempo: number
  measures: Measure[]
  chordProgression: string[]
  strummingPatterns: StrummingPattern[]
  lyrics: string
  videoIds: string[]
}

export interface Measure {
  id: string
  chordName: string
  notesVF: NoteVF[]
  tabNotes: TabNote[]
}

export interface NoteVF {
  keys: string[]
  duration: string
}

export interface TabNote {
  positions: Array<{ str: number; fret: number }>
  duration: string
}

export type StrumDirection = 'down' | 'up' | 'muted' | 'rest'
export type StrumAccent = 'normal' | 'accent'

export interface StrumBeat {
  subdivision: '4' | '8' | '16'
  direction: StrumDirection
  accent: StrumAccent
}

export interface StrummingPattern {
  name: string
  beats: StrumBeat[]
}
