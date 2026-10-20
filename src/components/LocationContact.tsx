import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { validateNigerianPhone, buildWhatsAppLink, getIsOpenNow } from '../utils/businessLogic.ts';

interface LocationContactProps {
  initialService?: string;
}

export const LocationContact: React.FC<LocationContactProps> = ({ initialService }) => {
  const [status, setStatus] = useState(() => getIsOpenNow(SITE_CONFIG.HOURS));

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  // Validation & feedback states
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; service: string } | null>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const handlePhoneBlur = () => {
    if (!phone) return;
    const res = validateNigerianPhone(phone);
    if (!res.isValid) {
      setPhoneError(res.error || 'Invalid Nigerian phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone
    const phoneVal = validateNigerianPhone(phone);
    if (!phoneVal.isValid) {
      setPhoneError(phoneVal.error || 'Invalid Nigerian phone number');
      return;
    }

    setPhoneError('');
    setSubmittedData({ name, service: selectedService || 'General Consultation' });
    setSubmitted(true);
  };

  // WhatsApp pre-fill link for this exact enquiry form
  const generateFormWhatsAppUrl = () => {
    const text = `Hello Make Me Beauty Place!
My Name: ${name || '[Not provided]'}
Phone: ${phone || '[Not provided]'}
Service: ${selectedService || 'General Appointment'}
Preferred Date: ${preferredDate || 'Earliest available'}
Note: ${message || 'Please let me know your open slots.'}`;
    return buildWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, text);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Surulere Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E0F2B]">
            Visit Us or <span className="italic text-[#C2185B]">Book Your Slot</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2A1822]/75">
            Conveniently located on Bode Thomas Street. Walk in, call, or reserve your seat online.
          </p>
        </div>

        {/* Split Layout: Contact Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Glass Card: Verified Contact & Opening Hours */}
          <div className="lg:col-span-6 bg-white/95 rounded-3xl p-7 sm:p-9 border border-[#D9A38F]/40 shadow-pink-soft flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Live Status Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D9A38F]/20">
                <span className="text-xs uppercase font-bold tracking-wider text-[#3E0F2B]">
                  Studio Status
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  status.isOpen 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-rose-100 text-rose-800 border border-rose-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-rose-500'}`} />
                  {status.statusBadge} ({status.detailText})
                </span>
              </div>

              {/* Address with Plus Code */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3E0F2B]">
                    Parlour Address
                  </h3>
                  <p className="text-sm text-[#2A1822]/80 mt-0.5 font-medium leading-relaxed">
                    {SITE_CONFIG.ADDRESS}
                  </p>
                  <span className="inline-block mt-1 text-xs font-mono font-semibold text-[#C2185B] bg-[#FBE9EC] px-2.5 py-0.5 rounded-md">
                    Plus Code: {SITE_CONFIG.PLUS_CODE}
                  </span>
                </div>
              </div>

              {/* Phone & Click-to-Call */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3E0F2B]">
                    Phone Enquiries
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.PHONE_RAW}`}
                    className="text-base font-bold text-[#C2185B] hover:text-[#E8458B] transition-colors block mt-0.5"
                  >
                    {SITE_CONFIG.PHONE}
                  </a>
                  <p className="text-xs text-[#2A1822]/60 mt-0.5">
                    Click to call parlour directly
                  </p>
                </div>
              </div>

              {/* Hours Table */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-base text-[#3E0F2B]">
                      Opening Hours
                    </h3>
                    <span className="text-[11px] text-[#2A1822]/50 italic">
                      [To confirm with client]
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#2A1822]/80 bg-[#FFF8F4] p-3 rounded-xl border border-[#D9A38F]/25">
                    {SITE_CONFIG.HOURS.map((h) => (
                      <div key={h.dayName} className="flex justify-between items-center py-0.5">
                        <span className="font-semibold text-[#3E0F2B]">{h.shortName}:</span>
                        <span>{h.displayText}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Map & WhatsApp Buttons */}
            <div className="pt-4 border-t border-[#D9A38F]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE_CONFIG.GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#E8B84A]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={buildWhatsAppLink(
                  SITE_CONFIG.WHATSAPP_NUMBER,
                  'Hello Make Me Beauty Place, I would like directions or assistance reaching your salon.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Location</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#D9A38F]/40 shadow-pink-soft relative bg-[#FBE9EC] min-h-[380px] flex flex-col">
            <iframe
              title="Make Me Beauty Place Location on Google Maps"
              src="https://maps.google.com/maps?q=44+Bode+Thomas+St,+Surulere,+Lagos,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#D9A38F]/40 shadow-md text-xs font-medium text-[#3E0F2B] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C2185B]" />
              <span>44 Bode Thomas St, Surulere</span>
            </div>
          </div>

        </div>

        {/* Below: Booking Enquiry Form */}
        <div id="booking-form" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D9A38F]/40 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C2185B]">
                Online Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E0F2B]">
                Request an Appointment
              </h3>
              <p className="text-sm text-[#2A1822]/75">
                Fill out the details below. Our team verifies salon chair availability and will confirm promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FBE9EC] border-2 border-[#C2185B]/40 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C2185B] text-white flex items-center justify-center mx-auto shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#3E0F2B]">
                  Thank you, gorgeous!
                </h4>
                <p className="text-sm text-[#2A1822]/85 max-w-md mx-auto leading-relaxed">
                  We'll confirm your booking shortly for <strong>{submittedData?.service}</strong>.
                  For instant confirmation, you can also send this reservation directly to our front desk on WhatsApp.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={generateFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Confirm Instantly on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-3 rounded-full bg-white text-[#3E0F2B] hover:bg-gray-50 border border-[#D9A38F]/40 font-semibold text-sm transition-all"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amaka Adebayo"
                      className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B] focus:border-transparent text-sm bg-[#FFF8F4]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Phone with Nigerian validation */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Nigerian Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={handlePhoneBlur}
                      placeholder="0707 109 5500 or +234..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFF8F4]/50 outline-none transition-all ${
                        phoneError 
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-400' 
                          : 'border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B]'
                      }`}
                    />
                    {phoneError && (
                      <p className="text-xs text-rose-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. amaka@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B] focus:border-transparent text-sm bg-[#FFF8F4]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Service Interested In *
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B] focus:border-transparent text-sm bg-[#FFF8F4]/50 outline-none transition-all"
                    >
                      <option value="">Select a treatment...</option>
                      {SITE_CONFIG.SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.categoryLabel})
                        </option>
                      ))}
                      <option value="Bridal Consultation">Bridal Glam Consultation</option>
                      <option value="Custom Look">Other / Custom Style</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B] focus:border-transparent text-sm bg-[#FFF8F4]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Special Requests / Notes */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E0F2B] block">
                      Notes, Style Ideas or Event Date
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us if you have hair extension length preferences, bridal theme, skin sensitivities, or inspirations..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/40 focus:ring-2 focus:ring-[#C2185B] focus:border-transparent text-sm bg-[#FFF8F4]/50 outline-none transition-all resize-none"
                    />
                  </div>

                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C2185B] via-[#E8458B] to-[#C2185B] hover:from-[#d61b65] hover:to-[#f05398] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Booking</span>
                  </button>

                  <a
                    href={generateFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp Instead</span>
                  </a>
                </div>

                <p className="text-xs text-[#2A1822]/60 text-center sm:text-left">
                  We verify our chair availability before confirming. No advance charge is taken here.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
