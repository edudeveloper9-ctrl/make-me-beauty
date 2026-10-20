import React from 'react';
import { MessageCircle, Phone, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

interface FloatingActionsProps {
  onOpenChat: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenChat }) => {
  const whatsAppUrl = buildWhatsAppLink(
    SITE_CONFIG.WHATSAPP_NUMBER,
    'Hello Make Me Beauty Place, I would like to book an appointment.'
  );

  return (
    <>
      {/* Floating Circular WhatsApp Button (Bottom-Right on desktop and tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        {/* Tooltip Pill */}
        <span className="bg-[#3E0F2B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#D9A38F]/40 animate-fade-in pointer-events-none">
          Book with us ✨
        </span>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (High tap targets for mobile visitors in Lagos) */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#3E0F2B]/95 backdrop-blur-md border-t border-[#D9A38F]/30 p-2 sm:hidden shadow-2xl"
        role="navigation"
        aria-label="Mobile quick actions"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* 1. WhatsApp Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-[#25D366] text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5 fill-current mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* 2. Call Button */}
          <a
            href={`tel:${SITE_CONFIG.PHONE_RAW}`}
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-[#C2185B] text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5 mb-0.5" />
            <span>Call Us</span>
          </a>

          {/* 3. Directions Button */}
          <a
            href={SITE_CONFIG.GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-[#5A1A3F] border border-[#D9A38F]/40 text-[#D9A38F] font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
          >
            <Navigation className="w-5 h-5 text-[#E8B84A] mb-0.5" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </>
  );
};
