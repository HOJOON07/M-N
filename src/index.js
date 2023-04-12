import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import rootReducer from './store/index';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/** state 값을 local storage에 저장하는 함수 */
const saveStateToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

/** local storage에서 state를 불러오는 함수 */
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

/** state를 불러올 때 local storage에서 불러오도록 수정 */
const store = configureStore(
  {
    reducer: rootReducer,
    preloadedState: loadStateFromLocalStorage(),
  },
  reduxDevTool
);

/** state가 변경될 때마다 local storage에 저장되도록 수정 */
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);

reportWebVitals();
