export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const GET_DIRECT_MESSAGE_NAMES = "GET_DIRECT_MESSAGE_NAMES";
export const RECEIVE_DIRECT_MESSAGE_NAMES = "RECEIVE_DIRECT_MESSAGE_NAMES";
export const RECEIVE_DIRECT_MESSAGE_ERRORS = "RECEIVE_DIRECT_MESSAGE_ERRORS";

export const receiveDirectMessage = directMessage => ({
  type: RECEIVE_DIRECT_MESSAGE,
  directMessage
});

export const getDirectMessageNames = directMessageIDs => ({
  type: GET_DIRECT_MESSAGE_NAMES,
  directMessageIDs
});

export const receiveDirectMessageNames = names => ({
  type: RECEIVE_DIRECT_MESSAGE_NAMES,
  names
});

export const receiveDirectMessageErrors = () => ({
  type: RECEIVE_DIRECT_MESSAGE_ERRORS
});
