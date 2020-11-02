import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RowTextImage = ({ title, secondaryText, image, text1, text2 }) => {
  return (
    <div>
      <Row className="align-items-center">
        <Col className="relative-element" fluid lg>
          <LazyLoadImage
            alt="image-hero"
            effect="blur"
            className="fullWidth"
            src={image}
          />

          <div className="absolute-element right-20 text-5xl about-title ">
            <p className="white-text">{text1}</p>
            <p className="yellow-text">{text2}</p>
          </div>
        </Col>
        <Col className="ml-1 about-description" lg>
          <p>{title}</p>
          <p className="mr-5 open-sans text-lg">{secondaryText}</p>
        </Col>
      </Row>
    </div>
  );
};

export default RowTextImage;
