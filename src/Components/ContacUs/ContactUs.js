import React from "react";
import { Row, Tabs, Form, Col, Container } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div className="contactus-container">
      <Container>
        <p>Cuentanos tu experiencia</p>
        <p>
          Don't miss out on our great offers &amp; Receive deals from all our
          top restaurants via e-mail.
        </p>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="j.doe@correo.com" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="El día de hoy mi experiencia fue..."
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
