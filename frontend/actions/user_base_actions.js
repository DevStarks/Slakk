export const GET_USER_COUNT = "GET_USER_COUNT";
export const RECEIVE_USER_COUNT = "RECEIVE_USER_COUNT";
export const SEARCH_USERS = "SEARCH_USERS";
export const RECEIVE_USER_RESULTS = "RECEIVE_USER_RESULTS";

export const getUserCount = () => ({
  type: GET_USER_COUNT
});

export const receiveUserCount = userCount => ({
  type: RECEIVE_USER_COUNT,
  userCount
});

export const searchUsers = () => ({
  type: SEARCH_USERS
});

export const receiveUserResults = userResults => ({
  type: RECEIVE_USER_RESULTS,
  userResults
});
