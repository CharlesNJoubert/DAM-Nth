import { SongData } from '../types/song'

export const DEFAULT_SONG: SongData = {
  title: 'How Long (Psalm 13)',
  key: 'Em',
  timeSignature: [4, 4],
  tempo: 80,
  chordProgression: ['Em', 'Cmaj7', 'G', 'D/F#'],
  videoIds: [],
  measures: [
    {
      id: 'm1',
      chordName: 'Em',
      notesVF: [
        { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' },
        { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm2',
      chordName: 'Cmaj7',
      notesVF: [
        { keys: ['c/3'], duration: 'q' },
        { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm3',
      chordName: 'G',
      notesVF: [
        { keys: ['g/2'], duration: 'q' },
        { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' },
        { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'm4',
      chordName: 'D/F#',
      notesVF: [
        { keys: ['f#/2'], duration: 'q' },
        { keys: ['d/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' },
        { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 2 }], duration: 'q' },
        { positions: [{ str: 4, fret: 0 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 3 }], duration: 'q' }
      ]
    }
  ],
  strummingPatterns: [
    {
      name: 'Travis Picking (Verse)',
      beats: [
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    },
    {
      name: 'D DU UDU (Chorus)',
      beats: [
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'muted', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'accent' }
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
    },
    {
      name: 'Build (DDUUDU)',
      beats: [
        { subdivision: '8', direction: 'down', accent: 'accent' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'accent' }
      ]
    }
  ],
  lyrics: `How Long (Psalm 13)

Verse 1:
How long will you forget me, Lord
How long will you hide your face
I'm wrestling with my own thoughts
Sorrow fills my days

Verse 2:
How long will my enemy
Stand over me and win
A kingdom set against one man
And they're laughing at my trembling

Chorus:
So look on me and answer
Light the darkness in my eyes
Before I close them in the dark
Before the morning I don't rise

Verse 3:
I never got the reason
Why the dark has lasted long
But I have trusted in your love
So I will sing the only song I know

Outro:
He has been good to me
He has been good to me`
}

export const SUGGESTED_SEARCHES = [
  'Em Travis fingerpicking lament guitar tutorial',
  'E minor Travis picking beginner guitar',
  'D DU UDU strumming pattern guitar tutorial',
  'Psalm 13 lament song worship guitar',
  'Dustin Kensrue guitar fingerpicking style',
  'Bon Iver fingerpicking technique guitar'
]
