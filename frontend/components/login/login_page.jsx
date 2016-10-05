import React from 'react';
import HeaderAuthButton from './header_auth_button';
import LoginFormContainer from './login_form_container';

const LoginPage = () => {
  return (
    <main>
      <header className="login-header">
        <a className="logo">I'm a logo</a>
        <HeaderAuthButton />
      </header>

      <div className="login-main">
        <h1>Sign in to Slakk</h1>
        <p>Enter your <b>email address</b> and <b>password</b>.</p>
        <LoginFormContainer />
      </div>

      <footer className="login-footer">
        <p className="footer-info">Created by Devin Starks.</p>
        <nav>
          <ul className="footer-links">
          </ul>
        </nav>
      </footer>
    </main>
  );
};

export default LoginPage;
