import * as ACT from '../actions/channel_actions';
import { createChannel, getChannelCount } from '../utils/channel_api_util';


const ChannelMiddleware = ({ dispatch }) => next => action => {
  let success;
  const error = xhr => dispatch(ACT.receiveChannelErrors(xhr.responseJSON));

  switch (action.type) {
    case ACT.CREATE_CHANNEL:
      success = messageData => dispatch(ACT.receiveChannel(messageData));
      createChannel(action.channel, success, error);
      return next(action);
    case ACT.GET_CHANNEL_COUNT:
      success = count => dispatch(ACT.receiveChannelCount(count))
      getChannelCount(success, error);
      return next(action);
    default:
      next(action);
  }
}

export default ChannelMiddleware;
