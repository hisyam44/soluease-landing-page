import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import {
  Zap,
  Layout,
  Smile,
  Heart,
  Shield,
  Users,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Star,
} from "lucide-react";

export const ValuesPage: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreValues = [
    {
      icon: Zap,
      title: "Simplicity First",
      desc: "We believe in the power of simplicity. Complex problems deserve elegant solutions that are easy to understand and use.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Heart,
      title: "Client Success",
      desc: "Your growth is our mission. We measure our success by the tangible results we deliver to your business.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      desc: "We never compromise on quality. Every line of code is crafted with care, tested thoroughly, and built to last.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Great software is built together. We work as an extension of your team, fostering open communication.",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      desc: "Technology never stands still, and neither do we. We constantly explore new tools and techniques.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "Transparency",
      desc: "Clear communication, honest timelines, and no hidden surprises. You always know where your project stands.",
      color: "from-cyan-400 to-teal-500",
      bgColor: "bg-cyan-50",
    },
  ];

  const principles = [
    "Code with purpose—every feature must add real value",
    "Design for humans, not just for machines",
    "Test early, test often, deliver with confidence",
    "Embrace feedback and iterate quickly",
    "Build for today, architect for tomorrow",
    "Celebrate wins together, learn from setbacks",
  ];

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-cyan-100 text-[#1d97c1] px-6 py-2 rounded-full text-sm font-semibold">
                Our Core Beliefs
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-heading">
              Values That Drive{" "}
              <span className="text-[#1d97c1]">Everything We Do</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Soluease, our values aren't just words on a wall—they're the
              foundation of every project we undertake and every relationship we
              build.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://app.soluease.com/uploads/soluease_section_1_75c7632689.png"
                alt="Digital Collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                <div className="p-8 lg:p-12 text-white">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                    Building With Purpose
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl">
                    Every decision we make is guided by principles that
                    prioritize excellence, integrity, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-heading">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center font-heading">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              These principles guide our daily work and decision-making,
              ensuring we consistently deliver exceptional results.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1d97c1] rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters Section */}
          <div className="bg-gradient-to-br from-[#1d97c1] to-cyan-600 rounded-3xl p-8 lg:p-12 text-white mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-12 h-12 text-yellow-300" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-center font-heading">
                Why Our Values Matter
              </h2>
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  In the fast-paced world of software development, it's easy to
                  cut corners or chase the next trend. But we believe that
                  lasting success comes from staying true to core principles.
                </p>
                <p>
                  Our values ensure that whether you're a startup founder or an
                  enterprise decision-maker, you can trust us to deliver not
                  just code, but solutions that genuinely solve your problems.
                </p>
                <p>
                  When you work with Soluease, you're partnering with a team
                  that puts integrity, quality, and your success above all else.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-50 rounded-3xl p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Ready to Work With a Team That Shares Your Values?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our commitment to excellence can help bring your
              digital vision to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/#contact"
                className="bg-[#1d97c1] text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors border-2 border-slate-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ValuesPage;
