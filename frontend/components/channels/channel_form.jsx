import React from 'react';
import Errors from '../errors';

class ChannelForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      purpose: ""
    };

    this.updateField = this.updateField.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleCancel() {
    this.props.closeNewChannelForm();
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
    this.props.closeNewChannelForm();
  }

  render() {
    return (
      <div className="base-form">
        <form onSubmit={this.handleCreate} className="channel-form group" >
          <div onClick={this.handleCancel}>
            <img src="assets/exit.png" />
            <p>esc</p>
          </div>

          <h1>Create a channel</h1>
          <Errors errorInfo={this.props.errors}/>
          <label>Name
            <input
              placeholder="# e.g. jokes"
              onChange={this.updateField("name")}
              value={this.state.name}
            />
          </label>

          <label>Purpose <span>(optional)</span>
            <input
              onChange={this.updateField("purpose")}
              value={this.state.purpose}
            />
            <span className="form-instruction">What's this channel about?</span>
          </label>

          <button type="submit">Create Channel</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ChannelForm;
