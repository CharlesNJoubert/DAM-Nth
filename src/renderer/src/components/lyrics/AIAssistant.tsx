import { useState } from 'react'
import { Sparkles, Copy, Plus, RotateCcw, Loader2 } from 'lucide-react'
import { useSongStore } from '../../store/songStore'
import { useAIStream } from '../../hooks/useAIStream'
import { LyricTaskType } from '../../types/ipc'

const TASK_OPTIONS: { id: LyricTaskType; label: string; prompt: string }[] = [
  {
    id: 'improve',
    label: 'Improve',
    prompt: 'Review the current lyrics and suggest improvements — better word choices, stronger imagery, more poetic language. Rewrite the most impactful improvements.'
  },
  {
    id: 'next-line',
    label: 'Next Line',
    prompt: 'Write the next line or two that naturally follows the existing lyrics. Match the style, rhythm, and emotional tone.'
  },
  {
    id: 'rhyme',
    label: 'Rhyme Finder',
    prompt: 'Find 10 powerful rhyming words or short phrases that fit the emotional tone of this lament. Group them by rhyme pattern.'
  },
  {
    id: 'full-verse',
    label: 'New Verse',
    prompt: 'Write a complete new verse (4 lines) that continues the lament theme. Match the meter and emotional depth of the existing lyrics.'
  }
]

const MOODS = ['Melancholic', 'Longing', 'Hopeful', 'Raw grief', 'Quiet despair', 'Trust']

export default function AIAssistant() {
  const song = useSongStore((s) => s.song)
  const setLyrics = useSongStore((s) => s.setLyrics)

  const [task, setTask] = useState<LyricTaskType>('next-line')
  const [selectedMoods, setSelectedMoods] = useState<string[]>(['Melancholic', 'Longing'])
  const [customPrompt, setCustomPrompt] = useState('')

  const { response, isStreaming, error, generate, reset } = useAIStream()

  const toggleMood = (mood: string) => {
    setSelectedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    )
  }

  const handleGenerate = async () => {
    const selectedTask = TASK_OPTIONS.find((t) => t.id === task)!
    await generate({
      context: song.lyrics,
      prompt: customPrompt || selectedTask.prompt,
      key: song.key,
      tempo: song.tempo,
      moods: selectedMoods.map((m) => m.toLowerCase())
    })
  }

  const insertIntoLyrics = () => {
    setLyrics(song.lyrics + (song.lyrics ? '\n\n' : '') + response)
    reset()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response)
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
        <Sparkles size={14} className="text-indigo-400" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          AI Lyric Assistant
        </span>
      </div>

      <div className="p-4 space-y-4 flex-1">
        {/* Task selector */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            What to generate
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TASK_OPTIONS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTask(t.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  task === t.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mood selector */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            Mood / Tone
          </label>
          <div className="flex flex-wrap gap-2">
            {MOODS.map((mood) => (
              <button
                key={mood}
                onClick={() => toggleMood(mood)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedMoods.includes(mood)
                    ? 'bg-purple-700 text-purple-100'
                    : 'bg-gray-800 text-gray-500 hover:bg-gray-700'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Custom prompt */}
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            Custom instruction (optional)
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="e.g. Write about losing someone to illness, use water imagery..."
            rows={2}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 placeholder-gray-600 resize-none outline-none focus:border-indigo-500"
          />
        </div>

        {/* Song context */}
        <div className="flex items-center gap-3 text-xs text-gray-600">
          <span className="bg-gray-800 px-2 py-1 rounded">Key: {song.key}</span>
          <span className="bg-gray-800 px-2 py-1 rounded">{song.tempo} BPM</span>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isStreaming}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
        >
          {isStreaming ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={16} />
              Generate
            </>
          )}
        </button>

        {/* Error */}
        {error && (
          <div className="bg-red-950 border border-red-800 rounded-lg p-3 text-xs text-red-300">
            {error}
          </div>
        )}

        {/* Response */}
        {(response || isStreaming) && (
          <div className="bg-gray-800 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-700">
              <span className="text-xs text-gray-500 font-semibold">AI Suggestion</span>
              {!isStreaming && response && (
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Copy size={12} />
                    Copy
                  </button>
                  <button
                    onClick={reset}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <RotateCcw size={12} />
                    Clear
                  </button>
                </div>
              )}
            </div>
            <div className="p-3 text-sm text-gray-300 whitespace-pre-wrap font-mono leading-7 min-h-[60px]">
              {response}
              {isStreaming && (
                <span className="inline-block w-0.5 h-4 bg-indigo-400 ml-0.5 animate-pulse" />
              )}
            </div>
            {!isStreaming && response && (
              <div className="px-3 pb-3">
                <button
                  onClick={insertIntoLyrics}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-green-700 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  <Plus size={14} />
                  Insert into Lyrics
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
