- https://t.me/ILIVIR3
- https://ilivir3.pages.dev

# 🌐 ILIVIR3 HUB

**The Central Portal for ILIVIR3 Telegram Bot & Projects**

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-F69652?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-ILIVIR3-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/ILIVIR3)
[![GitHub](https://img.shields.io/badge/GitHub-ILIV007-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ILIV007/ILIVIR3-hub)
![Version](https://img.shields.io/badge/Version-1.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📖 Overview

**ILIVIR3 HUB** is a modern, responsive web portal that serves as the central gateway for the ILIVIR3 Telegram Bot ecosystem. Built as a lightweight static site and deployed on Cloudflare Pages, it provides a unified interface to access bot features, explore connected projects, and discover all resources in one place.

Designed with a focus on speed, simplicity, and user experience, the hub acts as a bridge between the Telegram bot and its users, offering quick access to documentation, live demos, and project showcases.

---

## ✨ Key Features

- **🔗 Centralized Access:** Single entry point for all ILIVIR3 bot features and related projects
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast:** Static site architecture with Cloudflare's global edge network
- **🎨 Modern UI:** Clean, intuitive interface with smooth animations and transitions
- **🌙 Dark/Light Mode:** Adaptive theme based on user preference
- **🚀 Zero Backend:** Pure frontend solution with no server-side dependencies
- **🔒 Secure:** HTTPS enabled by default through Cloudflare

---

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling:** Modern CSS with Flexbox & Grid
- **Hosting:** Cloudflare Pages (Global CDN)
- **Version Control:** Git & GitHub
- **Deployment:** Automated CI/CD via Cloudflare Pages

---

## 🚀 Local Development

Want to run the hub locally or contribute?

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ILIV007/ILIVIR3-hub.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ILIVIR3-hub
   ```

3. **Start a local server:**
   Since this is a static site, you can use any local server. For example:
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx http-server
   ```

4. **Open in your browser:**
   Visit `http://localhost:8000`

---

## 🌍 Deployment

The site is automatically deployed to Cloudflare Pages on every push to the main branch.

### Manual Deployment

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Deploy to Pages:**
   ```bash
   wrangler pages deploy .
   ```

---

## 📂 Project Structure

```
ILIVIR3-hub/
├── public/
│   ├── _redirects
│   ├── site.webmanifest
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/ (Button, Card, Badge, SectionTitle, GlassPanel)
│   │   ├── layout/ (Navbar, Footer, ScrollProgress)
│   │   ├── sections/ (Hero, FeaturedProjects, AISystems, TechFeed, Timeline, TelegramCTA, GitHubCTA, DonateCTA)
│   │   └── three/ (AICore, Void)
│   ├── context/ (LangContext — bilingual en/fa)
│   ├── data/ (projects, socials, timeline, techFeed)
│   ├── hooks/ (useScroll)
│   ├── styles/ (globals.css, animations.css, neon.css)
│   ├── pages/ (Home, Projects, ProjectDetails, Lab, NotFound)
│   ├── router/ (index.tsx)
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── wrangler.toml
```

---

## 🔗 Related Projects

- **[Arkeen Serpent](https://arkeen-serpent.pages.dev/)** — Space-themed Snake game integrated as a Telegram Mini App
- **ILIVIR3 Bot** — Main Telegram bot with AI-powered features

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

**Telegram Bot:** [@ILIVIR3](https://t.me/ILIVIR3)  
**Live Demo:** [ilivir3.pages.dev](https://ilivir3.pages.dev/)  
**GitHub:** [@ILIV007](https://github.com/ILIV007)

---

<div align="center">
  <i>ILIVIR3 HUB · Your Gateway to Intelligent Telegram Bots</i>
  <br>
  <b>Visit:</b> <a href="https://ilivir3.pages.dev/">ilivir3.pages.dev</a>
</div>
