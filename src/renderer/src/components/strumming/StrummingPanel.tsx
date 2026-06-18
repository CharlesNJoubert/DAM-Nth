import { useSongStore } from '../../store/songStore'
import PatternRow from './PatternRow'

export default function StrummingPanel() {
  const patterns = useSongStore((s) => s.song.strummingPatterns)

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Strumming & Picking Patterns</h1>
        <p className="text-sm text-gray-400 mt-1">
          Visual rhythm patterns for your lament song
        </p>
      </div>

      <div className="space-y-4">
        {patterns.map((pattern, i) => (
          <PatternRow key={i} pattern={pattern} />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 bg-gray-800 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-gray-300 mb-3">Legend</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="flex items-center gap-2">
            <span className="text-indigo-400 text-lg">↓</span>
            <span className="text-xs text-gray-400">Down strum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-lg">↑</span>
            <span className="text-xs text-gray-400">Up strum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-lg">×</span>
            <span className="text-xs text-gray-400">Muted / chuck</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg">—</span>
            <span className="text-xs text-gray-400">Rest</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Cells with a highlighted border indicate accented beats.
          ¼ = quarter note, ⅛ = eighth note, 1/16 = sixteenth note.
        </p>
      </div>

      {/* Tips */}
      <div className="mt-4 bg-gray-800 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-gray-300 mb-2">Lament Song Tips</h2>
        <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
          <li>Slower tempos (60–80 BPM) amplify the sense of grief and longing</li>
          <li>Fingerpicking patterns create intimacy — PIMA or PIMI work beautifully</li>
          <li>Leave space with rests — silence can carry as much weight as sound</li>
          <li>A gentle muted strum on the off-beat adds texture without heaviness</li>
          <li>The Am→F transition is one of the most emotionally powerful in lament music</li>
        </ul>
      </div>
    </div>
  )
}
