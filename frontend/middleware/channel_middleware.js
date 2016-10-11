import * as ACT from '../actions/channel_actions';
import { createChannel } from '../utils/channel_api_util';


const ChannelMiddleware = ({ dispatch }) => next => action => {
  const error = xhr => dispatch(ACT.receiveChannelErrors(xhr.responseJSON));
  const success = messageData => dispatch(ACT.receiveChannel(messageData));

  switch (action.type) {
    case ACT.CREATE_CHANNEL:
      createChannel(action.channel, success, error);
      return next(action);
    default:
      next(action);
  }
}

export default ChannelMiddleware;
