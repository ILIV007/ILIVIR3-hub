# ⚠️ CLEANUP — Stale file handling

## ✅ v11.3.0+ — Automatic cleanup (no action needed)

Starting from v11.3.0, the project includes a `prebuild` script that
**automatically deletes stale files** from previous versions before `tsc` runs.

This means: **you can safely extract the new zip on top of an old checkout**
without manually deleting anything. The build will clean up for you.

### How it works

- `package.json` has `"prebuild": "node scripts/cleanup-stale.mjs"`
- npm automatically runs `prebuild` before `build`
- The `build` script also explicitly runs cleanup first: `"build": "node scripts/cleanup-stale.mjs && tsc && vite build"`
- The cleanup script (`scripts/cleanup-stale.mjs`) is idempotent — safe to run multiple times

### Files it removes

```
src/components/Hero.tsx              (old prototype)
src/components/sections/AIBots.tsx   (replaced by AISystems.tsx)
src/components/sections/Projects.tsx (replaced by pages/Projects.tsx)
src/components/sections/Telegram.tsx (replaced by TelegramCTA.tsx)
src/components/sections/LiveStats.tsx
src/components/three/Galaxy.tsx
src/components/three/Planet.tsx
src/components/three/EnergyCore.tsx
src/components/three/Stars.tsx
src/hooks/useTheme.ts
src/hooks/useParallax.ts
src/hooks/useMouseParallax.ts
src/hooks/useScroll.ts
src/lib/utils.ts
src/router/index.tsx
src/styles/animations.css
src/styles/neon.css
src/data/stats.ts
tailwind.config.js
src/vite-env.d.ts
```

Plus the now-empty `src/lib` and `src/router` directories.

## 🛠️ Manual cleanup (only if you skipped the prebuild)

If for some reason the prebuild script doesn't run (e.g. you ran `tsc` directly),
you can clean up manually:

```bash
node scripts/cleanup-stale.mjs
```

Or with shell commands:

```bash
rm -f src/components/Hero.tsx \
      src/components/sections/{AIBots,Projects,Telegram,LiveStats}.tsx \
      src/components/three/{Galaxy,Planet,EnergyCore,Stars}.tsx \
      src/hooks/{useTheme,useParallax,useMouseParallax,useScroll}.ts \
      src/lib/utils.ts \
      src/router/index.tsx \
      src/styles/{animations,neon}.css \
      src/data/stats.ts \
      tailwind.config.js \
      src/vite-env.d.ts
rmdir src/lib src/router 2>/dev/null || true
```
