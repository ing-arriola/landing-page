import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar" variant="light">
        <Navbar.Brand className="navbar-logo" href="#home">
          Foodies
        </Navbar.Brand>
        <Nav className="mr-auto navbar-items ">
          <Nav.Link href="#features">Acerca de</Nav.Link>
          <Nav.Link href="#Restaurantes">Restaurantes</Nav.Link>
          <Nav.Link href="#Menú">Menú</Nav.Link>
          <Nav.Link href="#Contáctanos">Contáctanos</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
