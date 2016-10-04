import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import * as API from './utils/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById('root');

  window.store = configureStore();
  window.API = API;
  ReactDOM.render(<h1>Hey</h1>, rootNode);
});

// API.signup({user: {
//   username: "testingsignup",
//   first_name: "test",
//   last_name: "testerson",
//   password: "starwars"
// }}, (data) => console.log(data), data => console.log(data));
