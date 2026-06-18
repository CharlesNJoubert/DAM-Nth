import { useSongStore } from '../../store/songStore'
import TabsPanel from '../tabs/TabsPanel'
import SheetMusicPanel from '../sheetmusic/SheetMusicPanel'
import ChordsPanel from '../chords/ChordsPanel'
import StrummingPanel from '../strumming/StrummingPanel'
import VideosPanel from '../videos/VideosPanel'
import LyricsPanel from '../lyrics/LyricsPanel'
import TheoryPanel from '../theory/TheoryPanel'
import FingerpickingPanel from '../fingerpicking/FingerpickingPanel'

export default function PanelContainer() {
  const activePanel = useSongStore((s) => s.activePanel)

  return (
    <main className="flex-1 overflow-hidden bg-gray-900">
      {activePanel === 'lyrics' && <LyricsPanel />}
      {activePanel === 'sheet' && <SheetMusicPanel />}
      {activePanel === 'tabs' && <TabsPanel />}
      {activePanel === 'chords' && <ChordsPanel />}
      {activePanel === 'strumming' && <StrummingPanel />}
      {activePanel === 'videos' && <VideosPanel />}
      {activePanel === 'theory' && <TheoryPanel />}
      {activePanel === 'fingerpicking' && <FingerpickingPanel />}
    </main>
  )
}
