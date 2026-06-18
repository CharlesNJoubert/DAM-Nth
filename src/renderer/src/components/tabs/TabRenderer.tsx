import { useEffect, useRef } from 'react'
import { Renderer, TabStave, TabNote, Voice, Formatter } from 'vexflow'
import { Measure } from '../../types/song'

interface Props {
  measures: Measure[]
  timeSignature: [number, number]
}

export default function TabRenderer({ measures, timeSignature }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || measures.length === 0) return

    container.innerHTML = ''

    const measureWidth = 240
    const totalWidth = measures.length * measureWidth + 40

    try {
      const renderer = new Renderer(container, Renderer.Backends.SVG)
      renderer.resize(totalWidth, 140)
      const context = renderer.getContext()
      context.setFont('Arial', 10, '')

      let x = 20
      measures.forEach((measure, i) => {
        const tabStave = new TabStave(x, 10, measureWidth - 10)
        if (i === 0) {
          tabStave.addTabGlyph()
        }
        tabStave.setContext(context).draw()

        const notes = measure.tabNotes.map(
          (n) =>
            new TabNote({
              positions: n.positions,
              duration: n.duration
            })
        )

        const voice = new Voice({
          num_beats: timeSignature[0],
          beat_value: timeSignature[1]
        })
        voice.setStrict(false)
        voice.addTickables(notes)

        new Formatter().joinVoices([voice]).format([voice], measureWidth - 30)
        voice.draw(context, tabStave)

        x += measureWidth
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
