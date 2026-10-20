import React from 'react';
import { Star, ArrowRight, Sparkles, ChevronDown, CheckCircle2, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] bg-gradient-to-b from-[#3E0F2B] via-[#4A1333] to-[#3E0F2B] text-white flex items-center overflow-hidden pt-6 pb-16 lg:py-16"
    >
      {/* Decorative Glows & Sparkle Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8458B]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D9A38F]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C2185B]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle floating star sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Sparkles className="absolute top-[18%] left-[8%] w-5 h-5 text-[#E8B84A] opacity-70 animate-float-glow" />
        <Sparkles className="absolute top-[35%] left-[45%] w-4 h-4 text-[#D9A38F] opacity-50 animate-float-glow" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute bottom-[25%] left-[12%] w-6 h-6 text-[#E8458B] opacity-60 animate-float-glow" style={{ animationDelay: '2.5s' }} />
        <Sparkles className="absolute top-[15%] right-[15%] w-5 h-5 text-[#E8B84A] opacity-75 animate-float-glow" style={{ animationDelay: '0.8s' }} />
        <Sparkles className="absolute bottom-[20%] right-[35%] w-4 h-4 text-[#D9A38F] opacity-60 animate-float-glow" style={{ animationDelay: '3.2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A1A3F]/80 border border-[#D9A38F]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E8B84A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A38F]">
                SURULERE, LAGOS
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              Your Beauty. <br className="hidden sm:inline" />
              Your Moment. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A38F] via-[#FBE9EC] to-[#E8B84A] italic">
                Made Perfect.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {SITE_CONFIG.SUB_TAGLINE}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C2185B] via-[#E8458B] to-[#C2185B] hover:from-[#d61b65] hover:to-[#f05398] text-white font-bold text-base shadow-lg shadow-[#C2185B]/40 hover:shadow-xl hover:shadow-[#E8458B]/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#gallery"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-base border border-[#D9A38F]/40 hover:border-[#D9A38F] transition-all duration-200 text-center"
              >
                See Our Work
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-[#D9A38F]/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              {/* Stat 1: Google Rating */}
              <div className="bg-[#5A1A3F]/50 p-3 rounded-xl border border-[#D9A38F]/20">
                <div className="flex items-center gap-1 text-[#E8B84A]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-white text-base">{SITE_CONFIG.RATING}</span>
                  <span className="text-xs text-white/70">/ 5.0</span>
                </div>
                <p className="text-[11px] text-[#D9A38F] font-medium mt-0.5">Google Rating</p>
              </div>

              {/* Stat 2: Verified Reviews */}
              <div className="bg-[#5A1A3F]/50 p-3 rounded-xl border border-[#D9A38F]/20">
                <div className="font-bold text-white text-base">
                  {SITE_CONFIG.TOTAL_REVIEWS}+
                </div>
                <p className="text-[11px] text-[#D9A38F] font-medium mt-0.5">Google Reviews</p>
              </div>

              {/* Stat 3: Location */}
              <div className="bg-[#5A1A3F]/50 p-3 rounded-xl border border-[#D9A38F]/20">
                <div className="font-bold text-white text-base truncate">
                  Bode Thomas
                </div>
                <p className="text-[11px] text-[#D9A38F] font-medium mt-0.5">Surulere, Lagos</p>
              </div>

              {/* Stat 4: WhatsApp Booking */}
              <div className="bg-[#5A1A3F]/50 p-3 rounded-xl border border-[#D9A38F]/20">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-bold text-white text-sm">Swift</span>
                </div>
                <p className="text-[11px] text-[#D9A38F] font-medium mt-0.5">WhatsApp Booking</p>
              </div>
            </div>
          </div>

          {/* Right Column: Arch-Shaped Image Collage & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Behind Arch */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C2185B]/30 to-[#E8B84A]/20 rounded-t-[180px] rounded-b-[40px] transform rotate-1 scale-105 filter blur-lg" />

            {/* Main Arch Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-t-[210px] rounded-b-[36px] overflow-hidden border-2 border-[#D9A38F]/50 shadow-2xl shadow-[#3E0F2B]/90 bg-[#5A1A3F]">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85"
                alt="Flawless glam makeup on melanin-rich skin"
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Glass Badge 1: Bridal Glam */}
            <div className="absolute -top-3 -left-3 sm:-left-6 bg-[#3E0F2B]/85 backdrop-blur-md border border-[#D9A38F]/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-glow">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8458B] to-[#C2185B] flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A38F] block">
                  Signature
                </span>
                <span className="text-sm font-serif font-bold text-white block">
                  Bridal & Owambe Glam
                </span>
              </div>
            </div>

            {/* Floating Glass Badge 2: Hair & Nails */}
            <div 
              className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#3E0F2B]/85 backdrop-blur-md border border-[#D9A38F]/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-glow"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8B84A] to-[#D9A38F] flex items-center justify-center text-[#3E0F2B] font-bold shadow-md">
                <Sparkles className="w-5 h-5 text-[#3E0F2B]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A38F] block">
                  Full Service
                </span>
                <span className="text-sm font-serif font-bold text-white block">
                  Hair, Braids & Nails
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <a 
        href="#marquee"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to services overview"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#D9A38F] mb-1 font-semibold">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#E8458B]" />
      </a>
    </section>
  );
};
