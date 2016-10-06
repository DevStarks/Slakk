import { GET_MESSAGES, CREATE_MESSAGE, receiveMessage, receiveMessages, receiveErrors } from '../actions/message_actions';
import { getMessages, createMessage } from "../utils/message_api_util";

const MessageMiddleware = ({ dispatch }) => next => action => {

  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const getMessagesSuccess = messageData => dispatch(receiveMessages(messageData));
  const getMessageSuccess = messageData => dispatch(receiveMessage(messageData));

  switch (action.type) {
    case GET_MESSAGES:
      getMessages(getMessagesSuccess, error);
      return next(action);
    case CREATE_MESSAGE:
      createMessage(action.message, getMessageSuccess, error);
      return next(action);
    default:
      next(action)
  }
}

export default MessageMiddleware;
