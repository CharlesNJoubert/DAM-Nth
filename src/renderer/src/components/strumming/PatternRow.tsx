import { StrummingPattern } from '../../types/song'
import BeatCell from './BeatCell'

interface Props {
  pattern: StrummingPattern
}

export default function PatternRow({ pattern }: Props) {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-200">{pattern.name}</h3>
        <span className="text-xs text-gray-500">{pattern.beats.length} beats</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {pattern.beats.map((beat, i) => (
          <BeatCell key={i} beat={beat} beatNumber={i + 1} />
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-500 font-mono">
        {pattern.beats.map((b) => {
          if (b.direction === 'down') return '↓'
          if (b.direction === 'up') return '↑'
          if (b.direction === 'muted') return 'x'
          return '-'
        }).join(' ')}
      </div>
    </div>
  )
}
