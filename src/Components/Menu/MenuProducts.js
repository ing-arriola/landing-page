import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const MenuProducts = () => {
  /*const [categories, setCategories] = useState({});*/
  const [products, setProducts] = useState({});

  useEffect(() => {
    /*fetch("https://api.elaniin.dev/api/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.log(error));*/
    fetch("https://api.elaniin.dev/api/menu")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cards-container">
      {!products.data ? (
        <p>cargando....</p>
      ) : (
        products.data.map((item) => (
          <Card lg>
            <Card.Img variant="top" src={item.image} />

            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{item.price}</small>
            </Card.Footer>
          </Card>
        ))
      )}
    </div>
  );
};

export default MenuProducts;
