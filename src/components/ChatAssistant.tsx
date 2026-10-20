import React, { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { getIsOpenNow, buildWhatsAppLink } from '../utils/businessLogic.ts';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  quickAction?: {
    type: 'whatsapp' | 'call' | 'directions' | 'services';
    label: string;
    url?: string;
  };
}

export const ChatAssistant: React.FC = () => {
  // ===========================================================================
  // HOW TO CONNECT A REAL AI BACKEND LATER:
  // 1. Set up an Express endpoint `/api/chat` that takes `{ prompt, history }`.
  // 2. Initialize Gemini API via Google GenAI SDK with system instruction
  //    grounded strictly in `SITE_CONFIG` facts.
  // 3. Replace `generateScriptedReply` below with a `fetch('/api/chat', ...)` call.
  // ===========================================================================

  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: `Hello, gorgeous! Welcome to Make Me Beauty Place (Demo Assistant). How can I assist you with your beauty plans today?`,
    },
  ]);

  const quickChips = [
    'What services do you offer?',
    'How do I book?',
    'Where are you?',
    'Are you open now?',
  ];

  const generateScriptedReply = (query: string): ChatMessage => {
    const q = query.toLowerCase();

    if (q.includes('service') || q.includes('offer') || q.includes('hair') || q.includes('makeup') || q.includes('nail')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `We offer full-service beauty: Makeup & Bridal Glam, Knotless Braids, Custom Wig Installs, Acrylic & Gel Nails, Lashes & Brows, and Melanin Glow Facials. All prices depend on your desired look and are confirmed on request!`,
        quickAction: {
          type: 'whatsapp',
          label: 'Chat Services on WhatsApp',
          url: buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hello, please send me details and pricing for your services.'),
        },
      };
    }

    if (q.includes('book') || q.includes('appointment') || q.includes('reserve') || q.includes('slot')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Booking is swift and easy! The fastest way is directly on WhatsApp with our front desk, or give us a quick call at ${SITE_CONFIG.PHONE}.`,
        quickAction: {
          type: 'whatsapp',
          label: 'Book Now on WhatsApp',
          url: buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hello Make Me Beauty Place, I would like to book an appointment.'),
        },
      };
    }

    if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('bode thomas') || q.includes('surulere')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `We are located at ${SITE_CONFIG.ADDRESS} (Plus Code: ${SITE_CONFIG.PLUS_CODE}). Right on Bode Thomas Street in Surulere, Lagos!`,
        quickAction: {
          type: 'directions',
          label: 'Open in Google Maps',
          url: SITE_CONFIG.GOOGLE_MAPS_LINK,
        },
      };
    }

    if (q.includes('open') || q.includes('hours') || q.includes('close') || q.includes('time')) {
      const live = getIsOpenNow(SITE_CONFIG.HOURS);
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Status: ${live.statusBadge} (${live.detailText}). Our listing shows we close at 7:00 PM. Please chat with us on WhatsApp or call ${SITE_CONFIG.PHONE} to reconfirm today's exact hours!`,
        quickAction: {
          type: 'call',
          label: `Call ${SITE_CONFIG.PHONE}`,
          url: `tel:${SITE_CONFIG.PHONE_RAW}`,
        },
      };
    }

    // Default respectful response
    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `Thank you for your question! Because this is a demo assistant, for exact pricing, stylist availability, or immediate confirmations, please chat directly with our team on WhatsApp or call ${SITE_CONFIG.PHONE}.`,
      quickAction: {
        type: 'whatsapp',
        label: 'Chat with Team on WhatsApp',
        url: buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, `Hello Make Me Beauty Place, I have a question: ${query}`),
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      const reply = generateScriptedReply(text);
      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  return (
    <>
      {/* Trigger Button (Desktop & Tablet) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white border border-[#D9A38F]/50 shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        aria-label="Open Make Me Assistant"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8B84A] flex items-center justify-center text-white">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <span className="text-xs font-serif font-bold text-white block leading-tight">
            Make Me Assistant
          </span>
          <span className="text-[10px] text-[#D9A38F] block">
            Demo Assistant • Click to Ask
          </span>
        </div>
      </button>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div 
          className="fixed bottom-4 left-4 sm:bottom-20 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#D9A38F]/50 flex flex-col overflow-hidden max-h-[520px] animate-in slide-in-from-bottom-5 duration-200"
          role="dialog"
          aria-label="Make Me Assistant Chat"
        >
          {/* Header */}
          <div className="bg-[#3E0F2B] text-white p-4 flex items-center justify-between border-b border-[#D9A38F]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8B84A] p-0.5">
                <div className="w-full h-full bg-[#3E0F2B] rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#E8B84A]" />
                </div>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">
                  Make Me Assistant
                </h4>
                <span className="text-[10px] text-[#D9A38F] uppercase tracking-wider font-semibold">
                  Demo assistant • Verified Info
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFF8F4] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#C2185B] text-white rounded-tr-none'
                      : 'bg-white text-[#2A1822] border border-[#D9A38F]/30 shadow-xs rounded-tl-none'
                  }`}
                >
                  <p>{m.text}</p>
                </div>

                {/* Quick Action Button if returned */}
                {m.quickAction && (
                  <div className="mt-1.5">
                    <a
                      href={m.quickAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3E0F2B] hover:bg-[#5A1A3F] text-[#D9A38F] font-bold text-[11px] shadow-sm transition-all"
                    >
                      {m.quickAction.type === 'whatsapp' && <MessageCircle className="w-3 h-3 text-[#25D366] fill-current" />}
                      {m.quickAction.type === 'call' && <Phone className="w-3 h-3 text-[#E8B84A]" />}
                      {m.quickAction.type === 'directions' && <MapPin className="w-3 h-3 text-[#E8458B]" />}
                      <span>{m.quickAction.label}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Chips */}
          <div className="p-2 bg-white border-t border-[#D9A38F]/20 flex flex-wrap gap-1.5">
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-[#FBE9EC] hover:bg-[#C2185B] hover:text-white text-[#3E0F2B] text-[10px] font-semibold transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#D9A38F]/20 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 rounded-xl border border-[#D9A38F]/40 focus:outline-none focus:ring-1 focus:ring-[#C2185B] text-xs bg-[#FFF8F4]"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-xl bg-[#C2185B] hover:bg-[#d41c66] text-white flex items-center justify-center transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
