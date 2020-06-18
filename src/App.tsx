// App home - Core app component
// Core imports
import React from 'react';
import Router from 'routes/Router';
import { Link } from 'react-router-dom';

// Services / APIs
import ProductsData from 'mock-data/products';
import UsersData from 'mock-data/users';

// Styles
import './App.scss';

const App = () => {
  const products = ProductsData.generateProducts(10);
  const users = UsersData.generateUsers(10);
  console.log(products);
  console.log(users);
  return (
    <div className="App">
      <Link to="/">Main</Link>
      <Link to="/admin">Admin</Link>
      <Router/>
    </div>
  );
}

export default App;
