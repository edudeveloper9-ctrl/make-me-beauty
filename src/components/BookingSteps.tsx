import React from 'react';
import { MessageCircle, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

export const BookingSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Message Us on WhatsApp',
      description: 'Tap our WhatsApp button to say hello. Share your desired service, style photos, or event details.',
      icon: MessageCircle,
      iconColor: 'text-[#25D366]',
      badge: 'Fast & Friendly',
    },
    {
      number: '02',
      title: 'Confirm Service, Date & Time',
      description: 'Our front desk checks the chair schedule on Bode Thomas and confirms your exact appointment slot.',
      icon: CalendarCheck,
      iconColor: 'text-[#C2185B]',
      badge: 'Zero Stress',
    },
    {
      number: '03',
      title: 'Come In and Glow',
      description: 'Arrive at our relaxing Surulere studio, enjoy personal pampering, and walk out looking radiant.',
      icon: Sparkles,
      iconColor: 'text-[#E8B84A]',
      badge: 'Pure Radiance',
    },
  ];

  return (
    <section className="py-20 bg-[#FBE9EC]/50 border-t border-[#D9A38F]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C2185B]">
            Effortless Appointments
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E0F2B]">
            How Booking Works <br />
            <span className="italic text-[#C2185B]">In 3 Simple Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2A1822]/80">
            No complicated forms or confusing accounts. Just direct, personal communication with our Surulere salon team.
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-8 border border-[#D9A38F]/30 shadow-pink-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-extrabold text-[#D9A38F]/60 group-hover:text-[#C2185B] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FBE9EC] text-[#3E0F2B]">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8F4] border border-[#D9A38F]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#3E0F2B] mb-2 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#2A1822]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx === 0 && (
                  <div className="pt-6 mt-4 border-t border-[#D9A38F]/20">
                    <a
                      href={buildWhatsAppLink(
                        SITE_CONFIG.WHATSAPP_NUMBER,
                        'Hello Make Me Beauty Place, I would like to book an appointment.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#25D366] hover:text-[#1da851] flex items-center gap-1"
                    >
                      <span>Start on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
