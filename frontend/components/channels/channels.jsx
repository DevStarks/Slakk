import React from 'react';
import { hashToArray } from '../../utils/helpers';
import Modal from 'react-modal';
import ChannelFormContainer from './channel_form_container';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = { channelFormOpen: false };

    this.openNewChannelForm = this.openNewChannelForm.bind(this);
    this.closeNewChannelForm = this.closeNewChannelForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const channels = hashToArray(newProps.channels);
    const newConversation = channels[channels.length - 1];
    this.props.changeConversation(newConversation);
  }

  classNameHelper(channel) {
    if (channel === this.props.currentConversation) {
      return "selected";
    } else {
      return "";
    }
  }

  allChannels(channels) {
    return channels.map( channel => {
      return (
        <li
          className={this.classNameHelper(channel)}
          key={channel.id}
          onClick={this.handleClick(channel)}
        >
          <span>#</span> {channel.name}
        </li>
      );
    });
  }

  handleClick(channel) {
    return () => {
      this.props.changeConversation(channel);
    };
  }

  openNewChannelForm() {
    this.setState({ channelFormOpen: true });
  }

  closeNewChannelForm() {
    this.setState({ channelFormOpen: false });
  }

  render() {
    const channelArr = hashToArray(this.props.channels);
    return (
      <section className="channels">
        <h2>CHANNELS ({channelArr.length})</h2>
        <img onClick={this.openNewChannelForm} src='assets/new.png' />
        <ul>
          {this.allChannels(channelArr)}
        </ul>

        <Modal
          isOpen={this.state.channelFormOpen}
          onRequestClose={this.closeNewChannelForm}
          style={{
            overlay: {},
            content: {
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          }}
        >
          <ChannelFormContainer closeNewChannelForm={this.closeNewChannelForm} />
        </Modal>
      </section>
    );
  }
}

export default Channels;
