import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { AppContextProvider } from 'contexts/AppContext';

it(`App renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>,
    div
  )
})
