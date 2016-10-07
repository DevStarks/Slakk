export const GET_MESSAGES = "GET_MESSAGES";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const EDIT_MESSAGE = "EDIT_MESSAGE";



export const getMessages = () => ({
  type: GET_MESSAGES
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createMessage = message => ({
  type: CREATE_MESSAGE,
  message
});

export const deleteMessage = messageId => ({
  type: DELETE_MESSAGE,
  messageId
});

export const editMessage = (message, callback) => ({
  type: EDIT_MESSAGE,
  message,
  callback
});
