import React from "react";
import "./App.scss";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/About/AboutSection";
import Restaurants from "./Components/Restaurants/Restaurants";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contactus from "./Components/ContacUs/ContactUs";
import BenefitApp from "./Components/BenefitApp/BenefitApp";
function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutSection />
      <Restaurants />
      <Testimonials />
      <Contactus />
      <BenefitApp />
    </div>
  );
}

export default App;
