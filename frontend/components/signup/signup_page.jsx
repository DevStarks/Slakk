import React from 'react';



class SignupPage extends React.Component {


  formTypeHelper() {
    if (window.location.hash.match(/create-username/)) {
      return "username";
    } else {
      return "password";
    }
  }

  render () {
    return (
      <main className={this.formTypeHelper() + "-signup-display"}>
        <aside className="base-form signup-container">
          {this.props.children}
        </aside>

        <a className="logo">S(lakk)</a>
      </main>
    );
  }


}

export default SignupPage;
