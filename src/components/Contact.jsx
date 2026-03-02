import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/danielsianipar2005@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // clear form
      } else {
        setStatus("error");
        alert("Gagal mengirim pesan. Silakan coba lagi nanti.");
      }
    } catch (error) {
      setStatus("error");
      alert("Terjadi kesalahan. Periksa koneksi internet Anda.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-900/20 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/40 dark:bg-teal-900/20 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
              Mulai <span className="text-emerald-500">Kolaborasi</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light">
              Punya ide proyek luar biasa atau butuh konsultasi untuk sistem
              Anda? Jangan ragu untuk menghubungi. Mari diskusi dan wujudkan
              bersama!
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <ScrollReveal delay={0.2} yOffset={30}>
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-500"></div>

                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 relative z-10">
                    Informasi Kontak
                  </h3>

                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-700/50 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-slate-600">
                        <i className="ri-map-pin-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          Lokasi
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                          Medan, Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-700/50 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-slate-600">
                        <i className="ri-mail-send-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          Email
                        </h4>
                        <a
                          href="mailto:danielsianipar2005@gmail.com"
                          className="text-slate-700 dark:text-slate-200 font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                        >
                          danielsianipar2005@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-700/50 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-slate-600">
                        <i className="ri-phone-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          Telepon
                        </h4>
                        <a
                          href="tel:+6282162154841"
                          className="text-slate-700 dark:text-slate-200 font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                        >
                          +62 82162154841
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700 relative z-10">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                      Sosial Media
                    </h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/NielSianipar"
                        className="w-10 h-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
                      >
                        <i className="ri-github-fill text-lg"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/daniellsianipar/"
                        className="w-10 h-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
                      >
                        <i className="ri-linkedin-fill text-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/_danielsyptra/"
                        className="w-10 h-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
                      >
                        <i className="ri-instagram-line text-lg"></i>
                      </a>
                      <a
                        href="https://www.tiktok.com/@danieelllll4"
                        className="w-10 h-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
                      >
                        <i className="ri-tiktok-fill text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.4} yOffset={30}>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col gap-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Pekerjaan / Proyek / Konsultasi"
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Ceritakan detail proyek atau pertanyaan kamu di sini..."
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 dark:focus:border-emerald-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 group disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <>
                        Mengirim...{" "}
                        <i className="ri-loader-4-line text-xl animate-spin"></i>
                      </>
                    ) : (
                      <>
                        Kirim Pesan{" "}
                        <i className="ri-send-plane-fill text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                      </>
                    )}
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Success Modal Alert */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden transform animate-scale-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="w-20 h-20 mx-auto bg-emerald-50 dark:bg-slate-700/50 text-emerald-500 border border-emerald-100 dark:border-slate-600 rounded-full flex items-center justify-center mb-6 relative z-10">
              <i className="ri-check-line text-4xl"></i>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 relative z-10">
              Pesan Terkirim!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 relative z-10 font-light">
              Terima kasih telah menghubungi. Saya akan segera membalas pesan
              Anda sesegera mungkin.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 active:scale-95 relative z-10"
            >
              Tutup Modal
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
