import React from "react";
import Card from "react-bootstrap/Card";
const TabData = ({ itemsToShow }) => {
  return (
    <div>
      {!itemsToShow ? (
        <p>cargando....</p>
      ) : (
        itemsToShow.map((item) => (
          <Card key={item.id} style={{ width: "38rem" }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{`Abierto de ${item.opening_time} - ${item.closing_time}`}</Card.Text>
              <Card.Text>{item.address}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default TabData;
