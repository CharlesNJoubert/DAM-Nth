import { useEffect, useRef } from 'react'
import { Renderer, Stave, StaveNote, Voice, Formatter } from 'vexflow'
import { Measure } from '../../types/song'

interface Props {
  measures: Measure[]
  timeSignature: [number, number]
}

export default function StaveRenderer({ measures, timeSignature }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || measures.length === 0) return

    container.innerHTML = ''

    const measureWidth = 240
    const totalWidth = measures.length * measureWidth + 40

    try {
      const renderer = new Renderer(container, Renderer.Backends.SVG)
      renderer.resize(totalWidth, 180)
      const context = renderer.getContext()
      context.setFont('Arial', 10, '')

      let x = 20
      measures.forEach((measure, i) => {
        const stave = new Stave(x, 40, measureWidth - 10)
        if (i === 0) {
          stave.addClef('treble').addTimeSignature(
            `${timeSignature[0]}/${timeSignature[1]}`
          )
        }
        stave.setContext(context).draw()

        const notes = measure.notesVF.map(
          (n) => new StaveNote({ keys: n.keys, duration: n.duration })
        )

        const voice = new Voice({
          num_beats: timeSignature[0],
          beat_value: timeSignature[1]
        })
        voice.setStrict(false)
        voice.addTickables(notes)

        new Formatter().joinVoices([voice]).format([voice], measureWidth - 30)
        voice.draw(context, stave)

        x += measureWidth
      })
    } catch (e) {
      console.error('VexFlow sheet music render error:', e)
    }
  }, [measures, timeSignature])

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto"
      style={{ minHeight: 180 }}
    />
  )
}
