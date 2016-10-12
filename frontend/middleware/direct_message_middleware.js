import * as ACT from '../actions/direct_message_actions';
import * as API from "../utils/direct_message_api_util";

const DirectMessageMiddleware = ({ dispatch }) => next => action => {
  const error = xhr => {
    dispatch(ACT.receiveDirectMessageErrors(xhr.responseJSON))
  };
  switch (action.type) {
    case ACT.GET_DIRECT_MESSAGE_NAMES:
    debugger
      const success = directMessageNames => {
        dispatch(ACT.receiveDirectMessageNames(directMessageNames));
      };
      API.getDirectMessageNames(action.directMessageIDs, success, error)
    default:
      next(action);
  }
};

export default DirectMessageMiddleware;
