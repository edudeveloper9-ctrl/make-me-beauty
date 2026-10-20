import React, { useState } from 'react';
import { Camera, Sparkles, X, MessageCircle, Heart, Instagram, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { buildWhatsAppLink } from '../utils/businessLogic.ts';

interface GalleryItem {
  id: string;
  title: string;
  category: 'makeup' | 'hair' | 'nails' | 'bridal';
  categoryLabel: string;
  image: string;
  aspect: string; // for masonry variation
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Regal Traditional Bride Makeup',
      category: 'bridal',
      categoryLabel: 'Bridal Glam',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'gal-2',
      title: 'Neat Ombre Knotless Braids',
      category: 'hair',
      categoryLabel: 'Braids & Styling',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 'gal-3',
      title: 'Soft Glam with Dewy Highlight',
      category: 'makeup',
      categoryLabel: 'Makeup',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-square',
    },
    {
      id: 'gal-4',
      title: 'French Ombre Acrylic Nail Set',
      category: 'nails',
      categoryLabel: 'Nails',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 'gal-5',
      title: 'Seamless HD Frontal Wig Melt',
      category: 'hair',
      categoryLabel: 'Wig Install',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'gal-6',
      title: 'Precision Eyebrows & Full Lashes',
      category: 'makeup',
      categoryLabel: 'Lashes & Brows',
      image: 'https://images.unsplash.com/photo-1583001800475-4089c72ecdc4?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-square',
    },
    {
      id: 'gal-7',
      title: 'Sculpted Pleated Gele & Glam',
      category: 'bridal',
      categoryLabel: 'Bridal & Gele',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'gal-8',
      title: 'Radiant Melanin Skin Treatment',
      category: 'makeup',
      categoryLabel: 'Skincare Glow',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[4/5]',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Looks' },
    { id: 'bridal', label: 'Bridal & Owambe' },
    { id: 'makeup', label: 'Glam Makeup' },
    { id: 'hair', label: 'Braids & Wigs' },
    { id: 'nails', label: 'Nails Studio' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#FBE9EC]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            Style & Beauty Portfolio
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E0F2B]">
            Inspiration for Your <br />
            <span className="italic text-[#C2185B]">Next Glow-Up</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2A1822]/80 leading-relaxed">
            Browse snapshots of hairstyles, lashes, nail sets, and owambe beauty. 
            Tap any image to zoom in and book that exact look directly on WhatsApp.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#5A1A3F] bg-white/80 px-3 py-1 rounded-full border border-[#D9A38F]/30 shadow-xs">
            <AlertCircle className="w-3.5 h-3.5 text-[#C2185B]" />
            <span>Sample images in demo — client's authentic salon work will replace these.</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#3E0F2B] text-[#D9A38F] shadow-sm'
                  : 'bg-white text-[#2A1822]/70 hover:text-[#C2185B] border border-[#D9A38F]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#3E0F2B] border border-[#D9A38F]/30 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A38F]">
                  {item.categoryLabel}
                </span>
                <h3 className="text-sm font-serif font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <span className="text-xs text-[#E8458B] font-semibold mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Tap to view & book
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-[#D9A38F]/30 shadow-pink-soft">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#3E0F2B]">
                  Follow Our Glow On Instagram
                </h3>
                <p className="text-xs text-[#2A1822]/70 font-medium">
                  @makemebeautyplace • Daily salon transformations & tips
                </p>
              </div>
            </div>

            <a
              href={SITE_CONFIG.SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#FBE9EC] hover:bg-[#C2185B] text-[#C2185B] hover:text-white font-semibold text-xs transition-colors"
            >
              Follow on Instagram
            </a>
          </div>

          {/* 6 mini Instagram grid photos */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {galleryItems.slice(0, 6).map((post, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative group">
                <img
                  src={post.image}
                  alt="Make Me Instagram look"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-current text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#3E0F2B]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#D9A38F]/50 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9A38F]">
                  {lightboxItem.categoryLabel}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#3E0F2B]">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-[#2A1822]/70 mt-1">
                  Sample portfolio image in client demo.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(
                    SITE_CONFIG.WHATSAPP_NUMBER,
                    `Hello Make Me Beauty Place! I loved this look from your gallery: "${lightboxItem.title}". Can I book an appointment for something like this?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Love this look? Book it on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
