import * as ACT from '../actions/user_base_actions';

const defaultUserBaseState = {
  userCount: null,
  searchResults: []
};

const UserBaseReducer = (oldState = defaultUserBaseState, action) => {
  switch (action.type) {
    case ACT.RECEIVE_USER_COUNT:
      return Object.assign({}, oldState, { userCount: action.userCount });
    case ACT.RECEIVE_USER_RESULTS:
      return Object.assign({}, oldState, { searchResults: action.userResults });
    default:
      return oldState;
  }
};

export default UserBaseReducer;
