import React from 'react';

const ConversationHeader = ({
  currentConversation: { name, purpose, memberCount}
}) => {
  return (
    <header className="conversation-header">
      <h2>#{name}</h2>
      {memberCountHelper()}
      <span className="divider">|</span>
      <p>{purpose}</p>
    </header>
  );
};

const memberCountHelper = (memberCount) => {
  if (memberCount && (memberCount > 1)) {
    return (
      <span className="member-count">{memberCount}&nbsp;members</span>
    );
  } else {
    return (
      <span className="member-count">1&nbsp;member</span>
    );
  }
}

export default ConversationHeader;
