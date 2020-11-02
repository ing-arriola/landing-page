import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RowTextImage = ({ headerText, secondaryText, image, background }) => {
  return (
    <Row className="align-items-center ml-5 wrapper" fluid>
      <Col className="ml-5 mr-5 ">
        <p className="text-hero" fluid>
          {headerText}
        </p>
        <p className="text-hero-secondary open-sans">{secondaryText}</p>
      </Col>
      <Col className="mr-5" fluid lg>
        <LazyLoadImage
          alt="image-hero"
          effect="blur"
          className="fullWidth "
          src={image}
        />
      </Col>
    </Row>
  );
};

export default RowTextImage;
