import { useState } from 'react'
import { Search, Plus, ExternalLink } from 'lucide-react'
import { SUGGESTED_SEARCHES } from '../../data/defaultSong'

interface Props {
  onAddVideo: (videoId: string) => void
}

function extractVideoId(input: string): string | null {
  const trimmed = input.trim()
  // Already an ID (11 chars, alphanumeric + _ -)
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed
  // YouTube URL patterns
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /embed\/([A-Za-z0-9_-]{11})/
  ]
  for (const pattern of patterns) {
    const match = trimmed.match(pattern)
    if (match) return match[1]
  }
  return null
}

export default function VideoSearch({ onAddVideo }: Props) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleAdd = () => {
    const id = extractVideoId(input)
    if (!id) {
      setError('Paste a YouTube URL or 11-character video ID')
      return
    }
    onAddVideo(id)
    setInput('')
    setError('')
  }

  const openSearch = (query: string) => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    window.api.openExternal(url)
  }

  return (
    <div className="space-y-4">
      {/* Add by URL/ID */}
      <div>
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
          Add Video by URL or ID
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError('')
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="https://youtu.be/... or video ID"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>

      {/* Suggested searches */}
      <div>
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
          Search on YouTube
        </label>
        <div className="space-y-2">
          {SUGGESTED_SEARCHES.map((query, i) => (
            <button
              key={i}
              onClick={() => openSearch(query)}
              className="w-full flex items-center justify-between px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-colors text-left"
            >
              <span className="flex items-center gap-2">
                <Search size={14} className="text-gray-500 shrink-0" />
                {query}
              </span>
              <ExternalLink size={12} className="text-gray-600 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
