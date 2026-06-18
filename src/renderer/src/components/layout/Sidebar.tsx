import { Music2, FileMusic, Hand, Waves, Youtube, Sparkles, Guitar, BookOpen, Fingerprint } from 'lucide-react'
import { useSongStore } from '../../store/songStore'
import { PanelId } from '../../types/song'

const NAV_ITEMS: { id: PanelId; icon: React.ReactNode; label: string }[] = [
  { id: 'lyrics', icon: <Sparkles size={20} />, label: 'AI Lyrics' },
  { id: 'sheet', icon: <FileMusic size={20} />, label: 'Sheet Music' },
  { id: 'tabs', icon: <Music2 size={20} />, label: 'Guitar Tabs' },
  { id: 'chords', icon: <Hand size={20} />, label: 'Chords' },
  { id: 'strumming', icon: <Waves size={20} />, label: 'Strumming' },
  { id: 'videos', icon: <Youtube size={20} />, label: 'Videos' },
  { id: 'theory', icon: <BookOpen size={20} />, label: 'Theory' },
  { id: 'fingerpicking', icon: <Fingerprint size={20} />, label: 'Fingerpicking' }
]

export default function Sidebar() {
  const activePanel = useSongStore((s) => s.activePanel)
  const setActivePanel = useSongStore((s) => s.setActivePanel)

  return (
    <nav className="group flex flex-col w-14 hover:w-48 bg-gray-950 border-r border-gray-800 shrink-0 overflow-hidden transition-all duration-200 ease-in-out">
      {/* Logo area */}
      <div className="flex items-center gap-3 px-3 py-4 border-b border-gray-800">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Guitar size={16} className="text-white" />
        </div>
        <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap text-xs font-semibold text-gray-400 uppercase tracking-wider transition-opacity duration-200">
          Song Builder
        </span>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-1 p-2 flex-1">
        {NAV_ITEMS.map(({ id, icon, label }) => {
          const isActive = activePanel === id
          return (
            <button
              key={id}
              onClick={() => setActivePanel(id)}
              className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-left transition-colors duration-150 ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
              title={label}
            >
              <span className="shrink-0">{icon}</span>
              <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm font-medium transition-opacity duration-200">
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
