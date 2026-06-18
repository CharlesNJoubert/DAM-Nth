---
name: run
description: Build, run, and drive the Lament Songwriter Electron desktop app. Use when asked to start the app, take a screenshot, interact with its UI, or verify a change works visually.
---

Lament Songwriter is an Electron + React + TypeScript desktop app. For headless/agent use, drive it via the Playwright REPL at `.claude/skills/run/driver.mjs` under xvfb.

All paths are relative to `/home/user/DAM-Nth/` (the repo root).

## Prerequisites

```bash
apt-get install -y xvfb libnss3 libgbm1 libasound2t64 libgtk-3-0 \
  libxss1 libxkbcommon0 libatk-bridge2.0-0 libcups2 libdrm2
npm install  # installs playwright-core as devDependency
```

## Build

```bash
npm run build   # outputs to out/main, out/preload, out/renderer
```

## Run (agent path)

```bash
cd /home/user/DAM-Nth
xvfb-run -a node .claude/skills/run/driver.mjs
```

Wrap in tmux for interactive use:

```bash
tmux new-session -d -s app -x 220 -y 50
tmux send-keys -t app 'xvfb-run -a node .claude/skills/run/driver.mjs' Enter
timeout 15 bash -c 'until tmux capture-pane -t app -p | grep -q "driver>"; do sleep 0.3; done'
tmux send-keys -t app 'launch' Enter
timeout 30 bash -c 'until tmux capture-pane -t app -p | grep -q "launched"; do sleep 0.5; done'
tmux send-keys -t app 'ss landing' Enter
sleep 2
tmux capture-pane -t app -p
```

Screenshots land in `/tmp/shots/` (override with `SCREENSHOT_DIR=...`).

## Commands

| command | what it does |
|---|---|
| `launch` | launch the Electron app, wait ~6s for window |
| `ss [name]` | screenshot → `/tmp/shots/<name>.png` |
| `nav <panel>` | click sidebar nav item by title (e.g. `nav Chords`, `nav AI Lyrics`) |
| `click <css-sel>` | click element via DOM (bypasses coordinate issues) |
| `click-text <text>` | click button/link containing text |
| `type <text>` / `press <key>` | keyboard input |
| `wait <css-sel>` | wait for selector, 10s timeout |
| `eval <js>` | evaluate JS in page, print JSON result |
| `text [css-sel]` | print innerText of element (or whole body) |
| `windows` | list all windows and webContents |
| `quit` | close app and exit driver |

Panel names for `nav`: `AI Lyrics`, `Sheet Music`, `Guitar Tabs`, `Chords`, `Strumming`, `Videos`

## Gotchas

- **`--no-sandbox` is required** — Electron's sandbox needs CAP_SYS_ADMIN; use the args in the driver.
- **Launch target is `out/main/index.js`** — not the root `index.js` or `package.json` main. The build must exist.
- **`nav` uses button `title` attributes** — set in `Sidebar.tsx` as `title={label}`.
- **Stale Xvfb locks**: `rm -f /tmp/.X*-lock; pkill Xvfb`
