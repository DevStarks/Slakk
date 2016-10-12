import React from 'react';

const ChannelItem = ({ channelData, selectChannel }) => {

  return (
    <article className="search-item" onClick={selectChannel}>
      <h3><span>#</span> {channelData.name}</h3>
      <span className="creation-info"><i>Created on {channelData.created_at}</i></span>
      <span className="other-info">{channelData.purpose}</span>
      <span className="member-count">{channelData.memberCount}</span>
    </article>
  )
};

export default ChannelItem;
