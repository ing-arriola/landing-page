import React, { useState, useEffect } from "react";
import MapView from "./MapView";
import Row from "react-bootstrap/Row";
import TabData from "./TabData";
import { Tab, Tabs, Form, Col, Container } from "react-bootstrap";

const Restaurants = () => {
  const [items, setItems] = useState({});
  const [delivery, setDelivery] = useState({});
  const [filterItems, setFilterItems] = useState([]);

  const [key, setKey] = useState("takeaway");

  useEffect(() => {
    fetch("https://api.elaniin.dev/api/locations?type=takeaway")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
    fetch("https://api.elaniin.dev/api/locations?type=delivery")
      .then((res) => res.json())
      .then((result) => {
        setDelivery(result);
      });
  }, []);

  const changerImputHandler = (e) => {
    let locationToSearch;
    //when e.target.value is empty all the locations are retrieved from state
    if (e.target.value !== "") {
      locationToSearch = e.target.value;
      if (key === "takeaway") {
        const nearestLocation = items.data.filter((location) =>
          location.address
            .toLowerCase()
            .includes(locationToSearch.toLowerCase())
        );
        setFilterItems(nearestLocation);
      } else {
        const nearestLocation = delivery.data.filter((location) =>
          location.address
            .toLowerCase()
            .includes(locationToSearch.toLowerCase())
        );
        setFilterItems(nearestLocation);
      }
    }
  };

  return (
    <section className="restaurantes mb-4">
      <Container fluid>
        <Row>
          <Col lg>
            <h2>Estamos para ti</h2>
            <Tabs
              className="first"
              defaultActiveKey="profile"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="takeaway" title="Para llevar"></Tab>
              <Tab eventKey="delivery" title="Domicilio"></Tab>
            </Tabs>

            <Form.Group>
              <Form.Control
                onChange={changerImputHandler}
                size="sm"
                type="text"
                placeholder="Buscar por nombre o direccion"
              />
            </Form.Group>
            <TabData itemsToShow={filterItems} />
          </Col>

          <Col className="map-container" lg>
            <MapView locations={filterItems} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Restaurants;

/*

  {!filterItems ? (
          <p>cargando....</p>
        ) : (
          <ul>
            {filterItems.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        )}*/
