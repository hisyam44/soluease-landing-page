import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export const PrivacyPolicy: React.FC = () => {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-heading">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Soluease ("we", "us", "our", or "Company") operates the Soluease
                website. This page informs you of our policies regarding the
                collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                2. Information Collection and Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Types of Data Collected:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>
                      Personal identification information (name, email address,
                      phone number)
                    </li>
                    <li>
                      Usage data (pages visited, time spent, referring URLs)
                    </li>
                    <li>
                      Device information (browser type, operating system, IP
                      address)
                    </li>
                    <li>Communication data when you contact us</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Use of Data */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                3. Use of Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Soluease uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                  To allow you to participate in interactive features of our
                  Service
                </li>
                <li>To provide customer care and support</li>
                <li>
                  To gather analysis or valuable information to improve our
                  Service
                </li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                4. Security of Data
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                5. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "effective date" at the top of this
                Privacy Policy.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                6. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
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

export default PrivacyPolicy;
