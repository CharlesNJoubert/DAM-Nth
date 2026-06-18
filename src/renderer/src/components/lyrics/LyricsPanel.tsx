import LyricsEditor from './LyricsEditor'
import AIAssistant from './AIAssistant'

export default function LyricsPanel() {
  return (
    <div className="h-full flex overflow-hidden">
      {/* Lyrics editor — left */}
      <div className="flex-1 flex flex-col border-r border-gray-800 overflow-hidden">
        <LyricsEditor />
      </div>

      {/* AI assistant — right */}
      <div className="w-80 bg-gray-950 overflow-hidden flex flex-col">
        <AIAssistant />
      </div>
    </div>
  )
}
