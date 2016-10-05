import React from 'react';
import { withRouter } from 'react-router';
import SignupFormContainer from './signup_form_container';

class SignupPage extends React.Component {

  render () {
    return (
      <main>
        <aside className="login-main">
          <SignupFormContainer />
        </aside>

        <section className={this.formTypeHelper() + "-side-display"}>
          <img alt="logo"></img>
        </section>
      </main>
    );
  }

  formTypeHelper() {
    if (this.props.location.hash.substr(1) === "input-username") {
      return "username";
    } else {
      return "password";
    }
  }
}

export default withRouter(SignupPage);
