import { useState } from 'react'

// ─── Types ─────────────────────────────────────────────────────────────────

interface Beat {
  beat: string
  thumb: string | null
  index: string | null
  middle: string | null
  ring: string | null
  note: string
}

interface ChordPattern {
  chord: string
  bassStrings: string
  pattern: Beat[]
  tip: string
}

// ─── Data ───────────────────────────────────────────────────────────────────

const PIMA_FINGERS = [
  {
    abbr: 'P',
    full: 'Pulgar (Thumb)',
    strings: 'Strings 6, 5, 4',
    color: 'bg-amber-500',
    text: 'text-amber-300',
    desc:
      'The thumb handles all three bass strings. It alternates between them — usually 6th and 4th (or 5th and 4th) — giving the picking pattern its distinctive walking bass feel.'
  },
  {
    abbr: 'I',
    full: 'Índice (Index)',
    strings: 'String 3',
    color: 'bg-sky-500',
    text: 'text-sky-300',
    desc:
      'The index finger rests on the G string (3rd string) and plucks upward. It fills in the inner voice between the bass and the melody strings.'
  },
  {
    abbr: 'M',
    full: 'Medio (Middle)',
    strings: 'String 2',
    color: 'bg-emerald-500',
    text: 'text-emerald-300',
    desc:
      'The middle finger plucks the B string (2nd string). Together with ring, it carries the melodic top voice of the chord.'
  },
  {
    abbr: 'A',
    full: 'Anular (Ring)',
    strings: 'String 1',
    color: 'bg-violet-500',
    text: 'text-violet-300',
    desc:
      'The ring finger plucks the high E string (1st string) — the highest note of each arpeggio. It catches the brightness on top.'
  }
]

const TRAVIS_BEATS: Beat[] = [
  { beat: '1', thumb: '6th', index: null, middle: null, ring: null, note: 'Bass lands on the downbeat — anchor the groove here' },
  { beat: '+', thumb: null, index: '3rd', middle: '2nd', ring: '1st', note: 'Fingers pluck together on the off-beat (pinch)' },
  { beat: '2', thumb: '4th', index: null, middle: null, ring: null, note: 'Thumb walks to the 4th string — inner bass note' },
  { beat: '+', thumb: null, index: '3rd', middle: '2nd', ring: null, note: 'Lighter pinch — ring finger can rest here for a softer feel' },
  { beat: '3', thumb: '6th', index: null, middle: null, ring: null, note: 'Bass returns to root — reinforces the pulse' },
  { beat: '+', thumb: null, index: '3rd', middle: '2nd', ring: '1st', note: 'Full pinch again — mirror of beat 1' },
  { beat: '4', thumb: '4th', index: null, middle: null, ring: null, note: 'Inner bass walk — keeps the rhythm moving forward' },
  { beat: '+', thumb: null, index: '3rd', middle: '2nd', ring: null, note: 'Soft pinch to close the measure — breathe here' }
]

const CHORD_PATTERNS: ChordPattern[] = [
  {
    chord: 'Em',
    bassStrings: '6th (E) alternating to 4th (D)',
    pattern: [
      { beat: '1', thumb: 'E (6th)', index: null, middle: null, ring: null, note: 'Open low E — deepest bass note in the song' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'All three fingers lift — very open, resonant' },
      { beat: '2', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk to D string — you\'re now over the chord\'s fifth' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Softer pinch — leave the high E ringing from beat 1+' },
      { beat: '3', thumb: 'E (6th)', index: null, middle: null, ring: null, note: 'Root returns — feels like a heartbeat' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'Full brightness again' },
      { beat: '4', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Close with the walk' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Breathe — the next chord begins on beat 1' }
    ],
    tip: 'Let the open strings ring as long as possible. Em is your most resonant chord — milk the sustain.'
  },
  {
    chord: 'Cmaj7',
    bassStrings: '5th (A) alternating to 4th (D)',
    pattern: [
      { beat: '1', thumb: 'A (5th)', index: null, middle: null, ring: null, note: 'C chord roots on the A string — rich and warm' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'Cmaj7: the open B string is the major 7th — gorgeous' },
      { beat: '2', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk to D — the chord\'s 9th (D above C)' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Lighter pluck — B string shimmer' },
      { beat: '3', thumb: 'A (5th)', index: null, middle: null, ring: null, note: 'Return to root' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'Full brightness' },
      { beat: '4', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk out' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Gentle close' }
    ],
    tip: 'Cmaj7 with Travis picking feels especially luminous because of the open B string. Don\'t fret the B string — leave it open.'
  },
  {
    chord: 'G',
    bassStrings: '6th (E/G) alternating to 4th (D)',
    pattern: [
      { beat: '1', thumb: 'G (6th)', index: null, middle: null, ring: null, note: 'G chord: 3rd fret low E gives you the root G' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'All three top strings — very bright and open' },
      { beat: '2', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk to open D — natural chord colour' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Inner voices only' },
      { beat: '3', thumb: 'G (6th)', index: null, middle: null, ring: null, note: 'Root back' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'Full pinch' },
      { beat: '4', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Breathe into D/F#' }
    ],
    tip: "G's bass walk down to D feels like it's already reaching toward D/F#. The transition is built into the pattern."
  },
  {
    chord: 'D/F#',
    bassStrings: '6th (F#) alternating to 4th (D)',
    pattern: [
      { beat: '1', thumb: 'F# (6th)', index: null, middle: null, ring: null, note: '2nd fret low E — the F# bass note under a D chord is the magic here' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'D shape on strings 4-1, Bass on 6th — voice leading down from G' },
      { beat: '2', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk to D root' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'Lighter' },
      { beat: '3', thumb: 'F# (6th)', index: null, middle: null, ring: null, note: 'The F# bass gives forward motion — voice leading to Em' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: 'e (1st)', note: 'Full brightness' },
      { beat: '4', thumb: 'D (4th)', index: null, middle: null, ring: null, note: 'Walk to close' },
      { beat: '+', thumb: null, index: 'G (3rd)', middle: 'B (2nd)', ring: null, note: 'This half-measure feel pulls strongly toward Em resolution' }
    ],
    tip: 'D/F# is the passing chord that creates the Em → Cmaj7 → G → D/F# → Em circle. The F# bass is a leading tone that wants to resolve up to G or down to E.'
  }
]

const TECHNIQUE_TIPS = [
  {
    title: 'Nail vs. Flesh',
    body: 'Fingerpicking tone changes dramatically with how much nail contacts the string. A longer nail gives a crisper, brighter attack (classical style). Playing flesh-first gives a warmer, more muted tone — better for lament and introspective songs. Experiment to find the balance that fits the mood.'
  },
  {
    title: 'Thumb Angle',
    body: 'Point your thumb downward at roughly 45° and brush it across the string from a resting position on the string above. The stroke should be a push toward the floor, not a pull away from the guitar. This prevents the thumb from getting tangled with the fingers.'
  },
  {
    title: 'Rest vs. Free Stroke',
    body: 'In a rest stroke the finger plucks and lands on the next string — gives more volume and authority. In a free stroke the finger plucks through without touching the next string — lighter, better for continuous arpeggios like Travis picking. Use free stroke for this song.'
  },
  {
    title: 'Anchor Finger',
    body: 'Plant your pinky (or ring finger if not playing the 1st string) lightly on the soundboard below the strings. This stabilises your hand so the other fingers move consistently. Don\'t press hard — just a feather touch. Remove the anchor when you need to shift position.'
  },
  {
    title: 'Independent Thumb',
    body: 'The hardest part of Travis picking is making the thumb truly independent from the fingers — it should feel automatic like a metronome while the fingers improvise above it. Practise the thumb alone first (just alternating bass on beats 1,2,3,4) until it\'s effortless, then layer in the fingers one at a time.'
  },
  {
    title: 'Dynamics & Accent',
    body: 'In a lament the loudest note is rarely the bass. Let the melody string (1st or 2nd) carry the most intensity on emotionally charged beats. Pull harder on the ring/middle finger when a lyric climaxes. The thumb can stay mezzo-forte throughout while the top voice speaks.'
  },
  {
    title: 'Muting with the Palm',
    body: 'For a darker, more percussive sound (good on choruses or bridge sections), rest the edge of your palm lightly on the strings just above the saddle before the thumb strikes. This is "palm muting" — it shortens the sustain and adds a thumping, folk-blues quality to the bass notes.'
  },
  {
    title: 'Rolls & Arpeggios',
    body: 'A "roll" is when p-i-m-a fire in rapid succession rather than simultaneously. Try beat 1 as a roll: thumb (P), then immediately index (I), then middle (M), then ring (A) — each a 16th note apart. This creates a harp-like sweep through the chord. Use it sparingly on held final chords for colour.'
  }
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function PimaCard({ finger }: { finger: typeof PIMA_FINGERS[0] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 flex gap-3">
      <div className={`${finger.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-lg`}>
        {finger.abbr}
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-semibold text-gray-100 text-sm">{finger.full}</span>
          <span className={`text-xs font-mono ${finger.text}`}>{finger.strings}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{finger.desc}</p>
      </div>
    </div>
  )
}

function HandDiagram() {
  return (
    <svg viewBox="0 0 260 200" className="w-full max-w-xs" aria-label="Right hand finger diagram">
      {/* Palm */}
      <ellipse cx="130" cy="155" rx="55" ry="40" fill="#374151" stroke="#4B5563" strokeWidth="1.5" />

      {/* Thumb (P) */}
      <ellipse cx="62" cy="128" rx="18" ry="28" fill="#D97706" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(-30 62 128)" />
      <text x="62" y="130" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="bold">P</text>

      {/* Index (I) */}
      <rect x="84" y="52" width="24" height="58" rx="12" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="96" y="82" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="bold">I</text>

      {/* Middle (M) */}
      <rect x="114" y="40" width="24" height="70" rx="12" fill="#059669" stroke="#34D399" strokeWidth="1.5" />
      <text x="126" y="76" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="bold">M</text>

      {/* Ring (A) */}
      <rect x="144" y="48" width="24" height="62" rx="12" fill="#7C3AED" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="156" y="80" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="bold">A</text>

      {/* Pinky */}
      <rect x="174" y="72" width="22" height="46" rx="11" fill="#374151" stroke="#6B7280" strokeWidth="1.5" />
      <text x="185" y="96" textAnchor="middle" dominantBaseline="middle" fill="#9CA3AF" fontSize="11">~</text>

      {/* Labels */}
      <text x="62" y="168" textAnchor="middle" fill="#FCD34D" fontSize="9">Bass</text>
      <text x="62" y="178" textAnchor="middle" fill="#FCD34D" fontSize="9">6·5·4</text>
      <text x="96" y="120" textAnchor="middle" fill="#7DD3FC" fontSize="9">3rd str</text>
      <text x="126" y="120" textAnchor="middle" fill="#6EE7B7" fontSize="9">2nd str</text>
      <text x="156" y="120" textAnchor="middle" fill="#C4B5FD" fontSize="9">1st str</text>
      <text x="185" y="128" textAnchor="middle" fill="#6B7280" fontSize="9">free</text>
    </svg>
  )
}

function StringDiagram() {
  const strings = [
    { num: 1, name: 'e', note: 'high E', finger: 'A', color: '#7C3AED', textColor: '#C4B5FD' },
    { num: 2, name: 'B', note: 'B', finger: 'M', color: '#059669', textColor: '#6EE7B7' },
    { num: 3, name: 'G', note: 'G', finger: 'I', color: '#0284C7', textColor: '#7DD3FC' },
    { num: 4, name: 'D', note: 'D', finger: 'P', color: '#D97706', textColor: '#FCD34D' },
    { num: 5, name: 'A', note: 'A', finger: 'P', color: '#D97706', textColor: '#FCD34D' },
    { num: 6, name: 'E', note: 'low E', finger: 'P', color: '#D97706', textColor: '#FCD34D' }
  ]

  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
      <div className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">
        String → Finger Assignment
      </div>
      <div className="space-y-1.5">
        {strings.map((s) => (
          <div key={s.num} className="flex items-center gap-3">
            <div className="w-5 text-right text-xs text-gray-500 font-mono">{s.num}</div>
            <div
              className="flex-1 h-0.5 rounded"
              style={{ backgroundColor: s.color, opacity: 0.6 + (s.num * 0.05) }}
            />
            <div className="w-6 text-xs font-mono font-bold text-gray-300">{s.name}</div>
            <div className="text-xs text-gray-500 w-12">{s.note}</div>
            <div
              className="w-6 h-6 rounded text-white text-xs font-bold flex items-center justify-center"
              style={{ backgroundColor: s.color }}
            >
              {s.finger}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
        Strings 4–6 are all thumb territory. Strings 1–3 each get one dedicated finger.
      </p>
    </div>
  )
}

function BeatGrid({ beats }: { beats: Beat[] }) {
  const fingerColors: Record<string, string> = {
    thumb: 'bg-amber-500 text-white',
    index: 'bg-sky-600 text-white',
    middle: 'bg-emerald-600 text-white',
    ring: 'bg-violet-600 text-white'
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs min-w-[480px]">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-2 pr-3 text-gray-500 font-mono w-8">Beat</th>
            <th className="text-center py-2 px-2 text-amber-300 w-16">P (Thumb)</th>
            <th className="text-center py-2 px-2 text-sky-300 w-16">I (Index)</th>
            <th className="text-center py-2 px-2 text-emerald-300 w-16">M (Mid)</th>
            <th className="text-center py-2 px-2 text-violet-300 w-16">A (Ring)</th>
            <th className="text-left py-2 pl-3 text-gray-500">Note</th>
          </tr>
        </thead>
        <tbody>
          {beats.map((b, i) => (
            <tr key={i} className={`border-b border-gray-800 ${b.beat === '1' || b.beat === '3' ? 'bg-gray-800/40' : ''}`}>
              <td className="py-2 pr-3 font-mono font-bold text-gray-300">{b.beat}</td>
              <td className="py-2 px-2 text-center">
                {b.thumb ? (
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${fingerColors.thumb}`}>
                    {b.thumb}
                  </span>
                ) : <span className="text-gray-700">·</span>}
              </td>
              <td className="py-2 px-2 text-center">
                {b.index ? (
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${fingerColors.index}`}>
                    {b.index}
                  </span>
                ) : <span className="text-gray-700">·</span>}
              </td>
              <td className="py-2 px-2 text-center">
                {b.middle ? (
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${fingerColors.middle}`}>
                    {b.middle}
                  </span>
                ) : <span className="text-gray-700">·</span>}
              </td>
              <td className="py-2 px-2 text-center">
                {b.ring ? (
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${fingerColors.ring}`}>
                    {b.ring}
                  </span>
                ) : <span className="text-gray-700">·</span>}
              </td>
              <td className="py-2 pl-3 text-gray-500 leading-snug">{b.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Main Panel ──────────────────────────────────────────────────────────────

export default function FingerpickingPanel() {
  const [activeChord, setActiveChord] = useState<number>(0)

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Fingerpicking</h1>
        <p className="text-sm text-gray-400 mt-1 max-w-2xl">
          Travis picking technique in depth — PIMA finger notation, string assignments, chord-by-chord patterns, and nuances for "How Long (Psalm 13)".
        </p>
      </div>

      {/* PIMA grid + hand diagram */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-3">PIMA Finger Notation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {PIMA_FINGERS.map((f) => (
              <PimaCard key={f.abbr} finger={f} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800 rounded-xl p-4 flex justify-center">
              <HandDiagram />
            </div>
            <StringDiagram />
          </div>
        </div>
      </section>

      {/* Travis picking explained */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Travis Picking — Pattern Breakdown</h2>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl leading-relaxed">
          Named after Merle Travis, this pattern locks the thumb into a steady alternating bass
          (beats 1 and 2, and their repeats on 3 and 4) while the fingers pick the treble strings
          on the off-beats (the "+" subdivisions). The result is a self-contained rhythm + melody
          in a single guitar part — the thumb is the drummer, the fingers are the singer.
        </p>
        <div className="bg-gray-800 rounded-xl p-4 mb-4">
          <div className="text-xs text-gray-400 mb-3">
            <span className="font-semibold text-gray-200">Generic 4/4 pattern</span> — applies to any chord, 80 BPM
          </div>
          <BeatGrid beats={TRAVIS_BEATS} />
        </div>
        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-xl p-4">
          <p className="text-sm text-indigo-200 leading-relaxed">
            <strong className="text-indigo-100">Key insight:</strong> The thumb never stops — it keeps ticking regardless of what the fingers do. Once the thumb is automatic you can improvise melodies, add hammer-ons, or syncopate the finger plucks without losing the groove. Practice the thumb alone for 5 minutes before adding any fingers.
          </p>
        </div>
      </section>

      {/* Chord-specific patterns */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Chord-by-Chord Patterns</h2>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl">
          Each chord in the progression has a specific bass string pairing. The patterns below show exactly which string each finger hits on each beat.
        </p>

        {/* Chord tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
          {CHORD_PATTERNS.map((cp, i) => (
            <button
              key={cp.chord}
              onClick={() => setActiveChord(i)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeChord === i
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
              }`}
            >
              {cp.chord}
            </button>
          ))}
        </div>

        {CHORD_PATTERNS[activeChord] && (
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-baseline gap-3 mb-1 flex-wrap">
              <span className="text-lg font-bold text-gray-100">{CHORD_PATTERNS[activeChord].chord}</span>
              <span className="text-xs text-amber-300 font-mono">Bass: {CHORD_PATTERNS[activeChord].bassStrings}</span>
            </div>
            <BeatGrid beats={CHORD_PATTERNS[activeChord].pattern} />
            <div className="mt-3 bg-gray-900 rounded-lg px-4 py-3">
              <p className="text-xs text-sky-300 leading-relaxed">
                <span className="font-semibold text-sky-200">Tip: </span>
                {CHORD_PATTERNS[activeChord].tip}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Voice leading */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Voice Leading Through the Progression</h2>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl leading-relaxed">
          One of the beauties of Em → Cmaj7 → G → D/F# is how the bass line moves stepwise. The
          fingerpicking pattern makes this audible because the thumb is always highlighting the bass note.
        </p>
        <div className="flex items-center gap-2 flex-wrap bg-gray-800 rounded-xl p-4">
          {[
            { chord: 'Em', bass: 'E', fret: 'open 6th' },
            { chord: 'Cmaj7', bass: 'C', fret: '3rd fret 5th' },
            { chord: 'G', bass: 'G', fret: '3rd fret 6th' },
            { chord: 'D/F#', bass: 'F#', fret: '2nd fret 6th' }
          ].map((item, i, arr) => (
            <div key={item.chord} className="flex items-center gap-2">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-100">{item.chord}</div>
                <div className="text-xs text-amber-300 font-mono">{item.bass}</div>
                <div className="text-[10px] text-gray-500">{item.fret}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="text-gray-600 text-lg">→</div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="text-gray-600 text-lg">→</div>
            <div className="text-center">
              <div className="text-sm font-bold text-indigo-400">Em</div>
              <div className="text-xs text-amber-300 font-mono">E</div>
              <div className="text-[10px] text-gray-500">resolves back</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2 max-w-2xl leading-relaxed">
          E → C → G → F# forms a descending chromatic bass line (E, then down by tone to C on the 5th string, then G and F# stepping down on the 6th string). This is the "How Long" bass line — the thumb traces it automatically in the picking pattern.
        </p>
      </section>

      {/* Technique tips */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-4">Technique Nuances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TECHNIQUE_TIPS.map((tip) => (
            <div key={tip.title} className="bg-gray-800 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-100 mb-1">{tip.title}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice routine */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-100 mb-3">Practice Routine</h2>
        <div className="bg-gray-800 rounded-xl p-4 space-y-3">
          {[
            { step: '1', time: '5 min', label: 'Thumb only', desc: 'Em chord, thumb alternates 6th and 4th strings on beats 1-2-3-4 at 60 BPM. Keep it rock-steady before adding anything else.' },
            { step: '2', time: '5 min', label: 'Add pinch on "+"', desc: 'Same Em, now add fingers on every off-beat simultaneously (i-m-a together). Aim for a clean, even sound. Don\'t rush the "+": it should feel like a gentle exhale.' },
            { step: '3', time: '5 min', label: 'Drop ring finger', desc: 'Play the pattern with p and i-m only, leaving ring out. This is your "verse" feel — less bright, more intimate. Then bring ring back on emotional peaks.' },
            { step: '4', time: '5 min', label: 'Walk the progression', desc: 'Play Em → Cmaj7 → G → D/F# at 60 BPM. Focus on the thumb transition between chords — shift your bass note on beat 1 of each new chord.' },
            { step: '5', time: '10 min', label: 'Bring it to tempo', desc: 'Increase to 70, then 80 BPM. At 80 the pattern should feel like breathing — effortless and consistent. Add dynamics: louder on choruses, softer on verses.' }
          ].map((r) => (
            <div key={r.step} className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                {r.step}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-100">{r.label}</span>
                  <span className="text-xs text-indigo-400">{r.time}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
