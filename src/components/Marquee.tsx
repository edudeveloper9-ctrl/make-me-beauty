import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Makeup & Bridal Glam',
    'Knotless Braids',
    'Custom Wig Installs',
    'Nail Studio (Mani & Pedi)',
    'Lash Extensions',
    'Facials & Skincare',
    'Luxury Gele Tying',
    'Owambe Transformations',
  ];

  return (
    <div 
      id="marquee"
      className="bg-[#D9A38F] text-[#3E0F2B] py-3.5 overflow-hidden border-y border-[#3E0F2B]/15 relative select-none shadow-inner"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Repeat 4 times for infinite seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-6 mx-3">
            {items.map((item, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span className="font-serif text-sm sm:text-base font-bold tracking-wider uppercase text-[#3E0F2B]">
                  {item}
                </span>
                <span className="text-[#C2185B] text-xs font-black">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
