/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Marquee } from './components/Marquee.tsx';
import { QuickActions } from './components/QuickActions.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { ServicesGrid } from './components/ServicesGrid.tsx';
import { BridalSpotlight } from './components/BridalSpotlight.tsx';
import { Gallery } from './components/Gallery.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { BookingSteps } from './components/BookingSteps.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { NewsletterOffer } from './components/NewsletterOffer.tsx';
import { FAQAccordion } from './components/FAQAccordion.tsx';
import { LocationContact } from './components/LocationContact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const targetElement = document.getElementById('booking-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  const handleBridalConsultation = () => {
    setSelectedServiceForBooking('Bridal Consultation');
    const targetElement = document.getElementById('booking-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F4] text-[#2A1822] font-sans antialiased flex flex-col selection:bg-[#E8458B]/20 selection:text-[#3E0F2B]">
      
      {/* Accessible Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#C2185B] text-white px-4 py-2 rounded-lg font-bold shadow-xl outline-none"
      >
        Skip to main content
      </a>

      {/* Top Announcement Bar & Sticky Header */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* C. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* D. Marquee Strip */}
        <Marquee />

        {/* E. Quick Action Tiles */}
        <QuickActions />

        {/* F. Social Proof Band (Count-Up) */}
        <SocialProof />

        {/* G. Services Grid */}
        <ServicesGrid onDirectEnquiry={(svc) => handleOpenBooking(svc)} />

        {/* H. Bridal & Special Occasions Spotlight */}
        <BridalSpotlight onRequestConsultation={handleBridalConsultation} />

        {/* I. Style & Beauty Gallery */}
        <Gallery />

        {/* J. Before & After Transformation Slider */}
        <BeforeAfterSlider />

        {/* K. How Booking Works (3 Steps) */}
        <BookingSteps />

        {/* L. About Us */}
        <AboutUs />

        {/* M. Why Choose Us */}
        <WhyChooseUs />

        {/* N. Customer Reviews */}
        <Testimonials />

        {/* O. Newsletter & VIP Offer Banner */}
        <NewsletterOffer />

        {/* P. FAQ Accordion */}
        <FAQAccordion />

        {/* Q. Visit Us: Location & Booking Form */}
        <LocationContact initialService={selectedServiceForBooking} />
      </main>

      {/* R. Footer */}
      <Footer />

      {/* S. Floating Elements */}
      <FloatingActions onOpenChat={() => {}} />
      <ChatAssistant />
    </div>
  );
}
