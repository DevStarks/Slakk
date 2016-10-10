import React from 'react';
import MessageContainer from './message_container';
import MessageFormContainer from './message_form_container';
import Errors from '../errors';
import { hashToArray } from '../../utils/helpers';



class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.subscribeToPusher = this.subscribeToPusher.bind(this);
    this.getMessages = this.props.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages();
    setTimeout(this.updateScroll(), 0);
  }

  subscribeToPusher(props) {
    this.pusher = new Pusher('2283e10f108057ca0b00', { encrypted: true });
    const conversationID = props.currentConversation.id;
    const channel = this.pusher.subscribe(`conversation-${conversationID}`);
    channel.bind('message_created', () => { this.getMessages(); });
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('slakk_messages');
  }

  componentWillReceiveProps(newProps) {
    const messages = this.refs.messages;
    this.shouldScrollBottom = (
      messages.scrollTop +
      messages.offsetHeight ===
      messages.scrollHeight
    );

    if (this.pusher) {
      const conversationID = this.props.currentConversation.id;
      this.pusher.unsubscribe(`conversation-${conversationID}`);
    }
    this.subscribeToPusher(newProps);
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) { this.updateScroll(); }
  }

  allMessages() {
    return hashToArray(this.props.messages).map( message => {
      return (
        <MessageContainer key={message.id} info={message}/>
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
          currentConversation={this.props.currentConversation}
          updateScroll={this.updateScroll.bind(this)}
          type="new"
        />

        <Errors errorInfo={this.props.errors}/>
      </div>
    );
  }

}

export default Messages;
