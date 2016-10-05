import React from 'react';
import Errors from '../errors';

class UsernameSignupView extends React.Component {

  render() {
    const {
      formInfo,
      submitHandler,
      updateField,
      checkUsername,
      errorInfo,
      handleClick
    } = this.props;

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
        <Errors errorInfo={this.props.errors}/>

        <button onClick={this.handleClick}>Next &#x279c;</button>
      </form>
    );
  }

  usernameCheckTimeout(e) {
    this.usernameCheckTimeoutId = setTimeout( () => {
      this.props.checkUsername(e.target.value);
    }, 200);
  }

  handleUsernameChange(e) {
    e.persist();
    this.updateField("username")(e);
    clearTimeout(this.usernameCheckTimeoutId);
    this.usernameCheckTimeout(e);
  }
}

export default UsernameSignupView;
