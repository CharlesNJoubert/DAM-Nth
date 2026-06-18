import { useSongStore } from './store/songStore'
import Sidebar from './components/layout/Sidebar'
import PanelContainer from './components/layout/PanelContainer'

export default function App() {
  const title = useSongStore((s) => s.song.title)
  const setTitle = useSongStore((s) => s.setTitle)

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Title bar drag region */}
      <div
        className="flex items-center px-4 h-9 bg-gray-900 border-b border-gray-800 shrink-0 select-none"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <span className="text-xs text-gray-500 mr-3 font-medium tracking-wider uppercase">
          Lament Songwriter
        </span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-sm text-gray-300 border-none outline-none flex-1 min-w-0"
          style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
          placeholder="Song title..."
        />
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <PanelContainer />
      </div>
    </div>
  )
}
