# Vantage HUD — build & install on your phone

## 1. Build it (one-time, on a computer)
```
npm install
npm run build
```
This creates a `dist/` folder — the actual static site.

## 2. Put it on GitHub Pages (free hosting)
1. Create a new GitHub repo, e.g. `vantage-hud`.
2. Push everything in this folder to it.
3. Easiest path — install `gh-pages` (already in package.json) and run:
   ```
   npm run deploy
   ```
   This builds and pushes `dist/` to a `gh-pages` branch automatically.
4. In the repo → **Settings → Pages** → set source to the `gh-pages` branch, `/ (root)`.
5. GitHub gives you a URL like `https://yourusername.github.io/vantage-hud/`.

## 3. Install it on your phone
Open that URL in your phone's browser, then:

**Android (Chrome):**
- Tap the **⋮** menu → **Add to Home screen** (or Chrome may show an "Install app" banner automatically).
- Confirm — Vantage now opens full-screen like a real app, with its own icon.

**iPhone (Safari — must be Safari, not Chrome):**
- Tap the **Share** icon (square with an arrow) → **Add to Home Screen**.
- Confirm — it installs the same way.

Once installed, it opens without browser address bars, works offline (service worker caches the app shell), and keeps all your data in the phone's local storage — nothing leaves the device.

## Notes
- Re-running `npm run deploy` after future edits updates the live app; reopening it on your phone will pull the new version (the service worker uses network-first, cache-fallback).
- Icons in `public/icon-192.png` / `icon-512.png` are placeholders — swap them for your own art if you want a custom home-screen icon.
- Mic voice commands need Chrome/Edge (Android/desktop); Safari/iOS doesn't support the SpeechRecognition API, so the mic button just won't appear there — everything else still works.
