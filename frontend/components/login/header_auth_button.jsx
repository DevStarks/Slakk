import React from 'react';
import {withRouter} from 'react-router';

class HeaderAuthButton extends React.Component {
  render() {
    return (
      <button className="signup-button" onClick={this.renderSignUp.bind(this)}>Sign Up</button>
    );
  }
  renderSignUp() {
    this.props.router.push("/signup");
  }
}



export default withRouter(HeaderAuthButton);
