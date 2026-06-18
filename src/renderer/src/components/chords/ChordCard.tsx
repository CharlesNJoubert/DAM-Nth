import { ChordDef } from '../../data/chordLibrary'
import ChordDiagram from './ChordDiagram'

interface Props {
  chord: ChordDef
  isSelected?: boolean
  onClick?: () => void
  large?: boolean
}

export default function ChordCard({ chord, isSelected, onClick, large }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-150 ${
        isSelected
          ? 'border-indigo-500 bg-indigo-950'
          : 'border-gray-700 bg-gray-800 hover:border-gray-500'
      }`}
    >
      <div className="text-lg font-bold text-gray-100 mb-1">{chord.name}</div>
      <div className="text-xs text-gray-400 mb-3">{chord.displayName}</div>
      <div className={`bg-gray-900 rounded-lg p-2 ${large ? 'scale-150 my-6' : ''}`}>
        <ChordDiagram chord={chord} />
      </div>
      <div className="mt-2 text-xs text-gray-500 font-mono">
        {chord.fingers
          .filter((f) => f.fret >= 0)
          .sort((a, b) => b.string - a.string)
          .map((f) => (f.fret === 0 ? 'O' : f.fret))
          .join('-')}
      </div>
    </button>
  )
}
