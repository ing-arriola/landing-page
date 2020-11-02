import React from "react";
import RowTextImage from "./RowTextImage";
import image from "../../Assets/images/Hero/hero_hamburger.svg";
import background from "../../Assets/images/Hero/Subtract.svg";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div className="mb-large">
      <Container className="pr-5 " fluid sm>
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
