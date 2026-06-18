import { SongData } from '../types/song'

export const DEFAULT_SONG: SongData = {
  title: 'Untitled Lament',
  key: 'Am',
  timeSignature: [4, 4],
  tempo: 72,
  chordProgression: ['Am', 'C', 'G', 'F'],
  videoIds: [],
  measures: [
    {
      id: 'm1',
      chordName: 'Am',
      notesVF: [
        { keys: ['a/4'], duration: 'q' },
        { keys: ['c/5'], duration: 'q' },
        { keys: ['e/5'], duration: 'q' },
        { keys: ['a/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm2',
      chordName: 'C',
      notesVF: [
        { keys: ['g/4'], duration: 'q' },
        { keys: ['c/5'], duration: 'q' },
        { keys: ['e/5'], duration: 'q' },
        { keys: ['g/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'm3',
      chordName: 'G',
      notesVF: [
        { keys: ['g/4'], duration: 'q' },
        { keys: ['b/4'], duration: 'q' },
        { keys: ['d/5'], duration: 'q' },
        { keys: ['g/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'm4',
      chordName: 'F',
      notesVF: [
        { keys: ['f/4'], duration: 'q' },
        { keys: ['a/4'], duration: 'q' },
        { keys: ['c/5'], duration: 'q' },
        { keys: ['f/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 3 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 1 }], duration: 'q' }
      ]
    }
  ],
  strummingPatterns: [
    {
      name: 'Verse (D DU UDU)',
      beats: [
        { subdivision: '4', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    },
    {
      name: 'Chorus (DDUUDU)',
      beats: [
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    },
    {
      name: 'Fingerpicking (PIMA)',
      beats: [
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    },
    {
      name: 'Slow Lament (D — DU)',
      beats: [
        { subdivision: '4', direction: 'down', accent: 'accent' },
        { subdivision: '4', direction: 'rest', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    }
  ],
  lyrics: `Verse 1:
In the shadow of the valley
Where the rivers cease to flow
I have wandered through the darkness
Looking for a light to know

Chorus:
Hear my cry, O Lord above
Hold me close within Your love
In my grief I call Your name
Through the sorrow, through the pain

Verse 2:
Every tear I've cried in silence
Every prayer that met the sky
Still I trust You in the waiting
Still I ask the question why`
}

export const SUGGESTED_SEARCHES = [
  'Am fingerpicking lament guitar tutorial',
  'How to play Am C G F progression guitar',
  'Emotional fingerpicking guitar patterns',
  'Lament psalm guitar tutorial',
  'Minor key guitar song writing tips',
  'Guitar chord transitions Am to C'
]
