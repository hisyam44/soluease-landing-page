import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_NUMBER = "62881080516115";

export const ChatAssistant: React.FC = () => {
  const { lang, t } = useLanguage();

  const presetMessage =
    lang === "en"
      ? "Hi Soluease! I'd like to discuss a project."
      : "Hai Soluease! Saya ingin diskusi soal proyek.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(presetMessage)}`;

  const ctaText = lang === "en" ? "Chat on WhatsApp" : "Chat via WhatsApp";

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-4 bg-[#1d97c1] text-white rounded-full shadow-2xl px-5 py-3 hover:scale-105 transition-transform active:scale-95"
      >
        <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div className="text-left">
          <div className="font-bold text-base">{ctaText}</div>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
            <span>{t.chat.online}</span>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};
