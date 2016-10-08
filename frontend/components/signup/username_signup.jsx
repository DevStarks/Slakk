import React from 'react';
import Errors from '../errors';
import { withRouter } from 'react-router';


class UsernameSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      type: "username"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.clearSessionErrors();
    };
  }

  handleUsernameChange(e) {
    e.persist();
    this.updateField("username")(e);
    clearTimeout(this.usernameCheckTimeoutId);
    this.usernameCheckTimeout(e);
  }

  usernameCheckTimeout(e) {
    this.usernameCheckTimeoutId = setTimeout( () => {
      this.props.checkUsername(e.target.value);
    }, 200);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.storeTempUser(this.state);
    this.props.router.push("signup/create-password");
  }

  render() {
    return (
      <form className="name-form">
        <h1>What's your name?</h1>
        <p>Your name will be displayed along with your messages in Slakk.</p>
        <input
          placeholder="first name"
          type="text"
          value={this.state.first_name}
          onChange={this.updateField("first_name")} />

        <input
          placeholder="last name"
          type="text"
          value={this.state.last_name}
          onChange={this.updateField("last_name")} />

        <input
          placeholder="username"
          type="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}>
        </input>
        <Errors className="error" errorInfo={this.props.errors}/>

        <button onClick={this.handleClick}>Next &#x279c;</button>
      </form>
    );
  }
}

export default withRouter(UsernameSignup);
