import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Clock,
  Laptop,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import portfolioData from "../portfolio-data.json";

interface ProjectData {
  id: number;
  titleEn: string;
  titleId: string;
  categoryEn: string;
  categoryId: string;
  image: string;
  tags: string[];
  descriptionEn: string;
  descriptionId: string;
  year: string;
  link: string;
  backgroundEn: string;
  backgroundId: string;
  solutionEn: string;
  solutionId: string;
  resultEn: string;
  resultId: string;
  technologies: string[];
  duration: string;
  client: string;
  platform: string;
}

export const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the project by ID
  const project = portfolioData.projects.find(
    (p) => p.id === parseInt(id || "0"),
  ) as ProjectData | undefined;

  if (!project) {
    return (
      <div className="min-h-screen gradient-mesh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-[#1d97c1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#187ea0] transition-all"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const title = lang === "en" ? project.titleEn : project.titleId;
  const category = lang === "en" ? project.categoryEn : project.categoryId;
  const description =
    lang === "en" ? project.descriptionEn : project.descriptionId;
  const background =
    lang === "en" ? project.backgroundEn : project.backgroundId;
  const solution = lang === "en" ? project.solutionEn : project.solutionId;
  const result = lang === "en" ? project.resultEn : project.resultId;

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/portfolio")}
            className="flex items-center gap-2 text-slate-600 hover:text-[#1d97c1] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">
              {lang === "en" ? "Back to Portfolio" : "Kembali ke Portofolio"}
            </span>
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[#1d97c1] font-bold text-sm uppercase tracking-wide">
                {category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">{project.year}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-heading">
              {title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Project Image */}
          <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img
              src={project.image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
              <Calendar className="w-6 h-6 text-[#1d97c1] mb-3" />
              <p className="text-sm text-slate-500 mb-1">
                {lang === "en" ? "Year" : "Tahun"}
              </p>
              <p className="font-bold text-slate-900">{project.year}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
              <Clock className="w-6 h-6 text-[#1d97c1] mb-3" />
              <p className="text-sm text-slate-500 mb-1">
                {lang === "en" ? "Duration" : "Durasi"}
              </p>
              <p className="font-bold text-slate-900">{project.duration}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
              <Laptop className="w-6 h-6 text-[#1d97c1] mb-3" />
              <p className="text-sm text-slate-500 mb-1">
                {lang === "en" ? "Platform" : "Platform"}
              </p>
              <p className="font-bold text-slate-900">{project.platform}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
              <MessageSquare className="w-6 h-6 text-[#1d97c1] mb-3" />
              <p className="text-sm text-slate-500 mb-1">
                {lang === "en" ? "Client" : "Klien"}
              </p>
              <p className="font-bold text-slate-900">{project.client}</p>
            </div>
          </div>

          {/* Background Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
              {lang === "en"
                ? "Background & Challenge"
                : "Latar Belakang & Tantangan"}
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200">
              <p className="text-lg text-slate-700 leading-relaxed">
                {background}
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
              {lang === "en" ? "Our Solution" : "Solusi Kami"}
            </h2>
            <div className="bg-gradient-to-br from-[#1d97c1]/10 to-[#66d9ef]/10 rounded-3xl p-8 border border-[#1d97c1]/20">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {solution}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  {lang === "en"
                    ? "Technologies Used:"
                    : "Teknologi yang Digunakan:"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              {lang === "en" ? "Results & Impact" : "Hasil & Dampak"}
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <p className="text-lg text-slate-700 leading-relaxed">{result}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-16">
            <h3 className="font-bold text-slate-900 mb-4">
              {lang === "en" ? "Project Tags:" : "Tag Proyek:"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              {lang === "en"
                ? "Ready to Start Your Project?"
                : "Siap Memulai Proyek Anda?"}
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              {lang === "en"
                ? "Let's build something amazing together. Contact us today for a free consultation."
                : "Mari kita bangun sesuatu yang luar biasa bersama. Hubungi kami hari ini untuk konsultasi gratis."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#cta"
                className="bg-[#1d97c1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#187ea0] transition-all inline-flex items-center justify-center gap-2"
              >
                {lang === "en" ? "Get Started" : "Mulai Sekarang"}
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-2"
                >
                  {lang === "en" ? "View Live Project" : "Lihat Proyek Live"}
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
