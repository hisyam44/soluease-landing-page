import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import {
  Users,
  Target,
  Award,
  MapPin,
  Calendar,
  Lightbulb,
} from "lucide-react";

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              About <span className="text-[#1d97c1]">Soluease</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're a Batam-based software house dedicated to simplifying
              technology and creating digital solutions that just work.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 mb-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Founded in the vibrant city of Batam, Soluease emerged from
                    a simple yet powerful vision: to make technology accessible
                    and effortless for businesses of all sizes.
                  </p>
                  <p>
                    Our journey began with a team of passionate developers who
                    believed that great software shouldn't be complicated.
                    Today, we've grown into a full-service software house,
                    serving clients across Indonesia and beyond.
                  </p>
                  <p>
                    What sets us apart is our unwavering commitment to
                    simplicity, quality, and client success. We don't just build
                    software—we craft experiences that empower businesses to
                    thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-10 border border-cyan-100">
              <div className="w-16 h-16 bg-[#1d97c1] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                Our Mission
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To deliver innovative, user-friendly digital solutions that
                simplify complex business challenges and drive measurable
                results for our clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-10 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                Our Vision
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To become Indonesia's most trusted software house, recognized
                for transforming businesses through elegant technology and
                exceptional service.
              </p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-heading">
              Soluease by the Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#1d97c1]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1d97c1] mb-2">
                  Batam
                </h3>
                <p className="text-slate-600">Based in Indonesia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#1d97c1]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1d97c1] mb-2">50+</h3>
                <p className="text-slate-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#1d97c1]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1d97c1] mb-2">100%</h3>
                <p className="text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center font-heading">
              Why Choose Soluease?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Expert Team",
                  desc: "Skilled developers with expertise across modern tech stacks",
                },
                {
                  title: "Client-Focused",
                  desc: "Your success is our success—we're with you every step",
                },
                {
                  title: "Agile Process",
                  desc: "Fast iterations, transparent communication, on-time delivery",
                },
                {
                  title: "Quality Assured",
                  desc: "Rigorous testing and code reviews for bulletproof software",
                },
                {
                  title: "Future-Proof",
                  desc: "Scalable architecture that grows with your business",
                },
                {
                  title: "Local Advantage",
                  desc: "Batam-based with deep understanding of regional markets",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
