import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { skillsData } from "../data/skills";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

// Dynamic Icon Component
const DynamicIcon = ({ name, className = "" }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          badge="Expertise" 
          title="Skills & Technologies" 
          subtitle="A comprehensive overview of my technical stack and development tools."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((categoryObj, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="h-full relative overflow-hidden group" hoverEffect={true}>
                {/* Visual accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-60 dark:opacity-40" />

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-6 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  {categoryObj.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {categoryObj.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-900 transition-all select-none group/pill relative"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 12px rgba(37, 99, 235, 0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Glow effect backdrops */}
                      <span className="absolute inset-0 rounded-xl bg-blue-500/0 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 blur-md transition-all duration-300" />
                      
                      <DynamicIcon name={skill.icon} className="w-4 h-4 text-slate-400 group-hover/pill:text-blue-600 dark:group-hover/pill:text-blue-400 group-hover/pill:rotate-[10deg] transition-all" />
                      <span className="text-sm font-medium font-sans relative z-10">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
