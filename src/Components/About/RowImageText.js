import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const RowTextImage = ({ title, secondaryText, image, text1, text2 }) => {
  return (
    <Container fluid="lg">
      <Row className="align-items-center">
        <Col className="text-5xl bringfront relative-element" lg>
          <Image src={image} fluid />
          <div className="absolute-element right-20  ">
            <p className="white-text">{text1}</p>
            <p className="yellow-text">{text2}</p>
          </div>
        </Col>
        <Col className="ml-1" lg>
          <p>{title}</p>
          <p className="mr-5">{secondaryText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default RowTextImage;
