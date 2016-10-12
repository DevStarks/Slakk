import * as ACT from '../actions/user_base_actions';
import { getUserCount, searchUsers } from '../utils/user_base_api_util';

const UserBaseMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case ACT.GET_USER_COUNT:
      getUserCount((userCount) => {
        dispatch(ACT.receiveUserCount(userCount));
        next(action);
      });
    case ACT.SEARCH_USERS:
      searchUsers( searchResults => {
        dispatch(ACT.receiveUserResults(searchResults));
        next(action);
      });
    default:
      next(action);
  }
};

export default UserBaseMiddleware;
