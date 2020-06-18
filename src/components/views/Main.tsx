// Main view component
// Core imports
import React from 'react';

// Services / Mock Data
import ProductsData from 'mock-data/products';

// Components
import ProductListing from 'components/ProductListing/ProductListing';

// Styles
import './Main.scss';

const Main = () => {

  const products = ProductsData.generateProducts(10);

  return (
    <div className="Main">
      {products.map(product => {
        return <ProductListing key={product.id} product={product} />
      })}
    </div>
  );
}

export default Main;