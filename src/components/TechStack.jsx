import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const TechStack = () => {
  const stacks = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      bgClass: "bg-orange-100/50",
      borderClass: "hover:border-orange-500",
      shadowClass: "hover:shadow-orange-500/20",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      bgClass: "bg-blue-100/50",
      borderClass: "hover:border-blue-500",
      shadowClass: "hover:shadow-blue-500/20",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      bgClass: "bg-yellow-100/50",
      borderClass: "hover:border-yellow-400",
      shadowClass: "hover:shadow-yellow-400/20",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      bgClass: "bg-green-100/50",
      borderClass: "hover:border-green-500",
      shadowClass: "hover:shadow-green-500/20",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      bgClass: "bg-slate-200/50",
      borderClass: "hover:border-slate-800",
      shadowClass: "hover:shadow-slate-800/20",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      bgClass: "bg-cyan-100/50",
      borderClass: "hover:border-cyan-400",
      shadowClass: "hover:shadow-cyan-400/20",
    },
    {
      name: "Vue",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      bgClass: "bg-emerald-100/50",
      borderClass: "hover:border-emerald-500",
      shadowClass: "hover:shadow-emerald-500/20",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      bgClass: "bg-red-100/50",
      borderClass: "hover:border-red-500",
      shadowClass: "hover:shadow-red-500/20",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      bgClass: "bg-sky-100/50",
      borderClass: "hover:border-sky-600",
      shadowClass: "hover:shadow-sky-600/20",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      bgClass: "bg-indigo-100/50",
      borderClass: "hover:border-indigo-500",
      shadowClass: "hover:shadow-indigo-500/20",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      bgClass: "bg-blue-100/50",
      borderClass: "hover:border-yellow-500",
      shadowClass: "hover:shadow-yellow-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="techstack"
      className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-200 dark:border-slate-800/50"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100/50 dark:bg-slate-800/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 dark:bg-emerald-900/20 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
              Tech <span className="text-emerald-500">Stack</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light">
              Teknologi dan alat terbaik yang saya gunakan setiap hari untuk
              membangun produk digital berkelas yang cepat, responsif, dan mudah
              dipelihara.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {stacks.map((stack, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`group flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-emerald-900/20 hover:scale-105 ${stack.borderClass} ${stack.shadowClass}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-colors duration-300 ${stack.bgClass} dark:opacity-80 group-hover:bg-white dark:group-hover:bg-slate-800 dark:group-hover:opacity-100`}
                >
                  {/* Floating effect on hover */}
                  <img
                    src={stack.icon}
                    alt={stack.name}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:animate-bounce"
                    style={{ animationDuration: "2s" }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                  {stack.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
