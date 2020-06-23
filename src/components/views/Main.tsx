// Main view component
// Core imports
import React, { useContext } from 'react';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Components
import ProductListing from 'components/ProductListing/ProductListing';

// Styles
import './Main.scss';

const Main = () => {

  // Establish state
  const { state } = useContext(AppContext);

  // Display our products
  const renderProducts = () => {
    if ( state.products.length > 0 ) {
      return state.products.map(product => {
        return <ProductListing key={product.id} product={product} />
      });
    }

  };

  return (
    <div className="Main">
      {renderProducts()}
    </div>
  );
}

export default Main;