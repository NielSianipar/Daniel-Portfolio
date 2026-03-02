import React from "react";
import { ScrollReveal } from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistem Penerimaan Mahasiswa Baru",
      description:
        "Web Aplikasi Sistem Penerimaan Mahasiswa Baru Universitas Satya Terra Bhinneka dengan fitur Autentikasi, dan Dashboard analitik proyek secara Real-time.",
      image: "/project/Screenshot 2026-03-01 151749.png",
      tags: ["React", "Node.js", "Tailwind CSS"],
      link: "https://pmb.satyaterrabhinneka.ac.id/",
      theme: {
        hoverShadow: "hover:shadow-emerald-500/10",
        hoverBorder: "hover:border-emerald-200",
        btnBg: "bg-emerald-500/90",
        btnShadow: "shadow-emerald-500/50",
        btnHoverBg: "hover:bg-emerald-400",
        tagBg: "bg-emerald-100/50",
        tagText: "text-emerald-700",
        titleHover: "group-hover:text-emerald-500",
        linkText: "text-emerald-500",
        linkHover: "hover:text-emerald-600",
      },
    },
    {
      id: 2,
      title: "Sistem To-Do List",
      description:
        "Sistem To-Do List dengan fitur Autentikasi, dan Dashboard analitik proyek, kolaborasi tim secara Real-time.",
      image: "/project/project2laptop.png",
      mobileImage: "/project/project2hp.png",
      tags: ["Laravel", "PHP", "Tailwind CSS"],
      link: "https://github.com/NielSianipar/TO-DO-LIST-LARAVEL",
      github: "https://github.com/NielSianipar/TO-DO-LIST-LARAVEL",
      theme: {
        hoverShadow: "hover:shadow-blue-500/10",
        hoverBorder: "hover:border-blue-200",
        btnBg: "bg-blue-500/90",
        btnShadow: "shadow-blue-500/50",
        btnHoverBg: "hover:bg-blue-400",
        tagBg: "bg-blue-100/50",
        tagText: "text-blue-700",
        titleHover: "group-hover:text-blue-500",
        linkText: "text-blue-500",
        linkHover: "hover:text-blue-600",
      },
    },
    {
      id: 3,
      title: "Portfolio & Agency Landing Page",
      description:
        "Desain website modern dengan animasi scroll yang memukau (Framer Motion). Dibuat khusus untuk agensi digital kreatif yang ingin tampil premium.",
      image: "/project/Screenshot 2026-03-01 151749.png",
      tags: ["React", "Framer Motion", "Figma"],
      link: "#",
      github: "#",
      theme: {
        hoverShadow: "hover:shadow-rose-500/10",
        hoverBorder: "hover:border-rose-200",
        btnBg: "bg-rose-500/90",
        btnShadow: "shadow-rose-500/50",
        btnHoverBg: "hover:bg-rose-400",
        tagBg: "bg-rose-100/50",
        tagText: "text-rose-700",
        titleHover: "group-hover:text-rose-500",
        linkText: "text-rose-500",
        linkHover: "hover:text-rose-600",
      },
    },
  ];

  return (
    <section
      id="project"
      className="py-24 relative bg-slate-50 dark:bg-slate-900 overflow-hidden border-y border-slate-200/50 dark:border-slate-800/50"
    >
      {/* Background Pattern & Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:30px_30px] opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-0"></div>

      {/* Colorful Gradient Blobs */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-teal-300/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -translate-x-1/4"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Header Section */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
              Karya <span className="text-emerald-500">Terbaik</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light">
              Kumpulan proyek terbaru yang pernah saya kerjakan, mulai dari
              eksplorasi desain UI/UX hingga pengembangan sistem berbasis
              website secara utuh. Geser untuk melihat lebih lanjut.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal delay={0.2} yOffset={40}>
          <div className="px-4 lg:px-8 relative max-w-7xl mx-auto pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`h-auto flex transition-transform duration-500 ${index === 1 ? "lg:-translate-y-6 lg:scale-105 z-10 relative" : "z-0"}`}
                >
                  <div
                    className={`group bg-white dark:bg-slate-800 border ${index === 1 ? "border-emerald-200 dark:border-emerald-800 shadow-2xl dark:shadow-emerald-900/20 ring-4 ring-emerald-50 dark:ring-emerald-900/30" : "border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none"} rounded-3xl overflow-hidden hover:shadow-2xl dark:hover:shadow-emerald-900/10 transition-all duration-500 h-[600px] w-full flex flex-col ${project.theme.hoverShadow} ${project.theme.hoverBorder}`}
                  >
                    {/* Device Mockups */}
                    <div className="relative pt-10 pb-6 px-4 bg-gradient-to-br from-slate-100 dark:from-slate-700 to-slate-50 dark:to-slate-800 flex items-center justify-center overflow-hidden border-b border-slate-200/60 dark:border-slate-700/60 min-h-[240px]">
                      {index === 1 ? (
                        // LAPTOP + MOBILE MOCKUP
                        <div className="relative w-full max-w-[260px] mx-auto group-hover:-translate-y-3 transition-transform duration-500 flex items-end justify-center">
                          {/* Laptop */}
                          <div className="relative w-[85%] -translate-x-4">
                            <div className="relative bg-[#2d3748] rounded-t-lg p-1 pb-1.5 shadow-xl border-b border-gray-700 z-10">
                              <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full flex items-center justify-center"></div>
                              <div className="relative bg-slate-900 rounded-[2px] aspect-video overflow-hidden border border-gray-800">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                              </div>
                            </div>
                            <div className="relative bg-slate-300 w-[115%] left-1/2 -translate-x-1/2 h-2 rounded-t-[1px] rounded-b-lg shadow-lg border-t border-slate-200 z-0 flex justify-center">
                              <div className="w-1/5 h-0.5 bg-slate-400/60 rounded-b-sm mx-auto"></div>
                            </div>
                          </div>

                          {/* Mobile phone */}
                          <div className="absolute right-0 bottom-0 w-[30%] z-20 translate-x-3 translate-y-3 group-hover:-translate-y-4 group-hover:translate-x-6 transition-all duration-700 shadow-2xl">
                            <div className="relative bg-slate-800 rounded-[10px] p-0.5 border border-slate-600 shadow-xl overflow-hidden bg-gradient-to-tr from-slate-900 to-slate-700">
                              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3.5 h-[3px] bg-slate-900 rounded-full z-30"></div>
                              <div className="relative bg-slate-900 rounded-[8px] aspect-[9/19] overflow-hidden">
                                <img
                                  src={project.mobileImage || project.image}
                                  alt={`${project.title} mobile`}
                                  className="w-full h-full object-cover object-left transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Floating Hover Button */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <a
                              href={project.link}
                              className={`w-10 h-10 md:w-12 md:h-12 backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all ${project.theme.btnBg} ${project.theme.btnShadow} ${project.theme.btnHoverBg}`}
                            >
                              <i className="ri-external-link-line text-lg md:text-xl"></i>
                            </a>
                          </div>
                        </div>
                      ) : (
                        // STANDARD LAPTOP MOCKUP
                        <div className="relative w-full max-w-[260px] mx-auto group-hover:-translate-y-3 transition-transform duration-500">
                          {/* Screen edge + Camera */}
                          <div className="relative bg-[#2d3748] rounded-t-xl p-1.5 pb-2 shadow-2xl border-b border-gray-700 z-10">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full flex items-center justify-center">
                              <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                            </div>

                            {/* Actual Screen Content */}
                            <div className="relative bg-slate-900 rounded-sm aspect-video overflow-hidden border border-gray-800">
                              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                              />
                            </div>
                          </div>

                          {/* Laptop Bottom / Keyboard Base */}
                          <div className="relative bg-slate-300 w-[115%] left-1/2 -translate-x-1/2 h-3 rounded-t-sm rounded-b-xl shadow-lg border-t border-slate-200 z-0 flex justify-center">
                            <div className="w-1/5 h-1 bg-slate-400/60 rounded-b-md mx-auto"></div>
                          </div>

                          {/* Floating Hover Button */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <a
                              href={project.link}
                              className={`w-12 h-12 backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all ${project.theme.btnBg} ${project.theme.btnShadow} ${project.theme.btnHoverBg}`}
                            >
                              <i className="ri-external-link-line text-xl"></i>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs font-semibold px-3 py-1 rounded-lg ${project.theme.tagBg} ${project.theme.tagText} dark:opacity-90`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3
                        className={`text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 transition-colors ${project.theme.titleHover} line-clamp-2`}
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6 flex-1 line-clamp-4">
                        {project.description}
                      </p>

                      {/* Divider & Footer */}
                      <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between mt-auto">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                        >
                          <i className="ri-github-fill text-lg"></i> Source Code
                        </a>
                        <a
                          href={project.link}
                          className={`flex items-center gap-1 font-semibold text-sm transition-colors group/link ${project.theme.linkText} ${project.theme.linkHover}`}
                        >
                          Detail{" "}
                          <i className="ri-arrow-right-line group-hover/link:translate-x-1 transition-transform"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* See More Button */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-bold shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Lihat Lebih Banyak Proyek{" "}
              <i className="ri-grid-fill text-emerald-500 text-xl"></i>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
