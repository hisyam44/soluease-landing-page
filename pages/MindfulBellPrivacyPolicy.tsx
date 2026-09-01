import React from "react";
import { ShieldCheck, Bot, Bell } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MindfulBellPrivacyPolicy: React.FC = () => {
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
                src="/mindfulbell-icon.png"
                alt="Mindful Bell Icon"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-2">
                Mindful Bell
              </p>
              <p className="text-xs text-slate-500">
                A local-first meditation bell & interval timer for Android
              </p>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-heading mt-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: September 1, 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy describes how Mindful Bell handles
                information when you use our Android application. Mindful Bell
                is designed as a no-account, local-first application. We do not
                maintain user accounts, login systems, or external databases to
                store your personal data or timer settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                2. Information We Process
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Data Stored Locally on Your Device
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>
                      Timer intervals, sound preferences, and practice presets
                    </li>
                    <li>Application settings and local state</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    AI Chatbot & Ephemeral Data Processing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Mindful Bell includes an AI assistant feature to answer
                    questions about meditation and mindfulness. When you
                    interact with the chatbot, your typed messages (text
                    prompts) are transmitted directly to the Google Gemini API
                    to generate real-time responses.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 mt-2">
                    <li>
                      <strong>No Local or Remote Database Storage:</strong> Your
                      chat messages are processed ephemerally solely to generate
                      an immediate answer. We do not save your conversation
                      history on any external servers.
                    </li>
                    <li>
                      <strong>No Account Association:</strong> Because Mindful
                      Bell requires no login, chat prompts are not linked to
                      your identity or personal profile.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                3. How We Use Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Information is processed strictly to deliver core app
                capabilities, including to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>
                  Run meditation interval timers and play requested chime sounds
                  locally
                </li>
                <li>Store your custom sound preferences on your device</li>
                <li>
                  Send text queries to Google Gemini API to return AI assistance
                </li>
                <li>Maintain application stability and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                4. Data Storage and Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Your application preferences and timer configurations reside
                entirely on your local device storage. We do not host remote
                servers to back up or retain your information. Clearing the
                application data or uninstalling Mindful Bell will delete all
                stored local settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                5. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We rely on third-party service providers to power specific app
                functionalities:
              </p>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 shrink-0 text-slate-900" size={18} />
                  <p>
                    <strong>Google Gemini API:</strong> Processes your AI
                    chatbot questions ephemerally to generate helpful
                    mindfulness responses in real time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-slate-900"
                    size={18}
                  />
                  <p>
                    <strong>Google Play Services:</strong> Used as necessary for
                    Android platform compatibility and core operating system
                    features.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                6. Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We take reasonable measures to ensure API communications between
                the application and Google Gemini services are securely
                encrypted in transit using standard HTTPS/TLS encryption.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mindful Bell is not directed to children under the age of 13,
                and we do not knowingly collect personal information from
                children.
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
                If you have questions regarding Mindful Bell or this Privacy
                Policy, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <p className="text-slate-700 font-semibold">
                  Mindful Bell Support
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

export default MindfulBellPrivacyPolicy;
