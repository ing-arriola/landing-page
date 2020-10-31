import React from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection";
import Restaurants from "./Components/Restaurants/Restaurants";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contactus from "./Components/ContacUs/ContactUs";
function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutSection />
      <Restaurants />
      <Testimonials />
      <Contactus />
    </div>
  );
}

export default App;
