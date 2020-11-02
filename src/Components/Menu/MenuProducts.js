import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const MenuProducts = () => {
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("https://api.elaniin.dev/api/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.log(error));
    fetch("https://api.elaniin.dev/api/menu")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {!products.data ? (
        <p>cargando....</p>
      ) : (
        products.data.map((item) => (
          <Card key={item.id} style={{ width: "38rem" }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default MenuProducts;
