import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';
import ChannelReducer from './channel_reducer';
import ErrorReducer from './error_reducer';
import DirectMessagesReducer from './direct_messages_reducer';
import UserBaseReducer from './user_base_reducer';

const RootReducer = combineReducers({
  errors: ErrorReducer,
  session: SessionReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
  directMessages: DirectMessagesReducer,
  userBase: UserBaseReducer
});

export default RootReducer;
