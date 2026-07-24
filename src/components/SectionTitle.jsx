import { motion } from "framer-motion";

export default function SectionTitle({ 
  badge, 
  title, 
  subtitle,
  center = true
}) {
  return (
    <motion.div 
      className={`mb-12 max-w-2xl ${center ? "text-center mx-auto" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full mb-3">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-cyan-300">
          {title}
        </span>
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
