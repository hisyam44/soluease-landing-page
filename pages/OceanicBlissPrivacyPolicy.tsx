import React from "react";
import { ShieldCheck, Waves } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const OceanicBlissPrivacyPolicy: React.FC = () => {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-slate-200 bg-white/90 p-0 shadow-xl shadow-slate-200/70 backdrop-blur-sm ring-8 ring-white/60 sm:h-28 sm:w-28">
              <img
                src="/oceanicbliss-icon.png"
                alt="Oceanic Bliss Icon"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-2">
                Oceanic Bliss
              </p>
              <p className="text-xs text-slate-500">
                An all-ages jet ski game set across the oceans
              </p>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-heading mt-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: September 29, 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy describes how Oceanic Bliss handles
                information when you play the game. Oceanic Bliss is a jet ski
                game set on the ocean, intended for players of all ages. It
                contains no blood or content intended for adults aged 18 and
                over. The game displays advertisements provided by Google
                AdMob.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                2. Information We Process
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Game Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The game may process information needed to provide gameplay
                    and remember your settings. The specific information stored
                    and how long it is retained can depend on your device and
                    the game version you use.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Advertising Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Oceanic Bliss uses Google AdMob to display ads. In
                    connection with providing and measuring ads, Google and its
                    partners may process information such as device identifiers,
                    IP address, ad interactions, approximate location, and
                    diagnostic information. The information processed can vary
                    based on your device settings, region, and applicable
                    consent choices.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                3. How Information Is Used
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Information may be used to operate the game and show and
                measure advertisements, including to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Provide the jet ski gameplay experience and game settings</li>
                <li>Display and measure ads through Google AdMob</li>
                <li>Help maintain app stability and troubleshoot issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                4. Data Storage and Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Game information may be stored on your device or processed by
                services needed to operate the game and its ads. Retention
                periods depend on the type of information and the service
                processing it. You can manage or clear app data using your
                device settings. Google handles information collected through
                AdMob under its own retention practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                5. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Oceanic Bliss uses the following third-party service:
              </p>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-slate-900"
                    size={18}
                  />
                  <p>
                    <strong>Google AdMob:</strong> Provides advertising and may
                    process information as described above. Google&apos;s
                    handling of information is governed by its own privacy
                    policy and terms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                6. Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use reasonable measures to protect information handled by
                the game. Information transmitted by Google AdMob is subject to
                Google&apos;s security practices. No method of storage or
                transmission can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Oceanic Bliss is designed for players of all ages. Because the
                game includes ads, advertising and data practices may depend on
                applicable child privacy requirements, your region, and the
                app&apos;s consent and advertising settings. Parents and
                guardians can manage device-level privacy and advertising
                settings. Google&apos;s own services are also subject to
                Google&apos;s privacy terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy periodically. Any
                modifications will be posted on this page with an updated
                effective date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                9. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions regarding Oceanic Bliss or this Privacy
                Policy, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <p className="text-slate-700 font-semibold">
                  Oceanic Bliss Support
                </p>
                <p className="text-slate-600">Email: hello@soluease.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OceanicBlissPrivacyPolicy;