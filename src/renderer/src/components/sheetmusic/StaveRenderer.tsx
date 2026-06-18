import { useEffect, useRef } from 'react'
import { Renderer, Stave, StaveNote, Voice, Formatter } from 'vexflow'
import { Measure } from '../../types/song'

interface Props {
  measures: Measure[]
  timeSignature: [number, number]
  songKey?: string
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
const STAVE_Y = 44
const STAVE_H = 100
const LABEL_H = 22
const ROW_GAP = 16
const ROW_H = LABEL_H + STAVE_H + ROW_GAP

export default function StaveRenderer({ measures, timeSignature, songKey }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || measures.length === 0) return
    container.innerHTML = ''

    const rows = buildRows(measures)
    const maxMeasures = Math.max(...rows.map((r) => r.measures.length))
    const totalWidth = maxMeasures * MEASURE_W + 40
    const totalHeight = rows.length * ROW_H + STAVE_Y

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
          const staveY = rowY + LABEL_H + (rowIdx === 0 && !row.label ? 20 : 0)
          const stave = new Stave(x, staveY + 20, MEASURE_W - 10)
          if (i === 0) {
            stave.addClef('treble')
            if (rowIdx === 0) stave.addTimeSignature(`${timeSignature[0]}/${timeSignature[1]}`)
            if (songKey) stave.addKeySignature(songKey)
          }
          stave.setContext(context).draw()

          const notes = measure.notesVF.map(
            (n) => new StaveNote({ keys: n.keys, duration: n.duration })
          )
          const voice = new Voice({ num_beats: timeSignature[0], beat_value: timeSignature[1] })
          voice.setStrict(false)
          voice.addTickables(notes)
          new Formatter().joinVoices([voice]).format([voice], MEASURE_W - 30)
          voice.draw(context, stave)

          x += MEASURE_W
        })
      })
    } catch (e) {
      console.error('VexFlow render error:', e)
    }
  }, [measures, timeSignature, songKey])

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto"
      style={{ minHeight: 180 }}
    />
  )
}
