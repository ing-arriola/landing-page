import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowTextImage = ({ headerText, secondaryText, image }) => {
  return (
    <Row className="align-items-center">
      <Col xs={6}>
        <p className="text-hero">{headerText}</p>
        <p className="text-hero-secondary">{secondaryText}</p>
      </Col>
      <Col>
        <Image src={image} fluid />
      </Col>
    </Row>
  );
};

export default RowTextImage;
