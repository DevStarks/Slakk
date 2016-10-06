import React from 'react';
import { timeFromDateObj } from '../../utils/helpers';

const Message = ({ info: { body, created_at, author } }) => {
  return (
    <div className="message-content">
      <img className="author-thumbnail" src={author.image_url}></img>
      <h3>{author.username} {timeFromDateObj(created_at)}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Message;
