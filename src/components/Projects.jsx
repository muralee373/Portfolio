import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projects";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-dark-bg/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          badge="Portfolio" 
          title="Featured Projects" 
          subtitle="A selection of high-impact platforms designed and developed with precision."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="relative p-[1px] rounded-2xl overflow-hidden group bg-transparent border border-light-border dark:border-dark-border hover:border-transparent transition-all duration-300 shadow-sm shadow-slate-100 dark:shadow-none hover:shadow-xl hover:shadow-blue-500/5"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glowing Gradient Border Backing */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
              
              {/* Card Container */}
              <div className="relative bg-white dark:bg-dark-card rounded-[15px] p-5 h-full flex flex-col justify-between z-10 transition-colors duration-300">
                <div>
                  {/* Zoom Image */}
                  <div className="overflow-hidden rounded-xl aspect-video mb-5 relative bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Buttons */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techName, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-sans"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Button 
                      href={project.github} 
                      variant="secondary" 
                      className="w-full gap-2 py-2 px-3 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        href={project.demo} 
                        variant="primary" 
                        className="w-full gap-2 py-2 px-3 text-sm text-white"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
