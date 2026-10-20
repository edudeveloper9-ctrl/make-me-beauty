/**
 * =============================================================================
 * MAKE ME BEAUTY PLACE - CLIENT CONFIGURATION BLOCK
 * =============================================================================
 * All key details, business info, services, opening hours, social links,
 * and sample testimonials are configured here.
 * 
 * NOTE FOR CLIENT HANDOFF:
 * - Verified social-proof facts: 4.3★ Rating from 624 Google Reviews.
 * - All services, prices, sample reviews, and opening hours marked [SAMPLE/PLACEHOLDER]
 *   must be confirmed and updated with the client's exact details.
 * - Never invent prices, awards, stylist names, or inflated numbers.
 * =============================================================================
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'hair' | 'nails' | 'lashes' | 'skin';
  categoryLabel: string;
  tagline: string;
  description: string;
  durationEstimate: string; // e.g. "60 - 90 mins"
  priceNote: string; // Always "Price on request" or sample starting guide
  image: string;
  badge?: string;
  features: string[];
  isSample: boolean;
}

export interface ReviewItem {
  id: string;
  authorName: string; // Fake first name + initial
  rating: number; // 5
  timeAgo: string;
  serviceMentioned: string;
  reviewText: string;
  isSample: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  actionHint?: string;
}

export interface DayHours {
  dayName: string;
  shortName: string;
  openHour: number; // 24-hr format (e.g. 9 for 9:00 AM)
  closeHour: number; // 24-hr format (e.g. 19 for 7:00 PM)
  displayText: string;
  isClosed?: boolean;
}

export const SITE_CONFIG = {
  // --- CORE BUSINESS IDENTITY ---
  BUSINESS_NAME: "Make Me Beauty Place",
  CATEGORY: "Beauty Parlour",
  TAGLINE: "Where Beauty Begins.", // [placeholder: confirm with client]
  SUB_TAGLINE: "Makeup, hair, nails, lashes and more, crafted by a friendly team in the heart of Surulere.",
  
  // --- VERIFIED LOCATION & CONTACT ---
  ADDRESS: "44 Bode Thomas St, Surulere, Lagos 100011, Lagos, Nigeria",
  STREET: "44 Bode Thomas St",
  AREA: "Surulere, Lagos",
  POSTAL_CODE: "100011",
  COUNTRY: "Nigeria",
  PLUS_CODE: "F9Q3+P3 Lagos",
  PHONE: "+234 707 109 5500",
  PHONE_RAW: "+2347071095500",
  // [placeholder: confirm with client; use 2347071095500 only if client confirms it is on WhatsApp]
  WHATSAPP_NUMBER: "2347071095500", 
  EMAIL: "hello@makemebeautyplace.com", // [placeholder: confirm with client]
  
  // --- VERIFIED SOCIAL PROOF (DO NOT MODIFY UNLESS GOOGLE LISTING CHANGES) ---
  RATING: 4.3,
  TOTAL_REVIEWS: 624,
  REVIEW_SOURCE: "Google Reviews",
  GOOGLE_MAPS_LINK: "https://maps.google.com/?q=Make+Me+Beauty+Place+44+Bode+Thomas+St+Surulere+Lagos",
  GOOGLE_REVIEWS_LINK: "https://maps.google.com/?q=Make+Me+Beauty+Place+44+Bode+Thomas+St+Surulere+Lagos#reviews",

  // --- OPENING HOURS [PLACEHOLDER - CONFIRM WEEKLY SCHEDULE WITH CLIENT] ---
  // The listing indicates "Closes 7 pm" for the day checked.
  OPENING_HOURS_NOTE: "Listing indicates closes 7:00 PM; please confirm full weekly schedule with parlour.",
  HOURS: [
    { dayName: "Monday", shortName: "Mon", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Tuesday", shortName: "Tue", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Wednesday", shortName: "Wed", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Thursday", shortName: "Thu", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Friday", shortName: "Fri", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Saturday", shortName: "Sat", openHour: 9, closeHour: 19, displayText: "9:00 AM - 7:00 PM" },
    { dayName: "Sunday", shortName: "Sun", openHour: 12, closeHour: 18, displayText: "12:00 PM - 6:00 PM" },
  ] as DayHours[],

  // --- CURRENCY & PAYMENTS ---
  CURRENCY: "₦",
  ACCEPTED_PAYMENTS_NOTE: "Bank transfer, POS, cash & Paystack/Flutterwave available upon confirmation.",

  // --- SOCIAL MEDIA PLACEHOLDERS ---
  SOCIAL: {
    instagram: "https://instagram.com/makemebeautyplace", // placeholder
    tiktok: "https://tiktok.com/@makemebeautyplace", // placeholder
    facebook: "https://facebook.com/makemebeautyplace", // placeholder
  },

  // --- SAMPLE SERVICES (TO BE CONFIRMED BY CLIENT) ---
  SERVICES: [
    {
      id: "makeup-bridal-glam",
      name: "Makeup & Bridal Glam",
      category: "makeup",
      categoryLabel: "Makeup",
      tagline: "Flawless, photo-ready glow for brides, owambes, and high-profile events.",
      description: "Customised skin prep, long-lasting luxury foundation match, intricate eyeshadow, and perfectly set finish tailored for tropical Lagos humidity.",
      durationEstimate: "60 - 90 mins",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      badge: "Most Popular",
      features: [
        "Full face luxury skin prep",
        "HD camera-ready contouring",
        "Mink lash strip application",
        "Touch-up lipstick sample included"
      ],
      isSample: true,
    },
    {
      id: "hair-styling-braids",
      name: "Hair Styling & Braids",
      category: "hair",
      categoryLabel: "Hair & Braids",
      tagline: "Knotless braids, boho twists, cornrows, and sleek protective styling.",
      description: "Gentle scalp handling, neat sectioning, lightweight braids, and hot-water dip finishing that lasts comfortably for weeks.",
      durationEstimate: "2 - 4 hours",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      badge: "Signature Style",
      features: [
        "Tension-free knotless method",
        "Clean parting & edge styling",
        "Featherweight premium extensions",
        "Soothing scalp oil finish"
      ],
      isSample: true,
    },
    {
      id: "wigs-installations",
      name: "Wigs & Installations",
      category: "hair",
      categoryLabel: "Wig Care",
      tagline: "HD lace melting, custom frontal revamps, bleaching, and precision revives.",
      description: "Seamless lace melting, custom plucking, wash and treat, and thermal curling or bone-straight styling to make your unit look brand new.",
      durationEstimate: "1 - 2 hours",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      features: [
        "Glueless or waterproof hold",
        "Bleached knots & custom plucking",
        "Steam deep conditioning wash",
        "Precision cut & heat styling"
      ],
      isSample: true,
    },
    {
      id: "nails-mani-pedi",
      name: "Nails (Manicure & Pedicure)",
      category: "nails",
      categoryLabel: "Nail Studio",
      tagline: "Acrylic sculpts, builder gel, Russian manicure, and relaxing spa pedicures.",
      description: "Hygienic cuticle cleaning, durable nail enhancements, hand massage, and long-wear gel polish in trendy nude, French, or bold hues.",
      durationEstimate: "45 - 75 mins",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      badge: "Self-Care Must",
      features: [
        "Sterilised medical-grade tools",
        "Strengthening builder gel & acrylic",
        "Exfoliating foot scrub & soak",
        "Long-lasting shine guarantee"
      ],
      isSample: true,
    },
    {
      id: "lashes-brows",
      name: "Lashes & Brows",
      category: "lashes",
      categoryLabel: "Lashes & Brows",
      tagline: "Classic, hybrid & volume lash extensions plus micro-shading & tinting.",
      description: "Accentuating your natural eye shape with lightweight, comfortable lash fans and clean, symmetrically sculpted brows.",
      durationEstimate: "60 - 90 mins",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1583001800475-4089c72ecdc4?auto=format&fit=crop&w=800&q=80",
      features: [
        "Individual weightless fibres",
        "Custom curl & length mapping",
        "Hypoallergenic adhesive option",
        "Precision razor / wax brow shape"
      ],
      isSample: true,
    },
    {
      id: "facials-skincare",
      name: "Facials & Skincare",
      category: "skin",
      categoryLabel: "Skin Therapy",
      tagline: "Hydrating deep cleanse, hyperpigmentation revival, and radiant skin glows.",
      description: "Customised clinical skincare rituals designed for melanin-rich complexions facing Lagos sun and environmental exposure.",
      durationEstimate: "60 mins",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      features: [
        "Double cleanse & botanical steam",
        "Gentle enzyme exfoliation",
        "High-frequency acne treatment",
        "Hyaluronic barrier repair mask"
      ],
      isSample: true,
    },
    {
      id: "gele-special-occasion",
      name: "Gele & Special-Occasion Styling",
      category: "makeup",
      categoryLabel: "Event Glam",
      tagline: "Infinity pleats, auto-gele, avant-garde fans, and complete party-ready styling.",
      description: "Master tie artists who craft comfortable, lightweight, perfectly structured gelee crowns that remain intact all through your celebration.",
      durationEstimate: "30 - 45 mins",
      priceNote: "Price on request",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Modern infinity & pleated folds",
        "Firm yet painless head grip",
        "Quick auto-gele placement",
        "Aso-ebi color coordination"
      ],
      isSample: true,
    }
  ] as ServiceItem[],

  // --- SAMPLE TESTIMONIALS (TO BE REPLACED WITH REAL GOOGLE REVIEWS) ---
  // The prompt specifies: "3-card slider with swipe, 5 gold stars, a 'Sample review' tag,
  // and clearly fake first names with initials (themes: lovely makeup, friendly staff, beautiful hair and nails).
  // Do NOT present the sample reviews as real. The rating (4.3) and review count (624) are the only verified facts."
  SAMPLE_REVIEWS: [
    {
      id: "rev-1",
      authorName: "Chioma N.",
      rating: 5,
      timeAgo: "2 weeks ago",
      serviceMentioned: "Bridal & Owambe Glam",
      reviewText: "The makeup stayed spotless all through my sister's wedding in Victoria Island despite the heat! The team at Make Me were so welcoming and gentle with my skin. 10/10 recommendation for any Lagos event.",
      isSample: true,
    },
    {
      id: "rev-2",
      authorName: "Funke A.",
      rating: 5,
      timeAgo: "1 month ago",
      serviceMentioned: "Knotless Braids & Nails",
      reviewText: "Hands down one of the neatest braiding jobs in Surulere. Zero headache afterwards, and my gel pedicure is still shining three weeks later. WhatsApp booking was super swift and convenient.",
      isSample: true,
    },
    {
      id: "rev-3",
      authorName: "Tolu O.",
      rating: 5,
      timeAgo: "Recent visit",
      serviceMentioned: "Wig Melt & Lash Extensions",
      reviewText: "The stylist melted my frontal so naturally that people thought it was growing from my scalp! The parlour atmosphere on Bode Thomas is warm, clean, and smells amazing.",
      isSample: true,
    }
  ] as ReviewItem[],

  // --- ACCORDION FAQ ITEMS ---
  // Six questions strictly conforming to the brief
  FAQS: [
    {
      question: "How do I book an appointment?",
      answer: "Booking is easiest directly on WhatsApp or by phone call. Simply tap 'Book on WhatsApp', select your preferred service, date and time, and our team will confirm your slot right away."
    },
    {
      question: "Do you take walk-ins?",
      answer: "[Sample policy to confirm with client] We welcome walk-in guests whenever salon chairs and stylists are available! However, to avoid waiting during peak hours and weekend event rushes, advance booking is strongly advised."
    },
    {
      question: "How long does a service take?",
      answer: "Timing depends on your service—facials typically take ~60 minutes, while full knotless braids or bridal transformations may require 2 to 4 hours. Please message us on WhatsApp for an accurate time estimate for your desired look."
    },
    {
      question: "Do you offer bridal and special-occasion packages?",
      answer: "Yes! We cater to traditional and white wedding brides, bridal trains, birthdays, and owambe celebrations. We offer tailored packages including pre-wedding consultation, trial styling, and day-of glam. Contact us for custom package details."
    },
    {
      question: "How do I pay?",
      answer: "We support convenient payment options including direct Nigerian Bank Transfer, in-salon POS terminal card swipe, and cash. Online deposit links (Paystack / Flutterwave) can be arranged upon confirmation."
    },
    {
      question: "Where are you located and what are your opening hours?",
      answer: "We are situated at 44 Bode Thomas St, Surulere, Lagos 100011 (Plus Code: F9Q3+P3 Lagos). Our listing shows we close at 7:00 PM. Please message us on WhatsApp or call +234 707 109 5500 to confirm current daily hours."
    }
  ] as FAQItem[],

  // --- BRAND PILLARS (ABOUT SECTION) ---
  ABOUT: {
    eyebrow: "OUR STORY",
    headline: "Beauty That Feels Like You", // [placeholder]
    storyParagraph1: "Nestled along the bustling, vibrant corridor of Bode Thomas in Surulere, Make Me Beauty Place was built on a simple promise: that every client who steps into our studio should walk out feeling magnetic, celebrated, and deeply confident.",
    storyParagraph2: "From bridal transformations to everyday protective hair styling and relaxing nail care, our passion is pairing top-tier artistry with the heartfelt warmth of a neighbourhood favourite. Here, you aren't just another booking—you are family.",
    pillars: [
      {
        title: "Glam",
        description: "Bespoke artistry tailored to illuminate your unique features, skin tone, and personal aesthetic."
      },
      {
        title: "Care",
        description: "Gentle scalp handling, premium hygienic products, and dedicated stylists who listen carefully."
      },
      {
        title: "Confidence",
        description: "Leaving you radiant and ready to command every room, meeting, or celebration you attend."
      }
    ]
  },

  // --- WHY CHOOSE US (VERIFIABLE / GENERAL BENEFITS) ---
  WHY_CHOOSE_US: [
    {
      title: "Rated 4.3 by 624 Google Reviewers",
      description: "Consistent praise from hundreds of real Lagos clients for dependable artistry and professional service.",
      isVerifiedStat: true
    },
    {
      title: "Easy WhatsApp Booking",
      description: "No confusing signup portals. Chat directly with our front desk and lock in your appointment in minutes."
    },
    {
      title: "Full-Service Beauty Under One Roof",
      description: "Makeup, hair braiding, wig revamps, nails, lashes, and skincare—all coordinated in one convenient stop."
    },
    {
      title: "Friendly, Caring Team",
      description: "Experienced, patient professionals who prioritize your scalp comfort, nail health, and skin safety."
    },
    {
      title: "Convenient Surulere Location",
      description: "Easily accessible along Bode Thomas Street with straightforward navigation from Mainland and Island."
    },
    {
      title: "Special-Occasion Glam",
      description: "Specialized in wedding mornings, owambe parties, milestone birthdays, and editorial photoshoots."
    }
  ]
};
