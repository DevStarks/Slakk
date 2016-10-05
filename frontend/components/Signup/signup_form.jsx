import React from 'react';
import Errors from '../errors';
import UsernameSignupView from './username_signup_view';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: ""
    };

    this.updateField = this.updateField.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleClick(e) {
    if (this.props.location.hash.substr(1) === "username") {
      this.props.router.push("password");
    } else {
      e.preventDefault();
      this.props.login(this.state);
    }
  }


  render() {
    return(
      <UsernameSignupView
        formInfo={this.state}
        submitHandler={this.handleClick}
        updateField={this.updateField}
        checkUsername={this.props.checkUsername}
        errorInfo={this.props.errors}
        handleClick={this.handleClick} />

    );
  }
}

export default SignupForm;
