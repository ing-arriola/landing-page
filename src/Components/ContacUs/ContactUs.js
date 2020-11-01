import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const writeName = (e) => {
    setName(e.target.value);
  };

  const writeEmail = (e) => {
    setEmail(e.target.value);
  };

  const writeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendOpinion = (e) => {
    e.preventDefault();
    fetch("https://api.elaniin.dev/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((answer) => console.log(answer))
      .catch((error) => console.log(error));
  };

  return (
    <div className="contactus-container">
      <p className="text-4xl">Cuentanos tu experiencia</p>
      <p className="text-2xl open-sans ">
        Don't miss out on our great offers &amp; Receive deals from all our top
        restaurants via e-mail.
      </p>
      <Container>
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
      </Container>
    </div>
  );
};

export default ContactUs;
