// Router component - Routes users based on URL path
// Core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// View Components
import Main from 'components/views/Main';
import Admin from 'components/views/Admin';

const Router = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={Main}
      />
      <Route
        exact path="/admin"
        component={Admin}
      />
    </Switch>
  )
};

export default Router;