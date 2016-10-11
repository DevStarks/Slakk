import * as ACT from '../actions/channel_actions';
import { createChannel, getChannelCount, searchChannels, connectToChannel } from '../utils/channel_api_util';


const ChannelMiddleware = ({ dispatch }) => next => action => {
  const success = messageData => dispatch(ACT.receiveChannel(messageData));
  const error = xhr => dispatch(ACT.receiveChannelErrors(xhr.responseJSON));

  switch (action.type) {
    case ACT.CREATE_CHANNEL:
      createChannel(action.channel, success, error);
      return next(action);
    case ACT.GET_CHANNEL_COUNT:
      const channelCountSuccess = count => dispatch(ACT.receiveChannelCount(count))
      getChannelCount(channelCountSuccess, error);
      return next(action);
    case ACT.SEARCH_CHANNELS:
      const searchSuccess = channels => {
        dispatch(ACT.receiveChannelResults(channels));
        // return next(action);
      };
      searchChannels(action.searchData, searchSuccess, error);
    case ACT.CONNECT_TO_CHANNEL:
      const connectSuccess = channel => {
        dispatch(ACT.receiveChannel(channel));
        return next(action);
      };
      connectToChannel(action.channelID, connectSuccess, error);
    default:
      next(action);
  }
}

export default ChannelMiddleware;
