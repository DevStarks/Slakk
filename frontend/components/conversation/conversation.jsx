import React from 'react';
import MessagesContainer from '../messages/messages_container';
import ConversationHeaderContainer from './conversation_header_container';

const Conversation = ({ currentConversation }) => {
  return (
    <div>
      <ConversationHeaderContainer currentConversation={currentConversation}/>
      <MessagesContainer currentConversation={currentConversation}/>
    </div>
  );
};

export default Conversation;
