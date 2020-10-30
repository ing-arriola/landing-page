import React, { useState, useEffect } from "react";
import MapView from "./MapView";
import Row from "react-bootstrap/Row";
import { Tab, Tabs, Form, Col } from "react-bootstrap";

const Restaurants = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://api.elaniin.dev/api/locations?type=takeaway")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  return (
    <div className="restaurantes">
      <Row>
        <Col>
          <h2>Estamos para ti</h2>
          <Tabs className="first" defaultActiveKey="profile">
            <Tab eventKey="takeaway" title="Para llevar"></Tab>
            <Tab eventKey="delivery" title="Domicilio"></Tab>
          </Tabs>

          <Form.Group className="searchName">
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </Form.Group>

          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {items.data.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          )}
        </Col>

        <Col>
          <MapView />
        </Col>
      </Row>
    </div>
  );
};

export default Restaurants;
