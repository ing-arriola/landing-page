import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import { Media } from "react-bootstrap";
import burger from "../Assets/images/hero_hamburger.png";
import "bootstrap/dist/css/bootstrap.min.css";
const HeroSection = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="container-hero">
        <div className="container-text-hero">
          <p className="text-hero">Un nuevo sabor esta en la ciudad</p>
          <p className="text-hero-secondary">
            Estamos a punto de descubrir un mundo lleno de sabores y de
            emociones inigualables.
          </p>
        </div>

        <img className=" burger-hero" src={burger} alt="Generic placeholder" />
      </div>
    </div>
  );
};

export default HeroSection;
