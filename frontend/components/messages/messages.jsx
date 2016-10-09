import React from 'react';
import Message from './message';
import MessageFormContainer from './message_form_container';
import Errors from '../errors';
import { hashToArray } from '../../utils/helpers';





class Messages extends React.Component {

  componentDidMount() {
    const getMessages = this.props.getMessages.bind(this);
    getMessages(this.props.channels[Object.keys(this.props.channels)[0]].id);

    this.pusher = new Pusher('2283e10f108057ca0b00', {
      encrypted: true
    });

    const channel = this.pusher.subscribe('slakk_messages');
    channel.bind('message_created', () => {
      getMessages();
    });

    setTimeout(this.updateScroll(), 50);
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('slakk_messages');
  }

  componentWillUpdate() {
    const messages = this.refs.messages;
    this.shouldScrollBottom = (
      messages.scrollTop +
      messages.offsetHeight ===
      messages.scrollHeight
    );
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      this.updateScroll();
    }
  }

  allMessages() {
    return hashToArray(this.props.messages).map( message => {
      return (
        <Message
          key={message.id}
          info={message}
          deleteMessage={this.props.deleteMessage}
        />
      );
    });
  }

  updateScroll() {
    const messages = this.refs.messages;
    messages.scrollTop = messages.scrollHeight;
  }

  render() {
    return (
      <div className="messages-display">
        <ul ref="messages">
          {this.allMessages()}
          <article className="message-content-spacer"></article>
        </ul>

        <MessageFormContainer
          updateScroll={this.updateScroll.bind(this)}
          type="new"
        />

        <Errors errorInfo={this.props.errors}/>
      </div>
    );
  }

}

export default Messages;
