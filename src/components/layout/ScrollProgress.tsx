import { motion, useScroll, useSpring } from "motion/react";
import { useLang } from "@context/useLang";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { dir } = useLang();

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple z-[60] ${
        dir === "rtl" ? "origin-right" : "origin-left"
      }`}
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
