import * as ACT from '../actions/session_actions';
import * as API from '../utils/session_api_util';


const SessionMiddleware = ({ dispatch }) => next => action => {

  const success = user => {
    dispatch(ACT.receiveCurrentUser(user))
  };
  const error = xhr => dispatch(ACT.receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case ACT.LOGIN:
      API.login(action.user, success, error);
      return next(action);
    case ACT.LOGOUT:
      return API.logout(() => next(action));
    case ACT.SIGNUP:
    debugger
      API.signup(action.user, success, error);
      return next(action);
    case ACT.CHECK_USERNAME:
      API.checkUsername(action.username, error);
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
