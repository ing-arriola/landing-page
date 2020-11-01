import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowTextImage = ({ title, secondaryText, image, text1, text2 }) => {
  return (
    <Row className="align-items-center">
      <Col className="text-5xl bringfront relative-element">
        <Image src={image} fluid />
        <div className="absolute-element paragraph-container ">
          <p className="white-text">{text1}</p>
          <p className="yellow-text">{text2}</p>
        </div>
      </Col>
      <Col className="ml-1">
        <p>{title}</p>
        <p className="mr-5">{secondaryText}</p>
      </Col>
    </Row>
  );
};

export default RowTextImage;
