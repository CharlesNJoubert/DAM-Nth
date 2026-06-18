import { useSongStore } from '../../store/songStore'
import { CHORD_LIBRARY } from '../../data/chordLibrary'
import ChordCard from './ChordCard'
import ChordDiagram from './ChordDiagram'

export default function ChordsPanel() {
  const selectedChord = useSongStore((s) => s.selectedChord)
  const setSelectedChord = useSongStore((s) => s.setSelectedChord)
  const chordProgression = useSongStore((s) => s.song.chordProgression)

  const selected = CHORD_LIBRARY[selectedChord]

  return (
    <div className="h-full flex overflow-hidden">
      {/* Chord grid */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-100">Chords & Finger Positions</h1>
          <p className="text-sm text-gray-400 mt-1">
            Click any chord to see the full fingering diagram
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Song Progression
          </h2>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {chordProgression.map((chordName, i) => {
              const def = CHORD_LIBRARY[chordName]
              if (!def) return null
              return (
                <ChordCard
                  key={i}
                  chord={def}
                  isSelected={selectedChord === chordName}
                  onClick={() => setSelectedChord(chordName)}
                />
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            All Chords
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {Object.values(CHORD_LIBRARY).map((chord) => (
              <ChordCard
                key={chord.name}
                chord={chord}
                isSelected={selectedChord === chord.name}
                onClick={() => setSelectedChord(chord.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="w-72 bg-gray-950 border-l border-gray-800 p-6 flex flex-col items-center overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-100 mb-1">{selected.name}</h2>
          <p className="text-sm text-gray-400 mb-6">{selected.displayName}</p>

          <div className="bg-gray-900 rounded-2xl p-6">
            <ChordDiagram chord={selected} size={2} />
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Fingering
            </h3>
            <div className="space-y-2">
              {selected.fingers
                .filter((f) => f.fret > 0)
                .sort((a, b) => b.string - a.string)
                .map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
                  >
                    <span className="text-xs text-gray-400">
                      String {f.string} · Fret {f.fret}
                    </span>
                    <span className="text-xs font-mono bg-indigo-600 text-white px-2 py-0.5 rounded">
                      Finger {f.finger}
                    </span>
                  </div>
                ))}
              {selected.fingers
                .filter((f) => f.fret === 0)
                .map((f, i) => (
                  <div
                    key={`open-${i}`}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
                  >
                    <span className="text-xs text-gray-400">String {f.string}</span>
                    <span className="text-xs font-mono bg-green-700 text-white px-2 py-0.5 rounded">
                      Open
                    </span>
                  </div>
                ))}
              {selected.fingers
                .filter((f) => f.fret === -1)
                .map((f, i) => (
                  <div
                    key={`mute-${i}`}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
                  >
                    <span className="text-xs text-gray-400">String {f.string}</span>
                    <span className="text-xs font-mono bg-red-800 text-white px-2 py-0.5 rounded">
                      Muted
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {selected.barre && (
            <div className="mt-4 w-full bg-indigo-950 border border-indigo-800 rounded-xl p-3">
              <p className="text-xs text-indigo-300">
                <span className="font-semibold">Barre chord</span> — Press finger 1 flat
                across all strings at fret {selected.barre}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
