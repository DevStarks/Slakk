import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import MessageMiddleware from './message_middleware';
import ChannelMiddleware from './channel_middleware';
import DirectMessageMiddleware from './direct_message_middleware';
import createLogger from 'redux-logger';

const LoggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  MessageMiddleware,
  ChannelMiddleware,
  DirectMessageMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
