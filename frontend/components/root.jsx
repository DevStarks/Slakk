import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LoginPage from './login/login_page'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="login" component={LoginPage}/>
      </Router>
    </Provider>
  );
};

export default Root;
