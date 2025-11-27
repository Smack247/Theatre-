# Theatre-

Concept documentation for the "ClearMySh*t" mobile app idea. See `docs/clearmyshit-mvp.md` for the MVP pitch, feature set, and technical approach.

## App prototype

The repository now includes an Expo/React Native starter that demonstrates the core library and settings flows for the MVP. The mock data shows contextual search, category filtering, and toggling auto-delete for screenshots.

### Getting started

1. From the repo root (`/workspace/Theatre-` in Codespaces), install dependencies (yarn or npm)
2. Run `expo start` and open the Expo Go app on a device/simulator

> Note: the `assets` folder includes a README placeholder; replace the referenced icons/splash files before releasing to a store.

### Testing in Codespaces

1. From the repo root, install deps: `npm install` (or `yarn install`). If you see `ENOENT ... package.json`, make sure you're in
   the project folder and have pulled the latest commit.
2. Start the web build bound to all interfaces so Codespaces can proxy it: `npx expo start --web --host 0.0.0.0 --port 8081`.
3. When prompted by Expo CLI, press `w` if the browser window does not auto-open. In Codespaces, open the forwarded port (8081) in your browser tab to view the app.
4. If you prefer a simulator/device via Expo Go, run `npx expo start --tunnel --host 0.0.0.0` instead, then scan the QR code from the terminal output with your phone.

> Tip: Codespaces sometimes throttles the first bundle build. If the page stays blank, wait for the webpack/Metro build to finish in the terminal, then refresh the forwarded port tab.
