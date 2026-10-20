import React from 'react';
import { Crown, Sparkles, Calendar, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

interface BridalSpotlightProps {
  onRequestConsultation: () => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = ({ onRequestConsultation }) => {
  const bridalSteps = [
    {
      step: '01',
      title: 'Bridal Consultation',
      description: 'We discuss your wedding theme, aso-ebi fabrics, jewelry, and personal aesthetic to blueprint your dream look.',
      icon: HeartHandshake,
      sampleTag: true,
    },
    {
      step: '02',
      title: 'Full Trial Session',
      description: 'Test foundation shade, lash styles, and hair/gele options in advance to ensure complete comfort and longevity.',
      icon: Sparkles,
      sampleTag: true,
    },
    {
      step: '03',
      title: 'Day-of Flawless Glam',
      description: 'Calm, stress-free glam on location or in our Surulere parlour, plus touch-up kits for you and your bridal train.',
      icon: Crown,
      sampleTag: true,
    },
  ];

  return (
    <section id="bridal" className="py-20 bg-[#3E0F2B] text-white relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#E8458B]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2185B]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Watermark Script */}
      <div 
        className="absolute top-8 right-6 text-[120px] sm:text-[180px] font-script text-white/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        Bridal
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with luxury arch styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px]">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-t-[190px] rounded-b-3xl border border-[#D9A38F]/30 transform -rotate-1" />
              
              {/* Image Frame */}
              <div className="relative aspect-[3/4] rounded-t-[180px] rounded-b-2xl overflow-hidden border-2 border-[#D9A38F] shadow-berry-deep bg-[#5A1A3F]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
                  alt="Stunning Nigerian bride with elegant glam and traditional styling"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Testimonial/Badge */}
              <div className="absolute -bottom-5 right-2 sm:-right-4 bg-[#5A1A3F]/90 backdrop-blur-md border border-[#D9A38F]/40 p-4 rounded-2xl shadow-xl max-w-[240px]">
                <p className="text-xs text-[#FBE9EC] italic font-serif">
                  "Make Me gave me the exact regal bridal glow I dreamt of for my big day."
                </p>
                <span className="text-[10px] uppercase font-bold text-[#D9A38F] tracking-wider block mt-1">
                  — Lagos Bride (Sample)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 3-Step Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/30 text-[#E8B84A] text-xs font-bold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              Bridal & Special Occasions
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Ready for Your <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D9A38F] via-[#FBE9EC] to-[#E8B84A]">
                Big Day?
              </span>
            </h2>

            <p className="text-base text-white/80 leading-relaxed max-w-xl">
              Whether you are walking down the aisle, hosting a milestone birthday, or turning heads 
              at a high-fashion Lagos owambe, our bridal artisans curate high-impact looks that 
              photograph beautifully and endure throughout every dance.
            </p>

            {/* 3-Point Sample List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D9A38F]">
                  Our 3-Step Bridal Journey
                </span>
                <span className="text-[11px] text-white/50 italic">
                  [Sample process to confirm with client]
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {bridalSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="bg-[#5A1A3F]/60 rounded-2xl p-4 border border-[#D9A38F]/25 hover:border-[#E8458B]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-serif font-bold text-[#E8B84A]">
                          {step.step}
                        </span>
                        <Icon className="w-4 h-4 text-[#D9A38F]" />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Consultation Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRequestConsultation}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C2185B] via-[#E8458B] to-[#C2185B] hover:from-[#d61b65] hover:to-[#f05398] text-white font-bold text-sm shadow-lg shadow-[#C2185B]/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Request a Bridal Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppLink(
                  SITE_CONFIG.WHATSAPP_NUMBER,
                  "Hello Make Me Beauty Place, I'm planning my wedding/event and would love to enquire about your Bridal Glam packages."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Bridal on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
