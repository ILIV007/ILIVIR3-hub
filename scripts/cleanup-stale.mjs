#!/usr/bin/env node
/**
 * cleanup-stale.mjs
 *
 * Removes files that were deleted in newer versions of the project but may
 * still exist if a newer zip was extracted on top of an older working copy.
 *
 * This script is invoked automatically before `tsc && vite build` via the
 * `prebuild` npm script. It is idempotent — safe to run even if the files
 * are already gone.
 *
 * Why this exists:
 *   `unzip` only writes/overwrites files that ARE in the archive; it does
 *   NOT delete files that aren't. So when a user extracts a new release
 *   over an old checkout, stale files persist and break `tsc`.
 */

import { unlinkSync, existsSync, rmdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/** Files that no longer exist in the current version. */
const staleFiles = [
  // Old prototype Hero (replaced by src/components/sections/Hero.tsx)
  "src/components/Hero.tsx",
  // Old section components replaced or merged
  "src/components/sections/AIBots.tsx",
  "src/components/sections/Projects.tsx",
  "src/components/sections/Telegram.tsx",
  "src/components/sections/LiveStats.tsx",
  // Old three.js experiments (replaced by HeroScene.tsx + Wormhole.tsx)
  "src/components/three/Galaxy.tsx",
  "src/components/three/Planet.tsx",
  "src/components/three/EnergyCore.tsx",
  "src/components/three/Stars.tsx",
  // Old hooks that were removed
  "src/hooks/useTheme.ts",
  "src/hooks/useParallax.ts",
  "src/hooks/useMouseParallax.ts",
  "src/hooks/useScroll.ts",
  // Old lib / router / styles / data
  "src/lib/utils.ts",
  "src/router/index.tsx",
  "src/styles/animations.css",
  "src/styles/neon.css",
  "src/data/stats.ts",
  // Old config files
  "tailwind.config.js",
  "src/vite-env.d.ts",
];

/** Directories that may now be empty and should be removed. */
const staleDirs = ["src/lib", "src/router"];

let removed = 0;
let skipped = 0;

for (const rel of staleFiles) {
  const abs = join(root, rel);
  if (existsSync(abs)) {
    try {
      unlinkSync(abs);
      console.log(`  ✓ removed stale: ${rel}`);
      removed++;
    } catch (err) {
      console.warn(`  ! could not remove ${rel}: ${err.message}`);
    }
  } else {
    skipped++;
  }
}

for (const rel of staleDirs) {
  const abs = join(root, rel);
  if (existsSync(abs)) {
    try {
      rmdirSync(abs);
      console.log(`  ✓ removed empty dir: ${rel}`);
    } catch {
      // Directory not empty — leave it alone.
    }
  }
}

console.log(`\nCleanup complete: ${removed} stale file(s) removed, ${skipped} already gone.`);
