import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Aos from "aos";
import "aos/dist/aos.css";

const RowTextImage = ({ title, secondaryText, image, text1, text2 }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

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

          <div
            className="absolute-element right-20 text-5xl"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
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
