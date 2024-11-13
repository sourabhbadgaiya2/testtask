import React from "react";

import HeroSection from "./components/Hero/HeroSection";
import TrustedBy from "./components/Trusted/TrustedBy";
import FeaturesSection from "./components/features/FeaturesSection";
import PricingSection from "./components/price/Price";
import TestimonialsSection from "./components/TestimonialSection/TestimonialsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
