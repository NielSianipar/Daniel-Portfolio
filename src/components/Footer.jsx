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
                { icon: "ri-github-fill", label: "GitHub", link: "#" },
                { icon: "ri-linkedin-fill", label: "LinkedIn", link: "#" },
                { icon: "ri-instagram-line", label: "Instagram", link: "#" },
                { icon: "ri-dribbble-line", label: "Dribbble", link: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
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
              {["Beranda", "Tentang Saya", "Teknologi", "Proyek", "Kontak"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500 transition-colors"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
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
                  href="mailto:hello@daniel.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors flex items-center gap-3"
                >
                  <i className="ri-mail-line text-xl text-slate-400 dark:text-slate-500"></i>
                  hello@daniel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281234567890"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors flex items-center gap-3"
                >
                  <i className="ri-phone-line text-xl text-slate-400 dark:text-slate-500"></i>
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <i className="ri-map-pin-line text-xl text-slate-400 dark:text-slate-500 mt-1"></i>
                <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-0.5">
                  Jakarta Selatan,
                  <br />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 gap-4">
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Daniel Syaputra. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 font-medium text-sm flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 py-1.5 px-3 rounded-full">
            Dibuat dengan{" "}
            <i className="ri-heart-fill text-rose-500 animate-pulse"></i>{" "}
            menggunakan{" "}
            <span className="font-semibold text-sky-500 ml-1">React</span>&{" "}
            <span className="font-semibold text-teal-400">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
