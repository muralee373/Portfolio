import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { certificatesData } from "../data/certificates";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const DynamicIcon = ({ name, className = "" }) => {
  const IconComponent = Icons[name] || Icons.Award;
  return <IconComponent className={className} />;
};

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          badge="Credentials" 
          title="Certifications & Awards" 
          subtitle="Verifiable records of continuous learning, professional growth, and engineering achievements."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificatesData.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex items-start gap-4 p-5 h-full relative overflow-hidden group" hoverEffect={true}>
                {/* Subtle border highlight on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300">
                  <DynamicIcon name={cert.icon} className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans mb-1">
                    {cert.year}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
                    {cert.issuer}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
