import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, RECEIVE_ERRORS, DELETE_MESSAGE } from '../actions/message_actions';
import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';



const MessageReducer = (oldState = {}, action) => {
  let newMessages;
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return arrayToHash(action.messages);
    case RECEIVE_MESSAGE:
      const newMessage = { [action.message.id]: action.message };
      return merge({}, oldState, newMessage);
    case DELETE_MESSAGE:
      newMessages = merge({}, oldState);
      delete newMessages[action.messageID];
      return newMessages;
    default:
      return oldState;
  }
};

export default MessageReducer;
