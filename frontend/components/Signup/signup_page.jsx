import React from 'react';
import { withRouter } from 'react-router';


class SignupPage extends React.Component {
  render () {
    return (
      <main>
        <aside className="login-main">
          {this.props.children}
        </aside>

        <section className={this.formTypeHelper() + "-side-display"}>
          <img alt="logo"></img>
        </section>
      </main>
    );
  }


  formTypeHelper() {
    // TODO check this. style all session stuff.......
    if (window.location.hash.match(/create-username/)) {
      return "username";
    } else {
      return "password";
    }
  }
}

export default withRouter(SignupPage);
