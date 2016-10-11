import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { arrayToHash } from '../utils/helpers';
import merge from 'lodash/merge';

const defaultChannelState = {
  userChannels: {},
  allChannels: {}
};

const ChannelReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      return merge({}, oldState, newChannel);
    case RECEIVE_CURRENT_USER:
      return arrayToHash(action.currentUser.channels);
    default:
      return oldState;
  }
};

export default ChannelReducer;
