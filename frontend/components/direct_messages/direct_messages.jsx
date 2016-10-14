import React from 'react';
import Modal from 'react-modal';
import { hashToArray } from '../../utils/helpers';
import DirectMessageFormContainer from './direct_message_form_container';

class DirectMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { directMessageFormOpen: false };

    this.handleClick = this.handleClick.bind(this);
    this.classNameHelper = this.classNameHelper.bind(this);
    this.openDirectMessageForm = this.openDirectMessageForm.bind(this);
    this.closeDirectMessageForm = this.closeDirectMessageForm.bind(this);
    this.handleDisconnect = this.handleDisconnect.bind(this);
  }

  componentWillMount() {
    this.props.getUserCount();
    this.props.getDirectMessageNames(Object.keys(this.props.directMessages));
  }

  componentWillUpdate(nextProps) {
    const oldDirectMessages = Object.keys(this.props.directMessages);
    const newDirectMessages = Object.keys(nextProps.directMessages);

    if (oldDirectMessages.length < newDirectMessages.length) {
      this.props.getDirectMessageNames(Object.keys(nextProps.directMessages));
      const directMessages = hashToArray(nextProps.directMessages);
      const newConversation = directMessages[directMessages.length - 1];
      this.props.changeConversation(newConversation);
    } else if (oldDirectMessages.length > newDirectMessages.length) {
      this.changeToLastConversation(nextProps);
    }
  }

  changeToLastConversation(props) {
    const directMessages = hashToArray(props.directMessages);
    const channels = hashToArray(props.userChannels);
    const allConversations = channels.concat(directMessages);
    const lastConversation = allConversations[allConversations.length - 1];
    props.changeConversation(lastConversation);
  }

  classNameHelper(dMessage) {
    if (dMessage.id === this.props.currentConversation.id) {
      return "direct-message selected";
    } else {
      return "direct-message";
    }
  }

  handleClick(dMessage) {
    return () => {
      this.props.changeConversation(dMessage);
    };
  }

  handleDisconnect(id) {
    return (e) => {
      this.props.disconnectChannel(id);
      e.stopPropagation();
    };
  }

  allDirectMessages() {
    return hashToArray(this.props.directMessages).map( dMessage => {
      return (
        <li
          className={this.classNameHelper(dMessage)}
          key={dMessage.id}
          onClick={this.handleClick(dMessage)}
        >
          <span>{dMessage.memberCount}</span> {dMessage.name}
          <img
            className="delete"
            src={window.slakkAssets.delete}
            onClick={this.handleDisconnect(dMessage.id)}
          />
        </li>
      );
    });
  }

  openDirectMessageForm() {
    this.setState({ directMessageFormOpen: true });
  }

  closeDirectMessageForm() {
    this.setState({ directMessageFormOpen: false });
  }

  render() {
    return (
      <section className="channels">
        <h2 onClick={this.openDirectMessageForm}>DIRECT MESSAGES
          <span onClick={this.openDirectMessageForm}>
            &nbsp;({this.props.userCount})
          </span>
        </h2>

        <img
          onClick={this.openDirectMessageForm}
          src={slakkAssets.newSign}
        />

        <ul>
          {this.allDirectMessages()}
        </ul>

        <Modal
          isOpen={this.state.directMessageFormOpen}
          onRequestClose={this.closeDirectMessageForm}
          style={{
            overlay: {},
            content: {
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              overflowY: "hidden"
            }
          }}
        >
          <DirectMessageFormContainer
            closeDirectMessageForm={this.closeDirectMessageForm}
            changeConversation={this.props.changeConversation}
          />
        </Modal>
      </section>
    );
  }
}

export default DirectMessages;
