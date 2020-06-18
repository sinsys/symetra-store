import React from 'react';
import ReactDOM from 'react-dom';
import CurrentUserDisplay from './CurrentUserDisplay';
import { AppContextProvider } from 'contexts/AppContext';

it(`ProductListing renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppContextProvider>
      <CurrentUserDisplay />
    </AppContextProvider>,
    div
  )
});
