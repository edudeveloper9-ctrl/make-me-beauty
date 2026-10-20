import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { getIsOpenNow, buildWhatsAppLink } from '../utils/businessLogic.ts';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(() => getIsOpenNow(SITE_CONFIG.HOURS));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update live open/closed status periodically
    const timer = setInterval(() => {
      setStatus(getIsOpenNow(SITE_CONFIG.HOURS));
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Visit Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside 
        aria-label="Salon announcements"
        className="bg-[#2A0A1C] text-xs text-[#D9A38F] py-2 px-4 border-b border-[#D9A38F]/20 relative z-40 transition-colors"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left info items */}
          <div className="flex items-center flex-wrap gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
              <span className="font-semibold text-white">{status.statusBadge}</span>
              <span className="hidden sm:inline text-white/70">({status.detailText})</span>
            </span>

            <span className="hidden md:inline-block text-[#D9A38F]/40">•</span>

            <span className="hidden md:flex items-center gap-1 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#E8458B]" />
              <span>Surulere, Lagos (Bode Thomas)</span>
            </span>
          </div>

          {/* Right quick contact links */}
          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href={`tel:${SITE_CONFIG.PHONE_RAW}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium text-white/90 focus:outline-none focus:ring-1 focus:ring-[#E8458B] rounded px-1"
              aria-label={`Call salon at ${SITE_CONFIG.PHONE}`}
            >
              <Phone className="w-3 h-3 text-[#E8B84A]" />
              <span>Call: {SITE_CONFIG.PHONE}</span>
            </a>

            <a
              href={buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hello Make Me Beauty Place, I would like to enquire about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8458B] hover:text-[#ff65a3] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3E0F2B]/95 backdrop-blur-md shadow-lg border-b border-[#D9A38F]/30 py-3'
            : 'bg-[#3E0F2B]/90 backdrop-blur-md py-4 border-b border-[#D9A38F]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-none focus:ring-2 focus:ring-[#E8458B] rounded-lg p-1"
            aria-label="Make Me Beauty Place Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C2185B] via-[#E8458B] to-[#E8B84A] p-[2px] shadow-sm flex items-center justify-center">
              <div className="w-full h-full bg-[#3E0F2B] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#E8B84A] group-hover:rotate-12 transition-transform duration-300" />
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-[#E8B84A] transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-[#E8458B] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-[#C2185B] to-[#E8458B] hover:from-[#d11c64] hover:to-[#f0589b] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#E8458B] focus:ring-offset-2 focus:ring-offset-[#3E0F2B]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-[#D9A38F] focus:outline-none focus:ring-2 focus:ring-[#E8458B]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3E0F2B] border-b border-[#D9A38F]/30 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-[#E8B84A] py-2 border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-center bg-gradient-to-r from-[#C2185B] to-[#E8458B] text-white font-bold py-3.5 rounded-xl shadow-lg"
              >
                Book An Appointment
              </button>
              <a
                href={buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hello Make Me Beauty Place, I would like to book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
