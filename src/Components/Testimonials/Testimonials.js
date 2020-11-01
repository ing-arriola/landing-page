import React from "react";
import ketchup from "../../Assets/images/Testimonials/testimonials_bg_ketchup.svg";
import left from "../../Assets/images/Testimonials/left.svg";
import right from "../../Assets/images/Testimonials/right.svg";
import { Row, Tabs, Form, Col, Container } from "react-bootstrap";
const Testimonials = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img src={left} />
          </Col>
          <Col className="text-4xl align-center " xs={6}>
            “El mejor lugar para degustar en familia y amigos!”
          </Col>
          <Col className="relative-element">
            <img className="bringfront absolute-element" src={ketchup} />
            <img className="absolute-element right-0  " src={right} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
