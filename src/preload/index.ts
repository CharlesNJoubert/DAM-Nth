import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('api', {
  generateLyrics: (req: unknown) => ipcRenderer.invoke('lyrics:generate', req),

  onLyricsChunk: (cb: (chunk: unknown) => void) => {
    const listener = (_: unknown, chunk: unknown) => cb(chunk)
    ipcRenderer.on('lyrics:chunk', listener)
    return () => ipcRenderer.removeListener('lyrics:chunk', listener)
  },

  openExternal: (url: string) => ipcRenderer.send('shell:openExternal', url)
})
