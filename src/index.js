/* eslint-disable no-underscore-dangle, react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App, { store } from './pages/app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

