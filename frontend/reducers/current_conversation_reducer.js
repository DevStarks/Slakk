import { SET_CURRENT_CONVERSATION } from '../actions/current_conversation_actions';


const CurrentConversationReducer = (oldState = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CONVERSATION:
      return action.conversation;
    default:
      return oldState;
  }
};

export default CurrentConversationReducer;
