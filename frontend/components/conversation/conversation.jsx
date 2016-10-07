import React from 'react';
import MessagesContainer from '../messages/messages_container';
import ConversationHeader from './conversation_header';

const Conversation = () => {
  return (
    <div>
      <ConversationHeader />
      <MessagesContainer />
    </div>
  );
};

export default Conversation;
