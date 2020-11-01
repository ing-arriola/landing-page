import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";

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

  const clearState = (ans) => {
    console.log(ans);
    setName("");
    setEmail("");
    setMessage("");
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
      .then((answer) => clearState(answer))
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
        <ContactForm
          sendOpinion={sendOpinion}
          writeName={writeName}
          writeEmail={writeEmail}
          writeMessage={writeMessage}
          name={name}
          email={email}
          message={message}
        />
      </Container>
    </div>
  );
};

export default ContactUs;
