// App home - Core app component
// Core imports
import React from 'react';
import Router from 'routes/Router';
import { Link } from 'react-router-dom';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Link to="/">Main</Link>
      <Link to="/admin">Admin</Link>
      <Router/>
    </div>
  );
}

export default App;
