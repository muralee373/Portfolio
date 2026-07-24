import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg/30 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info & Copyright */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Muraleeswaran M K. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-sans">
            Designed with precision, built for performance.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/muralee373"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/m-k-muraleeswaran-83682a2b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="mailto:muraleeswaran01@gmail.com"
              className="p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800" />

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
