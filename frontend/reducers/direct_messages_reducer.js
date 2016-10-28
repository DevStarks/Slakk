import * as ACT from '../actions/direct_message_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { arrayToHash } from '../utils/helpers';
import { REMOVE_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';


const DirectMessageReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACT.RECEIVE_DIRECT_MESSAGE:
      const newDirectMessage = { [action.directMessage.id]: action.directMessage };
      return merge({}, oldState, newDirectMessage);
    case RECEIVE_CURRENT_USER:
      return arrayToHash(action.currentUser.direct_messages);
    case REMOVE_CHANNEL:
      if (action.channel.direct_message) {
        const newState = Object.assign({}, oldState);
        delete newState[action.channel.id];
        return newState;
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default DirectMessageReducer;
