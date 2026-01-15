import React from "react";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { lang, t, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.solutions, href: "#services" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.values, href: "#values" },
    { name: t.nav.about, href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Soluease Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-heading">
                Solu<span className="text-[#1d97c1]">ease</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8 items-center mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-[#1d97c1] font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-white text-[#1d97c1] shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "id"
                    ? "bg-white text-[#1d97c1] shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                ID
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1d97c1] hover:bg-[#167da1] text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              {t.nav.getStarted}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(lang === "en" ? "id" : "en")}
              className="p-2 text-slate-600 hover:text-[#1d97c1] bg-slate-100 rounded-lg"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 animate-in fade-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-[#1d97c1] hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between px-3 py-4">
              <span className="text-slate-500 font-medium">
                Language / Bahasa
              </span>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-md font-bold ${
                    lang === "en" ? "bg-white text-[#1d97c1]" : "text-slate-400"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-4 py-2 rounded-md font-bold ${
                    lang === "id" ? "bg-white text-[#1d97c1]" : "text-slate-400"
                  }`}
                >
                  ID
                </button>
              </div>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const footer = document.getElementById("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-4 bg-[#1d97c1] text-white px-6 py-4 rounded-xl font-bold flex justify-center items-center gap-2 cursor-pointer"
            >
              {t.nav.getStarted}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
