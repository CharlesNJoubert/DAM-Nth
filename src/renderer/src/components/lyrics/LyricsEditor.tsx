import { useSongStore } from '../../store/songStore'

export default function LyricsEditor() {
  const lyrics = useSongStore((s) => s.song.lyrics)
  const setLyrics = useSongStore((s) => s.setLyrics)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Lyrics
        </span>
        <span className="text-xs text-gray-600">
          {lyrics.split('\n').length} lines · {lyrics.split(/\s+/).filter(Boolean).length} words
        </span>
      </div>
      <textarea
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
        className="flex-1 bg-transparent text-gray-200 text-sm leading-7 resize-none outline-none p-4 font-mono"
        placeholder={`Write your lament lyrics here...\n\nVerse 1:\n...\n\nChorus:\n...`}
        spellCheck
      />
    </div>
  )
}
