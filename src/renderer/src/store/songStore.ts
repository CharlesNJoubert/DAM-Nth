import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SongData, PanelId, StrummingPattern } from '../types/song'
import { DEFAULT_SONG, THE_LIST_SONG, createBlankSong } from '../data/defaultSong'

interface SongStore {
  songs: SongData[]
  activeSongId: string
  song: SongData
  activePanel: PanelId
  selectedChord: string

  // Song list management
  switchSong: (id: string) => void
  createSong: () => void
  duplicateSong: (id: string) => void
  deleteSong: (id: string) => void

  // Active song mutations
  setActivePanel: (panel: PanelId) => void
  setLyrics: (lyrics: string) => void
  setTitle: (title: string) => void
  setSelectedChord: (chord: string) => void
  addVideoId: (videoId: string) => void
  removeVideoId: (videoId: string) => void
  addStrummingPattern: (pattern: StrummingPattern) => void
}

function patchActive(songs: SongData[], id: string, patch: Partial<SongData>): SongData[] {
  return songs.map((s) => (s.id === id ? { ...s, ...patch } : s))
}

export const useSongStore = create<SongStore>()(
  persist(
    (set, get) => ({
      songs: [DEFAULT_SONG, THE_LIST_SONG],
      activeSongId: DEFAULT_SONG.id,
      song: DEFAULT_SONG,
      activePanel: 'lyrics' as PanelId,
      selectedChord: 'Em',

      switchSong: (id) => {
        const song = get().songs.find((s) => s.id === id)
        if (song) set({ activeSongId: id, song })
      },

      createSong: () => {
        const id = Date.now().toString(36)
        const blank = createBlankSong(id)
        set((state) => ({
          songs: [...state.songs, blank],
          activeSongId: id,
          song: blank
        }))
      },

      duplicateSong: (id) => {
        const src = get().songs.find((s) => s.id === id)
        if (!src) return
        const newId = Date.now().toString(36)
        const copy: SongData = { ...src, id: newId, title: `${src.title} (copy)` }
        set((state) => ({
          songs: [...state.songs, copy],
          activeSongId: newId,
          song: copy
        }))
      },

      deleteSong: (id) => {
        const { songs, activeSongId } = get()
        if (songs.length === 1) return // always keep at least one
        const next = songs.filter((s) => s.id !== id)
        const nextActive = activeSongId === id ? next[0] : next.find((s) => s.id === activeSongId)!
        set({ songs: next, activeSongId: nextActive.id, song: nextActive })
      },

      setActivePanel: (panel) => set({ activePanel: panel }),
      setSelectedChord: (chord) => set({ selectedChord: chord }),

      setTitle: (title) =>
        set((state) => {
          const song = { ...state.song, title }
          return { song, songs: patchActive(state.songs, state.activeSongId, { title }) }
        }),

      setLyrics: (lyrics) =>
        set((state) => {
          const song = { ...state.song, lyrics }
          return { song, songs: patchActive(state.songs, state.activeSongId, { lyrics }) }
        }),

      addVideoId: (videoId) =>
        set((state) => {
          if (state.song.videoIds.includes(videoId)) return {}
          const videoIds = [...state.song.videoIds, videoId]
          const song = { ...state.song, videoIds }
          return { song, songs: patchActive(state.songs, state.activeSongId, { videoIds }) }
        }),

      removeVideoId: (videoId) =>
        set((state) => {
          const videoIds = state.song.videoIds.filter((v) => v !== videoId)
          const song = { ...state.song, videoIds }
          return { song, songs: patchActive(state.songs, state.activeSongId, { videoIds }) }
        }),

      addStrummingPattern: (pattern) =>
        set((state) => {
          const strummingPatterns = [...state.song.strummingPatterns, pattern]
          const song = { ...state.song, strummingPatterns }
          return { song, songs: patchActive(state.songs, state.activeSongId, { strummingPatterns }) }
        })
    }),
    {
      name: 'lament-songs',
      version: 2,
      migrate: (persisted: unknown) => {
        const state = persisted as { songs?: SongData[]; activeSongId?: string }
        const songs = state.songs ?? [DEFAULT_SONG]
        const presets = [DEFAULT_SONG, THE_LIST_SONG]
        const merged = [...songs]
        for (const preset of presets) {
          if (!merged.find((s) => s.id === preset.id)) merged.splice(presets.indexOf(preset), 0, preset)
        }
        return { ...state, songs: merged }
      },
      partialize: (state) => ({ songs: state.songs, activeSongId: state.activeSongId })
    }
  )
)
