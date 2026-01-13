
import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t, lang } = useLanguage();
  
  const projects = [
    {
      title: lang === 'en' ? 'Batam Logistic Hub' : 'Hub Logistik Batam',
      category: lang === 'en' ? 'Enterprise SaaS' : 'SaaS Perusahaan',
      image: 'https://picsum.photos/seed/port1/800/600',
      tags: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'EcoEase Travel App',
      category: lang === 'en' ? 'Mobile Application' : 'Aplikasi Mobile',
      image: 'https://picsum.photos/seed/port2/800/600',
      tags: ['Flutter', 'Firebase', 'Maps API']
    },
    {
      title: 'FinStream Dashboard',
      category: 'Fintech',
      image: 'https://picsum.photos/seed/port3/800/600',
      tags: ['Vue.js', 'D3.js', 'Go']
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">{t.portfolio.title}</h2>
            <p className="text-lg text-slate-600">
              {t.portfolio.subtitle}
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
            {t.portfolio.viewAll}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="w-full">
                    <p className="text-cyan-400 font-bold mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1d97c1] transition-colors font-heading">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                    <Tag className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>
                </div>
                <div className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-[#1d97c1] group-hover:border-[#1d97c1] transition-all">
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
