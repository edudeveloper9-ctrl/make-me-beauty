import React, { useState } from 'react';
import { Mail, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

export const NewsletterOffer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#C2185B] via-[#85184B] to-[#3E0F2B] text-white p-8 sm:p-12 shadow-2xl border border-[#D9A38F]/40">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8458B]/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[#FBE9EC] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
              VIP Beauty Club
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              Get Beauty Tips & <br />
              <span className="italic text-[#E8B84A]">Exclusive Special Offers</span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed">
              [Sample promotion placeholder: Join our beauty list for seasonal glam guides, 
              priority weekend slots, and birthday treat announcements.]
            </p>
          </div>

          {/* Right: WhatsApp Opt-in & Email Form */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Quick WhatsApp VIP Channel Link */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-[#E8B84A] block">
                  Prefer WhatsApp?
                </span>
                <span className="text-sm text-white font-medium">
                  Receive secret drop discounts directly on WhatsApp
                </span>
              </div>

              <a
                href={buildWhatsAppLink(
                  SITE_CONFIG.WHATSAPP_NUMBER,
                  'Hello Make Me Beauty Place, I would like to join your WhatsApp VIP list for special offers and beauty updates.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Join on WhatsApp</span>
              </a>
            </div>

            {/* Email Subscription Form */}
            {subscribed ? (
              <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-emerald-400/40 flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-medium">
                  Thank you! You're on the list. We'll share our curated beauty tips with you soon.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-full bg-white/15 text-white placeholder-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#E8B84A] text-sm backdrop-blur-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#E8B84A] hover:bg-[#d6a537] text-[#3E0F2B] font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[11px] text-white/60 px-2">
                  We respect your privacy. No spam. Unsubscribe anytime. Offer copy to be confirmed by client.
                </p>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
