import React from 'react';

const UserSnippet = ({ info }) => {
  return (
    <li className="user-snippet">
      <img src={info.image_url}/>
      <p>{info.username}</p>
      <span>╳</span>
    </li>
  )
};

export default UserSnippet;
