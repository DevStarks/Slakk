import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { getUserCount } from '../../actions/user_base_actions';
import { disconnectChannel } from '../../actions/channel_actions';

const mapStateToProps = ({ directMessages, userBase, channels, session }) => ({
  directMessages,
  userChannels: channels.userChannels,
  userCount: userBase.userCount,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeConversation: ownProps.changeConversation,
    currentConversation: ownProps.currentConversation,
    getUserCount: () => dispatch(getUserCount()),
    disconnectChannel: channelID => dispatch(disconnectChannel(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
