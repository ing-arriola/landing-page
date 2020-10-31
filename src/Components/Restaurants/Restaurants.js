import React, { useState, useEffect } from "react";

import MapView from "./MapView";
import Row from "react-bootstrap/Row";
import { Tab, Tabs, Form, Col } from "react-bootstrap";

const Restaurants = () => {
  const [items, setItems] = useState({});
  const [filterItems, setFilterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState("takeaway");

  useEffect(() => {
    fetch("https://api.elaniin.dev/api/locations?type=takeaway")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });
  }, []);

  const changerImputHandler = (e) => {
    let locationToSearch;
    if (e.target.value !== "") {
      locationToSearch = e.target.value;
      const nearestLocation = items.data.filter((location) =>
        location.address.toLowerCase().includes(locationToSearch.toLowerCase())
      );
      console.log(filterItems);
      setFilterItems(nearestLocation);
      console.log(nearestLocation);
    }
  };

  return (
    <div className="restaurantes">
      <Row>
        <Col>
          <h2>Estamos para ti</h2>
          <Tabs
            className="first"
            defaultActiveKey="profile"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="takeaway" title="Para llevar">
              Para llevar
            </Tab>
            <Tab eventKey="delivery" title="Domicilio">
              Domicilio
            </Tab>
          </Tabs>

          <Form.Group className="searchName">
            <Form.Control
              onChange={changerImputHandler}
              size="sm"
              type="text"
              placeholder="Small text"
            />
          </Form.Group>
        </Col>
        {!filterItems ? (
          <p>cargando....</p>
        ) : (
          <ul>
            {filterItems.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        )}
        <Col>
          <MapView />
        </Col>
      </Row>
    </div>
  );
};
export default Restaurants;
