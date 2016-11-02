import { connect } from 'react-redux';
import { getChannelCount, disconnectChannel } from '../../actions/channel_actions';
import { setCurrentConverstion } from '../../actions/current_conversation_actions';
import Channels from './channels';

const mapStateToProps = ({ channels, currentConversation }) => ({
  userChannels: channels.userChannels,
  channelCount: channels.channelCount,
  currentConversation
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentConverstion: conversation => dispatch(setCurrentConverstion(conversation)),
  disconnectChannel: id => dispatch(disconnectChannel(id)),
  getChannelCount: () => dispatch(getChannelCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
