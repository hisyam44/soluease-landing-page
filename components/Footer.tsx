
import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1d97c1] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                Solu<span className="text-[#1d97c1]">ease</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Batam's premier software house providing digital solutions with ease. 
              Built for speed, efficiency, and reliability.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1d97c1] hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Mobile Engineering</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-[#1d97c1] transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1d97c1] mt-1" />
                <span>Nagoya, Batam City, <br />Riau Islands, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1d97c1]" />
                <span>+62 778 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1d97c1]" />
                <span>hello@soluease.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Soluease (PT. Solusi Digital Ease). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
