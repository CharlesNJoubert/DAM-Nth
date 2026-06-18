import { ArrowDown, ArrowUp, X, Minus } from 'lucide-react'
import { StrumBeat } from '../../types/song'

interface Props {
  beat: StrumBeat
  beatNumber: number
}

const DIRECTION_ICONS = {
  down: <ArrowDown size={18} />,
  up: <ArrowUp size={18} />,
  muted: <X size={16} />,
  rest: <Minus size={16} />
}

const DIRECTION_COLORS = {
  down: 'text-indigo-400',
  up: 'text-purple-400',
  muted: 'text-red-400',
  rest: 'text-gray-600'
}

export default function BeatCell({ beat, beatNumber }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-between w-12 h-16 rounded-lg border transition-colors ${
        beat.accent === 'accent'
          ? 'border-indigo-500 bg-indigo-950'
          : 'border-gray-700 bg-gray-800'
      }`}
    >
      {/* Subdivision indicator */}
      <div className="text-xs text-gray-600 mt-1 font-mono">
        {beat.subdivision === '8' ? '⅛' : beat.subdivision === '16' ? '1/16' : '¼'}
      </div>

      {/* Direction icon */}
      <div className={`${DIRECTION_COLORS[beat.direction]}`}>
        {DIRECTION_ICONS[beat.direction]}
      </div>

      {/* Beat number */}
      <div className={`text-xs mb-1 font-mono ${beat.accent === 'accent' ? 'text-indigo-300 font-bold' : 'text-gray-500'}`}>
        {beatNumber}
      </div>
    </div>
  )
}
