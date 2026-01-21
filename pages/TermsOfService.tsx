import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export const TermsOfService: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using the Soluease website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                2. Use License
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Soluease for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>
                  Attempting to decompile or reverse engineer any software
                  contained on Soluease
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                3. Disclaimer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The materials on Soluease are provided on an 'as is' basis.
                Soluease makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                4. Limitations
              </h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall Soluease or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Soluease, even if
                Soluease or an authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                5. Accuracy of Materials
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The materials appearing on Soluease could include technical,
                typographical, or photographic errors. Soluease does not warrant
                that any of the materials on our website are accurate, complete,
                or current. Soluease may make changes to the materials contained
                on our website at any time without notice.
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                6. Links
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Soluease has not reviewed all of the sites linked to our website
                and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by Soluease
                of the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                7. Modifications
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Soluease may revise these terms of service for our website at
                any time without notice. By using this website you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                8. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of Indonesia, and you irrevocably
                submit to the exclusive jurisdiction of the courts in that
                location.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
                9. Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <p className="text-slate-700 font-semibold">Soluease</p>
                <p className="text-slate-600">Email: soluease@gmail.com</p>
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

export default TermsOfService;
