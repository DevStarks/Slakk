export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";
export const RECEIVE_CHANNEL_COUNT = "RECEIVE_CHANNEL_COUNT";
export const GET_CHANNEL_COUNT = "GET_CHANNEL_COUNT";


export const createChannel = channel => ({
  type: CREATE_CHANNEL,
  channel
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});

export const receiveChannelCount = channelCount => ({
  type: RECEIVE_CHANNEL_COUNT,
  channelCount
});

export const getChannelCount = () => ({
  type: GET_CHANNEL_COUNT
});
