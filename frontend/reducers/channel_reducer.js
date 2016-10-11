import { RECEIVE_CHANNEL, RECEIVE_CHANNEL_COUNT } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';

const defaultChannelState = {
  userChannels: {},
  allChannels: {},
  channelCount: null
};

const ChannelReducer = (oldState = defaultChannelState, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      const newChannelState = {
        userChannels: merge({}, oldState.userChannels, newChannel)
      };
      return merge({}, oldState, newChannelState);
    case RECEIVE_CURRENT_USER:
      const newChannels = arrayToHash(action.currentUser.channels);
      return Object.assign({}, oldState, { userChannels: newChannels });
    case RECEIVE_CHANNEL_COUNT:
      return Object.assign({}, oldState, { channelCount: action.channelCount });
    default:
      return oldState;
  }
};

export default ChannelReducer;
