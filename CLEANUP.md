# ⚠️ CLEANUP — Required before pushing v11.2

When you extract the v11 zip on top of an existing repository, files that we
deleted in the new version **stay on disk** and will still be compiled by
`tsc`, causing build errors like:

```
src/components/Hero.tsx(33,24): error TS2322: ...
src/components/sections/AIBots.tsx(8,10): error TS2305: ...
src/components/sections/Projects.tsx(10,10): error TS2305: ...
src/components/sections/Telegram.tsx(6,10): error TS2305: ...
```

## ✅ The fix — delete these stale files before pushing

Run these commands in your project root (after extracting the zip):

```bash
# Delete stale files that no longer exist in v11.2
rm -f src/components/Hero.tsx
rm -f src/components/sections/AIBots.tsx
rm -f src/components/sections/Projects.tsx
rm -f src/components/sections/Telegram.tsx
rm -f src/components/sections/LiveStats.tsx
rm -f src/components/three/Galaxy.tsx
rm -f src/components/three/Planet.tsx
rm -f src/components/three/EnergyCore.tsx
rm -f src/components/three/Stars.tsx
rm -f src/hooks/useTheme.ts
rm -f src/hooks/useParallax.ts
rm -f src/hooks/useMouseParallax.ts
rm -f src/hooks/useScroll.ts
rm -f src/lib/utils.ts
rm -f src/router/index.tsx
rm -f src/styles/animations.css
rm -f src/styles/neon.css
rm -f src/data/stats.ts
rm -f tailwind.config.js
rm -f src/vite-env.d.ts

# Remove empty directories
rmdir src/lib src/router 2>/dev/null || true
```

## 🛡️ Safer alternative — fresh clone

The cleanest way is to start fresh:

```bash
# On your machine
git clone https://github.com/ILIV007/ILIVIR3-hub.git ilivir3-fresh
cd ilivir3-fresh

# Delete everything inside (keeps .git folder)
find . -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +

# Now extract the v11.2 zip contents into this folder
unzip ~/Downloads/ILIVIR3-hub.zip -d .
mv ILIVIR3-hub/* ILIVIR3-hub/.* . 2>/dev/null || true
rmdir ILIVIR3-hub

# Commit and push
git add -A
git commit -m "v11.2 — wormhole 404 + emoji favicon + cleanup"
git push origin main
```

This guarantees no stale files remain.

## 📝 Why this happened

`unzip` does **not** delete files that aren't in the archive — it only
overwrites/creates files that *are* in the archive. So files we removed in
v11.0+ persist if you extract on top of an old working copy.

The cleanup commands above are idempotent — safe to run even if the files
are already gone.
