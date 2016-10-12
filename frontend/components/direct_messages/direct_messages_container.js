import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import { getDirectMessageNames } from '../../actions/direct_message_actions';

const mapStateToProps = ({ directMessages }) => ({
  directMessages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeConversation: ownProps.changeConversation,
  currentConversation: ownProps.currentConversation,
  getDirectMessageNames: directMessageIDs => dispatch(getDirectMessageNames(directMessageIDs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
