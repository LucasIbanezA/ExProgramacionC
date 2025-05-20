import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="card m-2 p-3 col-md-3">
      <h5>{product.name}</h5>
      <p>Precio: ${product.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Product;
