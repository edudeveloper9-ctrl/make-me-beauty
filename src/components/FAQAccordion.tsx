import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FFF8F4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E0F2B]">
            Frequently Asked <span className="italic text-[#C2185B]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2A1822]/75">
            Quick answers regarding appointments, payments, and our Surulere parlour policies.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {SITE_CONFIG.FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D9A38F]/30 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C2185B] focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#3E0F2B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#C2185B] text-white rotate-180'
                        : 'bg-[#FBE9EC] text-[#C2185B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#2A1822]/80 leading-relaxed border-t border-[#D9A38F]/15 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-dashed border-[#D9A38F]/25 flex flex-wrap items-center gap-3 text-xs">
                      <span className="text-[#3E0F2B]/60 font-medium">Still have questions?</span>
                      <a
                        href={buildWhatsAppLink(
                          SITE_CONFIG.WHATSAPP_NUMBER,
                          `Hello Make Me Beauty Place, I have a question regarding: "${faq.question}"`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-bold flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        Ask on WhatsApp
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href={`tel:${SITE_CONFIG.PHONE_RAW}`}
                        className="text-[#C2185B] hover:underline font-bold flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call {SITE_CONFIG.PHONE}
                      </a>
                    </div>
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
