import React from 'react';
import ReactDOM from 'react-dom';
import ProductListing from './ProductListing';
import { AppContextProvider } from 'contexts/AppContext';

it(`ProductListing renders without crashing`, () => {
  const div = document.createElement('div');
  const sampleProduct = 
  {
    id: "5a72f6bb-530c-4f73-a18b-614faf6d1de9",
    name: "Officer Balanced generating white",
    price: 94.45,
    details: "Harum sed omnis dolore perferendis suscipit cum. Et animi vitae expedita et non velit tenetur qui. Non neque id sint qui rerum. Facere fugiat ex at. Perspiciatis temporibus ut explicabo iste dolorem adipisci."
  };
  ReactDOM.render(
    <AppContextProvider>
      <ProductListing product={sampleProduct} />
    </AppContextProvider>,
    div
  )
});
