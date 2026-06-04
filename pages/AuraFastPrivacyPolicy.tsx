import React from "react";
import { ShieldCheck, TimerReset } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const AuraFastPrivacyPolicy: React.FC = () => {
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
              {/* <TimerReset size={20} /> */}
              <img
                src="/aurafast-icon.png"
                alt="AuraFast Icon"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-2">
                AuraFast
              </p>
              <p className="text-xs text-slate-500">
                A local-first intermittent fasting tracker for Android
              </p>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-heading mt-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">Last updated: June 4, 2026</p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy describes how AuraFast handles information
                when you use the Android application. AuraFast is a local-first
                intermittent fasting tracker, and your fasting data is stored on
                your device rather than on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                2. Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Data stored locally on your device
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Fasting schedules, timer progress, and history</li>
                    <li>App preferences and settings</li>
                    <li>Pro upgrade status stored on the device</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Data from third-party services
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    AuraFast uses Google AdMob to display ads in the free
                    version of the app. AdMob and Google may collect device and
                    usage information according to their own privacy practices,
                    including device identifiers, ad interactions, approximate
                    location, and diagnostic data. If you purchase AuraFast Pro
                    to remove ads, Google Play Billing processes the purchase
                    and may receive transaction data needed to complete and
                    restore the order.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                3. How We Use Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use information only to operate and improve AuraFast,
                including to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Provide fasting timer and tracking features</li>
                <li>Store your preferences locally on the device</li>
                <li>Show and measure ads in the free version</li>
                <li>Verify and restore Pro purchases</li>
                <li>Maintain app performance and fix bugs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                4. Storage and Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Your fasting data is stored locally on your device. We do not
                maintain a cloud copy of your fasting history. If you delete the
                app or clear its data, local information may be removed from the
                device. Pro entitlements may be restored through your Google
                Play account.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                5. Third-Party Services
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-slate-900"
                    size={18}
                  />
                  <p>Google AdMob for advertising in the free version.</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-slate-900"
                    size={18}
                  />
                  <p>
                    Google Play Billing for Pro purchases and entitlement
                    checks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-slate-900"
                    size={18}
                  />
                  <p>
                    Google Play Services and related Android services as needed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                6. Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use reasonable safeguards to protect the app and its local
                data. However, no method of storage or transmission is fully
                secure, and the security of your device also affects the safety
                of your information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                AuraFast is not directed to children under 13, and we do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                9. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions about AuraFast or this Privacy Policy,
                contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <p className="text-slate-700 font-semibold">Soluease</p>
                <p className="text-slate-600">Email: hello@soluease.com</p>
                <p className="text-slate-600">Phone: +62 881-0805-16115</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuraFastPrivacyPolicy;
