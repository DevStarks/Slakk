import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.buttons = this.buttons.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  componentDidMount() {
    if (this.props.type === "edit") {
      this.setState({ body: this.props.messageInfo.body });
    }
  }

  handleSubmit() {
    if (this.state.body.length > 0) {
      console.log(this.props.type);
      if (this.props.type === "new") {
        this.props.createMessage(this.state);
        this.setState({ body: "" });
      } else if (this.props.type === "edit") {
        this.props.editMessage(
          Object.assign({}, this.props.messageInfo, this.state),
          this.props.unmount()
        );
      }
    }
  }

  buttons() {
    if (this.props.type === "edit") {
      return (
        <div className="editButtons">
          <button onClick={this.props.unmount}>Cancel</button>
          <button onClick={this.handleSubmit}>Save Changes</button>
        </div>
      );
    }
  }

  render() {
    return (
      <form ref="messageForm" className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.body}
          placeholder="Message"
          onChange={this.handleChange}
        />
        {this.buttons()}
      </form>
    );
  }
}

export default MessageForm;
