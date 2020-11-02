import React, { useEffect } from "react";
import ketchup from "../../Assets/images/Testimonials/testimonials_bg_ketchup.svg";
import left from "../../Assets/images/Testimonials/left.svg";
import right from "../../Assets/images/Testimonials/right.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img src={left} alt="" />
          </Col>
          <Col
            className="text-4xl align-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            xs={6}
          >
            “El mejor lugar para degustar en familia y amigos!”
          </Col>
          <Col className="relative-element">
            <img
              className="bringfront absolute-element"
              src={ketchup}
              alt="ketchup"
            />
            <img className="absolute-element right-0  " src={right} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
