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

  const renderProducts = () => {
    // Ensure render doesn't fail if state isn't initialized
    if (state) {
      return state.products.map(product => {
        return <ProductListing key={product.id} product={product} />
      })
    } else {
      return [];
    }
  };

  return (
    <div className="Main">
      {renderProducts()}
    </div>
  );
}

export default Main;