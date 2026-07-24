import { motion } from "framer-motion";

export default function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "", 
  type = "button",
  href,
  download,
  ...props
}) {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 select-none active:scale-[0.98]";
  
  const variants = {
    primary: "px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20",
    secondary: "px-6 py-3 border border-light-border dark:border-dark-border bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-slate-100 shadow-sm",
    ghost: "px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
    icon: "p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50"
  };

  const Component = motion[href ? "a" : "button"];

  return (
    <Component
      href={href}
      download={download}
      type={href ? undefined : type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      {...props}
    >
      {children}
    </Component>
  );
}
