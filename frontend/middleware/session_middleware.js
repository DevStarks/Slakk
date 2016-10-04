import { LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { login, logout, signup, receiveCurrentUser } from '../actions/session_actions';


const SessionMiddleware = ({ dispatch }) => next => action => {
  debugger
  const success = dispatch(receiveCurrentUser());
  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));

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
