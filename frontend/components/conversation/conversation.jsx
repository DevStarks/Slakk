import React from 'react';
import MessagesContainer from '../messages/messages_container';
import ConversationHeader from './conversation_header';

const Conversation = ({ currentConversation }) => {
  return (
    <div>
      <ConversationHeader currentConversation={currentConversation}/>
      <MessagesContainer currentConversation={currentConversation}/>
    </div>
  );
};

export default Conversation;
