
import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Values', href: '#values' },
    { name: 'About', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1d97c1] rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-white font-bold text-xl -rotate-12">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-heading">
                Solu<span className="text-[#1d97c1]">ease</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#1d97c1] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#1d97c1] hover:bg-[#167da1] text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-cyan-500/20">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <button className="w-full mt-4 bg-[#1d97c1] text-white px-6 py-4 rounded-xl font-bold flex justify-center items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
