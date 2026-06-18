import { useState, useCallback } from 'react'
import { LyricRequest, LyricChunk } from '../types/ipc'

export function useAIStream() {
  const [response, setResponse] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generate = useCallback(async (req: LyricRequest) => {
    setIsStreaming(true)
    setResponse('')
    setError(null)

    const removeListener = window.api.onLyricsChunk((raw) => {
      const chunk = raw as LyricChunk
      if (chunk.type === 'delta' && chunk.text) {
        setResponse((r) => r + chunk.text)
      }
      if (chunk.type === 'done') {
        setIsStreaming(false)
        removeListener()
      }
      if (chunk.type === 'error') {
        setError(chunk.error ?? 'Unknown error')
        setIsStreaming(false)
        removeListener()
      }
    })

    await window.api.generateLyrics(req)
  }, [])

  const reset = useCallback(() => {
    setResponse('')
    setError(null)
    setIsStreaming(false)
  }, [])

  return { response, isStreaming, error, generate, reset }
}
