import React from 'react';
import Conversation from './conversation';
import MessagesContainer from '../messages/messages_container';

const Conversation = () => {
  return (
    <div>
      <ConversationHeader />
      <MessagesContainer />
    </div>
  );
};
