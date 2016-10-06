import React from 'react';
import Message from './message';
import MessageFormContainer from './message_form_container';
import Errors from '../errors';

class Messages extends React.Component {

  componentDidMount() {
    const getMessages = this.props.getMessages.bind(this);
    getMessages();

    this.pusher = new Pusher('2283e10f108057ca0b00', {
      encrypted: true
    });

    const channel = this.pusher.subscribe('slakk_messages');
    channel.bind('message_created', function(data) {
      getMessages();
    });
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('slakk_messages');
  }

  render() {
    return (
      <div>
        <ul>
          {this.allMessages()}
        </ul>

        <MessageFormContainer />

        <Errors errorInfo={this.props.errors}/>
      </div>
    );
  }

  allMessages() {
    return this.props.messages.map( message => {
      return <Message key={message.id} info={message} />;
    });
  }
}

export default Messages;
