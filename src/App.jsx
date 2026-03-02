function App() {
  return (
    <>
      <div className="hero grid lg:grid-cols-2 items-center pt-8 pb-16 lg:gap-12 gap-16 grid-cols-1 min-h-[85vh] relative z-10">
        {/* Decorative Background Elements (Behind Content) */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Left Column: Text Info */}
        <div className="flex flex-col justify-center relative">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-sm border border-slate-200/50 dark:border-slate-700/50 w-fit py-2.5 px-5 rounded-full transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:-translate-y-1">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 font-semibold text-sm tracking-wide">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl/tight md:text-6xl/tight lg:text-[4rem]/tight font-extrabold mb-6 text-slate-800 dark:text-slate-100 tracking-tight">
            Hi, Saya <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
              Daniel Syaputra
            </span>
          </h1>

          <p className="text-lg/relaxed md:text-xl/relaxed mb-10 text-slate-600 dark:text-slate-300 max-w-xl font-light">
            Seorang{" "}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">
              Software Developer & Designer
            </strong>{" "}
            dengan ketertarikan mendalam dalam pembuatan Website, Sistem
            Operasi, hingga Desain Grafis (Pamflet & Banner). Pengalaman lebih
            dari{" "}
            <strong className="font-semibold text-emerald-600">2 Tahun</strong>{" "}
            menciptakan solusi digital yang indah & efisien.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-10">
            <a
              href="#"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-emerald-600 transition-all font-semibold shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.5)] hover:-translate-y-1"
            >
              <i className="ri-download-cloud-2-line text-xl"></i> Download CV
            </a>
            <a
              href="#"
              className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-semibold shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Lihat Proyek <i className="ri-arrow-right-up-line text-xl"></i>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mr-2">
              Temukan Saya di
            </p>
            <a
              href="https://github.com/NielSianipar"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daniellsianipar/"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/_danielsyptra/"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@danieelllll4"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <i className="ri-tiktok-fill text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Image Showcase */}
        <div className="flex justify-center lg:justify-end items-center relative mt-10 md:mt-0">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex flex-col justify-end pb-8">
            {/* The Main Shape Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 -z-10 transition-transform duration-500 group-hover:rotate-6"></div>

            {/* Profile Image Container */}
            <div className="relative w-full h-[95%] bg-white dark:bg-slate-800 shadow-2xl dark:shadow-emerald-500/10 rounded-[2rem] border-4 border-white dark:border-slate-800 overflow-hidden group z-10">
              {/* overlay subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10"></div>
              <img
                src="/foto.jpeg"
                alt="Foto Daniel Syaputra"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-6 z-20 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-2">
                <span className="text-2xl">😎</span>
                <p className="font-medium">Kode Indah, Lahir dari Ketekunan.</p>
              </div>
            </div>

            {/* Experience Card (Floating) */}
            <div className="absolute -left-8 md:-left-12 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl dark:shadow-emerald-900/20 border border-white/50 dark:border-slate-700/50 z-30 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold shadow-inner">
                  2+
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100">
                    Tahun
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Pengalaman
                  </p>
                </div>
              </div>
            </div>

            {/* Project Success Card (Floating) */}
            <div className="absolute -right-6 md:-right-10 bottom-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl dark:shadow-emerald-900/20 border border-white/50 dark:border-slate-700/50 z-30 animate-[bounce_5s_ease-in-out_infinite] flex flex-col items-center">
              <div className="flex -space-x-3 mb-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=1"
                  alt="avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=2"
                  alt="avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=3"
                  alt="avatar"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">
                  +
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                Banyak Klien Puas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
