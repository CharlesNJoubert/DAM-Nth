import { useSongStore } from '../../store/songStore'
import StaveRenderer from './StaveRenderer'

export default function SheetMusicPanel() {
  const song = useSongStore((s) => s.song)

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Sheet Music</h1>
        <p className="text-sm text-gray-400 mt-1">
          Key of {song.key} · {song.timeSignature[0]}/{song.timeSignature[1]} · {song.tempo} BPM
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg overflow-x-auto">
        {/* Chord name labels above each measure — measure width 240px, first starts at x=20 */}
        <div className="flex mb-1" style={{ paddingLeft: 20 }}>
          {song.measures.map((measure) => (
            <div
              key={measure.id}
              className="text-sm font-bold text-indigo-600 shrink-0"
              style={{ width: 240 }}
            >
              {measure.chordName}
            </div>
          ))}
        </div>
        <StaveRenderer measures={song.measures} timeSignature={song.timeSignature} />
      </div>

      <div className="mt-6 bg-gray-800 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-gray-300 mb-3">Chord Progression</h2>
        <div className="flex gap-3 flex-wrap">
          {song.chordProgression.map((chord, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-semibold text-sm"
            >
              {chord}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 rounded-xl p-4">
        <p className="text-xs text-gray-500 leading-relaxed">
          Standard musical notation for the Am–C–G–F lament progression.
          Each measure shows the melody notes above with chord labels.
        </p>
      </div>
    </div>
  )
}
