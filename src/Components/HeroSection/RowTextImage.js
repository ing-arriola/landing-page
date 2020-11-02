import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowTextImage = ({ headerText, secondaryText, image, background }) => {
  return (
    <Row className="align-items-center ml-5 ">
      <Col xs={6} className="ml-5 mr-5 ">
        <p className="text-hero" fluid>
          {headerText}
        </p>
        <p className="text-hero-secondary open-sans">{secondaryText}</p>
      </Col>
      <Col className="mr-5">
        <Image className=" mr-5 ml-5" src={image} fluid />
      </Col>
    </Row>
  );
};

export default RowTextImage;
