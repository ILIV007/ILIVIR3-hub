import { Github, Send, Youtube, Instagram } from "lucide-react";
import { useLang } from "@context/useLang";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">ILIVIR3</span>
          <span className="text-navy-500 text-xs">
            {lang === "fa" ? "— ساخته شده توسط ILIV007" : "— Built by ILIV007"}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ILIV007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-navy-500 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://t.me/ILIVIR3" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-navy-500 hover:text-accent-cyan transition-colors">
            <Send className="w-4 h-4" />
          </a>
          <a href="https://youtube.com/@ILIVIR3" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-navy-500 hover:text-red-400 transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/ILIVIR3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-navy-500 hover:text-pink-400 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
