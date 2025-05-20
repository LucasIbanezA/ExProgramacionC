import React, { useState } from 'react';
import Product from './Product';

const productsData = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Auriculares", price: 150 },
  { id: 3, name: "Teclado Mecánico", price: 90 },
  { id: 4, name: "Mouse Gamer", price: 75 }
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Lista de Productos</h2>
      <div className="row">
        {productsData.map(prod => (
          <Product key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </div>
      <div className="mt-4">
        <h4>Carrito ({cart.length}) productos</h4>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
