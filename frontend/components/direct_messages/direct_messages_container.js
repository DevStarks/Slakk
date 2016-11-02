import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { getUserCount } from '../../actions/user_base_actions';
import { disconnectChannel } from '../../actions/channel_actions';
import { setCurrentConverstion } from '../../actions/current_conversation_actions';

const mapStateToProps = ({ directMessages, userBase, channels, session, currentConversation }) => ({
  directMessages,
  userChannels: channels.userChannels,
  userCount: userBase.userCount,
  currentUser: session.currentUser,
  currentConversation
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentConverstion: conversation => dispatch(setCurrentConverstion(conversation)),
    getUserCount: () => dispatch(getUserCount()),
    disconnectChannel: channelID => dispatch(disconnectChannel(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
