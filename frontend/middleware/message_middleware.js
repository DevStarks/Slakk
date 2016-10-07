import * as ACT from '../actions/message_actions';
import * as API from "../utils/message_api_util";

const MessageMiddleware = ({ dispatch }) => next => action => {

  const error = xhr => dispatch(ACT.receiveErrors(xhr.responseJSON));
  const getMessagesSuccess = messageData => dispatch(ACT.receiveMessages(messageData));
  const getMessageSuccess = messageData => dispatch(ACT.receiveMessage(messageData));


  switch (action.type) {
    case ACT.GET_MESSAGES:
      API.getMessages(getMessagesSuccess, error);
      return next(action);
    case ACT.CREATE_MESSAGE:
      API.createMessage(action.message, getMessageSuccess, error);
      return next(action);
    case ACT.DELETE_MESSAGE:
      return API.deleteMessage(action.messageId, () => next(action), error);
    case ACT.EDIT_MESSAGE:
      const editMessageSuccess = messageData => {
        dispatch(ACT.receiveMessages(messageData));
        action.callback
      }
      return API.editMessage(action.message, getMessageSuccess, error);
    default:
      next(action)
  }
}

export default MessageMiddleware;
