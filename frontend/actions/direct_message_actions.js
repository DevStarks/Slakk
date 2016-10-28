export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const RECEIVE_DIRECT_MESSAGE_ERRORS = "RECEIVE_DIRECT_MESSAGE_ERRORS";
export const CLEAR_DIRECT_MESSAGE_ERRORS = "CLEAR_DIRECT_MESSAGE_ERRORS";

export const receiveDirectMessage = directMessage => ({
  type: RECEIVE_DIRECT_MESSAGE,
  directMessage
});

export const receiveDirectMessageErrors = () => ({
  type: RECEIVE_DIRECT_MESSAGE_ERRORS
});

export const clearDirectMessageErrors = () => ({
  type: CLEAR_DIRECT_MESSAGE_ERRORS
});
