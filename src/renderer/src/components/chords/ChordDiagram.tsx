import { ChordDef } from '../../data/chordLibrary'

interface Props {
  chord: ChordDef
  size?: number
}

const NUM_STRINGS = 6
const NUM_FRETS = 5
const STRING_SPACING = 16
const FRET_SPACING = 16
const MARGIN_LEFT = 20
const MARGIN_TOP = 28
const DOT_RADIUS = 6

export default function ChordDiagram({ chord, size = 1 }: Props) {
  const width = MARGIN_LEFT + (NUM_STRINGS - 1) * STRING_SPACING + MARGIN_LEFT
  const height = MARGIN_TOP + NUM_FRETS * FRET_SPACING + 16

  const scale = size

  // Collect barre fret strings for barre rect
  const barreStrings = chord.barre
    ? chord.fingers.filter(
        (f) => f.fret === chord.barre && f.finger === 1
      )
    : []

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      style={{ display: 'block' }}
    >
      {/* Nut or fret number */}
      {chord.baseFret === 1 ? (
        <rect
          x={MARGIN_LEFT - 1}
          y={MARGIN_TOP - 4}
          width={(NUM_STRINGS - 1) * STRING_SPACING + 2}
          height={4}
          fill="#e5e7eb"
          rx={1}
        />
      ) : (
        <text
          x={MARGIN_LEFT - 14}
          y={MARGIN_TOP + FRET_SPACING / 2 + 4}
          fontSize={9}
          fill="#9ca3af"
          textAnchor="middle"
        >
          {chord.baseFret}fr
        </text>
      )}

      {/* Fret lines */}
      {Array.from({ length: NUM_FRETS + 1 }).map((_, i) => (
        <line
          key={`fret-${i}`}
          x1={MARGIN_LEFT}
          y1={MARGIN_TOP + i * FRET_SPACING}
          x2={MARGIN_LEFT + (NUM_STRINGS - 1) * STRING_SPACING}
          y2={MARGIN_TOP + i * FRET_SPACING}
          stroke="#4b5563"
          strokeWidth={i === 0 ? 1.5 : 0.8}
        />
      ))}

      {/* String lines */}
      {Array.from({ length: NUM_STRINGS }).map((_, i) => (
        <line
          key={`str-${i}`}
          x1={MARGIN_LEFT + i * STRING_SPACING}
          y1={MARGIN_TOP}
          x2={MARGIN_LEFT + i * STRING_SPACING}
          y2={MARGIN_TOP + NUM_FRETS * FRET_SPACING}
          stroke="#4b5563"
          strokeWidth={0.8}
        />
      ))}

      {/* Barre bar */}
      {chord.barre && barreStrings.length >= 2 && (() => {
        const minStr = Math.min(...barreStrings.map((f) => f.string))
        const maxStr = Math.max(...barreStrings.map((f) => f.string))
        const x1 = MARGIN_LEFT + (NUM_STRINGS - maxStr) * STRING_SPACING
        const x2 = MARGIN_LEFT + (NUM_STRINGS - minStr) * STRING_SPACING
        const y = MARGIN_TOP + (chord.barre - 1) * FRET_SPACING + FRET_SPACING / 2
        return (
          <rect
            x={x1 - DOT_RADIUS}
            y={y - DOT_RADIUS}
            width={x2 - x1 + DOT_RADIUS * 2}
            height={DOT_RADIUS * 2}
            fill="#6366f1"
            rx={DOT_RADIUS}
          />
        )
      })()}

      {/* Finger dots */}
      {chord.fingers.map((f, idx) => {
        const sx = MARGIN_LEFT + (NUM_STRINGS - f.string) * STRING_SPACING
        if (f.fret === -1) {
          // Muted string
          return (
            <text
              key={idx}
              x={sx}
              y={MARGIN_TOP - 10}
              fontSize={10}
              fill="#ef4444"
              textAnchor="middle"
              fontWeight="bold"
            >
              ×
            </text>
          )
        }
        if (f.fret === 0) {
          // Open string
          return (
            <circle
              key={idx}
              cx={sx}
              cy={MARGIN_TOP - 10}
              r={4}
              fill="none"
              stroke="#6b7280"
              strokeWidth={1.5}
            />
          )
        }
        // Fretted note
        const cy = MARGIN_TOP + (f.fret - chord.baseFret) * FRET_SPACING + FRET_SPACING / 2
        // Skip if this is covered by barre rendering
        if (chord.barre && f.fret === chord.barre && f.finger === 1) return null
        return (
          <g key={idx}>
            <circle cx={sx} cy={cy} r={DOT_RADIUS} fill="#6366f1" />
            {f.finger > 0 && (
              <text
                x={sx}
                y={cy + 3.5}
                fontSize={7}
                fill="white"
                textAnchor="middle"
              >
                {f.finger}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
