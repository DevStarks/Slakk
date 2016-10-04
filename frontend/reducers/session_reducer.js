import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultSessionState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = defaultSessionState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, oldState, { errors: action.errors });
    case LOGOUT:
      return defaultSessionState;
    default:
      return oldState;
  }
};

export default SessionReducer;
