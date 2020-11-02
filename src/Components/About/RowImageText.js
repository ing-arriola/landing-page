import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const RowTextImage = ({ title, secondaryText, image, text1, text2 }) => {
  return (
    <div>
      <Row className="align-items-center">
        <Col className="relative-element" lg>
          <Image className="fullWidth" src={image} />
          <div className="absolute-element right-20 text-5xl ">
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
