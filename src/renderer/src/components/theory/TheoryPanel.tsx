import { ArrowRight, Zap } from 'lucide-react'
import { CHORD_LIBRARY } from '../../data/chordLibrary'
import {
  ELECTRIC_VOICINGS,
  DIATONIC_EM,
  STRUCTURE_IDEAS,
  FIFTHS_FLOW
} from '../../data/theoryData'
import ChordDiagram from '../chords/ChordDiagram'
import ReferencePoster from './ReferencePoster'

// Drop a poster image at src/renderer/src/assets/theory-poster.{png,jpg,jpeg,webp}
// and it will appear in the Reference Poster section. No build error if absent.
const posterMods = import.meta.glob('../../assets/theory-poster.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
})
const posterUrl = Object.values(posterMods)[0] as string | undefined

function ChordChip({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 bg-indigo-600 rounded-lg text-white font-semibold text-sm">
      {name}
    </span>
  )
}

export default function TheoryPanel() {
  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Theory & Reference</h1>
        <p className="text-sm text-gray-400 mt-1">
          Electric-guitar voicings, the chords of E minor, and ideas for structuring the song
        </p>
      </div>

      {/* Electric voicings */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={18} className="text-amber-400" />
          <h2 className="text-lg font-semibold text-gray-100">Better Voicings on Electric</h2>
        </div>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl leading-relaxed">
          Open chords ring with lots of open strings — lovely on an acoustic, but on a
          clean or reverbed electric they can turn muddy. Sparser 7th, add9 and suspended
          voicings keep things clear and atmospheric (the Dustin Kensrue / Bon Iver / The
          National palette).
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ELECTRIC_VOICINGS.map((swap) => {
            const open = CHORD_LIBRARY[swap.openChord]
            const electric = CHORD_LIBRARY[swap.electricChord]
            if (!open || !electric) return null
            return (
              <div
                key={swap.openChord}
                className="bg-gray-800 rounded-xl p-4 flex gap-4 items-center"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-center">
                    <div className="bg-gray-900 rounded-lg p-2">
                      <ChordDiagram chord={open} size={1.1} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{open.name}</div>
                  </div>
                  <ArrowRight size={18} className="text-indigo-400 shrink-0" />
                  <div className="text-center">
                    <div className="bg-gray-900 rounded-lg p-2 ring-1 ring-amber-500/40">
                      <ChordDiagram chord={electric} size={1.1} />
                    </div>
                    <div className="text-xs text-amber-300 mt-1 font-semibold">
                      {electric.name}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{swap.why}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Chords in E minor */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Chords in E Minor</h2>
        <p className="text-sm text-gray-400 mb-4">
          The seven diatonic chords of your key — your toolkit for new sections.
        </p>
        <div className="grid grid-cols-7 gap-2">
          {DIATONIC_EM.map((d) => (
            <div key={d.roman} className="bg-gray-800 rounded-lg p-3 text-center">
              <div className="text-xs text-indigo-400 font-mono mb-1">{d.roman}</div>
              <div className="text-base font-bold text-gray-100">{d.chord}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{d.quality}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Song structure ideas */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Song Structure Ideas</h2>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl">
          A flow that grows from brooding verse to a hopeful resolution — built on the
          major and seventh chords of the key.
        </p>
        <div className="space-y-3">
          {STRUCTURE_IDEAS.map((s) => (
            <div key={s.name} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                <span className="text-sm font-semibold text-gray-100">{s.name}</span>
                <span className="text-xs font-mono text-indigo-400">{s.roman}</span>
              </div>
              <div className="flex gap-2 flex-wrap mb-2">
                {s.chords.map((c, i) => (
                  <ChordChip key={i} name={c} />
                ))}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flow by fifths */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">Flow by Fifths</h2>
        <p className="text-sm text-gray-400 mb-4 max-w-3xl">
          From the Circle of Fourths &amp; Fifths: moving by descending fifths creates
          cascading forward motion that always feels like it is resolving. Try this under a
          bridge or instrumental.
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {FIFTHS_FLOW.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChordChip name={c} />
              {i < FIFTHS_FLOW.length - 1 && (
                <ArrowRight size={16} className="text-gray-600" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reference poster — import or paste your cheat-sheet image */}
      <ReferencePoster defaultUrl={posterUrl} />
    </div>
  )
}
