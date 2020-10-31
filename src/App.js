import React from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection";
import Restaurants from "./Components/Restaurants/Restaurants";

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutSection />
      <Restaurants />
    </div>
  );
}

export default App;
