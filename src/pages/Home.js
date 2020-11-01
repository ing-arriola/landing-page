import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AboutSection from "../Components/About/AboutSection";
import Restaurants from "../Components/Restaurants/Restaurants";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contactus from "../Components/ContacUs/ContactUs";
import BenefitApp from "../Components/BenefitApp/BenefitApp";
function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection />
      <Restaurants />
      <Testimonials />
      <Contactus />
      <BenefitApp />
    </div>
  );
}

export default Home;
