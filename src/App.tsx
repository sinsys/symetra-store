// App home - Core app component
// Core imports
import React, { useEffect, useContext } from 'react';
import Router from 'routes/Router';
import { Link } from 'react-router-dom';

// Services / APIs
import ApiService from 'services/ApiService';

// Components
import CurrentUserDisplay from 'components/CurrentUserDisplay/CurrentUserDisplay';

// Styles
import './App.scss';

// Context
import { AppContext } from 'contexts/AppContext';

const App = () => {

  // Need to dispatch Users and Products data into our Context
  // We are just mocking a collection of data and keeping it in state as no persistence layer is required
  const {dispatch} = useContext(AppContext);

  useEffect(() => {

      // Invoke random generation of Users and Products. You can set these to any values, but I have no pagination in place
      // 10 seemed like a good sample size to initialize with for proof of concept
      Promise.all([
        ApiService.getProducts(),
        ApiService.getUsers()
      ])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(([products, users, couponDetails]) => {
        // Set our data in context
        dispatch({
          type: 'set-products',
          payload: products
        });
        dispatch({
          type: 'set-users',
          payload: users
        });
        dispatch({
          type: 'set-current-user',
          payload: users[0]
        });
      });

    // Empty array for dependencies as we do not want this effect to retrigger
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/admin">Admin</Link>
          <CurrentUserDisplay />
        </nav>
      </header>
      <Router />
    </div>
  );
}

export default App;
