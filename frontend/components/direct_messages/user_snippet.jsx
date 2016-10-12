import React from 'react';

const UserSnippet = ({ info }) => {
  return (
    <div>
      <img src={info.image_url}/>
      <p>{info.username}</p>
      <button>✕</button>
    </div>
  )
};

export default UserSnippet;
