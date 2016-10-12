import * as ACT from '../actions/direct_message_actions';

import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';



const DirectMessageReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACT.RECEIVE_DIRECT_MESSAGE:
      const newDirectMessage = { [action.directMessage.id]: action.directMessage };
      const newDirectMessageState = {
        directMessages: merge({}, oldState.userDirectMessages, newDirectMessage)
      };
      return merge({}, oldState, newDirectMessageState);
    case ACT.RECEIVE_DIRECT_MESSAGE_NAMES:
      return merge({}, oldState, action.names);
    default:
      return oldState;
  }
};

export default DirectMessageReducer;
