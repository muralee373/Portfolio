import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import Button from "./Button";
import resumePdf from "../assets/Muraleeswaran MK.pdf";

const headlines = [
  "Data Analyst",
  "Data Scientist",
  "Business Analyst"
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = headlines[headlineIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          // Pause at end
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % headlines.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, headlineIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Background Animations */}
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-30 pointer-events-none" />
      <div className="absolute inset-0 radial-bg pointer-events-none" />
      
      {/* Floating Blurred Blobs */}
      <motion.div 
        className="absolute top-1/4 left-10 md:left-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -35, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 md:right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 45, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <motion.div 
          className="max-w-3xl text-center md:text-left flex flex-col md:items-start items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-slate-50 mb-4 select-text"
          >
            Muraleeswaran M K
          </motion.h1>

          {/* Animated Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 h-12 flex items-center"
          >
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-cyan-300">
              {currentText}
            </span>
            <span className="w-[3px] h-[1.1em] bg-blue-600 dark:bg-blue-400 ml-1.5 animate-[pulse_1s_infinite]" />
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mb-10 leading-relaxed font-sans"
          >
            Aspiring Business Analyst with hands-on experience in data analytics, business intelligence, and AI-powered applications. Skilled in SQL, Python, Excel, dashboard development, and translating complex business problems into technology solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button 
              href={resumePdf} 
              download="Muraleeswaran_MK_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary" 
              className="w-full sm:w-auto gap-2"
              aria-label="Download Muraleeswaran's Resume PDF"
            >
              <FileText size={18} />
              Download Resume
            </Button>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <Button 
                href="https://github.com/muralee373" 
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary" 
                className="w-full sm:w-auto gap-2"
                aria-label="Muraleeswaran's GitHub Profile"
              >
                <Github size={18} />
                GitHub
              </Button>

              <Button 
                href="https://www.linkedin.com/in/m-k-muraleeswaran-83682a2b1/" 
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary" 
                className="w-full sm:w-auto gap-2"
                aria-label="Muraleeswaran's LinkedIn Profile"
              >
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div 
          className="w-6 h-10 border-2 border-slate-300 dark:border-slate-800 rounded-full flex justify-center p-1.5"
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
