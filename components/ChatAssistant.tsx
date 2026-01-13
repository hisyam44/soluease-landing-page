
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hi! I'm SoluBot. How can Soluease help you find 'ease' in your digital journey today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || loading) return;
    
    const userMsg = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are SoluBot, an AI assistant for Soluease, a software house in Batam, Indonesia. Your mission is to explain how Soluease makes tech easy. Be friendly, professional, and highlight our Batam roots. Keep responses concise.",
        }
      });
      
      const botResponse = response.text || "I'm sorry, I'm having trouble connecting right now. Let me find a human for you!";
      setChatHistory(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'bot', text: "Error connecting to server. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#1d97c1] p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">SoluBot</h4>
                <div className="flex items-center gap-1.5 text-xs text-cyan-50">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online - Always Easy
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#1d97c1] text-white rounded-tr-none shadow-lg shadow-cyan-500/10' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#1d97c1] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#1d97c1] rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[#1d97c1] rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1d97c1] outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-[#1d97c1] text-white p-3 rounded-xl hover:bg-[#167da1] transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1d97c1] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
          <div className="absolute right-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need help? Let's talk!
          </div>
        </button>
      )}
    </div>
  );
};
