import React from 'react';
import HeaderAuthButton from './header_auth_button';
import LoginFormContainer from './login_form_container';

const LoginPage = () => {
  return (
    <main>
      <header>
        <a className="logo"></a>
        <HeaderAuthButton />
      </header>

      <div>
        <h1>Sign in to Slakk</h1>
        <p>Enter your <b>email address</b> and <b>password</b>.</p>
        <LoginFormContainer />
      </div>

      <footer>
        <a className="thumb-logo"></a>
        <nav>
          <ul className="footer-links">
          </ul>
        </nav>
      </footer>
    </main>
  );
};

export default LoginPage;
