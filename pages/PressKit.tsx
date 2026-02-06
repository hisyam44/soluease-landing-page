import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Download, Mail, Phone, MapPin, Award, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const PressKit: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = (filename: string) => {
    alert(`Downloading ${filename}...`);
  };

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-heading">
              Press Kit
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Everything you need to know about Soluease. Download our media
              materials, brand assets, and company information.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                About Soluease
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Soluease is a premier software development and digital solutions
                company dedicated to transforming businesses through innovative
                technology. With a team of expert developers and designers, we
                specialize in creating custom solutions that drive growth and
                efficiency.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded with the vision of making enterprise-level technology
                accessible to businesses of all sizes, Soluease has established
                itself as a trusted partner for digital transformation across
                multiple industries.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to excellence, innovation, and customer success
                has made us a leader in the technology solutions space.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1d97c1] to-cyan-600 rounded-3xl p-8 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-cyan-100">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-slate-300">Team Members</p>
              </div>
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-slate-300">Years in Business</p>
              </div>
            </div>
          </div>

          {/* Brand Assets */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Brand Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo */}
              <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-slate-50 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <img
                      src="/logo.png"
                      alt="Soluease Logo"
                      className="w-20 h-20 rounded-xl mx-auto mb-4"
                    />
                    <p className="text-slate-600 font-semibold">
                      Soluease Logo
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload("soluease-logo-pack.zip")}
                  className="w-full bg-[#1d97c1] hover:bg-[#167da1] text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Logo Pack
                </button>
              </div>

              {/* Brand Guidelines */}
              <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-slate-50 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-[#1d97c1] mx-auto mb-4" />
                    <p className="text-slate-600 font-semibold">
                      Brand Guidelines
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleDownload("soluease-brand-guidelines.pdf")
                  }
                  className="w-full bg-[#1d97c1] hover:bg-[#167da1] text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Guidelines
                </button>
              </div>

              {/* Color Palette */}
              <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-slate-50 rounded-xl p-8 mb-4">
                  <div className="flex gap-4 justify-center mb-4">
                    <div className="w-16 h-16 bg-[#1d97c1] rounded-lg shadow-md"></div>
                    <div className="w-16 h-16 bg-slate-900 rounded-lg shadow-md"></div>
                    <div className="w-16 h-16 bg-slate-600 rounded-lg shadow-md"></div>
                  </div>
                  <p className="text-slate-600 font-semibold text-center">
                    Color Palette
                  </p>
                </div>
                <button
                  onClick={() => handleDownload("soluease-color-palette.pdf")}
                  className="w-full bg-[#1d97c1] hover:bg-[#167da1] text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Palette
                </button>
              </div>

              {/* Fact Sheet */}
              <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-slate-50 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-[#1d97c1] mx-auto mb-4" />
                    <p className="text-slate-600 font-semibold">Fact Sheet</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload("soluease-fact-sheet.pdf")}
                  className="w-full bg-[#1d97c1] hover:bg-[#167da1] text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Fact Sheet
                </button>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                Our Expertise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span className="text-slate-600">
                    Web Development & Design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span className="text-slate-600">
                    Mobile Application Development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span className="text-slate-600">
                    Enterprise SaaS Solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span className="text-slate-600">
                    AI & Machine Learning Integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span className="text-slate-600">
                    Cloud Infrastructure & DevOps
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                Industries Served
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">•</span>
                  <span className="text-slate-600">E-commerce & Retail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">•</span>
                  <span className="text-slate-600">Finance & Fintech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">•</span>
                  <span className="text-slate-600">
                    Logistics & Supply Chain
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">•</span>
                  <span className="text-slate-600">
                    Healthcare & Technology
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">•</span>
                  <span className="text-slate-600">Travel & Hospitality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Media Contact */}
          <div className="bg-gradient-to-r from-[#1d97c1] to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-8 font-heading">
              Media Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:media@soluease.com"
                    className="text-cyan-100 hover:text-white transition-colors"
                  >
                    media@soluease.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+62881080516115"
                    className="text-cyan-100 hover:text-white transition-colors"
                  >
                    +62 881-0805-16115
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-cyan-100">
                    Batam, Riau Islands, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Press Releases */}
          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Latest Press Releases
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#1d97c1] pl-6 pb-6 border-b border-slate-200">
                <div className="text-sm text-slate-500 mb-2">
                  January 15, 2026
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Soluease Launches New AI-Powered Analytics Platform
                </h3>
                <p className="text-slate-600 mb-3">
                  Soluease announces the launch of its latest AI-powered
                  analytics platform, designed to help businesses make
                  data-driven decisions faster and more accurately.
                </p>
                <a
                  href="#"
                  className="text-[#1d97c1] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
              <div className="border-l-4 border-[#1d97c1] pl-6 pb-6 border-b border-slate-200">
                <div className="text-sm text-slate-500 mb-2">
                  December 20, 2025
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Soluease Expands Team with 10 New Tech Experts
                </h3>
                <p className="text-slate-600 mb-3">
                  As part of our expansion, Soluease welcomes 10 new talented
                  developers and designers to strengthen our capabilities in
                  emerging technologies.
                </p>
                <a
                  href="#"
                  className="text-[#1d97c1] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
              <div className="border-l-4 border-[#1d97c1] pl-6">
                <div className="text-sm text-slate-500 mb-2">
                  November 10, 2025
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Soluease Wins Best Innovation Award 2025
                </h3>
                <p className="text-slate-600 mb-3">
                  Soluease is recognized as the winner of the Best Innovation
                  Award 2025 for its groundbreaking work in digital
                  transformation solutions.
                </p>
                <a
                  href="#"
                  className="text-[#1d97c1] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PressKit;
