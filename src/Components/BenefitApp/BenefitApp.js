import React from "react";
import AppImage from "../../Assets/images/Benefit/app.svg";

import { Row, Tabs, Form, Col, Container } from "react-bootstrap";
const BenefitApp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img src={AppImage} />
          </Col>
          <Col>
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
