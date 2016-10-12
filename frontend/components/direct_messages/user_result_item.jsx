import React from 'react';

const UserResultItem = ({ userData, selectUser }) => {

  return (
    <article className="user-data-item" onClick={selectUser}>
      <img className="author-thumbnail" src={userData.photo_url} />
      <h3>{userData.username}</h3>
    </article>
  )
};

export default UserResultItem;
