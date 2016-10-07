import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  STORE_TEMP_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';


const defaultSessionState = {
  currentUser: null,
  errors: [],
  tempUser: null
};

const SessionReducer = (oldState = defaultSessionState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, oldState, { errors: action.errors });
    case LOGOUT:
      return defaultSessionState;
    case STORE_TEMP_USER:
      return merge({}, oldState, { tempUser: action.tempUser });
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, oldState, { errors: [] });
    default:
      return oldState;
  }
};

export default SessionReducer;
