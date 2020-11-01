import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import RowTextImage from "./RowTextImage";
import image from "../../Assets/images/Hero/hero_hamburger.png";
import background from "../../Assets/images/Hero/Subtract.svg";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <Container className="pr-5" fluid>
        <RowTextImage
          headerText="Un nuevo sabor esta en la ciudad"
          secondaryText="Estamos a punto de descubrir un mundo lleno de sabores y de emociones
          inigualables."
          image={image}
          background={background}
        />
      </Container>
    </div>
  );
};

export default HeroSection;
