import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, RECEIVE_ERRORS, DELETE_MESSAGE } from '../actions/message_actions';
import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';

const defaultMessagesState = {
  errors: [],
  messages: {}
};

const MessageReducer = (oldState = defaultMessagesState, action) => {
  let newMessages;
  switch (action.type) {
    case RECEIVE_MESSAGES:
      newMessages = arrayToHash(action.messages);
      return Object.assign({}, oldState, { messages: newMessages });
    case RECEIVE_MESSAGE:
      const newMessage = { [action.message.id]: action.message };
      const newMessageState = { messages: merge({}, oldState.messages, newMessage)};
      return merge({}, oldState, newMessageState);
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    case DELETE_MESSAGE:
      newMessages = merge({}, oldState.messages);
      delete newMessages[action.messageID];
      return { errors: oldState.errors, messages: newMessages };
    default:
      return oldState;
  }
};

export default MessageReducer;
