import React from 'react';
import { Star, MessageCircle, Sparkles, Heart, MapPin, Crown, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const WhyChooseUs: React.FC = () => {
  const iconMap = [
    { icon: Star, color: 'text-[#E8B84A]', bg: 'bg-[#E8B84A]/15' },
    { icon: MessageCircle, color: 'text-[#25D366]', bg: 'bg-[#25D366]/15' },
    { icon: Sparkles, color: 'text-[#E8458B]', bg: 'bg-[#E8458B]/15' },
    { icon: Heart, color: 'text-[#C2185B]', bg: 'bg-[#C2185B]/15' },
    { icon: MapPin, color: 'text-[#D9A38F]', bg: 'bg-[#D9A38F]/15' },
    { icon: Crown, color: 'text-[#E8B84A]', bg: 'bg-[#E8B84A]/15' },
  ];

  return (
    <section className="py-20 bg-[#3E0F2B] text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C2185B]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E8458B]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle watermark */}
      <div 
        className="absolute bottom-6 right-8 text-[140px] font-script text-white/[0.03] select-none pointer-events-none"
        aria-hidden="true"
      >
        Make Me
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/30 text-[#D9A38F] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            The Make Me Standard
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Why Surulere Chooses <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D9A38F] via-[#FBE9EC] to-[#E8B84A]">
              Make Me Beauty Place
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Honest service, verified high ratings, and warm Nigerian hospitality that makes you feel at home every single visit.
          </p>
        </div>

        {/* 6 Rose-Gold Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.WHY_CHOOSE_US.map((item, idx) => {
            const iconObj = iconMap[idx] || iconMap[0];
            const Icon = iconObj.icon;

            return (
              <div
                key={item.title}
                className="bg-[#5A1A3F]/70 backdrop-blur-md rounded-2xl p-6 border border-[#D9A38F]/30 hover:border-[#D9A38F] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${iconObj.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${iconObj.color}`} />
                    </div>
                    {item.isVerifiedStat && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8B84A]/20 text-[#E8B84A] border border-[#E8B84A]/30">
                        Verified Stat
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-[#D9A38F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#D9A38F]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A38F]" />
                  <span>Guaranteed Client Care</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
