import { ipcMain, shell } from 'electron'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface LyricRequest {
  context: string
  prompt: string
  key?: string
  tempo?: number
  moods?: string[]
}

function buildPrompt(req: LyricRequest): string {
  const moods = req.moods?.length ? req.moods.join(', ') : 'melancholic, longing'
  const key = req.key || 'Em'
  const tempo = req.tempo || 80

  return `You are a compassionate lament song lyricist with deep emotional sensitivity. The song is in the key of ${key}, tempo ${tempo} BPM.
Mood: ${moods}.

Current lyrics:
---
${req.context || '(empty — no lyrics written yet)'}
---

Task: ${req.prompt}

Write only the lyric output. No commentary, no explanation, no labels. Just the raw lyrics.`
}

export function registerIpcHandlers(): void {
  ipcMain.on('shell:openExternal', (_event, url: string) => {
    shell.openExternal(url)
  })

  ipcMain.handle('lyrics:generate', async (event, req: LyricRequest) => {
    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
      event.sender.send('lyrics:chunk', {
        type: 'error',
        error: 'GOOGLE_API_KEY not set. Get a free key at aistudio.google.com, then add it to your .env file.'
      })
      return
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    try {
      const result = await model.generateContentStream(buildPrompt(req))

      for await (const chunk of result.stream) {
        const text = chunk.text()
        if (text && !event.sender.isDestroyed()) {
          event.sender.send('lyrics:chunk', { type: 'delta', text })
        }
      }

      event.sender.send('lyrics:chunk', { type: 'done' })
    } catch (err) {
      event.sender.send('lyrics:chunk', {
        type: 'error',
        error: err instanceof Error ? err.message : 'Unknown error from AI'
      })
    }
  })
}
