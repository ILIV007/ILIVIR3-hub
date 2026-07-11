import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { Button } from "@components/ui/Button";
import { Seo } from "@components/Seo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@context/useLang";
import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";
import { ErrorBoundary } from "@components/ErrorBoundary";

// Lazy-load the wormhole scene so the 404 page itself stays light.
const WormholeScene = lazy(() =>
  import("@components/three/WormholeScene").then((m) => ({ default: m.WormholeScene }))
);

export function NotFound() {
  const { lang, dir } = useLang();
  const prefersReducedMotion = usePrefersReducedMotion();
  const backIcon = dir === "rtl" ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />;

  return (
    <>
      <Seo
        title={lang === "fa" ? "صفحه یافت نشد" : "Page Not Found"}
        description={lang === "fa" ? "صفحه مورد نظر شما یافت نشد — توسط کرمچاله بلعیده شد." : "The page you are looking for does not exist — it was devoured by a wormhole."}
        path="/404"
      />
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-deep-navy to-navy-950" />

      {/* 3D Wormhole scene — fills the whole page behind content */}
      {prefersReducedMotion ? (
        // Static fallback for reduced-motion users: just a glowing dot
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-32 h-32 rounded-full bg-accent-purple/20 blur-3xl animate-pulse" />
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <WormholeScene />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}

      {/* Dim overlay — ensures text stays readable over the wormhole */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(5,8,22,0.75) 0%, rgba(5,8,22,0.55) 50%, rgba(5,8,22,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content overlay */}
      <motion.div
        className="relative z-10 text-center max-w-md px-6 py-8 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 120 }}
          className="mb-6"
        >
          <h1
            className="text-7xl sm:text-8xl font-black gradient-text animate-gradient"
            style={{ filter: "drop-shadow(0 0 20px rgba(168,85,247,0.6))" }}
          >
            404
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-white font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {lang === "fa" ? "این صفحه بلعیده شد!" : "This page was devoured!"}
        </motion.p>

        <motion.p
          className="text-navy-200 text-sm mb-8 max-w-sm mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {lang === "fa"
            ? "یک کرمچاله گرسنه این صفحه رو خورده. نگران نباش، خودت رو نجات بده و برگرد!"
            : "A hungry wormhole ate this page. Don't worry — escape back to safety!"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button to="/" icon={backIcon} size="lg">
            {lang === "fa" ? "بازگشت به خانه" : "Back to Home"}
          </Button>
        </motion.div>

        {/* Tiny hint */}
        <motion.div
          className="mt-10 text-navy-300 text-xs font-mono flex items-center justify-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          {lang === "fa" ? "خطا 404 · صفحه یافت نشد" : "Error 404 · Page not found"}
        </motion.div>
      </motion.div>
    </main>
    </>
  );
}
