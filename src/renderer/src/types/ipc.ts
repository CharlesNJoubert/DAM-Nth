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

export type LyricTaskType = 'improve' | 'next-line' | 'rhyme' | 'full-verse'
