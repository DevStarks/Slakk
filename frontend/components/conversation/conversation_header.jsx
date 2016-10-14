import React from 'react';

const ConversationHeader = ({ conversation, directMessages }) => {
  return (
    <header className="conversation-header">
      <h2>#{conversation.name || directMessages[conversation.id].name}</h2>
      {memberCountHelper(conversation.memberCount)}
      <span className="divider">|</span>
      <p>{conversation.purpose}</p>
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
};

export default ConversationHeader;
