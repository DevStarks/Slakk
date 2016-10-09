export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const createChannel = channel => ({
  type: CREATE_CHANNEL,
  channel
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
