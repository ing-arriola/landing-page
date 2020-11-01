import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const ContactForm = ({
  sendOpinion,
  writeName,
  writeEmail,
  writeMessage,
  name,
  email,
  message,
}) => {
  return (
    <Form onSubmit={sendOpinion}>
      <Form.Row>
        <Col lg>
          <Form.Group controlId="ControlInput">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="John Doe"
              onChange={writeName}
              value={name}
            />
          </Form.Group>
          <Form.Group required controlId="formGroupEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="j.doe@correo.com"
              onChange={writeEmail}
              value={email}
            />
          </Form.Group>
        </Col>

        <Col lg>
          <Form.Group controlId="ControlTextarea">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              required
              className="fullHeight"
              as="textarea"
              rows={5}
              placeholder="El día de hoy mi experiencia fue..."
              onChange={writeMessage}
              value={message}
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
  );
};

export default ContactForm;
