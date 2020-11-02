import React from "react";
import AppImage from "../../Assets/images/Benefit/app.svg";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BenefitApp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col fluid>
            <LazyLoadImage alt="AppImage" effect="blur" src={AppImage} />
          </Col>
          <Col className="align-items-center">
            <p className="text-4xl">
              Obten más beneficios Descarga nuestra App
            </p>
            <Row>
              <Col>
                <p>
                  Solicita rápido Curabitur in eleifend turpis, id vehicula
                  odio. Donec pulvinar tellus eget magna aliquet ultricies.
                </p>
              </Col>
              <Col>
                <p>
                  Fácil de Usar Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </Col>
            </Row>
            <Row>
              <p>
                Promociones especiales Curabitur in eleifend turpis, id vehicula
                odio. Donec pulvinar tellus eget magna aliquet ultricies.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BenefitApp;
