import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  // Initialize dark mode on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const root = window.document.documentElement;
    
    // Default to dark mode for modern premium aesthetic
    if (savedTheme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      if (!savedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-dark-bg selection:bg-blue-600/30 dark:selection:bg-blue-400/30 overflow-x-hidden font-sans transition-colors duration-300">
      <Navbar />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}
