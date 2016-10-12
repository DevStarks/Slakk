export const getUserCount = success => {
  $.ajax({
    method: 'GET',
    url: 'api/users/count',
    success
  });
};

export const searchUsers = ({ searchData }, success) => {

  $.ajax({
    method: 'GET',
    url: 'api/users/search',
    data: { search_data: searchData },
    success
  });
};
