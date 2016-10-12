import React from 'react';

const UserSnippet = ({ info, deselect }) => {
  return (
    <li className="user-snippet" onClick={deselect}>
      <img src={info.image_url}/>
      <p>{info.username}</p>
      <span>╳</span>
    </li>
  )
};

export default UserSnippet;
