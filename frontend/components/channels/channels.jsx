import React from 'react';
import { hashToArray } from '../../utils/helpers';
import Modal from 'react-modal';
import ChannelFormContainer from './channel_form_container';
import ChannelBrowseContainer from './channel_browse_container';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelFormOpen: false,
      channelBrowseOpen: false
    };

    this.openNewChannelForm = this.openNewChannelForm.bind(this);
    this.closeNewChannelForm = this.closeNewChannelForm.bind(this);
    this.openChannelBrowse = this.openChannelBrowse.bind(this);
    this.closeChannelBrowse = this.closeChannelBrowse.bind(this);
  }

  componentWillMount() {
    this.props.getChannelCount();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userChannels !== newProps.userChannels) {
      const channels = hashToArray(newProps.userChannels);
      const newConversation = channels[channels.length - 1];
      this.props.changeConversation(newConversation);
    }
  }

  classNameHelper(channel) {
    if (channel.id === this.props.currentConversation.id) {
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

  openChannelBrowse() {
    this.setState({ channelBrowseOpen: true });
  }

  closeChannelBrowse() {
    this.setState({ channelBrowseOpen: false });
  }

  render() {
    const channelArr = hashToArray(this.props.userChannels);
    return (
      <section className="channels">
        <h2 onClick={this.openChannelBrowse}>CHANNELS
          <span>
            &nbsp;({this.props.channelCount})
          </span>
        </h2>

        <img onClick={this.openNewChannelForm} src={slakkAssets.newSign} />

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


        <Modal
          isOpen={this.state.channelBrowseOpen}
          onRequestClose={this.closeChannelBrowse}
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
          <ChannelBrowseContainer
            closeChannelBrowse={this.closeChannelBrowse}
            changeConversation={this.props.changeConversation}
          />
        </Modal>


      </section>
    );
  }
}

export default Channels;
