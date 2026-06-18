import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Plus, Copy, Trash2, Music } from 'lucide-react'
import { useSongStore } from '../../store/songStore'

export default function SongPicker() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const songs = useSongStore((s) => s.songs)
  const activeSongId = useSongStore((s) => s.activeSongId)
  const switchSong = useSongStore((s) => s.switchSong)
  const createSong = useSongStore((s) => s.createSong)
  const duplicateSong = useSongStore((s) => s.duplicateSong)
  const deleteSong = useSongStore((s) => s.deleteSong)

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [open])

  return (
    <div ref={ref} className="relative shrink-0" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
        title="Songs"
      >
        <Music size={13} />
        <span className="text-xs font-medium max-w-[120px] truncate text-gray-300">
          {songs.find((s) => s.id === activeSongId)?.title ?? 'Song'}
        </span>
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="p-2 border-b border-gray-800">
            <button
              onClick={() => { createSong(); setOpen(false) }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-indigo-300 hover:bg-indigo-900/40 transition-colors"
            >
              <Plus size={14} />
              New song
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto p-2 space-y-0.5">
            {songs.map((s) => {
              const isActive = s.id === activeSongId
              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-1 rounded-lg px-2 py-1.5 group ${
                    isActive ? 'bg-indigo-600/30' : 'hover:bg-gray-800'
                  }`}
                >
                  <button
                    className="flex-1 text-left text-sm truncate text-gray-200"
                    onClick={() => { switchSong(s.id); setOpen(false) }}
                  >
                    {isActive && <span className="text-indigo-400 mr-1">▶</span>}
                    {s.title}
                  </button>
                  <button
                    onClick={() => { duplicateSong(s.id); setOpen(false) }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-gray-300 transition-opacity"
                    title="Duplicate"
                  >
                    <Copy size={12} />
                  </button>
                  <button
                    onClick={() => deleteSong(s.id)}
                    className={`p-1 text-gray-500 hover:text-red-400 transition-colors ${songs.length === 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'}`}
                    title="Delete"
                    disabled={songs.length === 1}
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
