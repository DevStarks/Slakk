import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_MESSAGE_ERRORS, CLEAR_MESSAGE_ERRORS } from '../actions/message_actions';
import { RECEIVE_CHANNEL_ERRORS, CLEAR_CHANNEL_ERRORS } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultErrorState = {
  sessionErrors: [],
  messageErrors: [],
  channelErrors: [],
};

const ErrorReducer = (oldState = defaultErrorState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, oldState, { sessionErrors: action.errors });
    case RECEIVE_MESSAGE_ERRORS:
      return Object.assign({}, oldState, { messageErrors: action.errors });
    case RECEIVE_CHANNEL_ERRORS:
      return Object.assign({}, oldState, { channelErrors: action.errors });
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, oldState, { sessionErrors: [] });
    case CLEAR_CHANNEL_ERRORS:
      return Object.assign({}, oldState, { channelErrors: [] });
    case CLEAR_MESSAGE_ERRORS:
      return Object.assign({}, oldState, { messageErrors: [] });
    default:
      return oldState;
  }
};

export default ErrorReducer;
