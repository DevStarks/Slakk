import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as API from './utils/session_api_util';
import configureStore from './store/store';
import { arrayToHash } from './utils/helpers';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      },
      channels: arrayToHash(window.currentUser.channels)
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootNode);
});
