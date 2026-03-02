import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar py-4 px-6 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl md:sticky md:top-4 fixed top-0 inset-x-0 z-[100] shadow-sm border-b md:border border-slate-200 dark:border-slate-800 md:mb-8 md:mx-0 transition-all duration-300">
      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
        Portfolio
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {["Beranda", "About", "Project", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 font-medium tracking-wide"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button & Theme Toggle (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 font-medium">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 mt-3 md:mt-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-x border-b md:border border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-2xl p-6 transition-all duration-300 origin-top md:hidden shadow-xl shadow-slate-200/50 dark:shadow-none z-50 flex flex-col ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"}`}
      >
        <ul className="flex flex-col gap-5">
          {["Beranda", "About", "Project", "Contact"].map((item) => (
            <li key={item} className="text-center">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-300 text-lg font-medium block w-full py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="text-center pt-5 border-t border-slate-200 dark:border-slate-800 mt-2">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 font-medium text-lg">
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
