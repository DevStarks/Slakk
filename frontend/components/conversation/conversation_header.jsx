import React from 'react';

const ConversationHeader = ({
  currentConversation: { name, purpose, memberCount}
}) => {
  return (
    <header className="conversation-header">
      <h1>{name}</h1>
      <br />
      <p>{memberCount}&nbsp;members&nbsp;&nbsp;{purpose}</p>
    </header>
  );
};

export default ConversationHeader;
