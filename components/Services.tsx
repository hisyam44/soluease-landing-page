
import React from 'react';
import { Smartphone, Globe, Cloud, Database, BarChart3, Fingerprint } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    { icon: Globe, title: 'Web Development', desc: 'Custom enterprise platforms and responsive landing pages built with modern frameworks.' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Seamless iOS and Android experiences tailored for Batam and global markets.' },
    { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS/Google Cloud infrastructure setup that scales with your traffic.' },
    { icon: Database, title: 'Custom CRM/ERP', desc: 'Software that aligns perfectly with your existing business workflows.' },
    { icon: BarChart3, title: 'Data Analytics', desc: 'Transforming raw data into actionable business insights and visualizations.' },
    { icon: Fingerprint, title: 'UX/UI Research', desc: 'Deep-dive user research to ensure your product is effortless to use.' },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Solutions We Master</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From Batam to the world, we provide end-to-end digital expertise across the stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#1d97c1]/20 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-[#1d97c1]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="text-[#1d97c1] font-bold flex items-center gap-2 group/btn">
                Learn More
                <span className="w-6 h-0.5 bg-[#1d97c1] scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
