import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ChatAssistant } from "./components/ChatAssistant";
import { LanguageProvider } from "./context/LanguageContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PressKit from "./pages/PressKit";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetail from "./pages/PortfolioDetail";
import AboutUs from "./pages/AboutUs";
import ValuesPage from "./pages/ValuesPage";
import BrandGuidelines from "./pages/BrandGuidelines";
import AuraFastPrivacyPolicy from "./pages/AuraFastPrivacyPolicy";
import MindfulBellPrivacyPolicy from "./pages/MindfulBellPrivacyPolicy";

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-mesh overflow-y-auto">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Values />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy/aurafast" element={<AuraFastPrivacyPolicy />} />
          <Route
            path="/privacy/mindfulbell"
            element={<MindfulBellPrivacyPolicy />}
          />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/brand" element={<BrandGuidelines />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
};

export default App;
