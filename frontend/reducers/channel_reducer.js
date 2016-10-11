import * as ACT from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';

const defaultChannelState = {
  userChannels: {},
  searchResults: {},
  channelCount: null
};

const ChannelReducer = (oldState = defaultChannelState, action) => {
  switch (action.type) {
    case ACT.RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      const newChannelState = {
        userChannels: merge({}, oldState.userChannels, newChannel)
      };
      return merge({}, oldState, newChannelState);
    case RECEIVE_CURRENT_USER:
      const newChannels = arrayToHash(action.currentUser.channels);
      return Object.assign({}, oldState, { userChannels: newChannels });
    case ACT.RECEIVE_CHANNEL_COUNT:
      return Object.assign({}, oldState, { channelCount: action.channelCount });
    case ACT.RECEIVE_CHANNEL_RESULTS:
      return Object.assign({}, oldState, { searchResults: action.channelResults });
    default:
      return oldState;
  }
};

export default ChannelReducer;
