import React from 'react';

import SignUpFormContainer from './signup_form_container';

const SignupPage = function() {
  return (
    <main>
      <aside className="login-main">
        <h1>What's your name?</h1>
        <p>Your name will be displayed along with your messaged in Slakk.</p>
        <SignupFormContainer />
      </aside>

      <section className={formTypeHelper.call(this) + "-side-display"}>
        <img alt="logo"></img>
      </section>
    </main>
  );
};

const formTypeHelper = () => {
  if (this.props.location.hash.substr(1) === "username") {
    return "username";
  } else {
    return "password";
  }
};

export default SignupPage;
