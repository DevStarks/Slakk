import { RECEIVE_CHANNEL, RECEIVE_ERRORS } from '../actions/channel_actions';
import merge from 'lodash/merge';


const defaultChannelState = {
  errors: [],
  channels: {}
};

const ChannelReducer = (oldState = defaultChannelState, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      const newChannelState = {
        channels: merge({}, oldState.channels, newChannel)
      };
      return merge({}, oldState, newChannelState);
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default ChannelReducer;
