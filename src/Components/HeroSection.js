import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import { Media } from "react-bootstrap";
import burger from "../Assets/images/hero_hamburger.png";
import "bootstrap/dist/css/bootstrap.min.css";
const HeroSection = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <Media>
        <Media.Body className="align-self-center container-text-hero">
          <p className="text-hero">Un nuevo sabor esta en la ciudad</p>
          <p>
            Estamos a punto de descubrir un mundo lleno de sabores y de
            emociones inigualables.
          </p>
        </Media.Body>

        <img
          className="align-self-center burger-hero"
          src={burger}
          alt="Generic placeholder"
        />
      </Media>
    </div>
  );
};

export default HeroSection;
