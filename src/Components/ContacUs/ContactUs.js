import React from "react";
import { Row, Tabs, Form, Col, Container, Button } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div className="contactus-container">
      <p className="text-4xl">Cuentanos tu experiencia</p>
      <p className="text-2xl open-sans ">
        Don't miss out on our great offers &amp; Receive deals from all our top
        restaurants via e-mail.
      </p>
      <Container>
        <Form>
          <Form.Row>
            <Col lg>
              <Form.Group controlId="ControlInput">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control required type="text" placeholder="John Doe" />
              </Form.Group>
              <Form.Group required controlId="formGroupEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="j.doe@correo.com"
                />
              </Form.Group>
            </Col>

            <Col lg>
              <Form.Group controlId="ControlTextarea">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  className="fullHeight"
                  as="textarea"
                  rows={3}
                  placeholder="El día de hoy mi experiencia fue..."
                  required
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <div className="end">
            <Button className="btn-background" variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
