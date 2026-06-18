import { ElectronAPI } from '@electron-toolkit/preload'

export interface LyricRequest {
  context: string
  prompt: string
  key?: string
  tempo?: number
  moods?: string[]
}

export interface LyricChunk {
  type: 'delta' | 'done' | 'error'
  text?: string
  error?: string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      generateLyrics: (req: LyricRequest) => Promise<void>
      onLyricsChunk: (cb: (chunk: LyricChunk) => void) => () => void
      openExternal: (url: string) => void
    }
  }
}
