import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.button
      onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
      className="p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white/50 dark:bg-dark-card/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: theme === "dark" ? 360 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-label="Toggle dark/light theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </motion.button>
  );
}
