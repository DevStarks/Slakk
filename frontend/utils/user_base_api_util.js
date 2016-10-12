export const getUserCount = success => {
  $.ajax({
    method: 'GET',
    url: 'api/users/count',
    success
  });
};

export const searchUsers = success => {
  $.ajax({
    method: 'GET',
    url: 'api/users/search',
    success
  });
};
