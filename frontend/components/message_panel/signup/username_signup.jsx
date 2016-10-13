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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.buttonEnabled = this.buttonEnabled.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      if (field === "username") {
        this.props.clearSessionErrors();
      }
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

  handleSubmit(e) {
    e.preventDefault();
    if (!this.formIncomplete()) {
      this.props.storeTempUser(this.state);
      this.props.router.push("signup/create-password");
    }
  }

  formIncomplete() {
    return (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.username === "" ||
      this.props.errors.length
    );
  }

  buttonEnabled() {
    if (this.formIncomplete()) {
      return "disabled";
    } else {
      return "";
    }
  }

  render() {
    return (
      <form className="name-form" onSubmit={this.handleSubmit}>
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

        <button
          type="submit"
          className={this.buttonEnabled()}
          disabled={this.formIncomplete()}
        >
          Next &#x279c;
        </button>
      </form>
    );
  }
}

export default withRouter(UsernameSignup);
