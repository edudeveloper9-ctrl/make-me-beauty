import React from 'react';
import { Sparkles, Heart, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const AboutUs: React.FC = () => {
  // NOTE FOR CLIENT DEMO HANDOFF:
  // The story and paragraphs below are placeholder content designed to evoke
  // the warm, stylish, community-loved brand of Make Me Beauty Place.
  // Replace with the owner's authentic founding journey and real parlour milestones.

  const pillarIcons = [
    {
      title: SITE_CONFIG.ABOUT.pillars[0].title, // "Glam"
      description: SITE_CONFIG.ABOUT.pillars[0].description,
      icon: Sparkles,
      color: 'text-[#E8458B]',
      bg: 'bg-[#FBE9EC]',
    },
    {
      title: SITE_CONFIG.ABOUT.pillars[1].title, // "Care"
      description: SITE_CONFIG.ABOUT.pillars[1].description,
      icon: Heart,
      color: 'text-[#C2185B]',
      bg: 'bg-[#FBE9EC]',
    },
    {
      title: SITE_CONFIG.ABOUT.pillars[2].title, // "Confidence"
      description: SITE_CONFIG.ABOUT.pillars[2].description,
      icon: ShieldCheck,
      color: 'text-[#E8B84A]',
      bg: 'bg-[#FFF8F4]',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FFF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Arch Image Collage with Rose-Gold Offset Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Rose Gold Offset Decorative Frame */}
              <div className="absolute -inset-4 rounded-t-[190px] rounded-b-3xl border-2 border-[#D9A38F] transform -rotate-2 -translate-y-2 pointer-events-none" />

              {/* Arch Image Frame */}
              <div className="relative aspect-[4/5] rounded-t-[180px] rounded-b-2xl overflow-hidden border-2 border-[#D9A38F]/50 shadow-2xl bg-[#3E0F2B]">
                <img
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80"
                  alt="Stylist crafting neat braids with attentive care at Make Me Beauty Place"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge: Loved in Surulere */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#D9A38F] p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C2185B] to-[#E8458B] flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9A38F] block">
                    Bode Thomas
                  </span>
                  <span className="text-sm font-serif font-bold text-[#3E0F2B] block">
                    Loved in Surulere
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story Copy & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/30 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              {SITE_CONFIG.ABOUT.eyebrow}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E0F2B] leading-tight">
              {SITE_CONFIG.ABOUT.headline}
            </h2>

            {/* Placeholder Story Paragraphs */}
            <p className="text-base sm:text-lg text-[#2A1822]/85 leading-relaxed">
              {SITE_CONFIG.ABOUT.storyParagraph1}
            </p>

            <p className="text-sm sm:text-base text-[#2A1822]/75 leading-relaxed">
              {SITE_CONFIG.ABOUT.storyParagraph2}
            </p>

            {/* 3 Icon Pillars: Glam, Care, Confidence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9A38F]/25">
              {pillarIcons.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-white border border-[#D9A38F]/30 shadow-xs hover:border-[#E8458B]/50 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-xl ${pillar.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-4 h-4 ${pillar.color}`} />
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#3E0F2B] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#2A1822]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-xs text-[#2A1822]/50 italic">
              * Note: Story text is sample copy tailored for demo; client's real founder message can be dropped in easily.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
