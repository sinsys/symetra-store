// Product Listing component
// Core imports
import React, { useContext } from 'react';

// Types
import { Product } from 'types/types.d';

// Services / APIs
import ApiService from 'services/ApiService';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Styles
import './ProductListing.scss';

type ProductListingProps = {
  product: Product;
};

const ProductListing = (props: ProductListingProps) => {

  const { state, dispatch } = useContext(AppContext);
  const product: Product = props.product;

  const handleBuyProduct = () => {
    const makePurchase = new Promise((res, rej) => {
      if (Object.keys(state.currentUser).length === 0) {
        rej(false);
      }
      const purchase = ApiService.makePurchase(product.id, state.currentUser.id, false);
      res(purchase);
    });

    makePurchase
      .then(response => {
        dispatch({
          type: 'make-purchase',
          payload: response
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div className="ProductListing">
      <h2 className="title">{product.name}</h2>
      <p className="price">${product.price}</p>
      <p className="details">{product.details}</p>
      <button onClick={(e) => handleBuyProduct()}>Buy Me</button>
      <button>Apply Coupon</button>
    </div>
  );
}

export default ProductListing;