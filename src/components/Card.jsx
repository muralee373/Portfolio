import { motion } from "framer-motion";

export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true,
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        bg-white dark:bg-dark-card 
        border border-light-border dark:border-dark-border 
        rounded-2xl p-6 
        shadow-sm shadow-slate-100 dark:shadow-none 
        transition-shadow duration-300
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      whileHover={hoverEffect ? { 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)"
      } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
