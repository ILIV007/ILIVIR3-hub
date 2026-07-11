# 🌐 ILIVIR3 HUB

**The Central Portal for ILIVIR3 Telegram Bot & Projects**

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-F69652?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-ILIVIR3-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/ILIVIR3)
[![GitHub](https://img.shields.io/badge/GitHub-ILIV007-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ILIV007/ILIVIR3-hub)
![Version](https://img.shields.io/badge/Version-11.3-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📖 Overview

**ILIVIR3 HUB** is a modern, responsive web portal that serves as the central gateway for the ILIVIR3 Telegram Bot ecosystem. Built as a single-page application and deployed on Cloudflare Pages, it provides a unified interface to access bot features, explore connected projects, and discover all resources in one place.

Designed with a focus on speed, accessibility, and bilingual support (English / فارسی), the hub acts as a bridge between the Telegram bot and its users, offering quick access to documentation, live demos, and project showcases.

---

## ✨ Key Features

- **🔗 Centralized Access:** Single entry point for all ILIVIR3 bot features and related projects
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast:** Static SPA with code-splitting and Cloudflare's global edge network
- **🎨 Modern UI:** Glassmorphism design with smooth animations and a 3D hero scene
- **🌍 Bilingual:** English and Persian (Farsi) with full RTL support and persisted language preference
- **🌙 Dark Mode:** Built-in dark theme optimized for low-light viewing
- **♿ Accessible:** ARIA labels, keyboard navigation, and `prefers-reduced-motion` support
- **🔍 SEO-Ready:** Open Graph, Twitter Card, canonical URL, sitemap.xml, robots.txt

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript 5
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config)
- **3D:** Three.js + @react-three/fiber + @react-three/drei
- **Animation:** Motion (Framer Motion)
- **Icons:** lucide-react
- **Routing:** React Router 7
- **Hosting:** Cloudflare Pages (global CDN)

---

## 🚀 Local Development

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ILIV007/ILIVIR3-hub.git
   cd ILIVIR3-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit `http://localhost:5173`

### Build

```bash
npm run build      # Type-check + production build to /dist
npm run preview    # Preview the production build locally
npm run typecheck  # Type-check only
```

---

## 🌍 Deployment

The site is automatically deployed to Cloudflare Pages on every push to the `main` branch.

### Manual Deployment

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

---

## 📂 Project Structure

```
ILIVIR3-hub/
├── public/
│   ├── _headers              # Security & cache headers
│   ├── _redirects            # SPA fallback
│   ├── _routes.json          # Cloudflare Pages routes
│   ├── favicon.svg           # Branded SVG favicon
│   ├── og-image.svg          # Open Graph preview image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── ui/              (Button, Card, Badge, SectionTitle, GlassPanel)
│   │   ├── layout/          (Navbar, Footer, ScrollProgress)
│   │   ├── sections/        (Hero, FeaturedProjects, AISystems, TechFeed, Timeline, TelegramCTA, GitHubCTA, DonateCTA, Contact)
│   │   ├── three/           (AICore, Void, HeroScene)
│   │   └── ErrorBoundary.tsx
│   ├── context/             (LangContext — bilingual en/fa with RTL + persistence)
│   ├── data/                (projects, socials, techFeed, timeline)
│   ├── hooks/               (usePrefersReducedMotion, useInView)
│   ├── pages/               (Home, Projects, ProjectDetails, Lab, NotFound)
│   ├── styles/              (globals.css — Tailwind v4 @theme + animations)
│   ├── App.tsx              (Routes with lazy-loaded secondary pages)
│   └── main.tsx
├── index.html               (Meta, OG tags, fonts)
├── package.json
├── vite.config.ts           (Code-splitting: react/three/motion/icons vendors)
├── tsconfig.json
├── wrangler.toml
└── README.md
```

---

## 🌐 Bilingual Support

The site supports English and Persian (Farsi) with full RTL layout:

- Click the **Globe / FA-EN** button in the navbar to toggle.
- Your preference is persisted to `localStorage`.
- The `<html lang>` and `<html dir>` attributes update automatically.
- Persian text uses the **Vazirmatn** font for proper rendering.

---

## ⚡ Performance Notes

- **Code-splitting:** Three.js, React, Motion, and icons are split into separate vendor chunks.
- **Lazy routes:** Secondary pages (`/projects`, `/project/:slug`, `/lab`) are lazy-loaded.
- **Lazy 3D:** The hero 3D scene mounts only when scrolled into view (and only on `lg+` screens).
- **Reduced motion:** When `prefers-reduced-motion: reduce` is set, the 3D scene uses on-demand frame rendering.
- **Caching:** Static assets get long-lived `immutable` cache headers via `public/_headers`.

---

## 🔗 Related Projects

- **[IVAI Bot](https://t.me/IVAI_bot)** — AI-powered Telegram bot using Gemini
- **[TradeAgent IV](https://t.me/TradeAgentIV_bot)** — AI trading analysis bot
- **[Arkeen Serpent](https://arkeen-serpent.pages.dev/)** — Space-themed Snake game (Telegram Mini App)
- **[Donate Platform](https://iliv007-donate.pages.dev)** — Open-source donation platform

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

- **Telegram Bot:** [@ILIVIR3](https://t.me/ILIVIR3)
- **Live Site:** [ilivir3.pages.dev](https://ilivir3.pages.dev/)
- **GitHub:** [@ILIV007](https://github.com/ILIV007)
- **Email:** iliv007@proton.me

---

## 📦 Changelog

### v11.3.0 — Deploy Fix

- **CRITICAL**: Added `prebuild` script that automatically removes stale files from previous versions before `tsc` runs. This fixes the Cloudflare Pages deploy failure caused by old files (Hero.tsx, AIBots.tsx, etc.) persisting when a new zip is extracted over an old checkout.
- The `cleanup-stale.mjs` script is idempotent — safe to run even if files are already gone.
- Both `build` and `typecheck` scripts now run cleanup first.

### v11.2.0 — Wormhole 404 + Polish

- **NEW**: Custom 3D wormhole scene on the 404 page — a cute animated black hole eating everything (particles spiraling inward, glowing accretion disk, pastel palette)
- Restored emoji favicon (🌀) by popular demand
- Fixed WebGL "Context Lost" warning by adding proper canvas cleanup and dispose lifecycle
- Added lazy-mount to 404 wormhole scene (only loads when 404 actually renders)
- Reduced-motion users get a static fallback instead of the animated scene

### v11.1.0 — Content Update

- Added 7 new projects from GitHub research: AI Admin, Lyra, Fredy, Hades Army, Pixoris, AtlasEA, XO Game
- Updated existing projects (TradeAgent IV HYBRID, IVAI Bot, Arkeen Serpent, ILIVIR3 Hub) with accurate descriptions
- Project filtering (by status + category) on /projects page
- Project details page now shows version + release date + related projects
- AISystems section now spotlights 4 bots (AI Admin, TradeAgent IV, Lyra, Fredy)
- Timeline expanded to 10 real events from 2024-01 to 2025-12
- TechFeed updated with 6 fresh items

### v11.0.0 — Refactor & Debug Release

Major refactor focused on bug fixes, dead-code removal, performance, accessibility, and SEO.

**Breaking / structural:**
- Removed 17 dead-code files (unused three/sections/hooks/router/lib/CSS)
- Removed legacy `tailwind.config.js` (Tailwind v4 uses CSS-first `@theme`)
- Removed duplicate `techFeedItems` data in `stats.ts`

**Bug fixes:**
- `Button` now distinguishes internal vs external links; `target="_blank"` only for external
- `LangContext` persists choice to `localStorage`, syncs `<html lang>` and `<html dir>`, detects browser language
- Fixed broken `#projects` anchor → router `to="/projects"`
- Replaced `<Radio>` icon for YouTube with `<Youtube>` across the codebase
- `ProjectDetails` now renders `<NotFound />` via `<Navigate>` instead of redirecting to `/404`
- Fixed invalid `<a><a>` nesting in project cards via stretched-link pattern
- Fixed invalid `<button>` inside `<a>` in NotFound / ProjectDetails
- Removed `as any` cast in `TechFeed` (typed Badge variants)
- `wrangler.toml` `compatibility_date` corrected to a valid past date

**AI Systems mobile bug:**
- Horizontal-scroll / "stretchy" drag on mobile fixed via `min-w-0` + `overflow-hidden`
- Eliminated content repetition by giving each bot card a distinct accent, tagline, and CTA
- Feature grid now collapses to single column on mobile for compactness

**CSS / Styling:**
- Defined missing `animate-gradient` keyframes (was referenced but never defined)
- Loaded **Vazirmatn** font for proper Persian text rendering
- Added `prefers-reduced-motion` media query for accessibility
- Added `overflow-x: hidden` on `body`

**Performance (5× smaller initial bundle):**
- Code-splitting via `manualChunks`: `react-vendor`, `three-vendor`, `motion-vendor`, `icons-vendor`
- Lazy-loaded secondary routes (`/projects`, `/project/:slug`, `/lab`, `/404`)
- Lazy-mounted hero 3D scene (only when scrolled into view on `lg+` screens)
- Merged two separate Canvases into one in Hero (halves WebGL context cost)
- Initial bundle: **363 KB → 78 KB gzip**

**SEO / Meta:**
- Added Open Graph, Twitter Card, canonical URL
- Added `sitemap.xml` and updated `robots.txt` with sitemap reference
- Branded SVG `favicon.svg` and `og-image.svg`
- Dynamic `<html lang>` based on selected language
- Added `apple-touch-icon`, `color-scheme`, `theme-color`

**Quality / DX:**
- Added `ErrorBoundary` to prevent full-app crashes from Three.js errors
- Added `usePrefersReducedMotion` and `useInView` hooks
- Added ESLint + Prettier configuration
- Added GitHub Actions CI workflow (typecheck + build on PR)
- Added `.gitignore`, `.nvmrc`
- Updated `README.md`, `package.json` (with `engines` field)
- Security headers expanded in `public/_headers`
- Cache headers tuned for static assets

---

## 🗺️ Roadmap

- [ ] Real-time GitHub stats integration (live stars / commits / forks)
- [ ] Blog / articles section
- [ ] Dark / light theme toggle
- [ ] Multilingual expansion beyond en/fa
- [ ] PWA offline support

---

<div align="center">
  <i>ILIVIR3 HUB · Your Gateway to Intelligent Telegram Bots</i>
  <br>
  <b>Visit:</b> <a href="https://ilivir3.pages.dev/">ilivir3.pages.dev</a>
</div>
