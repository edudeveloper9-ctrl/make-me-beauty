import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Instagram, 
  Facebook, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A0A1C] text-white pt-16 pb-24 md:pb-12 border-t border-[#D9A38F]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D9A38F]/20">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8B84A] p-[2px]">
                <div className="w-full h-full bg-[#3E0F2B] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E8B84A]" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Make Me
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-[0.25em] text-[#D9A38F]">
                  Beauty Place
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#E8B84A]">
              "{SITE_CONFIG.TAGLINE}"
            </p>

            <p className="text-sm text-white/75 leading-relaxed">
              Your premier beauty destination on Bode Thomas Street, Surulere. 
              Celebrating African beauty with world-class artistry, passion, and genuine care.
            </p>

            {/* Social Icons (Rose gold with glow) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 hover:border-[#E8458B] hover:text-[#E8458B] hover:shadow-lg hover:shadow-[#E8458B]/30 text-[#D9A38F] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 hover:border-[#E8458B] hover:text-[#E8458B] hover:shadow-lg hover:shadow-[#E8458B]/30 text-[#D9A38F] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* TikTok placeholder */}
              <a
                href={SITE_CONFIG.SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 hover:border-[#E8458B] hover:text-[#E8458B] hover:shadow-lg hover:shadow-[#E8458B]/30 text-[#D9A38F] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 font-bold text-xs"
                aria-label="TikTok profile"
              >
                TK
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#D9A38F]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Services Menu</a></li>
              <li><a href="#bridal" className="hover:text-[#E8B84A] transition-colors">Bridal & Owambe</a></li>
              <li><a href="#gallery" className="hover:text-[#E8B84A] transition-colors">Hair & Lash Gallery</a></li>
              <li><a href="#about" className="hover:text-[#E8B84A] transition-colors">About Our Studio</a></li>
              <li><a href="#reviews" className="hover:text-[#E8B84A] transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#E8B84A] transition-colors">Salon FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#D9A38F]">
              Speciality Treatments
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Bridal & Red-Carpet Glam</a></li>
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Knotless & Goddess Braids</a></li>
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">HD Lace Frontal Melting</a></li>
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Russian Pedicure & Nails</a></li>
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Melanin Glow Facials</a></li>
              <li><a href="#services" className="hover:text-[#E8B84A] transition-colors">Bespoke Infinity Gele</a></li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#D9A38F]">
              Contact & Visit
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8458B] shrink-0 mt-1" />
                <span>{SITE_CONFIG.ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8B84A] shrink-0" />
                <a href={`tel:${SITE_CONFIG.PHONE_RAW}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A38F] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.EMAIL}
                </a>
              </div>
              <div className="text-xs text-[#D9A38F] pt-1">
                Plus Code: <span className="font-mono text-white">{SITE_CONFIG.PLUS_CODE}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>© 2026 {SITE_CONFIG.BUSINESS_NAME}. All rights reserved. Demo design.</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#D9A38F] transition-colors underline cursor-pointer"
            >
              Privacy Policy & Terms
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5A1A3F] hover:bg-[#C2185B] text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Demo Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 text-[#2A1822]"
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-[#D9A38F] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2 text-[#3E0F2B]">
                <ShieldCheck className="w-5 h-5 text-[#C2185B]" />
                <h3 className="font-serif font-bold text-lg">Privacy Policy & Booking Terms</h3>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-[#2A1822]/80 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              <p>
                <strong>Client Demo Notice:</strong> This privacy document is a placeholder template for <em>Make Me Beauty Place</em>, 44 Bode Thomas St, Surulere, Lagos.
              </p>
              <p>
                <strong>1. Data Collection:</strong> Contact details (Name, Phone number, Email) provided via appointment enquiry forms or WhatsApp chats are used exclusively for scheduling salon services and communicating appointment updates.
              </p>
              <p>
                <strong>2. Payments & Deposits:</strong> Deposits for wedding packages or custom hair installations may be collected via bank transfer, POS, or secure payment gateways (Paystack/Flutterwave). Details will be confirmed upon consultation.
              </p>
              <p>
                <strong>3. Cancellations & Rescheduling:</strong> In consideration of our stylists' time, please provide at least 24 hours advance notice via WhatsApp or phone call if you need to alter your reservation.
              </p>
            </div>

            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="w-full py-3 rounded-xl bg-[#3E0F2B] text-white font-semibold text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
