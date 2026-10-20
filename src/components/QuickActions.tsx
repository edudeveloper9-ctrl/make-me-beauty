import React from 'react';
import { MessageCircle, PhoneCall, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Book on WhatsApp',
      subtitle: 'Fast response & date confirmation',
      icon: MessageCircle,
      href: buildWhatsAppLink(
        SITE_CONFIG.WHATSAPP_NUMBER,
        'Hello Make Me Beauty Place, I would like to book an appointment.'
      ),
      isExternal: true,
      colorClass: 'from-[#25D366] to-[#128C7E]',
      iconColor: 'text-[#25D366]',
    },
    {
      title: 'Call Us Directly',
      subtitle: SITE_CONFIG.PHONE,
      icon: PhoneCall,
      href: `tel:${SITE_CONFIG.PHONE_RAW}`,
      isExternal: false,
      colorClass: 'from-[#C2185B] to-[#E8458B]',
      iconColor: 'text-[#C2185B]',
    },
    {
      title: 'Get Directions',
      subtitle: '44 Bode Thomas St, Surulere',
      icon: MapPin,
      href: SITE_CONFIG.GOOGLE_MAPS_LINK,
      isExternal: true,
      colorClass: 'from-[#E8B84A] to-[#D9A38F]',
      iconColor: 'text-[#E8B84A]',
    },
    {
      title: 'See Our Services',
      subtitle: 'Explore full menu & treatments',
      icon: Sparkles,
      href: '#services',
      isExternal: false,
      colorClass: 'from-[#5A1A3F] to-[#3E0F2B]',
      iconColor: 'text-[#E8458B]',
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <a
              key={act.title}
              href={act.href}
              target={act.isExternal ? '_blank' : undefined}
              rel={act.isExternal ? 'noopener noreferrer' : undefined}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#D9A38F]/30 shadow-pink-soft hover:shadow-xl hover:border-[#E8458B]/50 transition-all duration-300 transform hover:-translate-y-1.5 group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FBE9EC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Icon className={`w-6 h-6 ${act.iconColor}`} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#3E0F2B] group-hover:text-[#C2185B] transition-colors leading-tight">
                  {act.title}
                </h3>
                <p className="text-xs text-[#2A1822]/70 font-medium mt-0.5 line-clamp-1">
                  {act.subtitle}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
