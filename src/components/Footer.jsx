import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800/50 z-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-100/50 dark:bg-emerald-900/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="inline-block">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent w-fit">
                Portfolio.
              </h2>
            </a>
            <p className="text-slate-600 dark:text-slate-400 font-light text-lg leading-relaxed max-w-sm">
              Membantu mewujudkan visi digital Anda melalui pembuatan kode yang
              elegan, desain antarmuka yang indah, dan sistem yang optimal.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  icon: "ri-github-fill",
                  label: "GitHub",
                  link: "https://github.com/NielSianipar",
                },
                {
                  icon: "ri-linkedin-fill",
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/daniellsianipar/",
                },
                {
                  icon: "ri-instagram-line",
                  label: "Instagram",
                  link: "https://www.instagram.com/_danielsyptra/",
                },
                {
                  icon: "ri-tiktok-fill",
                  label: "TikTok",
                  link: "https://www.tiktok.com/@danieelllll4",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Middle) */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-6 tracking-wide">
              Tautan Cepat
            </h3>
            <ul className="flex flex-col gap-4">
              {["Beranda", "About", "Project", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Right) */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-6 tracking-wide">
              Hubungi Saya
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:danielsianipar2005@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors flex items-center gap-3"
                >
                  <i className="ri-mail-line text-xl text-slate-400 dark:text-slate-500"></i>
                  danielsianipar2005@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6282162154841"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors flex items-center gap-3"
                >
                  <i className="ri-phone-line text-xl text-slate-400 dark:text-slate-500"></i>
                  +62 821 6215 4841
                </a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <i className="ri-map-pin-line text-xl text-slate-400 dark:text-slate-500 mt-1"></i>
                <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-0.5">
                  Medan,
                  <br />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 gap-6 md:gap-4 relative">
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Daniel Syaputra. All rights reserved.
          </p>

          

          <div className="flex justify-end w-full md:w-auto mt-2 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 shadow-lg text-emerald-500 rounded-2xl items-center justify-center hover:-translate-y-2 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white hover:shadow-emerald-500/30 transition-all flex"
              aria-label="Scroll to top"
            >
              <i className="ri-arrow-up-line text-xl font-bold"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
