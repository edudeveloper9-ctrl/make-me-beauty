import React, { useState } from 'react';
import { Sparkles, Clock, Check, X, MessageCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

interface ServicesGridProps {
  onDirectEnquiry: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onDirectEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'makeup', label: 'Makeup & Bridal' },
    { id: 'hair', label: 'Hair & Braids' },
    { id: 'nails', label: 'Nails Studio' },
    { id: 'lashes', label: 'Lashes & Brows' },
    { id: 'skin', label: 'Skin & Facials' },
  ];

  const filteredServices = SITE_CONFIG.SERVICES.filter((svc) => {
    if (activeTab === 'all') return true;
    return svc.category === activeTab;
  });

  return (
    <section id="services" className="py-20 bg-[#FFF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Beauty Menu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E0F2B]">
            Crafted for Your Glow, <br />
            <span className="italic text-[#C2185B]">Tailored to Perfection</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2A1822]/80 leading-relaxed">
            From regal bridal glam to neat protective braids and immaculate nail art. 
            All treatments use premium products suited for diverse hair textures and melanin tones.
          </p>

          {/* Sample services indicator note */}
          <div className="inline-flex items-center gap-1.5 text-xs text-[#5A1A3F] bg-[#FBE9EC]/70 px-3 py-1 rounded-md border border-[#D9A38F]/30">
            <AlertCircle className="w-3.5 h-3.5 text-[#C2185B]" />
            <span>Sample services list for demo – all details, additions & prices to be confirmed with client.</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" role="tablist">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#C2185B] text-white shadow-md shadow-[#C2185B]/25'
                  : 'bg-white text-[#2A1822]/75 hover:bg-[#FBE9EC] hover:text-[#C2185B] border border-[#D9A38F]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#D9A38F]/30 border-t-4 border-t-[#C2185B] shadow-pink-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#5A1A3F]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B]/80 via-transparent to-transparent" />
                
                {/* Badge if available */}
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-[#C2185B] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {service.badge}
                  </span>
                )}

                {/* Duration indicator */}
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#3E0F2B] text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#C2185B]" />
                  {service.durationEstimate}
                </span>

                {/* Category label */}
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wider uppercase drop-shadow">
                  {service.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#3E0F2B] group-hover:text-[#C2185B] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#2A1822]/65 italic">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#2A1822]/80 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Features short-list */}
                <ul className="space-y-1.5 pt-2 border-t border-[#D9A38F]/20 text-xs text-[#2A1822]/80">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA row */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#D9A38F]/20">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A38F] block">
                      Fee Guide
                    </span>
                    <span className="text-sm font-serif font-bold text-[#C2185B]">
                      {service.priceNote}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-4 py-2 rounded-xl bg-[#FBE9EC] text-[#C2185B] hover:bg-[#C2185B] hover:text-white font-semibold text-xs transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-[#3E0F2B]/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D9A38F]/40 transform transition-all animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-48 bg-[#3E0F2B]">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B] via-black/40 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9A38F] block">
                  {selectedService.categoryLabel}
                </span>
                <h3 id="modal-service-title" className="text-2xl font-serif font-bold text-white leading-tight">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <p className="text-sm text-[#2A1822]/85 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Service details grid */}
              <div className="grid grid-cols-2 gap-3 bg-[#FBE9EC]/70 p-3.5 rounded-xl text-xs">
                <div>
                  <span className="text-[#3E0F2B]/60 font-semibold block uppercase tracking-wider text-[10px]">
                    Est. Duration
                  </span>
                  <span className="font-bold text-[#3E0F2B] text-sm flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C2185B]" />
                    {selectedService.durationEstimate}
                  </span>
                </div>
                <div>
                  <span className="text-[#3E0F2B]/60 font-semibold block uppercase tracking-wider text-[10px]">
                    Pricing
                  </span>
                  <span className="font-bold text-[#C2185B] text-sm mt-0.5 block">
                    {selectedService.priceNote}
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#3E0F2B] mb-2">
                  What's Included:
                </h4>
                <ul className="space-y-2 text-xs text-[#2A1822]/80">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#C2185B]/15 text-[#C2185B] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppLink(
                    SITE_CONFIG.WHATSAPP_NUMBER,
                    `Hello Make Me Beauty Place, I would like to book "${selectedService.name}". Please let me know your available slots.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onDirectEnquiry(name);
                  }}
                  className="bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Fill Booking Form
                </button>
              </div>

              <p className="text-[11px] text-center text-[#2A1822]/60">
                Never invent prices • Client confirms exact rate based on hair length, style or add-ons.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
