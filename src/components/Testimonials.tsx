import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, AlertTriangle } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const Testimonials: React.FC = () => {
  // NOTE FOR CLIENT DEMO HANDOFF:
  // These testimonials are sample placeholders with clearly fictional initials
  // to demonstrate layout and review styling.
  // Before public launch, replace these with authentic reviews from the Google
  // Business Profile at 44 Bode Thomas St, with reviewer consent.
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = SITE_CONFIG.SAMPLE_REVIEWS;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-[#FFF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            {/* Header Badge: Verified Rating & Reviews */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#E8B84A] text-[#E8B84A]" />
              <span>4.3 ★ on Google | 624 Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E0F2B] leading-tight">
              Words From Our <br />
              <span className="italic text-[#C2185B]">Gorgeous Clients</span>
            </h2>

            <p className="text-sm text-[#2A1822]/75">
              See what women in Surulere and across Lagos have to say about their transformations at Make Me.
            </p>
          </div>

          {/* Action & Carousel Arrows */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONFIG.GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>See Real Reviews on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E8B84A]" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-[#D9A38F]/40 hover:bg-[#FBE9EC] hover:text-[#C2185B] text-[#3E0F2B] flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-[#D9A38F]/40 hover:bg-[#FBE9EC] hover:text-[#C2185B] text-[#3E0F2B] flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Notice on Sample Content */}
        <div className="mb-6 flex items-center gap-2 text-xs text-[#5A1A3F] bg-[#FBE9EC]/70 p-2.5 rounded-xl border border-[#D9A38F]/30 max-w-xl">
          <AlertTriangle className="w-4 h-4 text-[#C2185B] shrink-0" />
          <span>Notice: The testimonials below are sample previews for layout demo; replace with real Google reviews from client.</span>
        </div>

        {/* Reviews Cards: Responsive Grid / Carousel view */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => {
            const isFeatured = index === currentIndex;
            return (
              <div
                key={rev.id}
                className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative shadow-pink-soft ${
                  isFeatured
                    ? 'border-[#C2185B] ring-2 ring-[#C2185B]/20 transform -translate-y-1'
                    : 'border-[#D9A38F]/30 hover:border-[#D9A38F]'
                }`}
              >
                <div>
                  {/* Top row: stars & sample badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#E8B84A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FBE9EC] text-[#C2185B] border border-[#C2185B]/20">
                      Sample review
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#D9A38F]/30 mb-2" />

                  {/* Review Text */}
                  <p className="text-sm text-[#2A1822]/85 leading-relaxed italic mb-4">
                    "{rev.reviewText}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#D9A38F]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#3E0F2B]">
                      {rev.authorName}
                    </h4>
                    <span className="text-xs text-[#C2185B] font-medium block">
                      {rev.serviceMentioned}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#2A1822]/50">
                    {rev.timeAgo}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-8 md:hidden">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i ? 'w-6 bg-[#C2185B]' : 'w-2 bg-[#D9A38F]/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
