import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, User } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import profileImg from "../assets/Muralee pro.jpeg";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-dark-bg/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          badge="About Me" 
          title="My Background & Journey" 
          subtitle="Combining business intelligence, data analytics, and software design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Circular Image / Visual Card */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Premium Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 rounded-full blur-2xl opacity-25 dark:opacity-35 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none" />
              
              {/* Modern Circular Picture Frame with Gradient Ring */}
              <div className="relative z-10 p-1.5 bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 rounded-full shadow-2xl overflow-hidden w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-card p-1">
                  <img 
                    src={profileImg} 
                    alt="Muraleeswaran M K" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105 hover:rotate-1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content details */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <User className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-4">
                I am an aspiring Business Analyst with hands-on experience in data analytics, business intelligence, and AI-powered applications. I am skilled in gathering and analyzing business requirements, SQL, Python, Excel, dashboard development, and translating complex business problems into technology solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                I have a strong understanding of the Software Development Life Cycle (SDLC) with excellent analytical, documentation, and communication skills.
              </p>
            </motion.div>

            {/* Sub cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <motion.div variants={itemVariants}>
                <Card className="h-full flex flex-col justify-between" hoverEffect={true}>
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                      <Briefcase className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                      Internships
                    </h4>
                    <ul className="space-y-4 font-sans text-sm">
                      <li>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">Data Science Intern</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">Zdata Technologies • Aug 2025 – May 2026</p>
                      </li>
                      <li>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">Data Analyst Intern</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">Zdata Technologies • May 2025 – Aug 2025</p>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full flex flex-col justify-between" hoverEffect={true}>
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                      <GraduationCap className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                      Education
                    </h4>
                    <ul className="space-y-4 font-sans text-sm">
                      <li>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">Master of Computer Applications (MCA)</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">D G Vaishnav College • 2024 – 2026</p>
                      </li>
                      <li>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">Bachelor of Computer Applications (BCA)</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">Sourashtra College • 2021 – 2024</p>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Experience Points Card */}
            <motion.div 
              variants={itemVariants} 
              className="p-5 border border-light-border dark:border-dark-border bg-white dark:bg-dark-card rounded-2xl flex items-start gap-4 shadow-sm shadow-slate-100 dark:shadow-none"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl">
                <Target className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <div className="w-full">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Business Analysis Highlights</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  <li>Gathered and analyzed business requirements for software applications.</li>
                  <li>Assisted in translating business needs into functional software features.</li>
                  <li>Created dashboards and reports to support business decision-making.</li>
                  <li>Collaborated with developers during software development and testing.</li>
                  <li>Applied SQL and analytics techniques to solve business problems.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
