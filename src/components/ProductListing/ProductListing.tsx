// Product Listing component
// Core imports
import React from 'react';

// Types
import { Product } from 'mock-data/types.d';

// Styles
import './ProductListing.scss';

type ProductListingProps = {
  product: Product;
};

const ProductListing = (props: ProductListingProps) => {
  const product = props.product;
  return (
    <div className="ProductListing">
      <h2 className="title">{product.name}</h2>
      <p className="price">${product.price}</p>
      <p className="details">{product.details}</p>
      <button>Buy Me</button>
    </div>
  );
}

export default ProductListing;