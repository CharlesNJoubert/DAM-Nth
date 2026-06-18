import { useState } from 'react'
import { Trash2, Play } from 'lucide-react'
import { useSongStore } from '../../store/songStore'
import VideoPlayer from './VideoPlayer'
import VideoSearch from './VideoSearch'

export default function VideosPanel() {
  const videoIds = useSongStore((s) => s.song.videoIds)
  const addVideoId = useSongStore((s) => s.addVideoId)
  const removeVideoId = useSongStore((s) => s.removeVideoId)
  const [activeId, setActiveId] = useState<string | null>(videoIds[0] ?? null)

  const handleAdd = (id: string) => {
    addVideoId(id)
    setActiveId(id)
  }

  return (
    <div className="h-full flex overflow-hidden">
      {/* Sidebar: search + playlist */}
      <div className="w-80 bg-gray-950 border-r border-gray-800 p-4 flex flex-col gap-4 overflow-y-auto">
        <div>
          <h1 className="text-lg font-bold text-gray-100 mb-1">Tutorial Videos</h1>
          <p className="text-xs text-gray-400">
            Add YouTube tutorials to watch inside the app
          </p>
        </div>

        <VideoSearch onAddVideo={handleAdd} />

        {videoIds.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              My Playlist
            </h2>
            <div className="space-y-2">
              {videoIds.map((id) => (
                <div
                  key={id}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                    activeId === id
                      ? 'border-indigo-500 bg-indigo-950'
                      : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveId(id)}
                >
                  <span className="flex items-center gap-2 text-sm text-gray-300 font-mono truncate">
                    <Play size={12} className="text-indigo-400 shrink-0" />
                    {id}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeVideoId(id)
                      if (activeId === id) {
                        setActiveId(videoIds.find((v) => v !== id) ?? null)
                      }
                    }}
                    className="shrink-0 text-gray-600 hover:text-red-400 transition-colors ml-2"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main video area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeId ? (
          <div>
            <VideoPlayer videoId={activeId} />
            <p className="text-xs text-gray-500 mt-2 font-mono text-center">
              Video ID: {activeId}
            </p>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <Play size={32} className="text-gray-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-400 mb-2">No video selected</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              Paste a YouTube URL in the sidebar, or search for a lament guitar tutorial to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
