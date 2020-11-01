import React from "react";
import ketchup from "../../Assets/images/Testimonials/testimonials_bg_ketchup.svg";
import left from "../../Assets/images/Testimonials/left.svg";
import right from "../../Assets/images/Testimonials/right.svg";
import { Row, Tabs, Form, Col, Container } from "react-bootstrap";
const Testimonials = () => {
  return (
    <div>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <img src={left} />
          </Col>
          <Col className="text-4xl" xs={6}>
            “El mejor lugar para degustar en familia y amigos!”
          </Col>
          <Col>
            <img className="testimonial-rightsvg bringfront " src={ketchup} />
            <img className="testimonial-rightsvg" src={right} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
