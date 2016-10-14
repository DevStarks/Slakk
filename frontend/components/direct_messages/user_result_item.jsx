import React from 'react';

const UserResultItem = ({ userData, selectUser }) => {
  return (
    <article className="search-item user-data-item" onClick={selectUser}>
      <img src={userData.image_url} />
      <h3>{userData.username}</h3>
      <span>&nbsp;{"| " + userData.first_name + " " + userData.last_name}</span>
    </article>
  );
};

export default UserResultItem;
