import { useSongStore } from '../../store/songStore'
import TabRenderer from './TabRenderer'

export default function TabsPanel() {
  const song = useSongStore((s) => s.song)

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Guitar Tabs</h1>
        <p className="text-sm text-gray-400 mt-1">
          Standard guitar tablature · 6 strings · Low E to High e
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg overflow-x-auto">
        <TabRenderer measures={song.measures} timeSignature={song.timeSignature} />
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        {song.measures.filter((m) => m.sectionLabel).map((measure, i) => (
          <div key={measure.id} className="bg-gray-800 rounded-lg p-3">
            <div className="text-xs text-indigo-400 font-semibold mb-1">{measure.sectionLabel}</div>
            <div className="text-base font-bold text-gray-100">{measure.chordName}</div>
            <div className="mt-1 text-xs text-gray-500 font-mono">
              {measure.tabNotes.map((n) => n.positions.map((p) => `${p.str}:${p.fret}`).join(' ')).join(' | ')}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gray-800 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-gray-300 mb-2">String Guide</h2>
        <div className="grid grid-cols-6 gap-2 text-center">
          {['1: e', '2: B', '3: G', '4: D', '5: A', '6: E'].map((s) => (
            <div key={s} className="bg-gray-700 rounded px-2 py-1 text-xs text-gray-400 font-mono">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
