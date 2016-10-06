import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, RECEIVE_ERRORS } from '../actions/message_actions';

const defaultMessagesState = {
  errors: [],
  messages: []
};

const MessageReducer = (oldState = defaultMessagesState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, oldState, { messages: action.messages });
    case RECEIVE_MESSAGE:
      return Object.assign({}, oldState, { messages: oldState.messages.concat(action.message) });
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default MessageReducer;
