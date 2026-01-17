import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ExternalLink, Tag, Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const PortfolioPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allProjects = [
    {
      id: 1,
      title:
        lang === "en" ? "Eventeevo Mobile App" : "Eventeevo Aplikasi Mobile",
      category: lang === "en" ? "Mobile Apps" : "Aplikasi Mobile",
      image: "https://app.soluease.com/uploads/Frame_19_1_7c41d144b1.png",
      tags: ["Mobile Apps", "Google Play Store", "Apple Store"],
      description:
        "A comprehensive mobile application for event management, enabling users to discover, create, and manage events seamlessly.",
      year: "2024",
      link: "https://eventeevo.com",
    },
    {
      id: 2,
      title: "ChatReply Desktop App",
      category: lang === "en" ? "Desktop Apps" : "Aplikasi Desktop",
      image: "https://app.soluease.com/uploads/chatreply_41bedff4b4.png",
      tags: ["Desktop Apps", "AI", "Cross-Platform"],
      description:
        "An intelligent desktop application powered by AI for smart and efficient communication. ChatReply helps streamline your messaging workflow.",
      year: "2024",
      link: "https://soluease.gumroad.com/l/ChatReplyAI",
    },
    {
      id: 3,
      title: "Witch vs Zombies Game",
      category: lang === "en" ? "Gamification" : "Gamifikasi",
      image: "https://app.soluease.com/uploads/Frame_20_1_3bb7719694.png",
      tags: ["Gamification", "Mobile Apps", "Unity"],
      description:
        "An engaging mobile game built with Unity, featuring action-packed gameplay with witches battling zombies. Available on Google Play Store.",
      year: "2024",
      link: "https://play.google.com/store/apps/details?id=com.Soluease.WitchVsZombie&hl=en",
    },
  ];

  const categories = [
    "all",
    lang === "en" ? "Mobile Apps" : "Aplikasi Mobile",
    lang === "en" ? "Desktop Apps" : "Aplikasi Desktop",
    lang === "en" ? "Gamification" : "Gamifikasi",
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-heading">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Explore our collection of successful projects across diverse
              industries and technologies. Each project represents our
              commitment to delivering innovative solutions that drive real
              business impact.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#1d97c1] transition-colors bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-[#1d97c1] text-white shadow-lg shadow-cyan-500/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-sm text-slate-600">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="w-full">
                        <p className="text-cyan-400 text-sm font-bold mb-1">
                          {project.year}
                        </p>
                        <p className="text-cyan-300 text-sm font-semibold">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-[#1d97c1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3 py-1 bg-cyan-50 text-[#1d97c1] rounded-full border border-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1d97c1] font-bold hover:gap-4 transition-all"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-slate-600 text-lg">
                  No projects found matching your search criteria.
                </p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="text-4xl font-bold text-[#1d97c1] mb-2">
                {allProjects.length}+
              </div>
              <p className="text-slate-600 font-semibold">Projects Completed</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="text-4xl font-bold text-[#1d97c1] mb-2">10+</div>
              <p className="text-slate-600 font-semibold">Industries Served</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="text-4xl font-bold text-[#1d97c1] mb-2">98%</div>
              <p className="text-slate-600 font-semibold">
                Client Satisfaction
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="text-4xl font-bold text-[#1d97c1] mb-2">5+</div>
              <p className="text-slate-600 font-semibold">Team Members</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-[#1d97c1] to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-cyan-500/20">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Have a Project in Mind?
            </h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and how we can help you achieve
              your business goals with innovative technology solutions.
            </p>
            <a
              href="mailto:soluease@gmail.com"
              className="inline-block bg-white text-[#1d97c1] hover:bg-cyan-50 px-10 py-4 rounded-2xl font-bold transition-all"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
