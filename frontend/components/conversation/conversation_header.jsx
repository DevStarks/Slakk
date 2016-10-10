import React from 'react';

const ConversationHeader = ({
  currentConversation: { name, purpose, memberCount}
}) => {
  return (
    <header className="conversation-header">
      <h2>#{name}</h2>
      <span className="member-count">{memberCount}&nbsp;members</span>
      <span className="divider">|</span>
      <p>{purpose}</p>
    </header>
  );
};

export default ConversationHeader;
