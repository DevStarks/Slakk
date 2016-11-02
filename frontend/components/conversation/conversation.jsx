import React from 'react';
import MessagesContainer from '../messages/messages_container';
import ConversationHeaderContainer from './conversation_header_container';

const Conversation = () => {
  return (
    <div>
      <ConversationHeaderContainer />
      <MessagesContainer />
    </div>
  );
};

export default Conversation;
