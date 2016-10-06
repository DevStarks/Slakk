import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit() {
    if (this.state.body.length > 0) {
      this.props.createMessage(this.state);
      this.setState({ body: "" });
    }
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.body}
          placeholder="Message"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MessageForm;
