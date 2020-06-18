import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { AppContextProvider } from 'contexts/AppContext';

it(`Main renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppContextProvider>
      <Main />
    </AppContextProvider>,
    div
  )
})
