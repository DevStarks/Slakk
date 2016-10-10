import React from 'react';



class SignupPage extends React.Component {
  render () {
    return (
      <main className={this.formTypeHelper() + "-signup-display"}>
        <aside className="base-form signup-container">
          {this.props.children}
        </aside>

        <img alt="logo"></img>
      </main>
    );
  }


  formTypeHelper() {

    if (window.location.hash.match(/create-username/)) {
      return "username";
    } else {
      return "password";
    }
  }
}

export default SignupPage;
