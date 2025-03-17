
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MethodSection from '@/components/MethodSection';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsSection from '@/components/BenefitsSection';
import FaqSection from '@/components/FaqSection';
import BookingSection from '@/components/BookingSection';
import AuthorSection from '@/components/AuthorSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MethodSection />
      <AboutSection />
      <AuthorSection />
      <ProblemsSection />
      <AdvantagesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FaqSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
