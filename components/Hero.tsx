import React from "react";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Code2, Rocket, ShieldCheck];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#1d97c1] opacity-[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#1d97c1] opacity-[0.05] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-100 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#1d97c1] animate-pulse"></span>
            <span className="text-sm font-semibold text-[#1d97c1] uppercase tracking-wider">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-heading">
            {t.hero.title1} <br />
            <span className="text-[#1d97c1] relative">
              {t.hero.title2}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 3 150 3 356 10"
                  stroke="#1d97c1"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#1d97c1] hover:bg-[#167da1] text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const services = document.getElementById("services");
                if (services) services.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:border-[#1d97c1] hover:text-[#1d97c1] rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {t.hero.features.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 hover:border-[#1d97c1]/30 transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1d97c1] transition-colors">
                  <Icon className="w-7 h-7 text-[#1d97c1] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
