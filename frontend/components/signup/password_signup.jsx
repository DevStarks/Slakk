import React from 'react';
import Errors from '../errors';
import merge from 'lodash/merge';
import { withRouter, hashHistory } from 'react-router';


class PasswordSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.currentUser) {
      hashHistory.push("/");
    }
  }


  handleChange(e) {
    this.setState({ password: e.currentTarget.value });
    this.disabled = this.handleButtonDisable();
  }

  handleButtonDisable() {
    return this.state.password.length < 6;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(merge(this.props.tempUser, this.state));
  }

  render() {
    return (
      <form className="password-form" onSubmit={this.handleSubmit}>
        <h1>Set your password</h1>
        <p>Choose a password for signing in to Slakk.</p>
        <input
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

      <p className="caption">Passwords must be at least 6 characters long.</p>

        <Errors errorInfo={this.props.errors}/>

        <button type="submit" disabled={this.handleButtonDisable()}>Next &#x279c;</button>
      </form>
    );

  }

}

export default PasswordSignup;
