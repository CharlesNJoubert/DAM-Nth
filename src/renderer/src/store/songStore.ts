import { create } from 'zustand'
import { SongData, PanelId, StrummingPattern } from '../types/song'
import { DEFAULT_SONG } from '../data/defaultSong'

interface SongStore {
  song: SongData
  activePanel: PanelId
  selectedChord: string
  setActivePanel: (panel: PanelId) => void
  setLyrics: (lyrics: string) => void
  setTitle: (title: string) => void
  setSelectedChord: (chord: string) => void
  addVideoId: (videoId: string) => void
  removeVideoId: (videoId: string) => void
  addStrummingPattern: (pattern: StrummingPattern) => void
}

export const useSongStore = create<SongStore>((set) => ({
  song: DEFAULT_SONG,
  activePanel: 'lyrics',
  selectedChord: 'Em',

  setActivePanel: (panel) => set({ activePanel: panel }),

  setLyrics: (lyrics) =>
    set((state) => ({ song: { ...state.song, lyrics } })),

  setTitle: (title) =>
    set((state) => ({ song: { ...state.song, title } })),

  setSelectedChord: (chord) => set({ selectedChord: chord }),

  addVideoId: (videoId) =>
    set((state) => ({
      song: {
        ...state.song,
        videoIds: state.song.videoIds.includes(videoId)
          ? state.song.videoIds
          : [...state.song.videoIds, videoId]
      }
    })),

  removeVideoId: (videoId) =>
    set((state) => ({
      song: {
        ...state.song,
        videoIds: state.song.videoIds.filter((id) => id !== videoId)
      }
    })),

  addStrummingPattern: (pattern) =>
    set((state) => ({
      song: {
        ...state.song,
        strummingPatterns: [...state.song.strummingPatterns, pattern]
      }
    }))
}))
