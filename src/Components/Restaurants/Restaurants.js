import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, Form, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TabData from "./TabData";
import MapView from "./MapView";

const Restaurants = () => {
  const [items, setItems] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [key, setKey] = useState("takeaway");

  const getLocations = async (type) => {
    const response = await axios.get("https://api.elaniin.dev/api/locations", {
      params: { type: type },
    });
    type === "takeaway"
      ? setItems(response.data.data)
      : setDelivery(response.data.data);
  };

  useEffect(() => {
    getLocations("takeaway");
    getLocations("delivery");
  }, []);

  const changerImputHandler = (e) => {
    let locationToSearch;

    //when e.target.value is empty all the locations are retrieved from state
    if (e.target.value !== "") {
      locationToSearch = e.target.value;
      if (key === "takeaway") {
        const nearestLocation = items.filter(
          (location) =>
            location.address
              .toLowerCase()
              .includes(locationToSearch.toLowerCase()) ||
            location.name.toLowerCase().includes(locationToSearch.toLowerCase())
        );
        setFilterItems(nearestLocation);
      } else {
        const nearestLocation = delivery.filter(
          (location) =>
            location.address
              .toLowerCase()
              .includes(locationToSearch.toLowerCase()) ||
            location.name.toLowerCase().includes(locationToSearch.toLowerCase())
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
