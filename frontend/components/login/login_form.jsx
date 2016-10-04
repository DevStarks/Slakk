import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.updateField("username")} />


        <input
          type="password"
          value={this.state.password}
          onChange={this.updateField("password")}>
        </input>

        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default LoginForm;
