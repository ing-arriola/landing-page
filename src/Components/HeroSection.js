import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import RowTextImage from "./RowTextImage";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <Container>
        <RowTextImage
          headerText="Un nuevo sabor esta en la ciudad"
          secondaryText="Estamos a punto de descubrir un mundo lleno de sabores y de emociones
          inigualables."
        />
      </Container>
    </div>
  );
};

export default HeroSection;
