import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const SocialProof: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate rating from 0 to 4.3
          const targetRating = SITE_CONFIG.RATING;
          let currentR = 0;
          const ratingStep = targetRating / 30;
          const rTimer = setInterval(() => {
            currentR += ratingStep;
            if (currentR >= targetRating) {
              setRatingCount(targetRating);
              clearInterval(rTimer);
            } else {
              setRatingCount(parseFloat(currentR.toFixed(1)));
            }
          }, 40);

          // Animate review count from 0 to 624
          const targetReviews = SITE_CONFIG.TOTAL_REVIEWS;
          let currentRev = 0;
          const revStep = Math.ceil(targetReviews / 35);
          const revTimer = setInterval(() => {
            currentRev += revStep;
            if (currentRev >= targetReviews) {
              setReviewCount(targetReviews);
              clearInterval(revTimer);
            } else {
              setReviewCount(currentRev);
            }
          }, 35);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#FBE9EC]/60 border-y border-[#D9A38F]/25 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#D9A38F]/40 shadow-pink-soft flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Title & Verification badge */}
          <div className="space-y-3 text-center lg:text-left max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E0F2B]/10 text-[#3E0F2B] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C2185B]" />
              Verified Public Google Rating
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E0F2B] leading-tight">
              Loved by Surulere, <br />
              Trusted Across Lagos.
            </h2>
            <p className="text-sm text-[#2A1822]/80 leading-relaxed">
              Real opinions from clients who trust us for their milestone weddings, birthdays, 
              and weekly self-care beauty rituals.
            </p>
          </div>

          {/* Center: Live Count-Up Stats */}
          <div className="grid grid-cols-2 gap-8 sm:gap-14 text-center">
            {/* Rating */}
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1 text-[#E8B84A] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C2185B]">
                {hasAnimated ? ratingCount.toFixed(1) : '0.0'}
                <span className="text-2xl text-[#2A1822]/50 font-sans font-normal ml-1">/ 5</span>
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#3E0F2B]">
                Google Star Rating
              </p>
            </div>

            {/* Total Reviews */}
            <div className="space-y-1">
              <div className="flex items-center justify-center text-[#E8458B] mb-1">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C2185B]">
                {hasAnimated ? reviewCount : '0'}
                <span className="text-3xl text-[#E8458B]">+</span>
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#3E0F2B]">
                Verified Google Reviews
              </p>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
            <a
              href={SITE_CONFIG.GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Read Our Reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-[#E8B84A]" />
            </a>
            <span className="text-[11px] text-[#2A1822]/60">
              Opens Google Maps business listing
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
