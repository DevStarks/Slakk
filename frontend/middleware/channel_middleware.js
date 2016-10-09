import { CREATE_CHANNEL, receiveChannel } from '../actions/channel_actions';
import { createChannel } from '../utils/channel_api_util';


const ChannelMiddleware = ({ dispatch }) => next => action => {

  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const success = messageData => dispatch(receiveChannel(messageData));


  switch (action.type) {
    case CREATE_CHANNEL:
      createChannel(channel, success, error);
      return next(action);
    default:
      next(action);
  }
}

export default ChannelMiddleware;
