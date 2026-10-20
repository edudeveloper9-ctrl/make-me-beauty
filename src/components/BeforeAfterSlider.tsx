import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 bg-[#FFF8F4] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 text-[#C2185B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The Make Me Difference
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E0F2B]">
            Interactive Transformation <br />
            <span className="italic text-[#C2185B]">Before & After Glow</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2A1822]/80 leading-relaxed">
            Drag the slider across to see how precision skin prep, tone matching, and expert artistry 
            elevate natural beauty into red-carpet perfection.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#5A1A3F] bg-[#FBE9EC]/70 px-3 py-1 rounded-full border border-[#D9A38F]/30">
            <AlertCircle className="w-3.5 h-3.5 text-[#C2185B]" />
            <span>Sample images in demo — client's authentic client transformations will be featured here.</span>
          </div>
        </div>

        {/* The Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-3xl mx-auto aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D9A38F]/40 select-none cursor-ew-resize bg-[#3E0F2B]"
        >
          {/* AFTER Image (Background full layer) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="After glam makeup transformation"
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* After Tag */}
            <span className="absolute top-4 right-4 bg-[#C2185B]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
              After Glam
            </span>
          </div>

          {/* BEFORE Image (Clipped layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Before makeup natural state"
                className="w-full h-full object-cover filter brightness-95"
                draggable={false}
              />
            </div>
            {/* Before Tag */}
            <span className="absolute top-4 left-4 bg-[#3E0F2B]/85 backdrop-blur-md text-[#D9A38F] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
              Natural State
            </span>
          </div>

          {/* Divider Line & Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#D9A38F] z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={() => setIsDragging(true)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8458B] border-2 border-white shadow-xl flex items-center justify-center text-white cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
              aria-label="Drag slider to view before and after"
            >
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom subtle instruction */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#3E0F2B]/75 backdrop-blur-sm text-white/90 text-[11px] px-3.5 py-1 rounded-full border border-white/10 pointer-events-none">
            ← Drag to compare transformation →
          </div>
        </div>

      </div>
    </section>
  );
};
