import React from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Soluease Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                Solu<span className="text-[#1d97c1]">ease</span>
              </span>
            </div>
            <p className="leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, url: "https://instagram.com/soluease" },
                {
                  Icon: Linkedin,
                  url: "https://linkedin.com/company/soluease",
                },
                { Icon: Twitter, url: "https://twitter.com/soluease" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1d97c1] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">
              {t.footer.company}
            </h4>
            <ul className="space-y-4">
              {t.footer.links.map((link: string, idx: number) => {
                const links: { [key: number]: string } = {
                  0: "#services",
                  1: "#portfolio",
                  2: "#values",
                };
                return (
                  <li key={link}>
                    <a
                      href={links[idx] || "#"}
                      onClick={(e) => {
                        if (links[idx]) {
                          e.preventDefault();
                          const el = document.getElementById(
                            links[idx].replace("#", ""),
                          );
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="hover:text-[#1d97c1] transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">
              {t.footer.services}
            </h4>
            <ul className="space-y-4">
              {t.footer.serviceLinks.map((link: string) => (
                <li key={link}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const services = document.getElementById("services");
                      if (services)
                        services.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-[#1d97c1] transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-heading">
              {t.footer.getInTouch}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1d97c1] mt-1" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1d97c1]" />
                <span>+62 881-0805-16115</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1d97c1]" />
                <span>soluease@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Soluease. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
