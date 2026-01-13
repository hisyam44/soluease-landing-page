
import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1d97c1] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/20">
          {/* Animated Background Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 text-white font-bold">
              <Sparkles className="w-5 h-5" />
              <span>{t.cta.badge}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading leading-tight">
              {t.cta.title.split('<br />').map((line: string, i: number) => (
                <React.Fragment key={i}>
                  {line} {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
            
            <p className="text-xl text-cyan-50 max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
              {t.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1d97c1] hover:bg-cyan-50 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 group">
                <Send className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                {t.cta.primary}
              </button>
              <button className="bg-transparent border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all">
                {t.cta.secondary}
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{t.cta.status}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="font-bold">24h</span>
                <span>{t.cta.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
