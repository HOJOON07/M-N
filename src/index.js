import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import rootReducer from './store/index';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);

reportWebVitals();
