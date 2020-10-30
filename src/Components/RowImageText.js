import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowTextImage = ({ title, secondaryText, image }) => {
  return (
    <Row className="align-items-center">
      <Col>
        <Image src={image} fluid />
      </Col>
      <Col xs={6}>
        <p>{title}</p>
        <p>{secondaryText}</p>
      </Col>
    </Row>
  );
};

export default RowTextImage;
