import React from 'react';
import {withRouter} from 'react-router';

const HeaderAuthButton = ({ text, clickCallback }) => {
  return (
    <button onClick={renderSignUp.bind(this)}>Sign Up</button>
  )
};

const renderSignUp = function() {
  return () => this.props.router.push("/signup");
}


export default withRouter(HeaderAuthButton);
