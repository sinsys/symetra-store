// Main view component
// Core imports
import React from 'react';

// Services / Mock Data
import ProductsData from 'mock-data/products';
// Styles
import './Main.scss';

const Main = () => {

  const products = ProductsData.generateProducts(10);

  return (
    <div className="Main">
      {products.map(product => {
        return (
          <div key={product.id} className="Product">
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.details}</p>
            <button>Buy Me</button>
          </div>
        )
      })}
    </div>
  );
}

export default Main;