import { useEffect, useRef, useState } from 'react'
import { Upload, Trash2, ZoomIn, ZoomOut, Maximize } from 'lucide-react'

const STORAGE_KEY = 'lament-theory-poster'

interface Props {
  defaultUrl?: string
}

export default function ReferencePoster({ defaultUrl }: Props) {
  const [src, setSrc] = useState<string | undefined>(defaultUrl)
  const [zoom, setZoom] = useState(1)
  const fileRef = useRef<HTMLInputElement>(null)

  function loadFile(file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      const url = reader.result as string
      setSrc(url)
      try {
        localStorage.setItem(STORAGE_KEY, url)
      } catch {
        // Image too large for localStorage — still show it for this session
        console.warn('Poster too large to persist; showing for this session only.')
      }
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setSrc(saved)
  }, [])

  // Paste an image straight from the clipboard (⌘V / Ctrl+V) while on this panel
  useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      const item = [...(e.clipboardData?.items ?? [])].find((i) => i.type.startsWith('image/'))
      const file = item?.getAsFile()
      if (file) {
        e.preventDefault()
        loadFile(file)
      }
    }
    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [])

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) loadFile(file)
    e.target.value = ''
  }

  function remove() {
    localStorage.removeItem(STORAGE_KEY)
    setSrc(defaultUrl)
    setZoom(1)
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-gray-100">Reference Poster</h2>
        <div className="flex items-center gap-2">
          {src && (
            <>
              <button
                onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)))}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
                title="Zoom out"
              >
                <ZoomOut size={15} />
              </button>
              <span className="text-xs text-gray-400 w-10 text-center">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
                title="Zoom in"
              >
                <ZoomIn size={15} />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
                title="Fit width"
              >
                <Maximize size={15} />
              </button>
              <button
                onClick={remove}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:bg-red-900/50 hover:text-red-300"
                title="Remove poster"
              >
                <Trash2 size={15} />
              </button>
            </>
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-500"
          >
            <Upload size={14} />
            {src ? 'Replace image' : 'Import image'}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFile}
          />
        </div>
      </div>

      {src ? (
        <div className="bg-white rounded-xl p-2 shadow-lg overflow-auto" style={{ maxHeight: '70vh' }}>
          <img
            src={src}
            alt="Guitar theory reference poster"
            style={{ width: `${zoom * 100}%`, maxWidth: 'none', display: 'block' }}
          />
        </div>
      ) : (
        <div className="bg-gray-800 border border-dashed border-gray-600 rounded-xl p-6">
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            Click <span className="text-indigo-300 font-medium">Import image</span> above — or just
            <span className="text-indigo-300 font-medium"> paste (⌘V / Ctrl+V)</span> — to add your
            guitar theory cheat-sheet. It displays here full-size with zoom and scroll, so you can
            read every item on it (fretboard, scales, chord charts, circle of fifths). The image is
            saved in the app, so it stays put between sessions.
          </p>
          <p className="text-xs text-gray-500">
            Prefer a permanent built-in copy? Drop the file at{' '}
            <code className="text-indigo-300 bg-gray-900 px-1.5 py-0.5 rounded text-xs">
              src/renderer/src/assets/theory-poster.png
            </code>{' '}
            and rebuild.
          </p>
        </div>
      )}
    </section>
  )
}
