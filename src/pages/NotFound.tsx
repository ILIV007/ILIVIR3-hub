import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@components/ui/Button";
import { ArrowLeft, Orbit } from "lucide-react";
import { useLang } from "@context/LangContext";

export function NotFound() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent-cyan/10 text-accent-cyan mb-6">
          <Orbit className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-black gradient-text mb-4">404</h1>
        <p className="text-navy-400 text-lg mb-8">
          {lang === "fa" ? "صفحه مورد نظر یافت نشد" : "Page not found"}
        </p>
        <Link to="/">
          <Button icon={<ArrowLeft className="w-4 h-4" />}>
            {lang === "fa" ? "بازگشت به خانه" : "Back to Home"}
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
