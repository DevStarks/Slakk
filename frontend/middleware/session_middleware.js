import { LOGIN, LOGOUT, SIGNUP, CHECK_USERNAME, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { login, logout, signup, checkUsername } from '../utils/session_api_util';


const SessionMiddleware = ({ dispatch }) => next => action => {

  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));
  debugger
  switch (action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      return logout(() => next(action));
    case SIGNUP:
      signup(user, success, error);
      return next(action);
    case CHECK_USERNAME:
      checkUsername(action.username, error);
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
