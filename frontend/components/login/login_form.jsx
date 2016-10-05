import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.defaultState = {
      username: "username",
      password: "password"
    };

    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input
          placeholder="username"
          direction="ltr"
          type="text"
          value={this.state.username}
          onChange={this.updateField("username")} />


        <input
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={this.updateField("password")}>
        </input>
        <br />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default LoginForm;
