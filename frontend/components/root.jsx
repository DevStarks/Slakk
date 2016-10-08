import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home';

import LoginPage from './login/login_page';
import SignupPage from './signup/signup_page';
import MessagesContainer from './messages/messages_container';
import { UsernameSignupContainer, PasswordSignupContainer } from './signup/master_signup_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/home");
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={LoginPage} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SignupPage} onEnter={_redirectIfLoggedIn}>
            <Route path="create-username" component={UsernameSignupContainer} />
            <Route path="create-password" component={PasswordSignupContainer} />
          </Route>

          <Route path="home" component={Home} onEnter={_ensureLoggedIn}>
            <IndexRoute component={MessagesContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
