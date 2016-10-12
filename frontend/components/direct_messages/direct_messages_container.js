import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { getDirectMessageNames } from '../../actions/direct_message_actions';
import { getUserCount } from '../../actions/user_base_actions';

const mapStateToProps = ({ directMessages, userBase }) => ({
  directMessages,
  userCount: userBase.userCount
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeConversation: ownProps.changeConversation,
    currentConversation: ownProps.currentConversation,
    getUserCount: () => dispatch(getUserCount()),
    getDirectMessageNames: directMessageIDs => dispatch(getDirectMessageNames(directMessageIDs))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
