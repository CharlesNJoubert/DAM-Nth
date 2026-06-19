import { SongData } from '../types/song'

export const DEFAULT_SONG: SongData = {
  id: 'default',
  title: 'How Long (Psalm 13)',
  key: 'Em',
  timeSignature: [4, 4],
  tempo: 80,
  chordProgression: ['Em', 'Cmaj7', 'G', 'D/F#'],
  videoIds: [],
  measures: [
    // ── VERSE ──────────────────────────────────────────
    {
      id: 'm-v1', chordName: 'Em', sectionLabel: 'Verse',
      notesVF: [
        { keys: ['e/3'], duration: 'q' }, { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm-v2', chordName: 'Cmaj7',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['b/3'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm-v3', chordName: 'G',
      notesVF: [
        { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'm-v4', chordName: 'D/F#',
      notesVF: [
        { keys: ['f/2'], duration: 'q' }, { keys: ['d/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 2 }], duration: 'q' },
        { positions: [{ str: 4, fret: 0 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 3 }], duration: 'q' }
      ]
    },

    // ── PRE-CHORUS ──────────────────────────────────────
    {
      id: 'm-pc1', chordName: 'Am', sectionLabel: 'Pre-Chorus',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'm-pc2', chordName: 'Bm',
      notesVF: [
        { keys: ['b/2'], duration: 'q' }, { keys: ['f/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 4, fret: 4 }], duration: 'q' },
        { positions: [{ str: 3, fret: 4 }], duration: 'q' },
        { positions: [{ str: 2, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'm-pc3', chordName: 'C',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'm-pc4', chordName: 'D',
      notesVF: [
        { keys: ['d/3'], duration: 'q' }, { keys: ['a/3'], duration: 'q' },
        { keys: ['d/4'], duration: 'q' }, { keys: ['f/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 0 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 3 }], duration: 'q' },
        { positions: [{ str: 1, fret: 2 }], duration: 'q' }
      ]
    },

    // ── CHORUS ──────────────────────────────────────────
    {
      id: 'm-c1', chordName: 'G', sectionLabel: 'Chorus',
      notesVF: [
        { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'm-c2', chordName: 'D',
      notesVF: [
        { keys: ['d/3'], duration: 'q' }, { keys: ['a/3'], duration: 'q' },
        { keys: ['d/4'], duration: 'q' }, { keys: ['f/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 0 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 3 }], duration: 'q' },
        { positions: [{ str: 1, fret: 2 }], duration: 'q' }
      ]
    },
    {
      id: 'm-c3', chordName: 'Em',
      notesVF: [
        { keys: ['e/3'], duration: 'q' }, { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'm-c4', chordName: 'C',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },

    // ── TURNAROUND ──────────────────────────────────────
    {
      id: 'm-t1', chordName: 'Am', sectionLabel: 'Turnaround',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'm-t2', chordName: 'B7',
      notesVF: [
        { keys: ['b/2'], duration: 'q' }, { keys: ['d/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['b/3'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 4, fret: 1 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 1, fret: 2 }], duration: 'q' }
      ]
    },
    {
      id: 'm-t3', chordName: 'Em',
      notesVF: [
        { keys: ['e/3'], duration: 'q' }, { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
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

export function createBlankSong(id: string): SongData {
  return {
    id,
    title: 'Untitled Song',
    key: 'Em',
    timeSignature: [4, 4],
    tempo: 80,
    chordProgression: ['Em', 'G', 'D', 'C'],
    videoIds: [],
    measures: [
      {
        id: `${id}-m1`, chordName: 'Em', sectionLabel: 'Verse',
        notesVF: [
          { keys: ['e/3'], duration: 'q' }, { keys: ['g/3'], duration: 'q' },
          { keys: ['b/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
        ],
        tabNotes: [
          { positions: [{ str: 6, fret: 0 }], duration: 'q' },
          { positions: [{ str: 4, fret: 2 }], duration: 'q' },
          { positions: [{ str: 2, fret: 0 }], duration: 'q' },
          { positions: [{ str: 1, fret: 0 }], duration: 'q' }
        ]
      },
      {
        id: `${id}-m2`, chordName: 'G',
        notesVF: [
          { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
          { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
        ],
        tabNotes: [
          { positions: [{ str: 6, fret: 3 }], duration: 'q' },
          { positions: [{ str: 5, fret: 2 }], duration: 'q' },
          { positions: [{ str: 3, fret: 0 }], duration: 'q' },
          { positions: [{ str: 1, fret: 3 }], duration: 'q' }
        ]
      },
      {
        id: `${id}-m3`, chordName: 'D',
        notesVF: [
          { keys: ['d/3'], duration: 'q' }, { keys: ['a/3'], duration: 'q' },
          { keys: ['d/4'], duration: 'q' }, { keys: ['f/4'], duration: 'q' }
        ],
        tabNotes: [
          { positions: [{ str: 4, fret: 0 }], duration: 'q' },
          { positions: [{ str: 3, fret: 2 }], duration: 'q' },
          { positions: [{ str: 2, fret: 3 }], duration: 'q' },
          { positions: [{ str: 1, fret: 2 }], duration: 'q' }
        ]
      },
      {
        id: `${id}-m4`, chordName: 'C',
        notesVF: [
          { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
          { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
        ],
        tabNotes: [
          { positions: [{ str: 5, fret: 3 }], duration: 'q' },
          { positions: [{ str: 4, fret: 2 }], duration: 'q' },
          { positions: [{ str: 3, fret: 0 }], duration: 'q' },
          { positions: [{ str: 2, fret: 1 }], duration: 'q' }
        ]
      }
    ],
    strummingPatterns: DEFAULT_SONG.strummingPatterns,
    lyrics: ''
  }
}

export const THE_LIST_SONG: SongData = {
  id: 'the-list',
  title: 'The List',
  key: 'Am',
  timeSignature: [4, 4],
  tempo: 72,
  chordProgression: ['Am', 'Fmaj7', 'C', 'G'],
  videoIds: [],
  measures: [
    // ── VERSE 1 ─────────────────────────────────────────
    {
      id: 'tl-v1', chordName: 'Am', sectionLabel: 'Verse 1',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v2', chordName: 'Fmaj7',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['f/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 3 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v3', chordName: 'C',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v4', chordName: 'G',
      notesVF: [
        { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },

    // ── VERSE 2 ─────────────────────────────────────────
    {
      id: 'tl-v5', chordName: 'Am', sectionLabel: 'Verse 2',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v6', chordName: 'Fmaj7',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['f/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 3 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v7', chordName: 'C',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v8', chordName: 'G',
      notesVF: [
        { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },

    // ── VERSE 3 ─────────────────────────────────────────
    {
      id: 'tl-v9', chordName: 'Am', sectionLabel: 'Verse 3',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v10', chordName: 'Fmaj7',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['f/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 3 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v11', chordName: 'Am',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-v12', chordName: 'Em',
      notesVF: [
        { keys: ['e/3'], duration: 'q' }, { keys: ['g/3'], duration: 'q' },
        { keys: ['b/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },

    // ── TURN (Verse 4) ───────────────────────────────────
    {
      id: 'tl-t1', chordName: 'Fmaj7', sectionLabel: 'The Turn',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['f/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['e/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 4, fret: 3 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' },
        { positions: [{ str: 1, fret: 0 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-t2', chordName: 'C',
      notesVF: [
        { keys: ['c/3'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 3 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-t3', chordName: 'G',
      notesVF: [
        { keys: ['g/2'], duration: 'q' }, { keys: ['b/2'], duration: 'q' },
        { keys: ['g/3'], duration: 'q' }, { keys: ['d/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 6, fret: 3 }], duration: 'q' },
        { positions: [{ str: 5, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 0 }], duration: 'q' },
        { positions: [{ str: 1, fret: 3 }], duration: 'q' }
      ]
    },
    {
      id: 'tl-t4', chordName: 'Am',
      notesVF: [
        { keys: ['a/2'], duration: 'q' }, { keys: ['e/3'], duration: 'q' },
        { keys: ['a/3'], duration: 'q' }, { keys: ['c/4'], duration: 'q' }
      ],
      tabNotes: [
        { positions: [{ str: 5, fret: 0 }], duration: 'q' },
        { positions: [{ str: 4, fret: 2 }], duration: 'q' },
        { positions: [{ str: 3, fret: 2 }], duration: 'q' },
        { positions: [{ str: 2, fret: 1 }], duration: 'q' }
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
      name: 'Slow Lament (D — DU)',
      beats: [
        { subdivision: '4', direction: 'down', accent: 'accent' },
        { subdivision: '4', direction: 'rest', accent: 'normal' },
        { subdivision: '8', direction: 'down', accent: 'normal' },
        { subdivision: '8', direction: 'up', accent: 'normal' }
      ]
    }
  ],
  lyrics: `The List

Verse 1:
Woke up already tired of the day
The coffee's cold, the inbox won't behave
Someone parked across my drive again
And I have not even started yet

Verse 2:
The dog got sick across the kitchen floor
The bank called twice, I didn't answer for
A reason I can't name out loud
The house still feels too quiet now

Verse 3:
And underneath the parking and the post
Is the one thing I keep counting most
The empty chair, the unmade bed
The prayers I start and leave unsaid

Verse 4 (The Turn):
So I wrote it down and read it back to you
The whole ridiculous and aching list
And somewhere round the cold coffee
I caught myself, I almost laughed
It didn't fix a single thing
But it loosened how it held`
}

export const SUGGESTED_SEARCHES = [
  'Em Travis fingerpicking lament guitar tutorial',
  'E minor Travis picking beginner guitar',
  'D DU UDU strumming pattern guitar tutorial',
  'Psalm 13 lament song worship guitar',
  'Dustin Kensrue guitar fingerpicking style',
  'Bon Iver fingerpicking technique guitar'
]
