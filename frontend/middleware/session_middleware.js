import { LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { login, logout, signup, receiveCurrentUser } from '../actions/session_actions';


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
    default:
      next(action);
  }
};

export default SessionMiddleware;
