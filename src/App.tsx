// App home - Core app component
// Core imports
import React, { useEffect, useContext } from 'react';
import Router from 'routes/Router';
import { Link } from 'react-router-dom';

// Services / APIs
import ProductsData from 'mock-data/products';
import UsersData from 'mock-data/users';

// Styles
import './App.scss';

// Context
import { AppContext } from 'contexts/AppContext';

const App = () => {

  // Need to dispatch Users and Products data into our Context
  // We are just mocking a collection of data and keeping it in state as no persistence layer is required
  const {dispatch} = useContext(AppContext);

  useEffect(() => {
    // Invoke random generation of Users and Products
    const products = ProductsData.generateProducts(10);
    const users = UsersData.generateUsers(10);

    // Set our data in context to reflect a spoofed API call
    dispatch({
      type: 'set-products',
      payload: products
    });
    dispatch({
      type: 'set-users',
      payload: users
    });
    dispatch({
      type: 'add-purchase',
      payload: {
        id: "1234",
        product: "Hello world",
        datePurchased: new Date()
      }
    });
    // Empty array for dependencies as we do not want this effect to retrigger
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <Link to="/">Main</Link>
      <Link to="/admin">Admin</Link>
      <Router />
    </div>
  );
}

export default App;
