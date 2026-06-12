import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X, Globe } from "lucide-react";
import { useLang } from "@context/LangContext";

const navLinks = [
  { to: "/", label: "Home", labelFa: "خانه" },
  { to: "/projects", label: "Projects", labelFa: "پروژه‌ها" },
  { to: "/lab", label: "Lab", labelFa: "آزمایشگاه" },
];

export function Navbar() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-deep-navy/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">ILIVIR3</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to ? "text-accent-cyan" : "text-navy-400 hover:text-white"
              }`}
            >
              {lang === "fa" ? link.labelFa : link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            className="flex items-center gap-1 text-xs text-navy-400 hover:text-accent-cyan transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "FA" : "EN"}
          </button>
          <a
            href="https://github.com/ILIV007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            className="md:hidden text-navy-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-deep-navy/95"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm py-1 ${
                    location.pathname === link.to ? "text-accent-cyan" : "text-navy-400"
                  }`}
                >
                  {lang === "fa" ? link.labelFa : link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
