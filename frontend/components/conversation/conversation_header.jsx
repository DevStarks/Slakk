import React from 'react';
import { dmNameHelper } from '../../utils/helpers';

const ConversationHeader = ({ conversation, directMessages, currentUser }) => {
  return (
    <header className="conversation-header">
      <h2>#{
        conversation.name ||
        dmNameHelper(directMessages[conversation.id], currentUser)
      }</h2>
      {memberCountHelper(conversation.members)}
      <span className="divider">|</span>
      <p>{conversation.purpose}</p>
    </header>
  );
};


const memberCountHelper = (members) => {
  const memberCount = members.length || members.count;
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
