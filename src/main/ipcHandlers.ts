import { ipcMain, shell } from 'electron'
import Anthropic from '@anthropic-ai/sdk'

interface LyricRequest {
  context: string
  prompt: string
  key?: string
  tempo?: number
  moods?: string[]
}

function buildPrompt(req: LyricRequest): string {
  const moods = req.moods?.length ? req.moods.join(', ') : 'melancholic, longing'
  const key = req.key || 'Am'
  const tempo = req.tempo || 72

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
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      event.sender.send('lyrics:chunk', {
        type: 'error',
        error: 'ANTHROPIC_API_KEY not set. Copy .env.example to .env and add your key.'
      })
      return
    }

    const client = new Anthropic({ apiKey })

    try {
      const stream = client.messages.stream({
        model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        messages: [{ role: 'user', content: buildPrompt(req) }]
      })

      stream.on('text', (text: string) => {
        if (!event.sender.isDestroyed()) {
          event.sender.send('lyrics:chunk', { type: 'delta', text })
        }
      })

      await stream.finalMessage()
      event.sender.send('lyrics:chunk', { type: 'done' })
    } catch (err) {
      event.sender.send('lyrics:chunk', {
        type: 'error',
        error: err instanceof Error ? err.message : 'Unknown error from AI'
      })
    }
  })
}
