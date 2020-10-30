import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";

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
    <div>
      <Row className="align-items-center">
        <h2>Estamos para ti</h2>
      </Row>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {items.data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Restaurants;
