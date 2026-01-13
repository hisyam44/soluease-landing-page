
import React from 'react';
import { CheckCircle2, Zap, Layout, Smile } from 'lucide-react';

export const Values: React.FC = () => {
  const points = [
    { icon: Zap, title: 'Zero Friction', desc: 'We handle the technical complexity so you don\'t have to.' },
    { icon: Layout, title: 'Intuitive Design', desc: 'UI/UX that feels natural and requires zero learning curve.' },
    { icon: Smile, title: 'Stress-Free Delivery', desc: 'Transparent updates and milestones delivered on time.' },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/soluease-team/800/800" 
                alt="Digital Collaboration" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#1d97c1] rounded-3xl -z-0 opacity-10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-slate-100 rounded-3xl scale-105"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading leading-tight">
              Why "Ease" Is Our Core <br />
              <span className="text-[#1d97c1]">Digital Philosophy</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              In a world where technology moves fast, we believe simplicity is the ultimate sophistication. 
              Our Batam-based team focuses on stripping away the unnecessary, leaving you with software 
              that just works.
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-[#1d97c1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{point.title}</h3>
                    <p className="text-slate-600">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
