import React from 'react';
import Errors from '../errors';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      first_name: "",
      last_name: ""
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
    // TODO: finish this function...consider putting this logic in the container.
    // Add handler to check username for availability. Deal with how current user is set.

    if (this.props.location.hash.substr(1) === "username") {
      this.props.router.push("password");
    } else {
      e.preventDefault();
      this.props.login(this.state);
    }
  }

  render() {
    return(
      <form className="name-form" onSubmit={this.handleSubmit}>
        <input
          placeholder="first name"
          type="text"
          value={this.state.first_name}
          onChange={this.updateField("username")} />

        <input
          placeholder="last name"
          type="text"
          value={this.state.last_name}
          onChange={this.updateField("username")} />


        <input
          placeholder="username"
          type="username"
          value={this.state.username}
          onChange={this.updateField("username")}>
        </input>
        <Errors errorInfo={this.props.errors}/>

        <button type="submit">Next &#x279c;</button>
      </form>
    );
  }
}

export default LoginForm;
