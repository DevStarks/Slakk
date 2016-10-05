import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as API from './utils/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;
  ReactDOM.render(<Root store={store} />, rootNode);
});
