import { useEffect, useRef } from 'react'
import { Renderer, TabStave, TabNote, Voice, Formatter } from 'vexflow'
import { Measure } from '../../types/song'

interface Props {
  measures: Measure[]
  timeSignature: [number, number]
}

interface Row {
  label: string
  measures: Measure[]
}

function buildRows(measures: Measure[]): Row[] {
  const rows: Row[] = []
  let current: Row | null = null
  for (const m of measures) {
    if (m.sectionLabel || !current) {
      if (current) rows.push(current)
      current = { label: m.sectionLabel ?? '', measures: [m] }
    } else {
      current.measures.push(m)
    }
  }
  if (current) rows.push(current)
  return rows
}

const MEASURE_W = 240
const STAVE_H = 90
const LABEL_H = 22
const ROW_GAP = 16
const ROW_H = LABEL_H + STAVE_H + ROW_GAP

export default function TabRenderer({ measures, timeSignature }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || measures.length === 0) return
    container.innerHTML = ''

    const rows = buildRows(measures)
    const maxMeasures = Math.max(...rows.map((r) => r.measures.length))
    const totalWidth = maxMeasures * MEASURE_W + 40
    const totalHeight = rows.length * ROW_H + 20

    try {
      const renderer = new Renderer(container, Renderer.Backends.SVG)
      renderer.resize(totalWidth, totalHeight)
      const context = renderer.getContext()
      context.setFont('Arial', 10, '')

      rows.forEach((row, rowIdx) => {
        const rowY = rowIdx * ROW_H

        // Section label
        if (row.label) {
          context.save()
          context.setFont('Arial', 11, 'bold')
          context.fillStyle = '#6366f1'
          ;(context as unknown as CanvasRenderingContext2D).fillText(row.label, 20, rowY + LABEL_H - 4)
          context.restore()
        }

        let x = 20
        row.measures.forEach((measure, i) => {
          const staveY = rowY + LABEL_H + 6

          // Chord name above measure
          context.save()
          context.setFont('Arial', 10, 'bold')
          context.fillStyle = '#6366f1'
          ;(context as unknown as CanvasRenderingContext2D).fillText(measure.chordName, x + 4, staveY - 2)
          context.restore()

          const tabStave = new TabStave(x, staveY, MEASURE_W - 10)
          if (i === 0) tabStave.addTabGlyph()
          tabStave.setContext(context).draw()

          const notes = measure.tabNotes.map(
            (n) => new TabNote({ positions: n.positions, duration: n.duration })
          )
          const voice = new Voice({ num_beats: timeSignature[0], beat_value: timeSignature[1] })
          voice.setStrict(false)
          voice.addTickables(notes)
          new Formatter().joinVoices([voice]).format([voice], MEASURE_W - 30)
          voice.draw(context, tabStave)

          x += MEASURE_W
        })
      })
    } catch (e) {
      console.error('VexFlow tab render error:', e)
    }
  }, [measures, timeSignature])

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto"
      style={{ minHeight: 140 }}
    />
  )
}
