import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';
import ChannelReducer from './channel_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  errors: ErrorReducer,
  session: SessionReducer,
  messages: MessageReducer,
  channels: ChannelReducer
});

export default RootReducer;
