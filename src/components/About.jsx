import React from "react";
import { ScrollReveal, TextReveal } from "./ScrollReveal";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/50"
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/4"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Tentang <span className="text-emerald-500">Saya</span>
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-emerald-100 dark:from-emerald-900 to-transparent rounded-full ml-4"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <TextReveal
                text="Saya adalah Software Developer yang berdedikasi tinggi terhadap penciptaan antarmuka dan sistem aplikasi yang indah, cepat, dan mudah digunakan."
                className="text-xl md:text-2xl/relaxed font-medium text-slate-700 dark:text-slate-200 leading-relaxed"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Perjalanan saya di dunia pemrograman telah berlangsung lebih
                dari 2 tahun. Berawal dari rasa penasaran tentang bagaimana
                aplikasi bekerja di balik layar, kini saya telah membantu
                berbagai klien dalam menciptakan Web App, mendesain antarmuka,
                dan memberikan solusi sistem yang optimal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
                Saya selalu percaya bahwa{" "}
                <strong>
                  &ldquo;Kode yang indah lahir dari ketekunan&rdquo;
                </strong>
                . Oleh karena itu, saya selalu mengedepankan kualitas kode yang{" "}
                <em>clean</em>, arsitektur yang modern, dan desain yang berfokus
                pada pengguna (<em>User Centric</em>).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "UI/UX Design",
                  "Web Development",
                  "Graphic Design",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-medium rounded-xl shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-700 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Experience Cards */}
          <div className="lg:col-span-5 relative grid gap-6">
            <ScrollReveal delay={0.3} yOffset={30}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-start gap-5 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="ri-code-box-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    Web Development
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    Berpengalaman dalam membangun web penerimaan mahasiswa baru universitas modern dengan
                    ekosistem React, Tailwind, Node.js, dan optimasi performa backend.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} yOffset={30}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-start gap-5 hover:-translate-y-1 transition-all lg:translate-x-8">
                <div className="w-14 h-14 bg-teal-50 dark:bg-teal-500/10 text-teal-500 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="ri-layout-masonry-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    UI/UX & Design
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    Merancang pamflet, banner komersial, hingga meracik desain
                    antarmuka aplikasi yang siap dikembangkan (Figma).
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
