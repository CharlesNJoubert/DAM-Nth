# Lament Songwriter

A desktop app for writing lament songs. Includes guitar tabs, sheet music, chord diagrams with finger positions, strumming/picking patterns, YouTube tutorial videos, and an AI lyric assistant powered by Google Gemini (free tier).

Pre-loaded with "How Long (Psalm 13)" in E minor — Em · Cmaj7 · G · D/F# at 80 BPM.

---

## Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **A Google AI key** — free, no credit card — [aistudio.google.com](https://aistudio.google.com) → Get API key. Required only for the AI Lyrics feature.

---

## Setup

```bash
# 1. Clone
git clone https://github.com/CharlesNJoubert/lament-songwriter.git
cd lament-songwriter

# 2. Install dependencies
npm install

# 3. Create your .env file (copy the example)
cp .env.example .env
# Then open .env and paste your Google AI key:
#   GOOGLE_API_KEY=AIza...
```

---

## Running the App

### Development (with hot-reload)

```bash
npm run dev
```

The Electron window opens automatically. Changes to renderer code reload instantly via Vite HMR.

### Production build

```bash
npm run build        # compile to out/
npm run preview      # launch the compiled build
```

---

## Features & Panels

Navigate using the icon sidebar on the left. Hover over it to see panel names.

| Panel | What it shows |
|---|---|
| **AI Lyrics** | Write lyrics with Google Gemini (free). Choose a task (improve, next line, rhyme, full verse), select a mood tag, and generate suggestions. Requires `GOOGLE_API_KEY` in `.env`. |
| **Sheet Music** | Standard notation for the chord progression, rendered with VexFlow. |
| **Guitar Tabs** | Tablature view of the same progression — 6-string standard tuning. |
| **Chords** | Chord diagrams with finger positions for every chord in the progression. Click a chord to see a detailed view. Includes Em, Cmaj7, G, D/F#, Am, Bm, Bm7 and more. |
| **Strumming** | Visual beat-by-beat strumming and picking patterns. Includes Travis fingerpicking (verse), D DU UDU (chorus), Slow Lament, and Build patterns. |
| **Videos** | Embed YouTube tutorial videos. Paste a YouTube URL or video ID to add a video. Use the suggested search links to open YouTube in your browser. |

---

## Editing the Song

- **Title** — click the song title at the top of the window and type a new name.
- **Lyrics** — edit directly in the AI Lyrics panel text area.
- **Chords / key / tempo** — edit `src/renderer/src/data/defaultSong.ts` and rebuild.

---

## AI Lyrics (Google Gemini — free)

The AI assistant calls the Google Gemini API (`gemini-1.5-flash`) from the **main process only** — your API key never leaves the desktop app. The renderer communicates via Electron IPC.

Free tier limits: 15 requests/min · 1,500 requests/day · no credit card needed.

1. Open the **AI Lyrics** panel.
2. Select a task: *Improve existing*, *Write next line*, *Suggest rhyme*, or *Full verse*.
3. Optionally select mood tags (Melancholic, Longing, Hopeful, etc.).
4. Click **Generate**. Text streams in live.
5. Click **Insert into Lyrics** to append the suggestion to your lyrics.

---

## Type Checking

```bash
npm run typecheck
```

Runs `tsc --noEmit` across both `tsconfig.node.json` (main + preload) and `tsconfig.web.json` (renderer).

---

## Project Structure

```
src/
├── main/
│   ├── index.ts          # Electron BrowserWindow, app lifecycle
│   └── ipcHandlers.ts    # Google Gemini streaming via IPC
├── preload/
│   ├── index.ts          # contextBridge — exposes window.api
│   └── index.d.ts        # TypeScript types for window.api
└── renderer/src/
    ├── App.tsx            # Root layout + panel router
    ├── store/songStore.ts # Zustand global state
    ├── data/
    │   ├── defaultSong.ts # Song data, lyrics, strumming patterns
    │   └── chordLibrary.ts# Chord fingering diagrams
    └── components/
        ├── layout/        # Sidebar, PanelContainer
        ├── sheetmusic/    # VexFlow staff notation
        ├── tabs/          # VexFlow guitar tablature
        ├── chords/        # SVG chord diagrams
        ├── strumming/     # Beat pattern visualiser
        ├── videos/        # YouTube embed panel
        └── lyrics/        # Lyrics editor + AI assistant
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_API_KEY` | For AI features | Free Google AI key from aistudio.google.com. Stays in main process only. |
