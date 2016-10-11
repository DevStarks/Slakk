import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  STORE_TEMP_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';


const defaultSessionState = {
  currentUser: null,
  tempUser: null
};

const SessionReducer = (oldState = defaultSessionState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser });
    case LOGOUT:
      return defaultSessionState;
    case STORE_TEMP_USER:
      return merge({}, oldState, { tempUser: action.tempUser });
    default:
      return oldState;
  }
};

export default SessionReducer;
