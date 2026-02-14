import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Copy, Check } from "lucide-react";

const BrandGuidelines: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string, colorCode: string) => {
    navigator.clipboard.writeText(colorCode);
    setCopiedColor(colorCode);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      name: "Primary Cyan",
      code: "#1d97c1",
      usage: "Main brand color, CTAs, accents",
    },
    { name: "Slate 900", code: "#0f172a", usage: "Text, headings" },
    { name: "Slate 600", code: "#475569", usage: "Body text, descriptions" },
    { name: "Slate 50", code: "#f8fafc", usage: "Background, surfaces" },
    { name: "Slate 100", code: "#f1f5f9", usage: "Cards, sections" },
    { name: "White", code: "#ffffff", usage: "Cards, containers" },
  ];

  const fonts = [
    {
      name: "Plus Jakarta Sans",
      usage: "Body text, descriptions",
      weights: "300, 400, 500, 600, 700",
      link: "https://fonts.google.com/?query=Plus+Jakarta+Sans",
    },
    {
      name: "Space Grotesk",
      usage: "Headings (h1, h2, h3), brand emphasis",
      weights: "300, 400, 500, 600, 700",
      link: "https://fonts.google.com/?query=Space+Grotesk",
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-heading">
              Brand Guidelines
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              This guide documents the visual identity, design principles, and
              brand standards that define Soluease. Use these guidelines to
              maintain consistency across all digital and print materials.
            </p>
          </div>

          {/* Logo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Logo & Wordmark
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <div className="mb-4">
                  <img
                    src="/logo.png"
                    alt="Soluease Logo"
                    className="w-24 h-24 rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-bold text-slate-900">
                    Logo Mark
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Primary mark used in app icons and favicons
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <div className="mb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold tracking-tight text-slate-900 font-heading">
                      Solu<span className="text-[#1d97c1]">ease</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Wordmark</h3>
                  <p className="text-slate-600 text-sm">
                    "Ease" highlighted in primary cyan color
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Logo Usage
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span>
                    Use the logo on a clear background with minimum padding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1d97c1] font-bold mt-1">✓</span>
                  <span>
                    Logo size should maintain aspect ratio (icon is 1:1)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Do not distort, stretch, or skew the logo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Do not change logo colors unless approved</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Color Palette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div
                  key={color.code}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-32 w-full"
                    style={{ backgroundColor: color.code }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {color.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">{color.usage}</p>
                    <button
                      onClick={() => copyToClipboard(color.name, color.code)}
                      className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 p-3 rounded-lg font-mono text-sm font-semibold text-slate-900 transition-colors"
                    >
                      {color.code}
                      {copiedColor === color.code ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Theme Color
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>Meta Theme Color:</strong> #1d97c1 (used in browser
                chrome, status bars)
              </p>
              <p className="text-slate-600">
                <strong>Selection Color:</strong> Primary cyan (#1d97c1) text on
                white background
              </p>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Typography
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {fonts.map((font) => (
                <div
                  key={font.name}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2 font-heading">
                    {font.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{font.usage}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-500 mb-2">
                      Available Weights
                    </p>
                    <p className="text-slate-900 font-semibold">
                      {font.weights}
                    </p>
                  </div>
                  <a
                    href={font.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d97c1] hover:text-[#167da1] font-bold text-sm transition-colors"
                  >
                    View on Google Fonts →
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Typographic Hierarchy
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2">
                    H1 - Page Heading
                  </p>
                  <h1 className="text-5xl font-bold font-heading text-slate-900">
                    Simplifying Technology
                  </h1>
                  <p className="text-sm text-slate-600 mt-2">
                    48-56px, Bold, Space Grotesk
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2">
                    H2 - Section Heading
                  </p>
                  <h2 className="text-3xl font-bold font-heading text-slate-900">
                    Solutions We Master
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">
                    30-36px, Bold, Space Grotesk
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2">
                    Body Text
                  </p>
                  <p className="text-base text-slate-600">
                    Soluease transforms complex business challenges into
                    intuitive digital solutions.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    16px, Regular, Plus Jakarta Sans
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2">
                    Small Text / Caption
                  </p>
                  <p className="text-sm text-slate-600">
                    Last updated: February 12, 2026
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    12-14px, Regular, Plus Jakarta Sans
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Elements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Design Elements & Components
            </h2>

            <div className="space-y-8">
              {/* Rounded Corners */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Rounded Corners
                </h3>
                <p className="text-slate-600 mb-6">
                  All interactive elements and cards use consistent border
                  radius for a friendly, modern appearance.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-lg bg-slate-100 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-600">
                      rounded-lg (8px)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-100 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-600">
                      rounded-2xl (16px)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-3xl bg-slate-100 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-600">
                      rounded-3xl (24px)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-100 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-600">
                      rounded-full (50%)
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Button Styles
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-3">
                      Primary Button
                    </p>
                    <button className="bg-[#1d97c1] hover:bg-[#167da1] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/20">
                      Get Started
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-3">
                      Secondary Button
                    </p>
                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-all">
                      Learn More
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-3">
                      Text Link
                    </p>
                    <a
                      href="#"
                      className="text-[#1d97c1] hover:text-[#167da1] font-bold transition-colors"
                    >
                      Explore More →
                    </a>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Card Component
                </h3>
                <p className="text-slate-600 mb-6">
                  Service and portfolio cards use white backgrounds with subtle
                  borders and hover effects.
                </p>
                <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#1d97c1]/20 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
                    Web Development
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Custom enterprise platforms and responsive landing pages
                    built with modern frameworks.
                  </p>
                  <a
                    href="#"
                    className="text-[#1d97c1] font-bold flex items-center gap-2 group/btn"
                  >
                    Learn More
                    <span className="w-6 h-0.5 bg-[#1d97c1] scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                  </a>
                </div>
              </div>

              {/* Shadows & Glows */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Shadows & Effects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-4">
                      Glow Effect
                    </p>
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <button className="bg-[#1d97c1] hover:bg-[#167da1] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-cyan-500/20 transition-all">
                        Glowing Button
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 mt-3">
                      box-shadow: 0 0 20px rgba(29, 151, 193, 0.3);
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-4">
                      Card Shadow
                    </p>
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                        Card with shadow
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mt-3">
                      Subtle shadow for depth and elevation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background & Mesh */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Background Patterns
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Gradient Mesh
              </h3>
              <p className="text-slate-600 mb-6">
                The default page background uses a subtle gradient mesh pattern
                with primary cyan accents for visual interest.
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-100 mb-6">
                <div className="gradient-mesh p-12 text-center">
                  <p className="text-slate-600 font-semibold">
                    Gradient Mesh Background (f8fafc base with cyan radials)
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                <code>{`background-color: #f8fafc;
background-image:
  radial-gradient(at 0% 0%, rgba(29, 151, 193, 0.1) 0px, transparent 50%),
  radial-gradient(at 100% 100%, rgba(29, 151, 193, 0.05) 0px, transparent 50%);`}</code>
              </div>
            </div>
          </section>

          {/* Spacing & Layout */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Spacing & Layout
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Spacing Scale
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-8 bg-[#1d97c1] rounded" />
                    <span className="text-sm font-semibold text-slate-600">
                      32px (section padding)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-8 bg-[#1d97c1] rounded" />
                    <span className="text-sm font-semibold text-slate-600">
                      24px (component spacing)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-[#1d97c1] rounded" />
                    <span className="text-sm font-semibold text-slate-600">
                      16px (internal padding)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-[#1d97c1] rounded" />
                    <span className="text-sm font-semibold text-slate-600">
                      8px (small spacing)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Responsive Breakpoints
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-600">
                    <span className="font-semibold">sm:</span> 640px
                  </p>
                  <p className="text-slate-600">
                    <span className="font-semibold">md:</span> 768px
                  </p>
                  <p className="text-slate-600">
                    <span className="font-semibold">lg:</span> 1024px
                  </p>
                  <p className="text-slate-600">
                    <span className="font-semibold">xl:</span> 1280px
                  </p>
                  <p className="text-slate-600 mt-4">
                    Max content width: 1280px
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Voice */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Brand Voice & Tone
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Who We Are
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>✓ Innovative software house from Batam, Indonesia</li>
                    <li>✓ Focused on simplicity and ease of use</li>
                    <li>✓ Experts in web, mobile, and custom solutions</li>
                    <li>✓ Reliable, professional, and forward-thinking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    How We Communicate
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>✓ Clear, concise, and jargon-free language</li>
                    <li>✓ Confident but approachable tone</li>
                    <li>✓ Focus on benefits, not features</li>
                    <li>✓ Authentic and human-centered approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Accessibility Standards
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                WCAG 2.1 Compliance
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  <span className="font-semibold">Color Contrast:</span> Minimum
                  4.5:1 ratio for normal text, 3:1 for large text
                </p>
                <p>
                  <span className="font-semibold">Text Sizing:</span> Use
                  relative units (rem) for responsive scaling
                </p>
                <p>
                  <span className="font-semibold">Focus States:</span> All
                  interactive elements have clear focus indicators
                </p>
                <p>
                  <span className="font-semibold">Semantic HTML:</span> Proper
                  heading hierarchy and landmark regions
                </p>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">
              Do's and Don'ts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  ✓ Do's
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>
                      Use the primary cyan color for key actions and accents
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Maintain consistent spacing and rounded corners</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>
                      Use Space Grotesk for headings and Plus Jakarta Sans for
                      body
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Test with proper color contrast ratios</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>
                      Use hover and transition effects for interactivity
                      feedback
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  ✗ Don'ts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Don't modify or distort the logo</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Don't use unauthorized color variations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Don't mix fonts inconsistently</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Don't ignore responsive design requirements</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Don't compromise accessibility standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <section className="bg-gradient-to-r from-[#1d97c1]/10 to-cyan-100/10 rounded-3xl p-8 border border-[#1d97c1]/20">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Questions About Our Brand?
            </h3>
            <p className="text-slate-600 mb-4">
              For brand asset requests, logo usage, or clarification on these
              guidelines, contact our team.
            </p>
            <a
              href="#contact"
              className="text-[#1d97c1] font-bold hover:text-[#167da1] transition-colors"
            >
              Get in Touch →
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandGuidelines;
